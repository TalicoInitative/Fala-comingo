import { useState, useRef, useEffect, useCallback } from "react";
import { ACCOUNTS, checkLogin } from "./data/accounts.js";
import { speakPT, isTTSAvailable } from "./utils/audio.js";

const W=typeof window!=="undefined"&&window.innerWidth>=768;

export default function App(){
// ═══ AUTH ═══
const[authUser,setAuthUser]=useState(()=>{try{return localStorage.getItem("fala-user")||null}catch{return null}});
const[loginU,setLoginU]=useState("");const[loginP,setLoginP]=useState("");const[loginErr,setLoginErr]=useState("");
const doLogin=()=>{const acc=checkLogin(loginU,loginP);if(acc){setLoginErr("");try{localStorage.setItem("fala-user",acc.user)}catch{};setAuthUser(acc.user);setLoginU("");setLoginP("")}else setLoginErr("Wrong username or password.")};
const doLogout=()=>{try{localStorage.removeItem("fala-user")}catch{};setAuthUser(null)};
const PK=authUser?"fala-chat-"+authUser:"fala-chat";

// ═══ APP STATE ═══
const[tab,setTab]=useState("chat");
const[dark,setDark]=useState(()=>{try{return localStorage.getItem("fala-dark")==="1"}catch{return false}});
const toggleDark=()=>{const d=!dark;setDark(d);try{localStorage.setItem("fala-dark",d?"1":"0")}catch{}};

// ═══ CHAT STATE ═══
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[err,setErr]=useState(null);const[spk,setSpk]=useState(false);
const[voiceMode,setVoiceMode]=useState(false);const[voiceListening,setVoiceListening]=useState(false);
const[voiceLang,setVoiceLang]=useState("pt-BR");
const nid=useRef(1);const btm=useRef(null);const recRef=useRef(null);const micTimer=useRef(null);

// ═══ FLASHCARD STATE ═══
const[cards,setCards]=useState([]);const[newPT,setNewPT]=useState("");const[newEN,setNewEN]=useState("");
const[studying,setStudying]=useState(false);const[studyIdx,setStudyIdx]=useState(0);const[flipped,setFlipped]=useState(false);

// ═══ LOAD/SAVE ═══
useEffect(()=>{if(!authUser)return;try{
const raw=localStorage.getItem(PK+"-cards");if(raw)setCards(JSON.parse(raw));
}catch{}},[authUser]);
const saveCards=(c)=>{setCards(c);try{localStorage.setItem(PK+"-cards",JSON.stringify(c))}catch{}};

useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

// ═══ SPEECH RECOGNITION ═══
const runSpeech=useCallback((opts)=>{
const{onStart,onResult,onError,onEnd,lang}=opts;
if(recRef.current){try{recRef.current.abort()}catch{};recRef.current=null}
if(micTimer.current){clearTimeout(micTimer.current);micTimer.current=null}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!SR){onError?.("Voice not supported in this browser. Try Chrome or Edge.");return}
let r;try{r=new SR()}catch{onError?.("Couldn't start microphone.");return}
r.lang=lang||"pt-BR";r.continuous=false;r.interimResults=false;r.maxAlternatives=1;
let done=false;
const cleanup=()=>{if(micTimer.current){clearTimeout(micTimer.current);micTimer.current=null}recRef.current=null};
r.onstart=()=>onStart?.();
r.onresult=e=>{done=true;const t=e.results?.[0]?.[0]?.transcript||"";cleanup();if(t.trim())onResult?.(t.trim());else onError?.("Didn't hear anything — try again.");onEnd?.()};
r.onerror=e=>{done=true;cleanup();const err=e?.error||"unknown";
if(err==="aborted"){onEnd?.();return}
if(err==="not-allowed")onError?.("Microphone blocked. Allow mic access in browser settings.");
else if(err==="no-speech")onError?.("Didn't hear anything — speak clearly and try again.");
else onError?.("Didn't catch that — try again.");onEnd?.()};
r.onend=()=>{if(!done){done=true;cleanup();onError?.("Didn't hear anything — try again.");onEnd?.()}};
recRef.current=r;micTimer.current=setTimeout(()=>{if(!done){try{r.abort()}catch{};cleanup();onError?.("Took too long — tap to try again.");onEnd?.()}},10000);
try{r.start()}catch{cleanup();onError?.("Couldn't start microphone.");onEnd?.()}
},[]);

