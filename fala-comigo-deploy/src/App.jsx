import { useState, useRef, useEffect, useCallback } from "react";
import { ACCOUNTS, checkLogin } from "./data/accounts.js";
import { speakPT, isTTSAvailable } from "./utils/audio.js";

const W=typeof window!=="undefined"&&window.innerWidth>=768;

// Scenario definitions
const SCENARIOS=[
  {id:"free",icon:"💬",name:"Free Chat",desc:"Talk about anything",prompt:""},
  {id:"restaurant",icon:"🍽️",name:"Restaurant",desc:"Order food & drinks",prompt:"You are a friendly waiter at a Brazilian restaurant called 'Sabor do Brasil'. Greet the customer, show them the menu, take their order. Use food vocabulary. Stay in character."},
  {id:"airport",icon:"✈️",name:"Airport",desc:"Navigate the airport",prompt:"You are an airport attendant at GRU (Guarulhos) airport in São Paulo. Help the traveler check in, find their gate, handle delays. Stay in character."},
  {id:"doctor",icon:"🏥",name:"Doctor",desc:"Describe symptoms",prompt:"You are a friendly Brazilian doctor. Ask the patient about their symptoms, give advice. Use health vocabulary. Stay in character."},
  {id:"shopping",icon:"🛍️",name:"Shopping",desc:"Buy things & bargain",prompt:"You are a shopkeeper at a market in Rio de Janeiro. Help the customer find items, discuss prices, sizes. Stay in character."},
  {id:"friends",icon:"🤝",name:"Making Friends",desc:"Small talk & socializing",prompt:"You are a friendly Brazilian meeting someone new at a party in São Paulo. Make small talk, ask about their life, share about yours. Be warm and casual."},
  {id:"taxi",icon:"🚕",name:"Taxi Ride",desc:"Directions & chat",prompt:"You are a chatty taxi driver in Rio de Janeiro. Ask where they're going, make conversation about the city, point out landmarks. Stay in character."},
  {id:"quiz",icon:"🎯",name:"Quiz Me!",desc:"Rapid translation challenges",prompt:`You are running a fun Portuguese quiz. Give the student one English word or phrase at a time and ask them to translate it to Portuguese. After they answer, tell them if they're right or wrong with the correct answer. Keep score. Mix easy and hard. Be encouraging and fun. Start with: "Ready? Let's go! 🎯 Translate this to Portuguese:"`},
];

