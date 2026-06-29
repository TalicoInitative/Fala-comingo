import { useState, useRef, useEffect, useCallback } from "react";
import { ACCOUNTS, checkLogin } from "./data/accounts.js";
import { speakPT } from "./utils/audio.js";
const W=typeof window!=="undefined"&&window.innerWidth>=768;
const SCENARIOS=[
{id:"restaurant",icon:"🍽️",name:"Restaurant",desc:"Order food & drinks",prompt:"You are a friendly waiter at 'Sabor do Brasil'. Present the menu (feijoada, picanha, açaí, caipirinha), take orders, handle the bill. Stay in character.",open:"Boa noite! Bem-vindo ao Sabor do Brasil! 🍽️",openEN:"Good evening! Welcome to Sabor do Brasil!"},
{id:"airport",icon:"✈️",name:"Airport",desc:"Check-in, gates, delays",prompt:"You are an attendant at Guarulhos airport (GRU). Help check in, find gates, handle delays. Stay in character.",open:"Bom dia! Posso ver seu passaporte? ✈️",openEN:"Good morning! Can I see your passport?"},
{id:"doctor",icon:"🏥",name:"Doctor",desc:"Symptoms & diagnosis",prompt:"You are a Brazilian doctor. Ask about symptoms, diagnose, explain treatment. Stay in character.",open:"Bom dia! O que está sentindo? 🏥",openEN:"Good morning! What are you feeling?"},
{id:"shopping",icon:"🛍️",name:"Shopping",desc:"Sizes, prices, bargaining",prompt:"You are a shopkeeper in Brazil. Help with sizes, colors, prices. Stay in character.",open:"Oi! Está procurando alguma coisa? 🛍️",openEN:"Hi! Looking for something?"},
{id:"friends",icon:"🤝",name:"Making Friends",desc:"Small talk & socializing",prompt:"You are a friendly Brazilian at a party. Make small talk, ask about life, hobbies. Be warm and casual. Stay in character.",open:"E aí! Tudo bem? De onde você é? 🤝",openEN:"Hey! How's it going? Where are you from?"},
{id:"taxi",icon:"🚕",name:"Taxi",desc:"Directions & landmarks",prompt:"You are a chatty Uber driver in Rio. Ask destination, discuss the city, point out landmarks. Stay in character.",open:"Oi! Pra onde vai? 🚕",openEN:"Hi! Where are you going?"},
{id:"hotel",icon:"🏨",name:"Hotel",desc:"Check-in & amenities",prompt:"You are a receptionist at a beach hotel in Florianópolis. Help check in, explain amenities. Stay in character.",open:"Boa tarde! Tem reserva? 🏨",openEN:"Good afternoon! Do you have a reservation?"},
{id:"job",icon:"💼",name:"Job Interview",desc:"Professional talk",prompt:"You are an HR manager at a Brazilian company. Interview the candidate. Professional but friendly. Stay in character.",open:"Bom dia! Pode me falar sobre você? 💼",openEN:"Good morning! Tell me about yourself?"},
{id:"pharmacy",icon:"💊",name:"Pharmacy",desc:"Medicine & remedies",prompt:"You are a pharmacist. Help find medicine, understand prescriptions. Stay in character.",open:"Posso ajudar? Precisa de algum remédio? 💊",openEN:"Can I help? Need any medicine?"},
{id:"bank",icon:"🏦",name:"Bank",desc:"Accounts, PIX, exchange",prompt:"You are a teller at Banco do Brasil. Help with accounts, PIX, currency exchange. Stay in character.",open:"Bom dia! Em que posso ajudar? 🏦",openEN:"Good morning! How can I help?"},
{id:"beach",icon:"🏖️",name:"Beach",desc:"Activities & vendors",prompt:"You are hanging out at Copacabana. Chat about activities, food vendors (açaí, mate, biscoito Globo). Stay in character.",open:"Que sol maravilhoso, né? 🏖️",openEN:"What amazing sun, right?"},
{id:"carnival",icon:"🎉",name:"Carnival",desc:"Blocos, samba, costumes",prompt:"You are a local during Carnival in Rio. Talk about blocos, samba, fantasias. Be festive. Stay in character.",open:"O Carnaval começou! Vai pular em qual bloco? 🎉",openEN:"Carnival started! Which bloco?"},
{id:"phone",icon:"📱",name:"Phone Call",desc:"Calls & messages",prompt:"Practice phone etiquette — answering (alô), asking for someone, leaving messages. Stay in character.",open:"Alô? Quem tá falando? 📱",openEN:"Hello? Who's speaking?"},
{id:"emergency",icon:"🚨",name:"Emergency",desc:"Police & help",prompt:"You are a police officer at a delegacia. The person needs help. Be calm and helpful. Stay in character.",open:"Calma. O que aconteceu? 🚨",openEN:"Stay calm. What happened?"},
{id:"market",icon:"🛒",name:"Street Market",desc:"Fruits & bargaining",prompt:"You are a feirante selling fruits (manga, maracujá, abacaxi). Haggle prices, be colorful. Stay in character.",open:"Olha a manga! Tudo fresquinho! Vai levar? 🛒",openEN:"Look at the mangoes! All fresh! Taking some?"},
{id:"dating",icon:"💑",name:"Dating",desc:"First date conversation",prompt:"You are on a first date at a café. Be charming, ask about interests. Use casual vocabulary. Stay in character but tasteful.",open:"Oi! Que bom te conhecer! 💑",openEN:"Hi! Great to meet you!"},
{id:"pronunciation",icon:"🗣️",name:"Pronunciation",desc:"Repeat & practice sounds",prompt:"Run a pronunciation drill. Say ONE word, wait for them to repeat. Give tips on tricky sounds: ão, nh, lh, rr, d/t before i/e. Go easy to hard.",open:"Vamos praticar! Repete: 'Olá!' 🗣️",openEN:"Let's practice! Repeat: 'Olá!'"},
];