useEffect(()=>{return()=>{if(recRef.current){try{recRef.current.abort()}catch{};recRef.current=null}if(micTimer.current)clearTimeout(micTimer.current)}},[tab]);

// ═══ SEND CHAT ═══
const sendChat=async(voiceText)=>{const t=(voiceText||chatIn).trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");setErr(null);
try{
const sysPrompt=`You are Bia, an expert Brazilian Portuguese tutor from São Paulo. You are warm, encouraging, and deeply knowledgeable about Brazilian Portuguese grammar, pronunciation, slang, and culture.

RESPONSE FORMAT (STRICT — reply ONLY raw JSON, no other text):
{"pt":"Your Portuguese response","en":"English translation or explanation","tip":"Grammar/pronunciation/culture tip or null","fix":"Gentle correction with explanation or null"}

CORE BEHAVIOR:
- If they write in Portuguese: respond in Portuguese, praise their effort, gently correct any mistakes in "fix"
- If they write in English: teach them how to say it in Portuguese, explain the grammar
- If they ask a QUESTION about Portuguese: give a clear, detailed explanation in "en"
- Always use Brazilian Portuguese (NEVER European — no "tu" conjugations, no "autocarro", no "pequeno almoço")
- Keep Portuguese responses short and natural (1-3 sentences)
${voiceMode?"\n- VOICE MODE: Extra short responses (1-2 sentences). Student is speaking aloud.":""}

CORRECTIONS — be specific and educational:
- Don't just say "wrong" — explain WHY and give the correct form
- Example: "fix":"You wrote 'eu é' but with 'eu' we use 'sou' (permanent) or 'estou' (temporary). Try: 'Eu sou brasileiro.'"
- Common English speaker mistakes to watch for:
  * Ser vs Estar confusion — explain: ser=permanent identity, estar=temporary state/location
  * Gender agreement — "a problema" should be "o problema" (problema is masculine despite -a ending)
  * "Eu sou [age] anos" — correct to "Eu tenho [age] anos" (Portuguese uses "have" for age)
  * "Eu gosto [thing]" — correct to "Eu gosto DE [thing]" (gostar always needs "de")
  * False friends: "excitado" means aroused not excited (use "animado"), "puxar" means pull not push (push = "empurrar")
  * "Estou bom" when they mean "Estou bem" — bom=good (adjective), bem=well (adverb)
  * Using "é" for location — correct to "está" or "fica" (ser is not for location)

PRONUNCIATION TIPS (include in "tip" when relevant):
- Brazilian "d" before "i" or "e" sounds like "j" in "jeans" (cidade = see-DAH-jee)
- Brazilian "t" before "i" or "e" sounds like "ch" in "cheese" (noite = NOY-chee)
- "R" at start of word or "rr" = "h" sound (rio = HEE-oo, carro = KAH-hoo)
- "Lh" = "ly" sound (trabalho = tra-BAH-lyoo)
- "Nh" = "ny" sound (amanhã = ah-mah-NYA)
- Final "m" is nasal, not a hard consonant (bom = BOH(ng), not "bohm")
- "Ão" is a strong nasal diphthong (não = NOW(ng))
- Final unstressed "e" sounds like "ee" and final "o" sounds like "oo"

CULTURAL CONTEXT (share when natural):
- Brazilians use "você" not "tu" in most regions (except parts of the South and Northeast)
- "A gente" is very common in speech as informal "we" (instead of "nós")
- Diminutives (-inho/-inha) show affection: "cafezinho" = little coffee (offered warmly)
- "Tudo bem?" is THE standard greeting — more common than "Olá" in daily life
- Brazilians are generally warm and informal — teach casual speech, not textbook stiffness
- "Valeu" = thanks (casual), "Beleza" = cool/okay, "Legal" = cool — these are essential

LEVEL ADAPTATION:
- If the student writes very simple Portuguese or mostly English: they're a beginner. Use simple vocabulary, short sentences, explain everything.
- If they write decent Portuguese with minor errors: intermediate. Be conversational, correct subtly, introduce new vocabulary.
- If they write fluent Portuguese: advanced. Be natural, use slang, discuss complex topics, correct only nuanced errors.`;

const hist=msgs.slice(-16).map(m=>m.role==="u"?{role:"user",content:m.text}:{role:"assistant",content:JSON.stringify({pt:m.pt,en:m.en,tip:m.tip||null,fix:m.fix||null})});
hist.push({role:"user",content:t});

const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),15000);
const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:ctrl.signal,
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:600,system:sysPrompt,
messages:[{role:"user",content:hist.map(m=>`${m.role}:${m.content}`).join("\n")}]})});
clearTimeout(timer);
if(!r.ok)throw new Error("status_"+r.status);
const d=await r.json();
const raw=(d.content.find(b=>b.type==="text")?.text||"").replace(/```json\n?|```/g,"").trim();
const parsed=JSON.parse(raw);
setMsgs(p=>[...p,{id:nid.current++,role:"a",...parsed}]);
speakPT(parsed.pt,()=>setSpk(true),()=>setSpk(false));
}catch(e){
setErr(e?.name==="AbortError"?"Bia took too long — try again.":"Couldn't reach Bia — check your connection.");
setTimeout(()=>setErr(null),6000);
}finally{setBusy(false)}};