export default function App(){
// ═══ AUTH ═══
const[authUser,setAuthUser]=useState(()=>{try{return localStorage.getItem("fala-user")||null}catch{return null}});
const[loginU,setLoginU]=useState("");const[loginP,setLoginP]=useState("");const[loginErr,setLoginErr]=useState("");
const doLogin=()=>{const acc=checkLogin(loginU,loginP);if(acc){setLoginErr("");try{localStorage.setItem("fala-user",acc.user)}catch{};setAuthUser(acc.user)}else setLoginErr("Wrong username or password.")};
const doLogout=()=>{try{localStorage.removeItem("fala-user")}catch{};setAuthUser(null)};
const PK=authUser?"fala-u-"+authUser:"fala-u";

// ═══ STATE ═══
const[dark,setDark]=useState(()=>{try{return localStorage.getItem("fala-dark")==="1"}catch{return false}});
const toggleDark=()=>{const d=!dark;setDark(d);try{localStorage.setItem("fala-dark",d?"1":"0")}catch{}};
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[err,setErr]=useState(null);const[spk,setSpk]=useState(false);
const[scenario,setScenario]=useState(null);// null=picker, string=active scenario id
const[voiceMode,setVoiceMode]=useState(false);const[voiceListening,setVoiceListening]=useState(false);const[voiceLang,setVoiceLang]=useState("pt-BR");
// Stats
const[stats,setStats]=useState({sent:0,fixes:0,streak:0,lastDate:null});

const nid=useRef(1);const btm=useRef(null);const recRef=useRef(null);const micTimer=useRef(null);

// ═══ LOAD STATS ═══
useEffect(()=>{if(!authUser)return;try{const r=localStorage.getItem(PK+"-stats");if(r)setStats(JSON.parse(r))}catch{}},[authUser]);
const saveStat=(fn)=>{setStats(s=>{const ns=fn(s);try{localStorage.setItem(PK+"-stats",JSON.stringify(ns))}catch{};return ns})};

useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

// ═══ SPEECH RECOGNITION ═══
const runSpeech=useCallback((opts)=>{
const{onStart,onResult,onError,onEnd,lang}=opts;
if(recRef.current){try{recRef.current.abort()}catch{};recRef.current=null}
if(micTimer.current){clearTimeout(micTimer.current);micTimer.current=null}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!SR){onError?.("Voice not supported. Try Chrome or Edge.");return}
let r;try{r=new SR()}catch{onError?.("Couldn't start mic.");return}
r.lang=lang||"pt-BR";r.continuous=false;r.interimResults=false;r.maxAlternatives=1;
let done=false;
const cleanup=()=>{if(micTimer.current){clearTimeout(micTimer.current);micTimer.current=null}recRef.current=null};
r.onstart=()=>onStart?.();
r.onresult=e=>{done=true;const t=e.results?.[0]?.[0]?.transcript||"";cleanup();t.trim()?onResult?.(t.trim()):onError?.("Didn't hear anything.");onEnd?.()};
r.onerror=e=>{done=true;cleanup();const err=e?.error||"";if(err==="aborted"){onEnd?.();return}
err==="not-allowed"?onError?.("Mic blocked — allow in browser settings."):onError?.("Didn't catch that — try again.");onEnd?.()};
r.onend=()=>{if(!done){done=true;cleanup();onError?.("Didn't hear anything.");onEnd?.()}};
recRef.current=r;micTimer.current=setTimeout(()=>{if(!done){try{r.abort()}catch{};cleanup();onError?.("Took too long — try again.");onEnd?.()}},10000);
try{r.start()}catch{cleanup();onError?.("Couldn't start mic.");onEnd?.()}
},[]);
useEffect(()=>{return()=>{if(recRef.current){try{recRef.current.abort()}catch{}}if(micTimer.current)clearTimeout(micTimer.current)}},[scenario]);

// ═══ SEND CHAT ═══
const sendChat=async(voiceText)=>{const t=(voiceText||chatIn).trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");setErr(null);
saveStat(s=>({...s,sent:s.sent+1}));
try{
const sc=SCENARIOS.find(s=>s.id===scenario)||SCENARIOS[0];
const sysPrompt=`You are Bia, an expert Brazilian Portuguese tutor from São Paulo. Warm, encouraging, deeply knowledgeable.

RESPONSE FORMAT — reply ONLY raw JSON, nothing else:
{"pt":"Portuguese response","en":"English translation or explanation","tip":"Grammar/pronunciation/culture tip or null","fix":"Correction with explanation or null"}

${sc.prompt?`SCENARIO: ${sc.prompt}\nStay in character but still provide translations in "en" and corrections in "fix".`:""}

CORE RULES:
- Portuguese input → respond in Portuguese, praise effort, correct mistakes in "fix"
- English input → teach the Portuguese, explain grammar
- Questions about Portuguese → detailed explanation in "en"
- Brazilian Portuguese ONLY (never European — no "tu" conjugations, no autocarro)
- Keep Portuguese short (1-3 sentences)${voiceMode?", extra short for voice (1-2 sentences)":""}

CORRECTIONS — be specific:
- Don't say "wrong" — explain WHY: "You wrote 'eu é' but with 'eu' use 'sou' (permanent) or 'estou' (temporary)"
- Watch for: ser/estar confusion, gender (o problema is masculine), age uses ter not ser, gostar DE, bom vs bem, excitado≠excited (use animado), puxar=pull not push

PRONUNCIATION (share in tips):
- D before i/e → "j" (cidade=see-DAH-jee) | T before i/e → "ch" (noite=NOY-chee)
- R at start/rr → "h" (rio=HEE-oo) | Lh → "ly" | Nh → "ny"
- Final M → nasal (bom=BOH-ng) | ão → strong nasal (não=NOW-ng)

CULTURE: Brazilians use você (not tu), "a gente" for informal "we", diminutives (-inho) show warmth, "Tudo bem?" is THE greeting, valeu=thanks, beleza=cool, legal=cool

LEVEL: Simple Portuguese + lots of English for beginners. Natural conversation for advanced. Match their level.`;

const hist=msgs.slice(-16).map(m=>m.role==="u"?{role:"user",content:m.text}:{role:"assistant",content:JSON.stringify({pt:m.pt,en:m.en,tip:m.tip||null,fix:m.fix||null})});
hist.push({role:"user",content:t});
const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),15000);
const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:ctrl.signal,
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:600,system:sysPrompt,
messages:[{role:"user",content:hist.map(m=>`${m.role}:${m.content}`).join("\n")}]})});
clearTimeout(timer);if(!r.ok)throw new Error("status");
const d=await r.json();const raw=(d.content.find(b=>b.type==="text")?.text||"").replace(/```json\n?|```/g,"").trim();
const parsed=JSON.parse(raw);
setMsgs(p=>[...p,{id:nid.current++,role:"a",...parsed}]);
speakPT(parsed.pt,()=>setSpk(true),()=>setSpk(false));
if(parsed.fix)saveStat(s=>({...s,fixes:s.fixes+1}));
// Update streak
const today=new Date().toDateString();
saveStat(s=>{if(s.lastDate===today)return s;const y=new Date(Date.now()-864e5).toDateString();return{...s,streak:s.lastDate===y?s.streak+1:1,lastDate:today}});
}catch(e){setErr(e?.name==="AbortError"?"Bia took too long — try again.":"Couldn't reach Bia — check connection.");setTimeout(()=>setErr(null),6000)}finally{setBusy(false)}};