export default function App(){
const[authUser,setAuthUser]=useState(()=>{try{return localStorage.getItem("fala-user")||null}catch{return null}});
const[loginU,setLoginU]=useState("");const[loginP,setLoginP]=useState("");const[loginErr,setLoginErr]=useState("");
const doLogin=()=>{const a=checkLogin(loginU,loginP);if(a){try{localStorage.setItem("fala-user",a.user)}catch{};setAuthUser(a.user);setLoginErr("")}else setLoginErr("Wrong credentials")};
const doLogout=()=>{try{localStorage.removeItem("fala-user")}catch{};setAuthUser(null)};
const PK=authUser?"fala-u-"+authUser:"fala-u";

const[dark,setDark]=useState(()=>{try{return localStorage.getItem("fala-dark")==="1"}catch{return false}});
const toggleDark=()=>{const d=!dark;setDark(d);try{localStorage.setItem("fala-dark",d?"1":"0")}catch{}};

// Views: home, text, voice, scenarios
const[view,setView]=useState("home");
const[scenario,setScenario]=useState(null);
const[level,setLevel]=useState(()=>{try{return localStorage.getItem(PK+"-lvl")||"beginner"}catch{return"beginner"}});
const setLvl=l=>{setLevel(l);try{localStorage.setItem(PK+"-lvl",l)}catch{}};
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[err,setErr]=useState(null);const[spk,setSpk]=useState(false);
const[voiceListening,setVoiceListening]=useState(false);const[voiceLang,setVoiceLang]=useState("pt-BR");
const[stats,setStats]=useState({sent:0,streak:0,lastDate:null});

const nid=useRef(1);const btm=useRef(null);const recRef=useRef(null);const micTmr=useRef(null);

useEffect(()=>{if(!authUser)return;try{const r=localStorage.getItem(PK+"-stats");if(r)setStats(JSON.parse(r))}catch{}},[authUser]);
const saveStat=fn=>{setStats(s=>{const n=fn(s);try{localStorage.setItem(PK+"-stats",JSON.stringify(n))}catch{};return n})};
useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

// Speech recognition
const runSpeech=useCallback(opts=>{
const{onStart,onResult,onError,onEnd,lang}=opts;
if(recRef.current){try{recRef.current.abort()}catch{};recRef.current=null}
if(micTmr.current){clearTimeout(micTmr.current);micTmr.current=null}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!SR){onError?.("Voice not supported. Use Chrome or Edge.");return}
let r;try{r=new SR()}catch{onError?.("Mic error.");return}
r.lang=lang||"pt-BR";r.continuous=false;r.interimResults=false;r.maxAlternatives=1;
let done=false;const cl=()=>{if(micTmr.current)clearTimeout(micTmr.current);micTmr.current=null;recRef.current=null};
r.onstart=()=>onStart?.();r.onresult=e=>{done=true;const t=e.results?.[0]?.[0]?.transcript||"";cl();t.trim()?onResult?.(t.trim()):onError?.("Didn't hear anything.");onEnd?.()};
r.onerror=e=>{done=true;cl();e?.error==="aborted"?onEnd?.():(onError?.(e?.error==="not-allowed"?"Mic blocked.":"Didn't catch that."),onEnd?.())};
r.onend=()=>{if(!done){done=true;cl();onError?.("Didn't hear anything.");onEnd?.()}};
recRef.current=r;micTmr.current=setTimeout(()=>{if(!done){try{r.abort()}catch{};cl();onError?.("Too long.");onEnd?.()}},10000);
try{r.start()}catch{cl();onError?.("Mic error.");onEnd?.()}
},[]);
useEffect(()=>()=>{if(recRef.current)try{recRef.current.abort()}catch{};if(micTmr.current)clearTimeout(micTmr.current)},[view]);