// ═══ COLORS ═══
const T1=dark?"#e0e0e0":"#1a1a1a",T2=dark?"#bbb":"#555",T3=dark?"#888":"#888",T4=dark?"#666":"#999";
const bg=dark?"#121212":"linear-gradient(160deg,#FFF8E1,#FFECB3 30%,#E8F5E9 60%,#E3F2FD 90%)";
const cbg=dark?"rgba(30,30,30,.95)":"rgba(255,255,255,.95)";
const bdr=dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)";

// ═══ LOGIN SCREEN ═══
if(!authUser)return(
<div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20,
background:"linear-gradient(160deg,#FFF8E1,#FFECB3 30%,#E8F5E9 60%,#E3F2FD 90%)",fontFamily:"system-ui,-apple-system,sans-serif"}}>
<style>{`@keyframes pop{0%{transform:scale(.85);opacity:0}50%{transform:scale(1.02)}100%{transform:scale(1);opacity:1}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.li:focus{border-color:#0B4A3E!important;box-shadow:0 0 0 3px rgba(11,74,62,.15)!important}`}</style>
<div style={{maxWidth:380,width:"100%",animation:"pop .5s"}}>
<div style={{textAlign:"center",marginBottom:28}}>
<div style={{display:"inline-flex",animation:"float 3s infinite ease-in-out"}}>
<svg width="64" height="46" viewBox="0 0 28 20" style={{borderRadius:6,boxShadow:"0 6px 20px rgba(0,0,0,.2)"}}><rect width="28" height="20" fill="#009739"/><polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00"/><circle cx="14" cy="10" r="4.5" fill="#002776"/></svg></div>
<div style={{fontSize:34,fontWeight:800,fontFamily:"Georgia,serif",color:"#0B4A3E",marginTop:14}}>Fala Comigo</div>
<div style={{fontSize:14,color:"#888",marginTop:4}}>Learn Brazilian Portuguese</div></div>
<div style={{background:"rgba(255,255,255,.97)",borderRadius:24,padding:"28px 24px",boxShadow:"0 12px 48px rgba(0,0,0,.1)"}}>
<div style={{fontSize:12,fontWeight:700,color:"#aaa",textTransform:"uppercase",letterSpacing:1.5,marginBottom:16}}>Sign in</div>
<input value={loginU} onChange={e=>setLoginU(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doLogin()}} placeholder="Username" className="li"
style={{width:"100%",padding:"14px 16px",borderRadius:14,border:"2px solid #e8e8e8",fontSize:15,marginBottom:10,boxSizing:"border-box",outline:"none",transition:"all .2s"}}/>
<input value={loginP} onChange={e=>setLoginP(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doLogin()}} placeholder="Password" type="password" className="li"
style={{width:"100%",padding:"14px 16px",borderRadius:14,border:"2px solid #e8e8e8",fontSize:15,marginBottom:loginErr?8:16,boxSizing:"border-box",outline:"none",transition:"all .2s"}}/>
{loginErr&&<div style={{fontSize:13,color:"#C62828",marginBottom:12,padding:"8px 12px",background:"rgba(198,40,40,.06)",borderRadius:10}}>{loginErr}</div>}
<button onClick={doLogin} style={{width:"100%",padding:"15px",borderRadius:14,border:"none",cursor:"pointer",
background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",
boxShadow:"0 6px 20px rgba(11,74,62,.3)",transition:"all .2s"}}>Start Learning →</button></div>
<div style={{textAlign:"center",fontSize:11,color:"#bbb",marginTop:14}}>Ask your teacher for login details</div></div></div>);