// ═══ COLORS ═══
const T1=dark?"#e0e0e0":"#1a1a1a",T2=dark?"#bbb":"#555",T3=dark?"#888":"#888",T4=dark?"#666":"#999";
const cbg=dark?"rgba(30,30,30,.95)":"rgba(255,255,255,.95)";const bdr=dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)";

// ═══ LOGIN ═══
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
<button onClick={doLogin} style={{width:"100%",padding:"15px",borderRadius:14,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",boxShadow:"0 6px 20px rgba(11,74,62,.3)"}}>Start Learning →</button></div>
<div style={{textAlign:"center",fontSize:11,color:"#bbb",marginTop:14}}>Ask your teacher for login details</div></div></div>);

// ═══ MAIN ═══
return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:dark?"#121212":"linear-gradient(160deg,#FFF8E1,#FFECB3 30%,#E8F5E9 60%,#E3F2FD 90%)",overflow:"hidden",fontFamily:"system-ui,-apple-system,sans-serif",color:T1}}>
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
<div style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",padding:"12px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,boxShadow:"0 4px 20px rgba(0,0,0,.15)"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<svg width="22" height="16" viewBox="0 0 28 20" style={{borderRadius:2,flexShrink:0}}><rect width="28" height="20" fill="#009739"/><polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00"/><circle cx="14" cy="10" r="4.5" fill="#002776"/></svg>
<span style={{fontSize:W?20:17,fontWeight:800,fontFamily:"Georgia,serif",color:"#fff"}}>Fala Comigo</span></div>
<div style={{display:"flex",gap:6,alignItems:"center"}}>
{/* Mini stats */}
<div style={{display:"flex",gap:8,marginRight:6}}>
<span style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>💬{stats.sent}</span>
<span style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>🔥{stats.streak}</span>
</div>
<button onClick={toggleDark} className="btn" style={{background:"rgba(255,255,255,.12)",borderRadius:14,padding:"3px 9px",fontSize:13,color:"#fff"}}>{dark?"☀️":"🌙"}</button>
<button onClick={()=>{if(confirm("Log out?"))doLogout()}} className="btn" style={{background:"rgba(255,255,255,.12)",borderRadius:14,padding:"3px 9px",fontSize:11,color:"#fff"}}>⎋</button>
</div></div>