// Send message
const sendChat=async(voiceText)=>{const t=(voiceText||chatIn).trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");setErr(null);
saveStat(s=>({...s,sent:s.sent+1}));
try{
const sc=scenario?SCENARIOS.find(s=>s.id===scenario):null;
const lv=level==="beginner"?"BEGINNER: Very simple Portuguese (3-5 words). Explain everything in English. Basic words only.":
level==="intermediate"?"INTERMEDIATE: Natural conversation. Mix PT/EN. Introduce new vocab with explanations.":
"ADVANCED: Mostly Portuguese including slang (mano, tipo, né, tá ligado). Complex grammar. Minimal English.";
const sys=`You are Bia, expert Brazilian Portuguese tutor from São Paulo. Warm, encouraging.
RESPOND ONLY raw JSON: {"pt":"Portuguese","en":"English translation/explanation","tip":"tip or null","fix":"correction or null"}
${sc?`SCENARIO: ${sc.prompt} Stay in character.`:"FREE CHAT."} ${lv}
CORRECTIONS: Always rewrite their FULL sentence correctly, then explain why. Example fix: "→ Eu tenho 25 anos (use ter for age, not ser)". Common mistakes: ser/estar, gender (o problema=masc), age=ter not ser, gostar DE, bom vs bem, excitado=aroused not excited.
PRONUNCIATION tips: D+i/e→j, T+i/e→ch, R/rr→h, Lh→ly, Nh→ny, final M→nasal, ão→nasal.
Brazilian Portuguese ONLY. ${view==="voice"?"VOICE MODE: Extra short (1-2 sentences).":"Keep concise (1-3 sentences)."}`;
const hist=msgs.slice(-16).map(m=>m.role==="u"?{role:"user",content:m.text}:{role:"assistant",content:JSON.stringify({pt:m.pt,en:m.en,tip:m.tip,fix:m.fix})});
hist.push({role:"user",content:t});
const ctrl=new AbortController();const tmr=setTimeout(()=>ctrl.abort(),15000);
const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},signal:ctrl.signal,
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:600,system:sys,messages:[{role:"user",content:hist.map(m=>`${m.role}:${m.content}`).join("\n")}]})});
clearTimeout(tmr);if(!r.ok)throw new Error();
const d=await r.json();const raw=(d.content.find(b=>b.type==="text")?.text||"").replace(/```json\n?|```/g,"").trim();
const parsed=JSON.parse(raw);setMsgs(p=>[...p,{id:nid.current++,role:"a",...parsed}]);
speakPT(parsed.pt,()=>setSpk(true),()=>setSpk(false));
if(parsed.fix)saveStat(s=>({...s,fixes:(s.fixes||0)+1}));
const today=new Date().toDateString();saveStat(s=>{if(s.lastDate===today)return s;const y=new Date(Date.now()-864e5).toDateString();return{...s,streak:s.lastDate===y?s.streak+1:1,lastDate:today}});
}catch(e){setErr(e?.name==="AbortError"?"Took too long — try again.":"Network error — check connection.");setTimeout(()=>setErr(null),6000)}finally{setBusy(false)}};

const startScenario=sc=>{setScenario(sc.id);setMsgs([{id:nid.current++,role:"a",pt:sc.open,en:sc.openEN,tip:null,fix:null}])};
const goHome=()=>{setView("home");setScenario(null);setMsgs([])};

// Colors
const T1=dark?"#e0e0e0":"#1a1a1a",T2=dark?"#bbb":"#555",T3=dark?"#888":"#888",T4=dark?"#666":"#999";
const cbg=dark?"rgba(30,30,30,.92)":"rgba(245,250,240,.92)";const bdr=dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.05)";
const glass=dark?"rgba(30,30,30,.85)":"rgba(245,250,240,.85)";
const lvC={beginner:"#4CAF50",intermediate:"#FF9800",advanced:"#E91E63"};