// ═══ MAIN APP ═══
return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:bg,overflow:"hidden",fontFamily:"system-ui,-apple-system,sans-serif",color:T1}}>
<style>{`
@keyframes pop{0%{transform:scale(.85);opacity:0}50%{transform:scale(1.02)}100%{transform:scale(1);opacity:1}}
@keyframes fi{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes mic{0%,100%{box-shadow:0 0 0 0 rgba(233,30,99,.4)}50%{box-shadow:0 0 0 14px rgba(233,30,99,0)}}
@keyframes rainbow{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
.btn{transition:all .15s;cursor:pointer;border:none;font-family:inherit}.btn:active{transform:scale(.93)}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(${dark?"255,255,255":"0,0,0"},.1);border-radius:3px}
`}</style>

{/* ═══ HEADER ═══ */}
<div style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,boxShadow:"0 4px 20px rgba(0,0,0,.15)"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<svg width="24" height="17" viewBox="0 0 28 20" style={{borderRadius:3,flexShrink:0}}><rect width="28" height="20" fill="#009739"/><polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00"/><circle cx="14" cy="10" r="4.5" fill="#002776"/></svg>
<span style={{fontSize:W?22:18,fontWeight:800,fontFamily:"Georgia,serif",color:"#fff"}}>Fala Comigo</span></div>
<div style={{display:"flex",gap:6,alignItems:"center"}}>
<span style={{fontSize:12,color:"rgba(255,255,255,.7)"}}>{authUser}</span>
<button onClick={toggleDark} className="btn" style={{background:"rgba(255,255,255,.12)",borderRadius:16,padding:"4px 10px",fontSize:14,color:"#fff"}}>{dark?"☀️":"🌙"}</button>
<button onClick={()=>{if(confirm("Log out?"))doLogout()}} className="btn" style={{background:"rgba(255,255,255,.12)",borderRadius:16,padding:"4px 10px",fontSize:12,color:"#fff"}}>⎋</button>
</div></div>

{/* ═══ CONTENT ═══ */}
<div style={{flex:1,overflowY:"auto",overflowX:"hidden"}}>
<div style={{maxWidth:W?600:480,margin:"0 auto",width:"100%",padding:`0 ${W?20:14}px`}}>