{/* ═══ CONTENT ═══ */}
<div style={{flex:1,overflowY:"auto",overflowX:"hidden"}}>
<div style={{maxWidth:W?600:480,margin:"0 auto",width:"100%",padding:`0 ${W?20:14}px`}}>

{/* ═══ SCENARIO PICKER (when no active chat) ═══ */}
{!scenario&&<div style={{padding:"24px 0",animation:"fi .4s"}}>
{/* Bia avatar */}
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14,marginBottom:24}}>
<div style={{position:"relative"}}>
<div style={{position:"absolute",inset:-6,borderRadius:"50%",background:"conic-gradient(from 0deg,#E91E63,#C9982E,#0B4A3E,#7B1FA2,#E91E63)",animation:"rainbow 4s linear infinite",filter:"blur(2px)",opacity:.6}}/>
<div style={{position:"relative",width:76,height:76,borderRadius:"50%",background:cbg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:38,boxShadow:"0 6px 20px rgba(0,0,0,.12)"}}>🤖</div></div>
<div style={{textAlign:"center"}}>
<div style={{fontSize:W?24:20,fontWeight:800,fontFamily:"Georgia,serif"}}>Bia</div>
<div style={{fontSize:13,color:T3,marginTop:3,lineHeight:1.5,maxWidth:300}}>Your AI Portuguese tutor. Pick a mode below — or just start chatting!</div></div></div>