// ═══ LOGIN ═══
if(!authUser)return(
<div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20,background:"linear-gradient(160deg,#FFF8E1 0%,#E8F5E9 40%,#E3F2FD 70%,#F3E5F5 100%)",fontFamily:"system-ui,sans-serif"}}>
<style>{`@keyframes pop{0%{transform:scale(.8);opacity:0}60%{transform:scale(1.03)}100%{transform:scale(1);opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(11,74,62,.2)}50%{box-shadow:0 0 40px rgba(11,74,62,.4)}}.li:focus{border-color:#0B4A3E!important;box-shadow:0 0 0 3px rgba(11,74,62,.12)!important}`}</style>
<div style={{maxWidth:400,width:"100%",animation:"pop .6s"}}>
<div style={{textAlign:"center",marginBottom:32}}>
<div style={{display:"inline-flex",animation:"float 4s infinite ease-in-out"}}><svg width="72" height="52" viewBox="0 0 28 20" style={{borderRadius:8,boxShadow:"0 8px 32px rgba(0,0,0,.25)",animation:"glow 3s infinite"}}><rect width="28" height="20" fill="#009739"/><polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00"/><circle cx="14" cy="10" r="4.5" fill="#002776"/></svg></div>
<div style={{fontSize:38,fontWeight:800,fontFamily:"Georgia,serif",color:"#0B4A3E",marginTop:16,letterSpacing:"-1px"}}>Fala Comigo</div>
<div style={{fontSize:15,color:"#888",marginTop:6,fontStyle:"italic"}}>Speak Brazilian Portuguese with AI</div></div>
<div style={{background:"rgba(255,255,255,.9)",backdropFilter:"blur(20px)",borderRadius:28,padding:"32px 28px",boxShadow:"0 16px 64px rgba(0,0,0,.1),0 0 0 1px rgba(255,255,255,.8)"}}>
<input value={loginU} onChange={e=>setLoginU(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doLogin()}} placeholder="Username" className="li" style={{width:"100%",padding:"16px 18px",borderRadius:16,border:"2px solid rgba(0,0,0,.06)",fontSize:16,marginBottom:12,boxSizing:"border-box",outline:"none",background:"rgba(0,0,0,.02)",transition:"all .2s"}}/>
<input value={loginP} onChange={e=>setLoginP(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")doLogin()}} placeholder="Password" type="password" className="li" style={{width:"100%",padding:"16px 18px",borderRadius:16,border:"2px solid rgba(0,0,0,.06)",fontSize:16,marginBottom:loginErr?10:18,boxSizing:"border-box",outline:"none",background:"rgba(0,0,0,.02)",transition:"all .2s"}}/>
{loginErr&&<div style={{fontSize:13,color:"#C62828",marginBottom:12,padding:"10px 14px",background:"rgba(198,40,40,.06)",borderRadius:12}}>{loginErr}</div>}
<button onClick={doLogin} style={{width:"100%",padding:"16px",borderRadius:16,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",fontSize:17,fontWeight:800,fontFamily:"Georgia,serif",boxShadow:"0 8px 28px rgba(11,74,62,.35)",transition:"all .2s"}}>Start Learning →</button></div></div></div>);

// ═══ APP ═══
return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:dark?"#0a0a0a":"linear-gradient(160deg,#FFF8E1 0%,#E8F5E9 40%,#E3F2FD 70%,#F3E5F5 100%)",overflow:"hidden",fontFamily:"system-ui,sans-serif",color:T1}}>
<style>{`
@keyframes pop{0%{transform:scale(.8);opacity:0}60%{transform:scale(1.03)}100%{transform:scale(1);opacity:1}}
@keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes mic{0%,100%{box-shadow:0 0 0 0 rgba(233,30,99,.4)}50%{box-shadow:0 0 0 18px rgba(233,30,99,0)}}
@keyframes rainbow{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(11,74,62,.15)}50%{box-shadow:0 0 40px rgba(11,74,62,.3)}}
@keyframes breathe{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.5);opacity:0}}
.b{transition:all .15s;cursor:pointer;border:none;font-family:inherit}.b:active{transform:scale(.92)}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(${dark?"255,255,255":"0,0,0"},.08);border-radius:3px}
`}</style>

{/* ═══ HEADER ═══ */}
<div style={{background:dark?"rgba(15,15,15,.95)":"rgba(255,255,255,.75)",backdropFilter:"blur(24px)",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,borderBottom:`1px solid ${bdr}`,boxShadow:`0 4px 24px ${dark?"rgba(0,0,0,.3)":"rgba(0,0,0,.06)"}`}}>
<button onClick={goHome} className="b" style={{display:"flex",alignItems:"center",gap:8,background:"none",padding:0}}>
<svg width="22" height="16" viewBox="0 0 28 20" style={{borderRadius:3}}><rect width="28" height="20" fill="#009739"/><polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00"/><circle cx="14" cy="10" r="4.5" fill="#002776"/></svg>
<span style={{fontSize:W?18:15,fontWeight:800,fontFamily:"Georgia,serif",color:T1}}>Fala Comigo</span></button>
<div style={{display:"flex",gap:8,alignItems:"center"}}>
<span style={{fontSize:11,color:T4,fontWeight:600}}>💬{stats.sent} 🔥{stats.streak}</span>
<button onClick={toggleDark} className="b" style={{background:dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)",borderRadius:12,padding:"5px 10px",fontSize:13,color:T3}}>{dark?"☀️":"🌙"}</button>
<button onClick={()=>{if(confirm("Log out?"))doLogout()}} className="b" style={{background:dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.04)",borderRadius:12,padding:"5px 10px",fontSize:11,color:T4}}>⎋</button>
</div></div>

<div style={{flex:1,overflowY:"auto",overflowX:"hidden"}}>
<div style={{maxWidth:W?560:440,margin:"0 auto",width:"100%",padding:`0 ${W?20:16}px`}}>

{/* ═══ HOME ═══ */}
{view==="home"&&<div style={{padding:"28px 0",animation:"fi .5s"}}>
{/* Bia */}
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10,marginBottom:28}}>
<div style={{position:"relative"}}>
<div style={{position:"absolute",inset:-8,borderRadius:"50%",background:"conic-gradient(from 0deg,#E91E63,#FF9800,#4CAF50,#2196F3,#9C27B0,#E91E63)",animation:"rainbow 5s linear infinite",filter:"blur(3px)",opacity:.5}}/>
<div style={{position:"relative",width:80,height:80,borderRadius:"50%",background:cbg,backdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:`0 8px 32px ${dark?"rgba(0,0,0,.3)":"rgba(0,0,0,.1)"}`}}>🤖</div></div>
<div style={{fontSize:W?22:19,fontWeight:800,fontFamily:"Georgia,serif"}}>Bia</div>
<div style={{fontSize:13,color:T3,textAlign:"center",lineHeight:1.6,maxWidth:300}}>Your AI Portuguese tutor. I correct mistakes, explain grammar, and speak back to you.</div></div>

{/* Level */}
<div style={{marginBottom:20}}>
<div style={{fontSize:11,fontWeight:700,color:T4,textTransform:"uppercase",letterSpacing:2,marginBottom:8}}>Your Level</div>
<div style={{display:"flex",gap:8}}>
{[{id:"beginner",icon:"🌱",name:"Beginner"},{id:"intermediate",icon:"📚",name:"Intermediate"},{id:"advanced",icon:"🔥",name:"Advanced"}].map(l=>
<button key={l.id} onClick={()=>setLvl(l.id)} className="b" style={{flex:1,padding:"14px 8px",borderRadius:18,textAlign:"center",
background:level===l.id?`linear-gradient(135deg,${lvC[l.id]},${lvC[l.id]}BB)`:glass,backdropFilter:"blur(16px)",
color:level===l.id?"#fff":T2,border:`2px solid ${level===l.id?"transparent":bdr}`,
boxShadow:level===l.id?`0 6px 24px ${lvC[l.id]}40`:`0 2px 12px ${dark?"rgba(0,0,0,.15)":"rgba(0,0,0,.04)"}`,fontWeight:level===l.id?800:600,fontSize:12}}>
<div style={{fontSize:20,marginBottom:4}}>{l.icon}</div>{l.name}</button>)}
</div></div>

{/* Mode cards */}
<div style={{display:"flex",gap:12,marginBottom:20}}>
<button onClick={()=>{setView("text");if(!msgs.length)setMsgs([])}} className="b" style={{flex:1,padding:"24px 16px",borderRadius:24,textAlign:"center",
background:dark?"rgba(11,74,62,.15)":"linear-gradient(135deg,rgba(232,245,233,.9),rgba(200,230,207,.7))",backdropFilter:"blur(16px)",
border:`2px solid ${dark?"rgba(11,74,62,.3)":"rgba(11,74,62,.12)"}`,boxShadow:`0 8px 28px ${dark?"rgba(11,74,62,.15)":"rgba(11,74,62,.08)"}`}}>
<div style={{fontSize:36,marginBottom:8}}>⌨️</div>
<div style={{fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",color:dark?"#66BB6A":"#0B4A3E"}}>Text Chat</div>
<div style={{fontSize:11,color:T3,marginTop:4}}>Type in PT or EN</div></button>

<button onClick={()=>{setView("voice");if(!msgs.length)setMsgs([])}} className="b" style={{flex:1,padding:"24px 16px",borderRadius:24,textAlign:"center",
background:dark?"rgba(233,30,99,.1)":"linear-gradient(135deg,rgba(252,228,236,.9),rgba(248,200,220,.7))",backdropFilter:"blur(16px)",
border:`2px solid ${dark?"rgba(233,30,99,.25)":"rgba(233,30,99,.12)"}`,boxShadow:`0 8px 28px ${dark?"rgba(233,30,99,.1)":"rgba(233,30,99,.06)"}`}}>
<div style={{fontSize:36,marginBottom:8}}>🎙️</div>
<div style={{fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",color:dark?"#F48FB1":"#C2185B"}}>Voice Chat</div>
<div style={{fontSize:11,color:T3,marginTop:4}}>Speak & listen</div></button>
</div>

{/* Scenarios */}
<button onClick={()=>setView("scenarios")} className="b" style={{width:"100%",padding:"18px 20px",borderRadius:22,display:"flex",alignItems:"center",gap:14,textAlign:"left",
background:glass,backdropFilter:"blur(16px)",border:`2px solid ${bdr}`,boxShadow:`0 4px 20px ${dark?"rgba(0,0,0,.15)":"rgba(0,0,0,.04)"}`}}>
<div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#7B1FA2,#AB47BC)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,boxShadow:"0 4px 14px rgba(123,31,162,.3)"}}>🎬</div>
<div style={{flex:1}}><div style={{fontSize:15,fontWeight:800,fontFamily:"Georgia,serif"}}>Practice Scenarios</div>
<div style={{fontSize:12,color:T4,marginTop:2}}>{SCENARIOS.length} real-world situations</div></div>
<span style={{color:T4,fontSize:18}}>→</span></button>

{/* Starters */}
<div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:20,justifyContent:"center"}}>
{["Oi Bia! 😊","How do I say 'thank you'?","Teach me numbers","What's ser vs estar?"].map((q,i)=>
<button key={i} onClick={()=>{setView("text");sendChat(q)}} className="b"
style={{padding:"10px 16px",borderRadius:20,background:glass,backdropFilter:"blur(12px)",border:`1px solid ${bdr}`,fontSize:13,color:T2,fontFamily:"Georgia,serif",
animation:`fi .4s ${i*.06}s both`}}>{q}</button>)}
</div></div>}

{/* ═══ SCENARIOS ═══ */}
{view==="scenarios"&&<div style={{padding:"20px 0",animation:"fi .4s"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
<div style={{fontSize:W?20:17,fontWeight:800,fontFamily:"Georgia,serif"}}>🎬 Scenarios</div>
<button onClick={()=>setView("home")} className="b" style={{fontSize:13,color:T3,background:"none"}}>← Back</button></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
{SCENARIOS.map((sc,i)=>{const cols=["#0B4A3E","#E65100","#C62828","#7B1FA2","#00695C","#AD1457","#1565C0","#C9982E","#00897B","#283593","#00838F","#6A1B9A","#37474F","#D84315","#2E7D32","#880E4F","#4527A0"];const c=cols[i%cols.length];
return<button key={sc.id} onClick={()=>{startScenario(sc);setView("text")}} className="b"
style={{padding:"16px 14px",borderRadius:20,textAlign:"left",background:glass,backdropFilter:"blur(12px)",border:`1.5px solid ${c}20`,boxShadow:`0 4px 16px ${c}08`,animation:`fi .3s ${i*.03}s both`,position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:-6,right:-2,fontSize:40,opacity:.08}}>{sc.icon}</div>
<div style={{width:36,height:36,borderRadius:10,background:`linear-gradient(135deg,${c},${c}BB)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,marginBottom:8,boxShadow:`0 3px 10px ${c}35`}}>{sc.icon}</div>
<div style={{fontSize:13,fontWeight:800,color:T1,fontFamily:"Georgia,serif"}}>{sc.name}</div>
<div style={{fontSize:11,color:T4,marginTop:2}}>{sc.desc}</div>
</button>})}
</div></div>}

{/* ═══ TEXT CHAT ═══ */}
{view==="text"&&<div style={{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 130px)"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0 8px"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<span style={{fontSize:16}}>{scenario?SCENARIOS.find(s=>s.id===scenario)?.icon:"⌨️"}</span>
<span style={{fontSize:14,fontWeight:800,fontFamily:"Georgia,serif"}}>{scenario?SCENARIOS.find(s=>s.id===scenario)?.name:"Text Chat"}</span>
<span style={{fontSize:10,padding:"2px 8px",borderRadius:8,background:`${lvC[level]}18`,color:lvC[level],fontWeight:700}}>{level}</span></div>
<button onClick={goHome} className="b" style={{fontSize:12,color:T3,background:"none"}}>← End</button></div>

{msgs.length===0&&<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
<div style={{textAlign:"center",color:T3}}>
<div style={{fontSize:40,marginBottom:8}}>⌨️</div>
<div style={{fontSize:14}}>Type something in Portuguese or English to start!</div></div></div>}

<div style={{flex:1,display:"flex",flexDirection:"column",gap:10,paddingBottom:16}}>
{msgs.map(m=><div key={m.id} style={{alignSelf:m.role==="u"?"flex-end":"flex-start",maxWidth:m.role==="u"?"78%":"86%",animation:"fi .25s"}}>
{m.role==="u"?<div style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",padding:"12px 16px",borderRadius:"20px 20px 4px 20px",fontSize:15,lineHeight:1.5,boxShadow:"0 4px 16px rgba(11,74,62,.25)"}}>{m.text}</div>
:<div style={{background:glass,backdropFilter:"blur(16px)",border:`1px solid ${bdr}`,borderRadius:"20px 20px 20px 4px",boxShadow:`0 4px 20px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`,overflow:"hidden"}}>
<div style={{padding:"14px 16px 8px"}}><div style={{fontSize:14,fontWeight:500,fontFamily:"Georgia,serif",lineHeight:1.6}}>{m.pt}</div></div>
<div style={{padding:"8px 16px 10px",background:dark?"rgba(255,255,255,.02)":"rgba(0,0,0,.02)"}}><div style={{fontSize:13,color:T3,lineHeight:1.5}}>{m.en}</div></div>
{(m.tip||m.fix)&&<div style={{padding:"0 16px 10px"}}>
{m.tip&&<div style={{marginTop:6,padding:"8px 12px",background:dark?"rgba(201,152,46,.08)":"rgba(255,248,225,.95)",borderRadius:10,border:"1px solid rgba(201,152,46,.15)",fontSize:12,color:dark?"#D4A027":"#7A5D00",lineHeight:1.5,display:"flex",gap:6}}><span>💡</span><span>{m.tip}</span></div>}
{m.fix&&<div style={{marginTop:5,padding:"8px 12px",background:dark?"rgba(233,30,99,.06)":"rgba(252,228,236,.95)",borderRadius:10,border:"1px solid rgba(233,30,99,.12)",fontSize:12,color:"#AD1457",lineHeight:1.5,display:"flex",gap:6}}><span>✏️</span><span>{m.fix}</span></div>}</div>}
<div style={{padding:"6px 16px 10px"}}><button onClick={()=>speakPT(m.pt,()=>setSpk(true),()=>setSpk(false))} className="b" style={{background:"none",fontSize:12,color:"#0B4A3E",padding:0,fontWeight:700}}>🔊 Hear it</button></div>
</div>}</div>)}
{busy&&<div style={{display:"flex",gap:6,padding:12,alignSelf:"flex-start"}}>{[0,.15,.3].map(d=><div key={d} style={{width:7,height:7,borderRadius:"50%",background:T4,animation:`pulse 1s ${d}s infinite`}}/>)}</div>}
{err&&<div style={{padding:"10px 14px",background:"rgba(198,40,40,.06)",border:"1px solid rgba(198,40,40,.12)",borderRadius:12,fontSize:13,color:"#C62828"}}>{err}</div>}
<div ref={btm}/></div></div>}

{/* ═══ VOICE CHAT ═══ */}
{view==="voice"&&<div style={{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 130px)"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0 8px"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<span style={{fontSize:16}}>🎙️</span>
<span style={{fontSize:14,fontWeight:800,fontFamily:"Georgia,serif"}}>{scenario?SCENARIOS.find(s=>s.id===scenario)?.name:"Voice Chat"}</span>
<span style={{fontSize:10,padding:"2px 8px",borderRadius:8,background:`${lvC[level]}18`,color:lvC[level],fontWeight:700}}>{level}</span></div>
<button onClick={goHome} className="b" style={{fontSize:12,color:T3,background:"none"}}>← End</button></div>

{/* Voice mic hero area when no messages */}
{msgs.length===0&&<div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,padding:20}}>
<div style={{position:"relative"}}>
{/* Breathing rings */}
<div style={{position:"absolute",inset:-20,borderRadius:"50%",border:"2px solid rgba(233,30,99,.15)",animation:"breathe 3s infinite"}}/>
<div style={{position:"absolute",inset:-40,borderRadius:"50%",border:"1px solid rgba(233,30,99,.08)",animation:"breathe 3s .5s infinite"}}/>
<button onClick={()=>{if(busy||voiceListening)return;runSpeech({lang:voiceLang,onStart:()=>setVoiceListening(true),onResult:t=>{setVoiceListening(false);sendChat(t)},onError:e=>{setVoiceListening(false);setErr(e);setTimeout(()=>setErr(null),5000)},onEnd:()=>setVoiceListening(false)})}} className="b"
style={{width:100,height:100,borderRadius:"50%",background:voiceListening?"linear-gradient(135deg,#E53935,#C62828)":"linear-gradient(135deg,#C2185B,#E91E63)",color:"#fff",fontSize:36,display:"flex",alignItems:"center",justifyContent:"center",
boxShadow:voiceListening?"0 0 0 6px rgba(233,30,99,.2),0 8px 32px rgba(233,30,99,.4)":"0 8px 32px rgba(233,30,99,.3)",animation:voiceListening?"mic 1.5s infinite":""}}>🎙️</button></div>
<div style={{fontSize:15,fontWeight:700,color:voiceListening?"#E91E63":T2}}>{voiceListening?"Listening...":"Tap to speak"}</div>
<button onClick={()=>setVoiceLang(voiceLang==="pt-BR"?"en-US":"pt-BR")} className="b" style={{padding:"8px 16px",borderRadius:14,background:glass,border:`1px solid ${bdr}`,fontSize:13,fontWeight:700,color:voiceLang==="pt-BR"?"#0B4A3E":"#1565C0"}}>{voiceLang==="pt-BR"?"🇧🇷 Speaking Portuguese":"🇬🇧 Speaking English"}</button>
</div>}

{/* Transcript + messages when conversation started */}
{msgs.length>0&&<>
<div style={{flex:1,display:"flex",flexDirection:"column",gap:10,paddingBottom:16}}>
{msgs.map(m=><div key={m.id} style={{alignSelf:m.role==="u"?"flex-end":"flex-start",maxWidth:m.role==="u"?"78%":"86%",animation:"fi .25s"}}>
{m.role==="u"?<div style={{background:"linear-gradient(135deg,#C2185B,#E91E63)",color:"#fff",padding:"12px 16px",borderRadius:"20px 20px 4px 20px",fontSize:15,lineHeight:1.5,boxShadow:"0 4px 16px rgba(233,30,99,.25)"}}>{m.text}</div>
:<div style={{background:glass,backdropFilter:"blur(16px)",border:`1px solid ${bdr}`,borderRadius:"20px 20px 20px 4px",boxShadow:`0 4px 20px ${dark?"rgba(0,0,0,.2)":"rgba(0,0,0,.06)"}`,overflow:"hidden"}}>
<div style={{padding:"14px 16px 8px"}}><div style={{fontSize:14,fontWeight:500,fontFamily:"Georgia,serif",lineHeight:1.6}}>{m.pt}</div></div>
<div style={{padding:"8px 16px 10px",background:dark?"rgba(255,255,255,.02)":"rgba(0,0,0,.02)"}}><div style={{fontSize:13,color:T3,lineHeight:1.5}}>{m.en}</div></div>
{(m.tip||m.fix)&&<div style={{padding:"0 16px 10px"}}>
{m.tip&&<div style={{marginTop:6,padding:"8px 12px",background:dark?"rgba(201,152,46,.08)":"rgba(255,248,225,.95)",borderRadius:10,border:"1px solid rgba(201,152,46,.15)",fontSize:12,color:dark?"#D4A027":"#7A5D00",lineHeight:1.5,display:"flex",gap:6}}><span>💡</span><span>{m.tip}</span></div>}
{m.fix&&<div style={{marginTop:5,padding:"8px 12px",background:dark?"rgba(233,30,99,.06)":"rgba(252,228,236,.95)",borderRadius:10,border:"1px solid rgba(233,30,99,.12)",fontSize:12,color:"#AD1457",lineHeight:1.5,display:"flex",gap:6}}><span>✏️</span><span>{m.fix}</span></div>}</div>}
<div style={{padding:"6px 16px 10px"}}><button onClick={()=>speakPT(m.pt,()=>setSpk(true),()=>setSpk(false))} className="b" style={{background:"none",fontSize:12,color:"#C2185B",padding:0,fontWeight:700}}>🔊 Hear it</button></div>
</div>}</div>)}
{busy&&<div style={{display:"flex",gap:6,padding:12,alignSelf:"flex-start"}}>{[0,.15,.3].map(d=><div key={d} style={{width:7,height:7,borderRadius:"50%",background:T4,animation:`pulse 1s ${d}s infinite`}}/>)}</div>}
{err&&<div style={{padding:"10px 14px",background:"rgba(198,40,40,.06)",border:"1px solid rgba(198,40,40,.12)",borderRadius:12,fontSize:13,color:"#C62828"}}>{err}</div>}
<div ref={btm}/></div>
</>}
</div>}

</div></div>

{/* ═══ INPUT BAR ═══ */}
{view==="text"&&<div style={{background:dark?"rgba(15,15,15,.95)":"rgba(255,255,255,.85)",backdropFilter:"blur(20px)",borderTop:`1px solid ${bdr}`,padding:"10px 16px",flexShrink:0}}>
<div style={{maxWidth:W?560:440,margin:"0 auto",display:"flex",gap:8,alignItems:"center"}}>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder="Type in Portuguese or English..." style={{flex:1,padding:"13px 16px",borderRadius:16,border:`1.5px solid ${dark?"rgba(255,255,255,.08)":"rgba(0,0,0,.06)"}`,fontSize:15,background:dark?"rgba(40,40,40,.8)":"rgba(255,255,255,.9)",color:T1,outline:"none",backdropFilter:"blur(12px)"}}/>
<button onClick={()=>sendChat()} disabled={busy||!chatIn.trim()} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"13px 20px",fontSize:15,fontWeight:700,boxShadow:"0 4px 14px rgba(11,74,62,.25)"}}>→</button>
</div></div>}

{view==="voice"&&msgs.length>0&&<div style={{background:dark?"rgba(15,15,15,.95)":"rgba(255,255,255,.85)",backdropFilter:"blur(20px)",borderTop:`1px solid ${bdr}`,padding:"10px 16px",flexShrink:0}}>
<div style={{maxWidth:W?560:440,margin:"0 auto",display:"flex",gap:8,alignItems:"center",justifyContent:"center"}}>
<button onClick={()=>setVoiceLang(voiceLang==="pt-BR"?"en-US":"pt-BR")} className="b" style={{padding:"13px 12px",borderRadius:16,background:dark?"rgba(255,255,255,.06)":"rgba(0,0,0,.04)",fontSize:12,fontWeight:800,color:voiceLang==="pt-BR"?"#0B4A3E":"#1565C0"}}>{voiceLang==="pt-BR"?"PT":"EN"}</button>
<button onClick={()=>{if(busy||voiceListening)return;runSpeech({lang:voiceLang,onStart:()=>setVoiceListening(true),onResult:t=>{setVoiceListening(false);sendChat(t)},onError:e=>{setVoiceListening(false);setErr(e);setTimeout(()=>setErr(null),5000)},onEnd:()=>setVoiceListening(false)})}} disabled={busy} className="b"
style={{flex:1,maxWidth:240,padding:"13px",borderRadius:16,background:voiceListening?"linear-gradient(135deg,#E53935,#C62828)":busy?"rgba(233,30,99,.08)":"linear-gradient(135deg,#C2185B,#E91E63)",color:voiceListening||!busy?"#fff":T4,fontSize:15,fontWeight:700,boxShadow:voiceListening?"0 0 0 4px rgba(233,30,99,.15)":"0 4px 14px rgba(233,30,99,.2)",animation:voiceListening?"mic 1.5s infinite":""}}>
{voiceListening?"🎙️ Listening...":busy?"Thinking...":"🎙️ Tap to Speak"}</button>
</div></div>}
</div>)}