{/* ═══ CHAT TAB ═══ */}
{tab==="chat"&&<div style={{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 140px)"}}>
{/* Welcome if no messages */}
{msgs.length===0&&<div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,padding:"40px 0",animation:"fi .5s"}}>
<div style={{position:"relative"}}>
<div style={{position:"absolute",inset:-6,borderRadius:"50%",background:"conic-gradient(from 0deg,#E91E63,#C9982E,#0B4A3E,#7B1FA2,#E91E63)",animation:"rainbow 4s linear infinite",filter:"blur(2px)",opacity:.6}}/>
<div style={{position:"relative",width:80,height:80,borderRadius:"50%",background:cbg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"0 6px 20px rgba(0,0,0,.12)"}}>🤖</div></div>
<div style={{textAlign:"center"}}>
<div style={{fontSize:W?26:22,fontWeight:800,fontFamily:"Georgia,serif"}}>Bia</div>
<div style={{fontSize:14,color:T3,marginTop:4,maxWidth:300,lineHeight:1.5}}>Your AI Portuguese tutor. I correct your mistakes, explain grammar, teach pronunciation, and speak back to you. Type or tap 🎙️ to talk!</div></div>
<div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginTop:8,maxWidth:360}}>
{["Oi, Bia! 😊","How do I say 'thank you'?","Teach me how to order food","What's the difference between ser and estar?","How do I introduce myself?","What does 'saudade' mean?"].map((q,i)=>
<button key={i} onClick={()=>{setChatIn(q);setTimeout(()=>sendChat(q),100)}} className="btn"
style={{padding:"10px 16px",borderRadius:20,background:cbg,border:`1px solid ${bdr}`,fontSize:13,color:T2,fontFamily:"Georgia,serif",
boxShadow:`0 2px 8px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`}}>{q}</button>)}
</div></div>}

{/* Messages */}
{msgs.length>0&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:12,padding:"18px 0"}}>
{msgs.map(m=><div key={m.id} style={{alignSelf:m.role==="u"?"flex-end":"flex-start",maxWidth:"85%",animation:"fi .3s"}}>
{m.role==="u"?
<div style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",padding:"12px 16px",borderRadius:"20px 20px 4px 20px",fontSize:15,lineHeight:1.5,boxShadow:"0 3px 12px rgba(11,74,62,.25)"}}>{m.text}</div>
:<div style={{background:cbg,border:`1px solid ${bdr}`,padding:"14px 16px",borderRadius:"20px 20px 20px 4px",boxShadow:`0 3px 12px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`,maxWidth:"100%"}}>
<div style={{fontSize:W?18:16,fontWeight:600,fontFamily:"Georgia,serif",lineHeight:1.5,color:T1}}>{m.pt}</div>
<div style={{fontSize:14,color:T3,marginTop:4,lineHeight:1.4}}>{m.en}</div>
{m.tip&&<div style={{marginTop:8,padding:"8px 12px",background:dark?"rgba(201,152,46,.1)":"rgba(255,248,225,.9)",borderRadius:10,border:"1px solid rgba(201,152,46,.2)",fontSize:12,color:dark?"#D4A027":"#8A6D00"}}>💡 {m.tip}</div>}
{m.fix&&<div style={{marginTop:6,padding:"8px 12px",background:dark?"rgba(233,30,99,.08)":"rgba(252,228,236,.9)",borderRadius:10,border:"1px solid rgba(233,30,99,.15)",fontSize:12,color:"#C2185B"}}>✏️ {m.fix}</div>}
<button onClick={()=>speakPT(m.pt,()=>setSpk(true),()=>setSpk(false))} className="btn"
style={{marginTop:8,background:"none",fontSize:13,color:"#0B4A3E",padding:0,fontWeight:600}}>🔊 Hear it</button>
<button onClick={()=>{const exists=cards.find(c=>c.pt===m.pt);if(!exists){const nc=[...cards,{id:Date.now(),pt:m.pt,en:m.en}];saveCards(nc);setErr("📚 Added to flashcards!");setTimeout(()=>setErr(null),2000)}else{setErr("Already in your flashcards!");setTimeout(()=>setErr(null),2000)}}} className="btn"
style={{marginTop:8,marginLeft:12,background:"none",fontSize:13,color:"#C9982E",padding:0,fontWeight:600}}>📚 Save card</button>
</div>}
</div>)}
{busy&&<div style={{alignSelf:"flex-start",display:"flex",gap:6,padding:16}}>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s 0s infinite"}}/>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s .15s infinite"}}/>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s .3s infinite"}}/>
</div>}
{err&&<div style={{padding:"10px 14px",background:"rgba(198,40,40,.06)",border:"1px solid rgba(198,40,40,.15)",borderRadius:12,fontSize:13,color:"#C62828"}}>{err}</div>}
<div ref={btm}/>
</div>}
</div>}