{/* Scenario grid */}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
{SCENARIOS.map((sc,i)=>{
const cols=["#0B4A3E","#E65100","#1565C0","#C62828","#7B1FA2","#00695C","#AD1457","#C9982E"];const c=cols[i%cols.length];
return<button key={sc.id} onClick={()=>{setScenario(sc.id);
if(sc.id==="quiz")setMsgs([{id:nid.current++,role:"a",pt:"Vamos lá! 🎯",en:"Let's go! Translate this to Portuguese:",tip:null,fix:null}]);
else if(sc.id==="free")setMsgs([]);
else setMsgs([{id:nid.current++,role:"a",pt:sc.id==="restaurant"?"Boa noite! Bem-vindo ao Sabor do Brasil! 🍽️":sc.id==="airport"?"Bom dia! Bem-vindo ao aeroporto de Guarulhos! ✈️":sc.id==="doctor"?"Bom dia! O que está sentindo? 🏥":sc.id==="shopping"?"Oi! Posso ajudar? 🛍️":sc.id==="friends"?"E aí! Tudo bem? 🤝":sc.id==="taxi"?"Oi! Pra onde vai? 🚕":"Oi!",en:sc.id==="restaurant"?"Good evening! Welcome to Sabor do Brasil!":sc.id==="airport"?"Good morning! Welcome to Guarulhos airport!":sc.id==="doctor"?"Good morning! What are you feeling?":sc.id==="shopping"?"Hi! Can I help you?":sc.id==="friends"?"Hey! How's it going?":sc.id==="taxi"?"Hi! Where are you going?":"Hi!",tip:null,fix:null}])}}
className="btn" style={{padding:"16px 14px",borderRadius:20,textAlign:"left",position:"relative",overflow:"hidden",
background:cbg,border:`2px solid ${c}20`,boxShadow:`0 4px 16px ${c}12`,animation:`fi .3s ${i*.05}s both`}}>
<div style={{position:"absolute",top:-6,right:-2,fontSize:44,opacity:.1}}>{sc.icon}</div>
<div style={{position:"relative"}}>
<div style={{width:36,height:36,borderRadius:10,background:`linear-gradient(135deg,${c},${c}CC)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,marginBottom:8,boxShadow:`0 3px 10px ${c}40`}}>{sc.icon}</div>
<div style={{fontSize:14,fontWeight:800,color:T1,fontFamily:"Georgia,serif"}}>{sc.name}</div>
<div style={{fontSize:11,color:T4,marginTop:2}}>{sc.desc}</div>
</div></button>})}
</div></div>}

{/* ═══ ACTIVE CHAT ═══ */}
{scenario&&<div style={{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 120px)"}}>
{/* Scenario badge + back button */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0 6px"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<div style={{fontSize:18}}>{SCENARIOS.find(s=>s.id===scenario)?.icon}</div>
<div><div style={{fontSize:14,fontWeight:800,fontFamily:"Georgia,serif"}}>{SCENARIOS.find(s=>s.id===scenario)?.name}</div></div></div>
<button onClick={()=>{setScenario(null);setMsgs([])}} className="btn" style={{fontSize:12,color:T3,background:"none",textDecoration:"underline"}}>← Back</button>
</div>

{/* Messages */}
<div style={{flex:1,display:"flex",flexDirection:"column",gap:12,paddingBottom:18}}>
{msgs.map(m=><div key={m.id} style={{alignSelf:m.role==="u"?"flex-end":"flex-start",maxWidth:m.role==="u"?"80%":"88%",animation:"fi .3s"}}>
{m.role==="u"?
<div style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",padding:"14px 18px",borderRadius:"22px 22px 6px 22px",fontSize:15,lineHeight:1.5,boxShadow:"0 4px 16px rgba(11,74,62,.3)"}}>{m.text}</div>
:<div style={{background:cbg,border:`1.5px solid ${bdr}`,borderRadius:"22px 22px 22px 6px",boxShadow:`0 4px 18px ${dark?"rgba(0,0,0,.25)":"rgba(0,0,0,.08)"}`,overflow:"hidden"}}>
<div style={{padding:"16px 18px 10px",borderBottom:`1px solid ${bdr}`}}>
<div style={{fontSize:W?20:17,fontWeight:700,fontFamily:"Georgia,serif",lineHeight:1.5}}>{m.pt}</div></div>
<div style={{padding:"10px 18px",background:dark?"rgba(255,255,255,.02)":"rgba(0,0,0,.015)"}}>
<div style={{fontSize:14,color:T3,lineHeight:1.5}}>{m.en}</div></div>
{(m.tip||m.fix)&&<div style={{padding:"0 18px 10px"}}>
{m.tip&&<div style={{marginTop:8,padding:"10px 14px",background:dark?"rgba(201,152,46,.1)":"linear-gradient(135deg,rgba(255,248,225,.95),rgba(255,243,200,.9))",borderRadius:12,border:"1px solid rgba(201,152,46,.2)",fontSize:13,color:dark?"#D4A027":"#7A5D00",lineHeight:1.5,display:"flex",gap:8}}>
<span style={{fontSize:16,flexShrink:0}}>💡</span><span>{m.tip}</span></div>}
{m.fix&&<div style={{marginTop:6,padding:"10px 14px",background:dark?"rgba(233,30,99,.08)":"linear-gradient(135deg,rgba(252,228,236,.95),rgba(248,215,225,.9))",borderRadius:12,border:"1px solid rgba(233,30,99,.15)",fontSize:13,color:"#AD1457",lineHeight:1.5,display:"flex",gap:8}}>
<span style={{fontSize:16,flexShrink:0}}>✏️</span><span>{m.fix}</span></div>}
</div>}
<div style={{padding:"8px 18px 12px"}}>
<button onClick={()=>speakPT(m.pt,()=>setSpk(true),()=>setSpk(false))} className="btn"
style={{background:"none",fontSize:13,color:"#0B4A3E",padding:0,fontWeight:700}}>🔊 Hear it</button></div>
</div>}
</div>)}
{busy&&<div style={{alignSelf:"flex-start",display:"flex",gap:6,padding:16}}>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s 0s infinite"}}/>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s .15s infinite"}}/>
<div style={{width:8,height:8,borderRadius:"50%",background:T3,animation:"pulse 1s .3s infinite"}}/></div>}
{err&&<div style={{padding:"10px 14px",background:dark?"rgba(198,40,40,.1)":"rgba(198,40,40,.06)",border:"1px solid rgba(198,40,40,.15)",borderRadius:12,fontSize:13,color:"#C62828"}}>{err}</div>}
<div ref={btm}/>
</div></div>}

{/* Welcome quick starters (only in free chat with no messages) */}
{scenario==="free"&&msgs.length===0&&<div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",padding:"40px 0",animation:"fi .4s"}}>
<div style={{width:"100%",textAlign:"center",marginBottom:8}}>
<div style={{fontSize:14,color:T3}}>Try saying something — or tap a suggestion:</div></div>
{["Oi, Bia! 😊","How do I say 'thank you'?","Teach me how to order food","What's ser vs estar?","How do I count to 10?","What does 'saudade' mean?"].map((q,i)=>
<button key={i} onClick={()=>sendChat(q)} className="btn"
style={{padding:"10px 16px",borderRadius:20,background:cbg,border:`1px solid ${bdr}`,fontSize:13,color:T2,fontFamily:"Georgia,serif",
boxShadow:`0 2px 8px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`,animation:`fi .3s ${i*.05}s both`}}>{q}</button>)}
</div>}

</div></div>

{/* ═══ INPUT BAR ═══ */}
{scenario&&<div style={{background:dark?"rgba(18,18,18,.97)":"rgba(255,255,255,.95)",backdropFilter:"blur(16px)",borderTop:`1px solid ${bdr}`,padding:"12px 16px",flexShrink:0}}>
<div style={{maxWidth:W?600:480,margin:"0 auto",display:"flex",gap:8,alignItems:"center"}}>
{voiceMode&&<button onClick={()=>setVoiceLang(voiceLang==="pt-BR"?"en-US":"pt-BR")} className="btn"
style={{padding:"12px 10px",borderRadius:14,background:dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)",fontSize:12,fontWeight:800,color:voiceLang==="pt-BR"?"#0B4A3E":"#1565C0",minWidth:44}}>
{voiceLang==="pt-BR"?"PT":"EN"}</button>}
{voiceMode?
<button onClick={()=>{if(busy||voiceListening)return;runSpeech({lang:voiceLang,onStart:()=>setVoiceListening(true),onResult:t=>{setVoiceListening(false);sendChat(t)},onError:e=>{setVoiceListening(false);setErr(e);setTimeout(()=>setErr(null),5000)},onEnd:()=>setVoiceListening(false)})}} disabled={busy} className="btn"
style={{flex:1,padding:"14px",borderRadius:16,background:voiceListening?"linear-gradient(135deg,#E53935,#C62828)":busy?"rgba(233,30,99,.1)":"linear-gradient(135deg,#C2185B,#E91E63)",color:voiceListening||!busy?"#fff":T4,fontSize:15,fontWeight:700,boxShadow:voiceListening?"0 0 0 4px rgba(233,30,99,.2)":"0 3px 12px rgba(233,30,99,.25)",animation:voiceListening?"mic 1.5s infinite":"none"}}>
{voiceListening?"🎙️ Listening...":busy?"Thinking...":"🎙️ Tap to Speak"}</button>
:<>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder="Type in Portuguese or English..." style={{flex:1,padding:"12px 16px",borderRadius:14,border:`1.5px solid ${dark?"rgba(255,255,255,.1)":"rgba(0,0,0,.08)"}`,fontSize:15,background:dark?"rgba(40,40,40,.9)":"#fff",color:T1,outline:"none"}}/>
<button onClick={()=>sendChat()} disabled={busy||!chatIn.trim()} className="btn"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:14,padding:"12px 18px",fontSize:15,fontWeight:700,boxShadow:"0 3px 12px rgba(11,74,62,.25)"}}>→</button></>}
<button onClick={()=>{setVoiceMode(!voiceMode);if(voiceListening){if(recRef.current)try{recRef.current.abort()}catch{};setVoiceListening(false)}}} className="btn"
style={{background:voiceMode?"linear-gradient(135deg,#0B4A3E,#2D8B6E)":"rgba(0,0,0,.05)",borderRadius:14,padding:"12px",fontSize:16,color:voiceMode?"#fff":T3,border:`1px solid ${voiceMode?"transparent":bdr}`}}>
{voiceMode?"⌨️":"🎙️"}</button>
</div></div>}
</div>)}