{/* ═══ FLASHCARDS TAB ═══ */}
{tab==="cards"&&<div style={{padding:"20px 0",animation:"fi .4s"}}>
{/* Create card */}
<div style={{background:cbg,border:`1px solid ${bdr}`,borderRadius:24,padding:"20px",boxShadow:`0 4px 20px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`,marginBottom:20}}>
<div style={{fontSize:18,fontWeight:800,fontFamily:"Georgia,serif",marginBottom:14}}>✏️ Create Flashcard</div>
<div style={{display:"flex",gap:10,flexDirection:W?"row":"column"}}>
<input value={newPT} onChange={e=>setNewPT(e.target.value)} placeholder="Portuguese" onKeyDown={e=>{if(e.key==="Enter"&&newPT.trim()&&newEN.trim()){saveCards([...cards,{id:Date.now(),pt:newPT.trim(),en:newEN.trim()}]);setNewPT("");setNewEN("")}}}
style={{flex:1,padding:"12px 16px",borderRadius:14,border:`2px solid ${dark?"rgba(255,255,255,.1)":"#e8e8e8"}`,fontSize:15,background:dark?"rgba(40,40,40,.9)":"#fff",color:T1,outline:"none",boxSizing:"border-box"}}/>
<input value={newEN} onChange={e=>setNewEN(e.target.value)} placeholder="English" onKeyDown={e=>{if(e.key==="Enter"&&newPT.trim()&&newEN.trim()){saveCards([...cards,{id:Date.now(),pt:newPT.trim(),en:newEN.trim()}]);setNewPT("");setNewEN("")}}}
style={{flex:1,padding:"12px 16px",borderRadius:14,border:`2px solid ${dark?"rgba(255,255,255,.1)":"#e8e8e8"}`,fontSize:15,background:dark?"rgba(40,40,40,.9)":"#fff",color:T1,outline:"none",boxSizing:"border-box"}}/>
<button onClick={()=>{if(newPT.trim()&&newEN.trim()){saveCards([...cards,{id:Date.now(),pt:newPT.trim(),en:newEN.trim()}]);setNewPT("");setNewEN("")}}} className="btn"
style={{padding:"12px 20px",borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:15,fontWeight:700}}>+ Add</button>
</div></div>

{/* Study mode */}
{studying&&cards.length>0&&<div style={{marginBottom:20,animation:"pop .3s"}}>
<div style={{background:cbg,border:`1px solid ${bdr}`,borderRadius:28,padding:"40px 24px",textAlign:"center",
boxShadow:`0 8px 32px ${dark?"rgba(0,0,0,.3)":"rgba(0,0,0,.1)"}`,cursor:"pointer",minHeight:180,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",
position:"relative",overflow:"hidden"}} onClick={()=>setFlipped(!flipped)}>
<div style={{position:"absolute",top:-20,right:-10,fontSize:100,opacity:.06}}>{flipped?"🇬🇧":"🇧🇷"}</div>
<div style={{fontSize:12,textTransform:"uppercase",letterSpacing:2,color:T4,fontWeight:700,marginBottom:12}}>{flipped?"English":"Português"} · {studyIdx+1}/{cards.length}</div>
<div style={{fontSize:W?36:28,fontWeight:800,fontFamily:"Georgia,serif",animation:"pop .25s"}} key={`${studyIdx}-${flipped}`}>
{flipped?cards[studyIdx].en:cards[studyIdx].pt}</div>
{!flipped&&<button onClick={e=>{e.stopPropagation();speakPT(cards[studyIdx].pt,()=>setSpk(true),()=>setSpk(false))}} className="btn"
style={{marginTop:16,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:48,height:48,fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(11,74,62,.3)"}}>🔊</button>}
<div style={{fontSize:12,color:T4,marginTop:12}}>Tap card to flip</div>
</div>
<div style={{display:"flex",gap:10,marginTop:12}}>
<button onClick={()=>{const prev=studyIdx===0?cards.length-1:studyIdx-1;setStudyIdx(prev);setFlipped(false)}} className="btn"
style={{flex:1,padding:14,borderRadius:14,background:cbg,border:`1px solid ${bdr}`,fontSize:15,fontWeight:700,color:T2}}>← Prev</button>
<button onClick={()=>{const next=(studyIdx+1)%cards.length;setStudyIdx(next);setFlipped(false)}} className="btn"
style={{flex:1,padding:14,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:15,fontWeight:700}}>Next →</button>
<button onClick={()=>{setStudying(false);setStudyIdx(0);setFlipped(false)}} className="btn"
style={{padding:14,borderRadius:14,background:cbg,border:`1px solid ${bdr}`,fontSize:15,color:T4}}>✕</button>
</div></div>}

{/* Card list */}
{cards.length>0&&!studying&&<button onClick={()=>{setStudying(true);setStudyIdx(0);setFlipped(false)}} className="btn"
style={{width:"100%",padding:16,borderRadius:18,background:"linear-gradient(135deg,#C9982E,#FFB300)",color:"#fff",fontSize:17,fontWeight:800,fontFamily:"Georgia,serif",marginBottom:16,boxShadow:"0 6px 24px rgba(201,152,46,.35)"}}>📚 Study {cards.length} Cards</button>}

{cards.length===0&&!studying&&<div style={{textAlign:"center",padding:"40px 0",color:T4}}>
<div style={{fontSize:48,marginBottom:12}}>📝</div>
<div style={{fontSize:15,fontWeight:600}}>No flashcards yet</div>
<div style={{fontSize:13,marginTop:6,maxWidth:260,margin:"6px auto 0",lineHeight:1.5}}>Add Portuguese words you learn from Bia, or create your own cards to study.</div></div>}

{!studying&&<div style={{display:"flex",flexDirection:"column",gap:8}}>
{cards.map((c,i)=><div key={c.id} style={{background:cbg,border:`1px solid ${bdr}`,borderRadius:18,padding:"14px 18px",
display:"flex",justifyContent:"space-between",alignItems:"center",animation:`fi .3s ${i*.03}s both`,
boxShadow:`0 2px 8px ${dark?"rgba(0,0,0,.15)":"rgba(0,0,0,.04)"}`}}>
<div style={{flex:1}}>
<span style={{fontWeight:700,fontFamily:"Georgia,serif",fontSize:15,color:T1}}>{c.pt}</span>
<span style={{color:T4,margin:"0 8px"}}>—</span>
<span style={{color:T3,fontSize:14}}>{c.en}</span></div>
<div style={{display:"flex",gap:6}}>
<button onClick={()=>speakPT(c.pt,()=>setSpk(true),()=>setSpk(false))} className="btn" style={{background:"none",fontSize:16,padding:0,color:"#0B4A3E"}}>🔊</button>
<button onClick={()=>{if(confirm("Delete this card?"))saveCards(cards.filter(x=>x.id!==c.id))}} className="btn" style={{background:"none",fontSize:14,padding:0,color:T4}}>✕</button>
</div></div>)}
</div>}
</div>}

</div></div>

{/* ═══ CHAT INPUT (fixed bottom when on chat tab) ═══ */}
{tab==="chat"&&<div style={{background:dark?"rgba(18,18,18,.97)":"rgba(255,255,255,.95)",backdropFilter:"blur(16px)",borderTop:`1px solid ${bdr}`,padding:"12px 16px",flexShrink:0}}>
<div style={{maxWidth:W?600:480,margin:"0 auto",display:"flex",gap:8,alignItems:"center"}}>
{/* Voice language toggle */}
{voiceMode&&<button onClick={()=>setVoiceLang(voiceLang==="pt-BR"?"en-US":"pt-BR")} className="btn"
style={{padding:"12px 10px",borderRadius:14,background:dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)",fontSize:12,fontWeight:800,color:voiceLang==="pt-BR"?"#0B4A3E":"#1565C0",minWidth:48}}>
{voiceLang==="pt-BR"?"PT":"EN"}</button>}

{/* Voice mic button OR text input */}
{voiceMode?
<button onClick={()=>{if(busy||voiceListening)return;
runSpeech({lang:voiceLang,onStart:()=>setVoiceListening(true),
onResult:t=>{setVoiceListening(false);sendChat(t)},
onError:e=>{setVoiceListening(false);setErr(e);setTimeout(()=>setErr(null),5000)},
onEnd:()=>setVoiceListening(false)})}} disabled={busy} className="btn"
style={{flex:1,padding:"14px",borderRadius:16,
background:voiceListening?"linear-gradient(135deg,#E53935,#C62828)":busy?"rgba(233,30,99,.1)":"linear-gradient(135deg,#C2185B,#E91E63)",
color:voiceListening||!busy?"#fff":T4,fontSize:15,fontWeight:700,
boxShadow:voiceListening?"0 0 0 4px rgba(233,30,99,.2)":"0 3px 12px rgba(233,30,99,.25)",
animation:voiceListening?"mic 1.5s infinite":"none"}}>
{voiceListening?"🎙️ Listening...":busy?"Thinking...":"🎙️ Tap to Speak"}</button>
:<>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder="Type in Portuguese or English..."
style={{flex:1,padding:"12px 16px",borderRadius:14,border:`1.5px solid ${dark?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)"}`,
fontSize:15,background:dark?"rgba(40,40,40,.9)":"#fff",color:T1,outline:"none"}}/>
<button onClick={()=>sendChat()} disabled={busy||!chatIn.trim()} className="btn"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:14,padding:"12px 18px",fontSize:15,fontWeight:700,
boxShadow:"0 3px 12px rgba(11,74,62,.25)"}}>→</button></>}

{/* Toggle voice/text */}
<button onClick={()=>{setVoiceMode(!voiceMode);if(voiceListening){if(recRef.current)try{recRef.current.abort()}catch{};setVoiceListening(false)}}} className="btn"
style={{background:voiceMode?"linear-gradient(135deg,#0B4A3E,#2D8B6E)":"rgba(0,0,0,.05)",borderRadius:14,padding:"12px",fontSize:16,
color:voiceMode?"#fff":T3,border:`1px solid ${voiceMode?"transparent":bdr}`}}>
{voiceMode?"⌨️":"🎙️"}</button>
</div></div>}

{/* ═══ TAB BAR ═══ */}
<div style={{display:"flex",borderTop:`1px solid ${bdr}`,background:dark?"rgba(18,18,18,.97)":"rgba(255,255,255,.97)",flexShrink:0}}>
{[{id:"chat",icon:"💬",label:"Chat"},{id:"cards",icon:"📚",label:"Flashcards"}].map(t=>
<button key={t.id} onClick={()=>setTab(t.id)} className="btn"
style={{flex:1,padding:"12px 0",display:"flex",flexDirection:"column",alignItems:"center",gap:2,background:"transparent",
color:tab===t.id?"#0B4A3E":T4,fontSize:11,fontWeight:tab===t.id?800:500}}>
<span style={{fontSize:tab===t.id?22:18,transition:"all .2s"}}>{t.icon}</span>
<span>{t.label}</span>
</button>)}
</div>
</div>)}
