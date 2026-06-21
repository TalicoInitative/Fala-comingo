import { useState, useRef, useEffect, useCallback } from "react";
import { UNITS, LEVELS, LEVEL_ICONS, LEVEL_COLORS, ALL_WORDS } from "./data/words.js";
import { GRAMMAR } from "./data/grammar.js";
import { CONVOS } from "./data/convos.js";
import { SENTENCES } from "./data/sentences.js";
import { STORIES } from "./data/stories.js";
import { CROSS_SENTENCES, THEME_CLUSTERS } from "./data/crossunit.js";
import { buildBiaPrompt } from "./data/biaskills.js";
import { UNIT_INTROS } from "./data/connections.js";
import { playSound, speakPT } from "./utils/audio.js";
import { generateUnitFlow, generateLevelTest, generateReview, generateDailyChallenge, norm, shuffle } from "./utils/exercises.js";

const fmt=s=>{if(s<60)return`${s}s`;if(s<3600)return`${Math.floor(s/60)}m`;return`${Math.floor(s/3600)}h ${Math.floor((s%3600)/60)}m`};
const D=UNITS;const W=typeof window!=="undefined"&&window.innerWidth>=768;

const Confetti=()=>{const c=["#FFD700","#FF6B6B","#4CAF50","#2196F3","#FF9800","#E91E63","#9C27B0","#00BCD4"];
return<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:200,overflow:"hidden"}}>
{Array.from({length:50}).map((_,i)=><div key={i} style={{position:"absolute",left:`${Math.random()*100}%`,top:-10,
width:`${6+Math.random()*10}px`,height:`${6+Math.random()*10}px`,background:c[i%c.length],
borderRadius:Math.random()>.5?"50%":"2px",animation:`cf ${1.5+Math.random()*2}s ease-out ${Math.random()*.8}s forwards`}}/>)}</div>};

export default function App(){
const[tab,setTab]=useState("learn");const[selL,setSelL]=useState(0);
const[flow,setFlow]=useState([]);const[fI,setFI]=useState(0);const[score,setScore]=useState(0);
const[ans,setAns]=useState(null);const[typeIn,setTypeIn]=useState("");const[typed,setTyped]=useState(false);
const[isTest,setIsTest]=useState(false);const[inUnit,setInUnit]=useState(false);const[selU,setSelU]=useState(0);
const[fR,setFR]=useState(false);// flash revealed
const[convoI,setConvoI]=useState(0);const[convoAns,setConvoAns]=useState(null);// conversation state
const[wordOrder,setWordOrder]=useState([]);// word order tapped words
const[orderDone,setOrderDone]=useState(false);
const[micText,setMicText]=useState("");const[micDone,setMicDone]=useState(false);const[micListening,setMicListening]=useState(false);
const[xpPop,setXpPop]=useState(null);const[confetti,setConfetti]=useState(false);
// Practice
const[fD,setFD]=useState([]);const[pI,setPI]=useState(0);const[pS,setPS]=useState(false);
const[pSt,setPSt]=useState({y:0,n:0});const[pOn,setPOn]=useState(false);const[pDone,setPDone]=useState(false);
// Talk
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[err,setErr]=useState(null);const[spk,setSpk]=useState(false);const[chatMode,setChatMode]=useState(null);// null=picker, "free"|"practice"
// Progress
const[prog,setProg]=useState({xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:0,lastDate:null,daily:{}});
// Stats sub-tab
const[statsView,setStatsView]=useState("overview");// overview | vocab

const nid=useRef(1),btm=useRef(null),mr=useRef(msgs),activeRef=useRef(false);mr.current=msgs;
useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

useEffect(()=>{try{const raw=localStorage.getItem("fala-v10");if(raw){const p=JSON.parse(raw);
const today=new Date().toDateString();if(p.lastDate&&p.lastDate!==today){
const y=new Date(Date.now()-864e5).toDateString();p.streak=p.lastDate===y?(p.streak||0)+1:1;p.lastDate=today;}
else if(!p.lastDate){p.lastDate=today;p.streak=1;}setProg(p);localStorage.setItem("fala-v10",JSON.stringify(p))}
else{const p={xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:1,lastDate:new Date().toDateString(),daily:{}};
setProg(p);localStorage.setItem("fala-v10",JSON.stringify(p))}}catch{}},[]);

useEffect(()=>{activeRef.current=inUnit||pOn},[inUnit,pOn]);
useEffect(()=>{const iv=setInterval(()=>{if(!activeRef.current)return;setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};daily[d].time=(daily[d].time||0)+10;
const np={...p,time:(p.time||0)+10,daily};try{localStorage.setItem("fala-v10",JSON.stringify(np))}catch{};return np})},1e4);return()=>clearInterval(iv)},[]);

const save=useCallback(p=>{setProg(p);try{localStorage.setItem("fala-v10",JSON.stringify(p))}catch{}},[]);
const addXP=useCallback(n=>{setProg(p=>{const np={...p,xp:p.xp+n};try{localStorage.setItem("fala-v10",JSON.stringify(np))}catch{};return np});
setXpPop(n);setTimeout(()=>setXpPop(null),1200)},[]);
const trackDay=useCallback((f,v)=>{setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};daily[d][f]=(daily[d][f]||0)+v;
const np={...p,daily};try{localStorage.setItem("fala-v10",JSON.stringify(np))}catch{};return np})},[]);
const celebrate=()=>{setConfetti(true);playSound("levelup");setTimeout(()=>setConfetti(false),3000)};

const isOpen=l=>prog.levels.includes(l);const isDone=i=>prog.units.includes(i);
const lvUnits=l=>D.map((u,i)=>({...u,idx:i})).filter(u=>u.l===l);
const lvWords=l=>D.filter(u=>u.l===l).flatMap(u=>u.w);
const learnedW=()=>D.filter((_,i)=>isDone(i)).flatMap(u=>u.w);
const allDone=l=>lvUnits(l).every(u=>isDone(u.idx));

const startUnit=i=>{
  const u=D[i];const prev=[];
  for(let j=Math.max(0,i-3);j<i;j++)prev.push(...D[j].w);
  const allCompleted=learnedW();
  const f=generateUnitFlow(u,lvWords(u.l),prev,GRAMMAR[i]||[],CONVOS[i]||[],SENTENCES[i]||[],STORIES[i]||null,allCompleted,CROSS_SENTENCES);
  // Prepend unit intro connection if available
  if(UNIT_INTROS[i]){const ui=UNIT_INTROS[i];const needNames=ui.needs.map(n=>D[n]?.n||"").filter(Boolean);
  f.unshift({t:"unit_intro",data:{name:u.n,intro:ui.intro,needs:needNames,level:LEVELS[u.l]}})}
  setFlow(f);setFI(0);setScore(0);setAns(null);setTypeIn("");setTyped(false);setIsTest(false);
  setFR(false);setConvoI(0);setConvoAns(null);setWordOrder([]);setOrderDone(false);
  setMicText("");setMicDone(false);setSelU(i);setInUnit(true);
  if(f[0]?.word)speakPT(f[0].word[0],()=>setSpk(true),()=>setSpk(false));
};

// Daily challenge
const startDaily=()=>{
  const allCompleted=learnedW();if(!allCompleted.length)return;
  const f=generateDailyChallenge(allCompleted,CROSS_SENTENCES);
  setFlow(f);setFI(0);setScore(0);setAns(null);setTypeIn("");setTyped(false);setIsTest(false);
  setFR(false);setConvoI(0);setConvoAns(null);setWordOrder([]);setOrderDone(false);
  setMicText("");setMicDone(false);setInUnit(true);playSound("click");
};

const startTest=l=>{
  const f=generateLevelTest(lvWords(l));
  setFlow(f);setFI(0);setScore(0);setAns(null);setTypeIn("");setTyped(false);setIsTest(true);
  setSelL(l);setInUnit(true);
};

const curEx=flow[fI];
const advance=()=>{
  if(fI+1>=flow.length){
    if(isTest){const passed=score>=Math.ceil(flow.filter(e=>["pick_en","pick_pt","listen","type_pt","true_false","listen_type"].includes(e.t)).length*.8);
      if(passed&&!prog.levels.includes(selL+1)){save({...prog,levels:[...prog.levels,selL+1],xp:prog.xp+25});celebrate()}}
    else if(!prog.units.includes(selU)){save({...prog,units:[...prog.units,selU],xp:prog.xp+10});celebrate()}
    setFlow([]);setInUnit(false);
  }else{
    const next=flow[fI+1];setFI(fI+1);setAns(null);setTypeIn("");setTyped(false);setFR(false);
    setConvoI(0);setConvoAns(null);setWordOrder([]);setOrderDone(false);setMicText("");setMicDone(false);
    if(next?.t==="intro"||next?.t==="mimicry")speakPT(next.word[0],()=>setSpk(true),()=>setSpk(false));
  }
};

// Quiz answer handler — tracks weak words for spaced repetition
const answerQ=a=>{if(ans!==null)return;const ex=curEx;
let correct;if(ex.t==="true_false")correct=a===ex.a;else correct=norm(String(a))===norm(String(ex.a));
setAns(a);trackDay("ex",1);if(correct){trackDay("ok",1);addXP(2);playSound("correct");setScore(s=>s+1)}else{
playSound("wrong");
// Track weak word for spaced repetition
if(ex.q){setProg(p=>{const weak=p.weakWords||[];const exists=weak.find(w=>w[0]===ex.q||w[1]===ex.q);
if(!exists){const word=D.flatMap(u=>u.w).find(w=>w[0]===ex.q||w[1]===ex.q);
if(word){const nw=[...weak.filter(w=>w[0]!==word[0]),word].slice(-50);
const np={...p,weakWords:nw};try{localStorage.setItem("fala-v10",JSON.stringify(np))}catch{};return np}}return p})}
}
setProg(p=>({...p,exDone:(p.exDone||0)+1,exOk:(p.exOk||0)+(correct?1:0)}));
setTimeout(advance,correct?800:1400)};
const submitType=()=>{if(!typeIn.trim()||typed)return;setTyped(true);answerQ(typeIn.trim())};

// Word order handler
const tapWord=(w,i)=>{if(orderDone)return;playSound("tap");const nw=[...wordOrder,{w,i}];setWordOrder(nw);
if(nw.length===curEx.scrambled.length){setOrderDone(true);
const result=nw.map(x=>x.w).join(" ");const correct=norm(result)===norm(curEx.word[0]);
if(correct){playSound("correct");addXP(2);setScore(s=>s+1)}else{playSound("wrong")}
setTimeout(advance,correct?800:1400)}};

// Mimicry handler (speech recognition)
const startMic=()=>{if(!('webkitSpeechRecognition' in window||'SpeechRecognition' in window)){setMicText("Speech recognition not available");setMicDone(true);return}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;const r=new SR();r.lang="pt-BR";r.continuous=false;r.interimResults=false;
r.onstart=()=>setMicListening(true);r.onresult=e=>{const t=e.results[0][0].transcript;setMicText(t);setMicDone(true);setMicListening(false);
const correct=norm(t)===norm(curEx.word[0]);if(correct){playSound("correct");addXP(2)}else{playSound("wrong")}};
r.onerror=()=>{setMicText("Didn't catch that — try again");setMicDone(true);setMicListening(false)};
r.onend=()=>setMicListening(false);r.start()};

// Convo handler — auto-speak Bia's lines
const answerConvo=(optIdx)=>{if(convoAns!==null)return;setConvoAns(optIdx);
const line=curEx.data.lines[convoI];const correct=optIdx===line.correct;
if(correct){playSound("correct");addXP(1)}else{playSound("wrong")}
setTimeout(()=>{const nextI=convoI+1;
// Find next user line (skip bia lines)
let ni=nextI;while(ni<curEx.data.lines.length&&curEx.data.lines[ni].speaker==="bia")ni++;
if(ni>=curEx.data.lines.length){setTimeout(advance,500)}
else{setConvoI(ni);setConvoAns(null);
// Speak the Bia line(s) that just appeared
for(let b=nextI;b<ni;b++){if(curEx.data.lines[b].speaker==="bia")speakPT(curEx.data.lines[b].pt)}
}},1000)};

// Auto-speak first Bia line when convo starts
useEffect(()=>{if(curEx?.t==="convo"&&convoI===0&&curEx.data.lines[0]?.speaker==="bia"){
speakPT(curEx.data.lines[0].pt)}
if(curEx?.t==="story"&&curEx.data.story?.[0]?.pt){speakPT(curEx.data.story[0].pt)}
},[fI]);

// Practice flashcards
const startF=()=>{const w=learnedW();if(!w.length)return;setFD(shuffle(w));setPI(0);setPS(false);setPSt({y:0,n:0});setPDone(false);setPOn(true)};
const rateF=k=>{if(k)addXP(1);playSound(k?"correct":"wrong");trackDay("flash",1);
setPSt(s=>({y:s.y+(k?1:0),n:s.n+(k?0:1)}));const nx=pI+1;if(nx>=fD.length){setFD(shuffle(learnedW()));setPI(0)}else setPI(nx);setPS(false)};
const pCard=fD[pI]||["","",""];

// Talk — build practice vocab from completed units
const practiceWords=()=>{const words=[];D.forEach((_,i)=>{if(prog.units.includes(i))D[i].w.forEach(w=>words.push(`${w[0]} (${w[1]})`))});return words};
const sendChat=async()=>{const t=chatIn.trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");
try{const hist=mr.current.slice(-6).flatMap(m=>m.role==="u"?[{role:"user",content:m.text}]:[{role:"assistant",content:m.pt}]);
hist.push({role:"user",content:t});
const pracVocab=learnedW();
const sysPrompt=chatMode==="practice"
?buildBiaPrompt(prog.units||[],pracVocab)
:`You are Bia, warm Brazilian Portuguese tutor. Reply ONLY raw JSON:{"pt":"reply in PT","en":"English","tip":"tip or null","fix":"correction or null"} Brazilian PT only.`;
const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system:sysPrompt,
messages:[{role:"user",content:hist.map(m=>`${m.role}:${m.content}`).join("\n")}]})});
if(!r.ok)throw new Error();const d=await r.json();
const parsed=JSON.parse((d.content.find(b=>b.type==="text")?.text||"").replace(/```json\n?|```/g,"").trim());
setMsgs(p=>[...p,{id:nid.current++,role:"a",...parsed}]);addXP(3);speakPT(parsed.pt,()=>setSpk(true),()=>setSpk(false))}
catch{setErr("Couldn't reach Bia — try again.")}finally{setBusy(false)}};

const totalW=D.length*10;const doneW=prog.units.length*10;const pct=Math.round((doneW/totalW)*100);
const acc=prog.exDone?Math.round((prog.exOk/prog.exDone)*100):0;
const quizCount=flow.filter(e=>["pick_en","pick_pt","listen","type_pt","true_false","listen_type"].includes(e.t)).length;

return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:"linear-gradient(135deg,#E8E2D6,#F2EDE4 30%,#E5DFD3 60%,#F0EBE1)",overflow:"hidden",fontFamily:"system-ui,-apple-system,sans-serif",position:"relative"}}>
<style>{`
@keyframes si{from{transform:translateX(50px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes pop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes cor{0%{box-shadow:0 0 0 rgba(76,175,80,.5)}50%{box-shadow:0 0 35px rgba(76,175,80,.3)}100%{box-shadow:none}}
@keyframes wrg{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
@keyframes xf{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-70px) scale(1.4);opacity:0}}
@keyframes fi{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes gl{0%,100%{box-shadow:0 0 18px rgba(11,74,62,.3)}50%{box-shadow:0 0 36px rgba(11,74,62,.5)}}
@keyframes cf{0%{transform:translateY(0) rotate(0) scale(1);opacity:1}100%{transform:translateY(100vh) rotate(720deg) scale(.3);opacity:0}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
@keyframes mic{0%,100%{box-shadow:0 0 0 0 rgba(239,83,80,.4)}50%{box-shadow:0 0 0 12px rgba(239,83,80,0)}}
@keyframes db{0%,60%,100%{opacity:.3}30%{opacity:1}}
.ld{width:8px;height:8px;border-radius:50%;background:#0B4A3E}.ld:nth-child(1){animation:db 1.2s 0s infinite}.ld:nth-child(2){animation:db 1.2s .2s infinite}.ld:nth-child(3){animation:db 1.2s .4s infinite}
.w{max-width:${W?720:480}px;margin:0 auto;width:100%;padding:0 ${W?24:0}px}
.c{background:rgba(255,255,255,.92);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.7);box-shadow:0 4px 28px rgba(0,0,0,.06);border-radius:18px;transition:transform .2s,box-shadow .2s}
.c:hover{${W?"transform:translateY(-2px);box-shadow:0 8px 36px rgba(0,0,0,.1)":""}}
.b{transition:all .2s;cursor:pointer;border:none;font-family:inherit}.b:active{transform:scale(.94)}
.o{transition:all .25s;cursor:pointer;border:2px solid rgba(0,0,0,.08);border-radius:14px;padding:${W?"16px 20px":"14px 16px"};font-size:${W?17:15}px;font-weight:500;text-align:left;background:rgba(255,255,255,.95);font-family:Georgia,serif}
.o:hover{${W?"transform:translateY(-1px);box-shadow:0 4px 16px rgba(0,0,0,.08)":""}}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(0,0,0,.12);border-radius:3px}
input:focus{outline:2px solid rgba(11,74,62,.3);outline-offset:2px}
`}</style>

{confetti&&<Confetti/>}
{xpPop&&<div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",zIndex:100,animation:"xf 1.2s ease-out forwards",pointerEvents:"none"}}>
<div style={{background:"linear-gradient(135deg,#FFD700,#FF8C00)",color:"#fff",fontWeight:900,fontSize:22,padding:"10px 28px",borderRadius:30,boxShadow:"0 6px 24px rgba(255,140,0,.5)",fontFamily:"Georgia,serif"}}>+{xpPop} XP</div></div>}

{/* HEADER */}
<div style={{background:"linear-gradient(135deg,#061F1A,#0B4A3E 35%,#1B6B56 70%,#2D8B6E)",color:"#fff",padding:`${W?"20px 40px":"16px 20px"}`,flexShrink:0,boxShadow:"0 4px 24px rgba(0,0,0,.25)"}}>
<div className="w" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div><div style={{fontSize:W?28:22,fontWeight:700,fontFamily:"Georgia,serif",letterSpacing:"-1px"}}>Fala Comigo</div>
<div style={{display:"flex",alignItems:"center",gap:8,marginTop:3}}>
<div style={{flex:1,background:"rgba(255,255,255,.15)",borderRadius:4,height:6,maxWidth:120}}>
<div style={{height:"100%",borderRadius:4,background:"linear-gradient(90deg,#A5D6B0,#66BB6A)",width:`${pct}%`,transition:"width .5s"}}/></div>
<span style={{fontSize:11,opacity:.6}}>{pct}% · {doneW} words</span>
</div></div>
<div style={{display:"flex",gap:8,alignItems:"center"}}>
{prog.streak>0&&<div style={{background:"rgba(255,150,0,.2)",border:"1px solid rgba(255,150,0,.3)",borderRadius:20,padding:"4px 12px",fontSize:13,fontWeight:700}}>🔥 {prog.streak}</div>}
<div style={{background:"rgba(255,255,255,.12)",borderRadius:20,padding:"4px 14px",fontSize:14,fontWeight:700}}>⭐ {prog.xp}</div>
</div></div></div>

<div style={{flex:1,overflowY:"auto"}}>
<div className="w">

{/* ═══ LEARN TAB ═══ */}
{tab==="learn"&&!inUnit&&<div style={{padding:`${W?"24px 0":"16px 0"}`,animation:"fi .3s"}}>

{/* LEVEL TOGGLE BAR */}
<div style={{display:"flex",gap:6,overflowX:"auto",padding:"0 4px 12px",WebkitOverflowScrolling:"touch"}}>
{LEVELS.map((name,l)=>{const open=isOpen(l);const active=selL===l;
return<button key={l} onClick={()=>{if(open){setSelL(l);playSound("tap")}}} disabled={!open}
className="b" style={{padding:W?"10px 20px":"8px 16px",borderRadius:12,fontSize:W?14:12,fontWeight:active?700:500,whiteSpace:"nowrap",flexShrink:0,
background:active?`linear-gradient(135deg,${LEVEL_COLORS[l]},${LEVEL_COLORS[Math.min(l+1,6)]})`:"rgba(255,255,255,.7)",
color:active?"#fff":open?"#333":"#bbb",opacity:open?1:.4,
boxShadow:active?`0 4px 16px ${LEVEL_COLORS[l]}40`:"none",
border:active?"none":"1px solid rgba(0,0,0,.06)"}}>{!open&&"🔒 "}{LEVEL_ICONS[l]} {name}</button>})}
</div>

{/* LEVEL PROGRESS BAR */}
{(()=>{const units=lvUnits(selL);const done=units.filter(u=>isDone(u.idx)).length;const pct=units.length?Math.round(done/units.length*100):0;
return<div style={{padding:"0 4px 14px"}}>
<div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:"#666",marginBottom:6}}>
<span style={{fontWeight:600}}>{LEVEL_ICONS[selL]} {LEVELS[selL]}</span>
<span>{done}/{units.length} units · {pct}%</span></div>
<div style={{background:"rgba(0,0,0,.06)",borderRadius:6,height:8,overflow:"hidden"}}>
<div style={{height:"100%",borderRadius:6,background:`linear-gradient(90deg,${LEVEL_COLORS[selL]},${LEVEL_COLORS[Math.min(selL+1,6)]})`,
width:`${pct}%`,transition:"width .5s"}}/></div>
</div>})()}

{/* UNITS LIST */}
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{lvUnits(selL).map((u,i)=>{const dn=isDone(u.idx);const preview=u.w.slice(0,3).map(w=>w[0]).join(", ");
return<button key={u.idx} onClick={()=>{startUnit(u.idx);playSound("click")}} className="c b"
style={{padding:W?"18px 22px":"14px 16px",textAlign:"left",width:"100%",display:"flex",alignItems:"center",gap:14,animation:`fi .3s ${i*.04}s both`}}>
<div style={{width:W?48:42,height:W?48:42,borderRadius:14,background:dn?"linear-gradient(135deg,#A5D6B0,#66BB6A)":`linear-gradient(135deg,${LEVEL_COLORS[selL]}20,${LEVEL_COLORS[selL]}08)`,
display:"flex",alignItems:"center",justifyContent:"center",fontSize:dn?18:14,color:dn?"#fff":"#0B4A3E",fontWeight:700,flexShrink:0}}>{dn?"✓":u.idx+1}</div>
<div style={{flex:1,minWidth:0}}><div style={{fontSize:W?17:15,fontWeight:600}}>{u.n}</div>
<div style={{fontSize:W?12:11,color:"#999",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{preview}...</div>
<div style={{display:"flex",gap:6,marginTop:4}}>
<span style={{fontSize:10,background:"rgba(11,74,62,.06)",color:"#0B4A3E",padding:"2px 6px",borderRadius:4}}>{u.w.length} words</span>
{CONVOS[u.idx]&&<span style={{fontSize:10,background:"rgba(201,152,46,.08)",color:"#C9982E",padding:"2px 6px",borderRadius:4}}>💬 {CONVOS[u.idx].length}</span>}
{STORIES[u.idx]&&<span style={{fontSize:10,background:"rgba(123,31,162,.06)",color:"#7B1FA2",padding:"2px 6px",borderRadius:4}}>📖</span>}
</div></div>
{dn&&<div style={{fontSize:11,color:"#2E7D32",fontWeight:700}}>Done ✓</div>}
</button>})}

{/* LEVEL TEST */}
{(()=>{const ad=allDone(selL);const passed=prog.levels.includes(selL+1);
return selL<LEVELS.length-1&&<button onClick={()=>{if(ad&&!passed){startTest(selL);playSound("click")}}} disabled={!ad||passed}
className="b" style={{background:passed?"linear-gradient(135deg,#A5D6B0,#66BB6A)":ad?"linear-gradient(135deg,#C9982E,#D4A027)":"rgba(201,152,46,.1)",
borderRadius:18,padding:W?22:18,textAlign:"center",width:"100%",opacity:ad?1:.35,marginTop:8,color:passed?"#fff":ad?"#fff":"#999",
boxShadow:ad&&!passed?"0 6px 24px rgba(201,152,46,.35)":"none",animation:ad&&!passed?"pulse 2s infinite":"none"}}>
<div style={{fontSize:W?20:17,fontWeight:800}}>{passed?"✓ Test Passed":"🏆 LEVEL TEST"}</div>
{!passed&&<div style={{fontSize:13,opacity:.8,marginTop:4}}>{ad?"20 questions · 80% to unlock next level":"Complete all units first"}</div>}
</button>})()}
</div></div>}

{/* ═══ EXERCISE FLOW ═══ */}
{tab==="learn"&&inUnit&&curEx&&<div key={`${fI}-${curEx.t}`} style={{padding:`${W?"28px 0":"18px 0"}`,animation:"si .35s",minHeight:"60vh",display:"flex",flexDirection:"column",gap:16}}>
{/* Progress bar */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>{setInUnit(false);setFlow([])}} className="b" style={{background:"none",fontSize:24,color:"#0B4A3E",padding:0}}>✕</button>
<div style={{fontSize:13,color:"#888",fontWeight:600}}>{fI+1}/{flow.length}</div>
<div style={{fontSize:14,fontWeight:800,color:"#0B4A3E"}}>{score}✓</div></div>
<div style={{background:"rgba(11,74,62,.08)",borderRadius:8,height:7}}><div style={{height:"100%",borderRadius:8,background:`linear-gradient(90deg,${LEVEL_COLORS[D[selU]?.l||0]},${LEVEL_COLORS[Math.min((D[selU]?.l||0)+1,6)]})`,width:`${((fI+1)/flow.length)*100}%`,transition:"width .5s"}}/></div>

{/* UNIT INTRO CONNECTION */}
{curEx?.t==="unit_intro"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:16}}>
<div className="c" style={{padding:W?"40px 30px":"30px 22px",textAlign:"center",animation:"pop .4s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#C9982E",fontWeight:700}}>{curEx.data.level}</div>
<div style={{fontSize:W?32:26,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12}}>{curEx.data.name}</div>
<div style={{fontSize:W?17:15,color:"#555",marginTop:14,lineHeight:1.6,fontFamily:"Georgia,serif"}}>{curEx.data.intro}</div>
{curEx.data.needs.length>0&&<div style={{marginTop:16,display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>
{curEx.data.needs.map((n,i)=><span key={i} style={{background:"rgba(11,74,62,.08)",color:"#0B4A3E",padding:"4px 12px",borderRadius:8,fontSize:12,fontWeight:600}}>✓ {n}</span>)}
</div>}
</div>
<button onClick={advance} className="b" style={{padding:16,borderRadius:14,background:"linear-gradient(135deg,#C9982E,#D4A027)",color:"#fff",fontSize:17,fontWeight:700,boxShadow:"0 4px 16px rgba(201,152,46,.3)",width:"100%"}}>Let's go! 🚀</button>
</div>}

{/* INTRO CARD */}
{curEx.t==="intro"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div className="c" style={{padding:W?"44px 36px":"36px 24px",textAlign:"center"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700}}>New word</div>
<div style={{fontSize:W?44:36,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12}}>{curEx.word[0]}</div>
<div style={{fontSize:W?24:20,color:"#0B4A3E",fontWeight:600,marginTop:10}}>{curEx.word[1]}</div>
<div style={{fontSize:W?16:14,color:"#0B4A3E",fontFamily:"monospace",marginTop:12,opacity:.7}}>/{curEx.word[2]}/</div>
<button onClick={()=>{speakPT(curEx.word[0],()=>setSpk(true),()=>setSpk(false));playSound("tap")}} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:W?84:72,height:W?84:72,fontSize:30,
margin:"20px auto 0",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 24px rgba(11,74,62,.35)",animation:"gl 2.5s infinite"}}>🔊</button>
<div style={{fontSize:12,color:"#bbb",marginTop:8}}>Listen & repeat out loud</div></div>
<button onClick={advance} className="b" style={{padding:16,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",fontSize:16,fontWeight:700,boxShadow:"0 4px 16px rgba(11,74,62,.3)",width:"100%"}}>Next →</button>
</div>}

{/* LISTEN-FIRST INTRO — hear it before you see it */}
{curEx.t==="intro_listen"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div className="c" style={{padding:W?"44px 36px":"36px 24px",textAlign:"center"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#C9982E",fontWeight:700}}>👂 Listen first!</div>
{!fR?<>
<div style={{fontSize:W?72:60,marginTop:16}}>🔊</div>
<div style={{fontSize:16,color:"#888",marginTop:12,fontFamily:"Georgia,serif"}}>What do you hear?</div>
<button onClick={()=>{speakPT(curEx.word[0],()=>setSpk(true),()=>setSpk(false))}} className="b"
style={{background:"linear-gradient(135deg,#C9982E,#D4A027)",color:"#fff",borderRadius:14,padding:"12px 32px",margin:"20px auto 0",fontSize:16,fontWeight:700}}>🔊 Play again</button>
<button onClick={()=>setFR(true)} className="b"
style={{background:"none",color:"#0B4A3E",fontSize:15,fontWeight:600,marginTop:16,textDecoration:"underline"}}>Reveal the word →</button>
</>:<>
<div style={{fontSize:W?44:36,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12,animation:"pop .3s"}}>{curEx.word[0]}</div>
<div style={{fontSize:W?24:20,color:"#0B4A3E",fontWeight:600,marginTop:10,animation:"fi .3s .1s both"}}>{curEx.word[1]}</div>
<div style={{fontSize:W?16:14,color:"#0B4A3E",fontFamily:"monospace",marginTop:12,opacity:.7,animation:"fi .3s .2s both"}}>/{curEx.word[2]}/</div>
<button onClick={()=>{speakPT(curEx.word[0],()=>setSpk(true),()=>setSpk(false))}} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:64,height:64,fontSize:26,margin:"16px auto 0",display:"flex",alignItems:"center",justifyContent:"center"}}>🔊</button>
</>}
</div>
{fR&&<button onClick={()=>{setFR(false);advance()}} className="b" style={{padding:16,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",fontSize:16,fontWeight:700,width:"100%"}}>Next →</button>}
</div>}

{/* SENTENCE BUILDER — arrange word bubbles */}
{curEx.t==="sentence_build"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:14}}>
<div className="c" style={{padding:W?"28px 24px":"22px 18px",textAlign:"center",animation:"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#7B1FA2",fontWeight:700,marginBottom:8}}>🧩 Build the sentence</div>
<div style={{fontSize:W?16:14,color:"#888",fontFamily:"Georgia,serif",marginBottom:16}}>{curEx.data.en}</div>
{/* Built sentence display */}
<div style={{minHeight:48,padding:"10px 14px",borderRadius:12,background:"rgba(11,74,62,.04)",border:"2px dashed rgba(11,74,62,.15)",marginBottom:14,display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>
{wordOrder.map((wo,i)=><span key={i} onClick={()=>{if(!orderDone)setWordOrder(wordOrder.filter((_,j)=>j!==i))}}
style={{background:"#0B4A3E",color:"#fff",padding:"6px 14px",borderRadius:10,fontSize:15,fontWeight:600,fontFamily:"Georgia,serif",cursor:"pointer"}}>{wo.w}</span>)}
{wordOrder.length===0&&<span style={{color:"#bbb",fontSize:14}}>Tap words below to build...</span>}
</div>
{/* Available word bubbles */}
<div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
{shuffle([...curEx.data.words]).map((w,i)=>{const used=wordOrder.some(wo=>wo.w===w&&wo.i===i);
return<button key={i} onClick={()=>{if(orderDone||used)return;setWordOrder([...wordOrder,{w,i}]);playSound("tap")}} disabled={used||orderDone}
className="b" style={{padding:"8px 16px",borderRadius:12,border:"2px solid "+(used?"transparent":"rgba(11,74,62,.2)"),
background:used?"rgba(0,0,0,.05)":"#fff",color:used?"transparent":"#333",fontSize:15,fontWeight:600,fontFamily:"Georgia,serif"}}>{w}</button>})}
</div>
{/* Check button */}
{wordOrder.length>0&&!orderDone&&<button onClick={()=>{setOrderDone(true);
const result=wordOrder.map(x=>x.w).join(" ");const correct=norm(result)===norm(curEx.data.answer);
if(correct){playSound("correct");addXP(3);setScore(s=>s+1)}else playSound("wrong");
setTimeout(advance,correct?1000:2000)}} className="b"
style={{marginTop:12,padding:"12px 24px",borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:16,fontWeight:700}}>Check ✓</button>}
{orderDone&&<div style={{marginTop:12,animation:"fi .3s"}}>
{norm(wordOrder.map(x=>x.w).join(" "))===norm(curEx.data.answer)?
<div style={{color:"#2E7D32",fontWeight:700,fontSize:16}}>✓ Perfect!</div>:
<div><div style={{color:"#C62828",fontWeight:700,fontSize:15}}>✗ Correct: {curEx.data.answer}</div></div>}
</div>}
</div></div>}

{/* FREE RECALL — type the full sentence */}
{curEx.t==="free_recall"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:14}}>
<div className="c" style={{padding:W?"28px 24px":"22px 18px",textAlign:"center",animation:"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#E65100",fontWeight:700,marginBottom:8}}>🧠 Free Recall</div>
<div style={{fontSize:13,color:"#888",marginBottom:4}}>Type this in Portuguese:</div>
<div style={{fontSize:W?22:18,fontWeight:700,fontFamily:"Georgia,serif",color:"#333",marginBottom:16,lineHeight:1.4}}>"{curEx.data.en}"</div>
<input type="text" value={typeIn} onChange={e=>setTypeIn(e.target.value)}
onKeyDown={e=>{if(e.key==="Enter"&&typeIn.trim()&&!typed){setTyped(true);
const correct=norm(typeIn.trim())===norm(curEx.data.answer);setAns(typeIn.trim());
if(correct){playSound("correct");addXP(5);setScore(s=>s+1)}else playSound("wrong");
setTimeout(advance,correct?1000:2500)}}}
disabled={typed} placeholder="Type in Portuguese..."
style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid "+(typed?(norm(typeIn)===norm(curEx.data.answer)?"#4caf50":"#f44336"):"#e0e0e0"),
fontSize:17,fontFamily:"Georgia,serif",boxSizing:"border-box",textAlign:"center"}}/>
{!typed&&typeIn.trim()&&<button onClick={()=>{setTyped(true);
const correct=norm(typeIn.trim())===norm(curEx.data.answer);setAns(typeIn.trim());
if(correct){playSound("correct");addXP(5);setScore(s=>s+1)}else playSound("wrong");
setTimeout(advance,correct?1000:2500)}} className="b"
style={{marginTop:10,padding:"12px 24px",borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",fontSize:16,fontWeight:700}}>Submit</button>}
{typed&&<div style={{marginTop:14,animation:"fi .3s"}}>
{norm(typeIn.trim())===norm(curEx.data.answer)?
<div style={{color:"#2E7D32",fontWeight:700,fontSize:16}}>✓ Perfect! {curEx.data.answer}</div>:
<div><div style={{color:"#C62828",fontWeight:600}}>✗ Your answer: {typeIn}</div>
<div style={{color:"#2E7D32",fontWeight:700,marginTop:6}}>✓ Correct: {curEx.data.answer}</div></div>}
</div>}
</div></div>}

{/* MIMICRY */}
{curEx.t==="mimicry"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div className="c" style={{padding:W?"40px 32px":"32px 24px",textAlign:"center"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#EF5350",fontWeight:700}}>🎙️ Say it!</div>
<div style={{fontSize:W?40:34,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12}}>{curEx.word[0]}</div>
<div style={{fontSize:W?20:17,color:"#888",marginTop:8,fontFamily:"Georgia,serif"}}>{curEx.word[1]}</div>
<button onClick={()=>{speakPT(curEx.word[0],()=>setSpk(true),()=>setSpk(false))}} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:14,padding:"10px 24px",margin:"16px auto 0",fontSize:14}}>🔊 Hear it again</button>
{micDone&&<div style={{marginTop:16,animation:"fi .3s"}}>
<div style={{fontSize:14,color:norm(micText)===norm(curEx.word[0])?"#2E7D32":"#C62828"}}>
{norm(micText)===norm(curEx.word[0])?"✓ Perfect!":"✗ Heard: \""+micText+"\""}</div>
{norm(micText)!==norm(curEx.word[0])&&<div style={{fontSize:13,color:"#888",marginTop:4}}>Try: {curEx.word[0]}</div>}
</div>}</div>
{!micDone?<button onClick={startMic} className="b" style={{padding:18,borderRadius:16,
background:micListening?"linear-gradient(135deg,#EF5350,#E53935)":"linear-gradient(135deg,#C62828,#EF5350)",
color:"#fff",fontSize:17,fontWeight:700,width:"100%",animation:micListening?"mic 1.5s infinite":"none",
boxShadow:"0 4px 16px rgba(239,83,80,.3)"}}>
{micListening?"🎙️ Listening...":"🎙️ Tap & Speak"}</button>
:<div style={{display:"flex",gap:10}}>
{norm(micText)!==norm(curEx.word[0])&&<button onClick={()=>{setMicDone(false);setMicText("")}} className="b" style={{flex:1,padding:16,borderRadius:14,background:"rgba(255,255,255,.9)",border:"1px solid rgba(0,0,0,.08)",fontSize:15,fontWeight:600,color:"#666"}}>Try Again</button>}
<button onClick={advance} className="b" style={{flex:1,padding:16,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",fontSize:16,fontWeight:700}}>Next →</button></div>}
</div>}

{/* FLASHCARD */}
{curEx.t==="flash"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div onClick={()=>{if(!fR){setFR(true);playSound("flip")}}} className="c" style={{padding:fR?(W?"36px 28px":"28px 22px"):(W?"56px 28px":"48px 22px"),textAlign:"center",cursor:fR?"default":"pointer",minHeight:220,
display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:8}}>
{!fR&&<><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#C9982E",fontWeight:700}}>🃏 Flashcard</div>
<div style={{fontSize:W?44:38,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:8}}>{curEx.word[0]}</div>
<div style={{fontSize:14,color:"#bbb",marginTop:20}}>Tap to reveal</div></>}
{fR&&<><div style={{fontSize:W?32:28,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",animation:"fi .3s"}}>{curEx.word[0]}</div>
<div style={{fontSize:W?22:20,color:"#0B4A3E",fontWeight:600,marginTop:6,animation:"fi .3s .1s both"}}>{curEx.word[1]}</div>
<div style={{fontSize:15,color:"#0B4A3E",fontFamily:"monospace",marginTop:8,animation:"fi .3s .2s both"}}>/{curEx.word[2]}/</div>
<button onClick={e=>{e.stopPropagation();speakPT(curEx.word[0],()=>setSpk(true),()=>setSpk(false))}} className="b"
style={{marginTop:12,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:10,padding:"8px 20px",fontSize:14,animation:"fi .3s .3s both"}}>🔊</button></>}</div>
{fR&&<button onClick={advance} className="b" style={{padding:16,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",fontSize:16,fontWeight:700,width:"100%"}}>Next →</button>}
</div>}

{/* GRAMMAR NOTE */}
{curEx.t==="grammar"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div className="c" style={{padding:W?"36px 28px":"28px 22px",background:"linear-gradient(135deg,rgba(255,248,225,.95),rgba(255,243,224,.95))",border:"1px solid rgba(237,204,74,.3)"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#C9982E",fontWeight:700}}>📝 Grammar Tip</div>
<div style={{fontSize:W?18:16,color:"#333",marginTop:14,lineHeight:1.7,fontFamily:"Georgia,serif"}}>{curEx.text}</div></div>
<button onClick={advance} className="b" style={{padding:16,borderRadius:14,background:"linear-gradient(135deg,#C9982E,#D4A027)",color:"#fff",fontSize:16,fontWeight:700,width:"100%"}}>Got it →</button>
</div>}

{/* WORD ORDER */}
{curEx.t==="word_order"&&<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
<div className="c" style={{padding:W?"32px 28px":"24px 20px",textAlign:"center"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700}}>🔀 Put in order</div>
<div style={{fontSize:W?20:17,color:"#888",marginTop:8,fontFamily:"Georgia,serif"}}>{curEx.word[1]}</div>
<div style={{minHeight:50,margin:"16px 0",padding:12,borderRadius:12,background:"rgba(11,74,62,.04)",border:"2px dashed rgba(11,74,62,.15)",display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",alignItems:"center"}}>
{wordOrder.map((w,i)=><span key={i} style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",padding:"8px 16px",borderRadius:10,fontSize:W?17:15,fontWeight:600,fontFamily:"Georgia,serif"}}>{w.w}</span>)}
{wordOrder.length===0&&<span style={{color:"#ccc",fontSize:14}}>Tap words below...</span>}
</div>
<div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginTop:8}}>
{curEx.scrambled.map((w,i)=>{const used=wordOrder.some(x=>x.i===i);
return<button key={i} onClick={()=>tapWord(w,i)} disabled={used} className="b"
style={{background:used?"rgba(0,0,0,.05)":"rgba(255,255,255,.95)",border:"2px solid "+(used?"transparent":"rgba(11,74,62,.2)"),
borderRadius:10,padding:"10px 18px",fontSize:W?17:15,fontWeight:600,fontFamily:"Georgia,serif",color:used?"#ccc":"#0B4A3E",
opacity:used?.4:1}}>{w}</button>})}
</div>
{orderDone&&<div style={{marginTop:12,animation:"fi .3s"}}>
{norm(wordOrder.map(x=>x.w).join(" "))===norm(curEx.word[0])
?<div style={{color:"#2E7D32",fontWeight:700}}>✓ Correct!</div>
:<div><div style={{color:"#C62828",fontWeight:700}}>✗ Correct order:</div><div style={{color:"#0B4A3E",fontWeight:600,marginTop:4,fontFamily:"Georgia,serif"}}>{curEx.word[0]}</div></div>}
</div>}
</div></div>}

{/* MINI CONVERSATION */}
{curEx.t==="convo"&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:12}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700,textAlign:"center"}}>💬 Conversation</div>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{curEx.data.lines.slice(0,convoI+1).map((line,i)=>{
if(line.speaker==="bia")return<div key={i} style={{display:"flex",gap:10,maxWidth:"85%",animation:"fi .3s"}}>
<div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:700,flexShrink:0}}>B</div>
<div className="c" style={{borderRadius:"4px 16px 16px 16px",padding:"12px 16px"}}>
<div style={{fontSize:15,color:"#1a1a1a",fontFamily:"Georgia,serif"}}>{line.pt}</div>
<div style={{fontSize:12,color:"#888",fontStyle:"italic",marginTop:4}}>{line.en}</div></div></div>;
if(line.speaker==="user"&&i<=convoI)return<div key={i} style={{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",animation:"fi .3s"}}>
{line.opts.map((opt,oi)=>{const revealed=convoAns!==null&&i===convoI;const isCorrect=oi===line.correct;const picked=convoAns===oi;
let bg="rgba(255,255,255,.95)",bd="rgba(0,0,0,.08)",tc="#1a1a1a";
if(revealed&&isCorrect){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(revealed&&picked&&!isCorrect){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={oi} onClick={()=>answerConvo(oi)} disabled={convoAns!==null&&i===convoI||i<convoI} className="b"
style={{background:bg,border:`2px solid ${bd}`,borderRadius:14,padding:"10px 16px",fontSize:14,fontWeight:500,color:tc,
maxWidth:"80%",fontFamily:"Georgia,serif",textAlign:"right",opacity:i<convoI?.5:1}}>{i<convoI&&oi===line.correct?opt:i===convoI?opt:null}</button>})}
</div>;return null})}
</div></div>}

{/* SENTENCE FILL-IN-BLANK */}
{curEx?.t==="sentence"&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:14,justifyContent:"center"}}>
<div className="c" style={{padding:W?"28px 24px":"22px 20px",textAlign:"center",animation:ans!==null?(ans===curEx.data.a?"cor .5s":"wrg .4s"):"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700,marginBottom:12}}>📝 Complete the sentence</div>
<div style={{fontSize:W?22:18,fontWeight:700,fontFamily:"Georgia,serif",marginBottom:8,lineHeight:1.4}}>{curEx.data.s}</div>
<div style={{fontSize:13,color:"#888",marginBottom:16,fontStyle:"italic"}}>{curEx.data.en}</div>
<div style={{display:"flex",flexDirection:"column",gap:8}}>
{(curEx.data.shuffledOpts||[curEx.data.a,...curEx.data.opts]).map((opt,oi)=>{
const rv=ans!==null;const isOk=opt===curEx.data.a;const isPk=ans===opt;
const bg=rv?(isOk?"#e8f5e9":isPk?"#ffebee":"#f5f5f5"):"#fff";
const bd=rv?(isOk?"#4caf50":isPk?"#f44336":"#e0e0e0"):"#e0e0e0";
return<button key={oi} onClick={()=>{if(ans!==null)return;setAns(opt);
if(opt===curEx.data.a){playSound("correct");setScore(s=>s+1)}else playSound("wrong");
setTimeout(advance,1200)}} className="b"
style={{background:bg,border:`2px solid ${bd}`,borderRadius:14,padding:"12px 18px",fontSize:16,fontWeight:600,fontFamily:"Georgia,serif"}}>{opt}</button>})}
</div></div></div>}

{/* MINI-STORY WITH COMPREHENSION */}
{curEx?.t==="story"&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:14,justifyContent:"center",overflowY:"auto"}}>
<div className="c" style={{padding:W?"28px 24px":"22px 20px",animation:"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700,marginBottom:12,textAlign:"center"}}>📖 Mini-Story</div>
{curEx.data.story.map((line,i)=><div key={i} style={{marginBottom:10}}>
<div style={{fontSize:W?17:15,fontFamily:"Georgia,serif",lineHeight:1.5,fontWeight:500}}>{line.pt}</div>
<div style={{fontSize:13,color:"#888",fontStyle:"italic"}}>{line.en}</div>
</div>)}
<div style={{borderTop:"1px solid #eee",paddingTop:14,marginTop:10}}>
<div style={{fontSize:13,fontWeight:700,color:"#666",marginBottom:10}}>Comprehension:</div>
{curEx.data.questions.map((q,qi)=><div key={qi} style={{marginBottom:12}}>
<div style={{fontSize:15,fontWeight:600,marginBottom:6}}>{q.q}</div>
<div style={{display:"flex",flexWrap:"wrap",gap:6}}>
{(q.shuffledOpts||[q.a,...q.opts]).map((opt,oi)=>
<button key={oi} onClick={()=>{if(ans!==null)return;setAns(opt);
if(opt===q.a){playSound("correct");setScore(s=>s+1)}else playSound("wrong");
setTimeout(advance,1200)}} className="b"
style={{padding:"8px 14px",borderRadius:10,border:"2px solid #e0e0e0",background:ans!==null?(opt===q.a?"#e8f5e9":ans===opt?"#ffebee":"#f5f5f5"):"#fff",
fontSize:14,fontFamily:"Georgia,serif"}}>{opt}</button>)}
</div></div>)}
</div></div></div>}

{/* ERROR CORRECTION */}
{curEx?.t==="error_correct"&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:14,justifyContent:"center"}}>
<div className="c" style={{padding:W?"28px 24px":"22px 20px",textAlign:"center",animation:ans!==null?(ans==="wrong"?"cor .5s":"wrg .4s"):"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700,marginBottom:12}}>🔍 Spot the error</div>
<div style={{fontSize:W?20:17,fontWeight:700,fontFamily:"Georgia,serif",marginBottom:16,lineHeight:1.4,color:"#333"}}>"{curEx.data.wrong}"</div>
<div style={{display:"flex",flexDirection:"column",gap:8}}>
<button onClick={()=>{if(ans!==null)return;setAns("wrong");playSound("correct");setScore(s=>s+1);setTimeout(advance,2000)}} className="b"
style={{background:ans==="wrong"?"#e8f5e9":"#fff",border:`2px solid ${ans==="wrong"?"#4caf50":"#e0e0e0"}`,borderRadius:14,padding:"12px",fontSize:15,fontFamily:"Georgia,serif"}}>
❌ This has an error</button>
<button onClick={()=>{if(ans!==null)return;setAns("right");playSound("wrong");setTimeout(advance,2000)}} className="b"
style={{background:ans==="right"?"#ffebee":"#fff",border:`2px solid ${ans==="right"?"#f44336":"#e0e0e0"}`,borderRadius:14,padding:"12px",fontSize:15,fontFamily:"Georgia,serif"}}>
✅ This is correct</button>
</div>
{ans!==null&&<div style={{marginTop:14,padding:12,background:"#f8f8f8",borderRadius:10,textAlign:"left"}}>
<div style={{fontSize:14,fontWeight:700,color:"#4caf50",marginBottom:4}}>✓ {curEx.data.right}</div>
<div style={{fontSize:13,color:"#666"}}>{curEx.data.rule}</div>
</div>}
</div></div>}

{/* QUIZ EXERCISES: pick_en, pick_pt, listen, type_pt, true_false, listen_type */}
{["pick_en","pick_pt","listen","type_pt","true_false","listen_type"].includes(curEx?.t)&&<div style={{flex:1,display:"flex",flexDirection:"column",gap:14,justifyContent:"center"}}>
<div className="c" style={{padding:W?"28px 24px":"22px 20px",textAlign:"center",
animation:ans!==null?(norm(String(ans))===norm(String(curEx.a))||(curEx.t==="true_false"&&ans===curEx.a)?"cor .5s":"wrg .4s"):"pop .3s"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:"#999",fontWeight:700,marginBottom:12}}>
{curEx.t==="pick_en"?"What does this mean?":curEx.t==="pick_pt"?"Say in Portuguese":
curEx.t==="listen"?"What do you hear?":curEx.t==="type_pt"?"Type in Portuguese":
curEx.t==="true_false"?"True or false?":"Type what you hear"}</div>
{(curEx.t==="listen"||curEx.t==="listen_type")?
<button onClick={()=>speakPT(curEx.audio,()=>setSpk(true),()=>setSpk(false))} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:W?80:70,height:W?80:70,fontSize:28,
margin:"8px auto",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 24px rgba(11,74,62,.35)",animation:"gl 2s infinite"}}>🔊</button>
:curEx.t==="true_false"?<div><div style={{fontSize:W?28:24,fontWeight:700,fontFamily:"Georgia,serif"}}>{curEx.q}</div>
<div style={{fontSize:W?20:18,color:"#888",marginTop:8,fontFamily:"Georgia,serif"}}>= {curEx.shown}?</div></div>
:<div style={{fontSize:W?28:24,fontWeight:700,fontFamily:"Georgia,serif"}}>{curEx.q}</div>}</div>

{(curEx.t==="pick_en"||curEx.t==="pick_pt"||curEx.t==="listen")&&
<div style={{display:"flex",flexDirection:"column",gap:8}}>
{curEx.opts.map((o,i)=>{const isOk=norm(o)===norm(curEx.a);const isPk=ans!==null&&norm(o)===norm(String(ans));const rv=ans!==null;
let bg="rgba(255,255,255,.95)",bd="rgba(0,0,0,.08)",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={i} onClick={()=>answerQ(o)} disabled={rv} className="o" style={{background:bg,borderColor:bd,color:tc}}>{o}</button>})}</div>}

{curEx.t==="true_false"&&<div style={{display:"flex",gap:10}}>
{[true,false].map(v=>{const rv=ans!==null;const isOk=v===curEx.a;const isPk=ans===v;
let bg="rgba(255,255,255,.95)",bd="rgba(0,0,0,.08)",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={String(v)} onClick={()=>answerQ(v)} disabled={rv} className="b"
style={{flex:1,background:bg,border:`2px solid ${bd}`,borderRadius:14,padding:16,fontSize:17,fontWeight:700,color:tc}}>{v?"✓ True":"✗ False"}</button>})}</div>}

{(curEx.t==="type_pt"||curEx.t==="listen_type")&&<div>
<div style={{display:"flex",gap:8}}>
<input value={typeIn} onChange={e=>setTypeIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!typed)submitType()}}
disabled={typed} placeholder={curEx.t==="listen_type"?"Type what you hear...":"Type in Portuguese..."}
style={{flex:1,padding:"14px 18px",borderRadius:14,border:`2px solid ${typed?(norm(typeIn)===norm(curEx.a)?"#4CAF50":"#EF5350"):"rgba(0,0,0,.08)"}`,
fontSize:16,fontFamily:"Georgia,serif",background:typed?(norm(typeIn)===norm(curEx.a)?"#E8F5E9":"#FFEBEE"):"rgba(255,255,255,.95)"}}/>
{!typed&&<button onClick={submitType} disabled={!typeIn.trim()} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:14,padding:"14px 22px",fontSize:16,fontWeight:700}}>→</button>}</div>
{typed&&norm(typeIn)!==norm(curEx.a)&&<div className="c" style={{marginTop:10,padding:"12px 16px",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",fontSize:15,color:"#2E7D32",fontFamily:"Georgia,serif",animation:"fi .3s"}}>Correct: <strong>{curEx.a}</strong></div>}
</div>}
</div>}
</div>}

{/* ═══ RESULT (when flow ends) ═══ */}
{tab==="learn"&&!inUnit&&flow.length===0&&score>0&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,minHeight:400,animation:"pop .5s"}}>
<div style={{fontSize:W?72:56}}>{score/quizCount>=.8?"🏆":"💪"}</div>
<div style={{fontSize:W?22:18,fontWeight:700,color:"#2E7D32",fontFamily:"Georgia,serif"}}>
{isTest?(score>=Math.ceil(quizCount*.8)?`Level ${selL+2} Unlocked!`:"Need 80% — try again!"):"Unit Complete! 🎉"}</div>
<div style={{fontSize:W?56:44,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{score}/{quizCount}</div>
<div style={{fontSize:15,color:"#888"}}>+{score*2} XP earned</div>
<button onClick={()=>setScore(0)} className="b" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"16px 36px",fontSize:17,fontWeight:700,marginTop:8}}>Continue</button>
</div>}

{/* ═══ PRACTICE TAB ═══ */}
{tab==="practice"&&!pOn&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24,minHeight:400,animation:"fi .4s"}}>
<div style={{fontSize:W?72:60}}>🃏</div>
<div style={{fontSize:W?28:24,fontWeight:700,fontFamily:"Georgia,serif"}}>Practice</div>
<div style={{fontSize:15,color:"#888"}}>{learnedW().length} words from completed units</div>
{learnedW().length>0&&<div style={{display:"flex",flexDirection:"column",gap:12,width:"100%",maxWidth:320}}>
{/* Daily Challenge */}
<button onClick={startDaily} className="b" style={{background:"linear-gradient(135deg,#C9982E,#D4A027)",color:"#fff",borderRadius:18,padding:"16px",fontSize:17,fontWeight:700,boxShadow:"0 6px 24px rgba(201,152,46,.35)",width:"100%"}}>
⚡ Daily Challenge (3 min)</button>
<button onClick={()=>{startF();playSound("click")}} className="b" style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:18,padding:"16px",fontSize:17,fontWeight:700,boxShadow:"0 6px 24px rgba(11,74,62,.3)",width:"100%"}}>🃏 Flashcards</button>
{(prog.weakWords||[]).length>0&&<button onClick={()=>{
const rv=generateReview(prog.weakWords,ALL_WORDS);setFlow(rv);setFI(0);setScore(0);setAns(null);setTypeIn("");setTyped(false);setIsTest(false);
setFR(false);setConvoI(0);setConvoAns(null);setWordOrder([]);setOrderDone(false);setMicText("");setMicDone(false);setInUnit(true);playSound("click")
}} className="b" style={{background:"linear-gradient(135deg,#D94535,#E57373)",color:"#fff",borderRadius:18,padding:"16px",fontSize:17,fontWeight:700,boxShadow:"0 4px 16px rgba(217,69,53,.3)",width:"100%"}}>
🔄 Review Weak Words ({(prog.weakWords||[]).length})</button>}
</div>}
{learnedW().length===0&&<div style={{fontSize:14,color:"#999",textAlign:"center",maxWidth:300}}>Complete units in Learn to unlock practice</div>}
{/* Word Search */}
{learnedW().length>0&&<div style={{width:"100%",maxWidth:360,marginTop:8}}>
<input type="text" placeholder="🔍 Search any word..." value={prog._search||""} onChange={e=>{
setProg(p=>({...p,_search:e.target.value}))}} style={{width:"100%",padding:"12px 16px",borderRadius:14,border:"2px solid #e0e0e0",fontSize:15,fontFamily:"Georgia,serif",boxSizing:"border-box"}}/>
{(prog._search||"").length>=2&&<div style={{marginTop:8,maxHeight:200,overflowY:"auto"}}>
{ALL_WORDS.filter(w=>w[0].toLowerCase().includes((prog._search||"").toLowerCase())||w[1].toLowerCase().includes((prog._search||"").toLowerCase())).slice(0,10).map((w,i)=>
<div key={i} style={{padding:"8px 12px",borderBottom:"1px solid #f0f0f0",display:"flex",justifyContent:"space-between",fontSize:14}}>
<span style={{fontWeight:600,fontFamily:"Georgia,serif"}}>{w[0]}</span>
<span style={{color:"#888"}}>{w[1]}</span>
</div>)}</div>}
</div>}
{/* THEMED REVIEW CLUSTERS */}
{learnedW().length>30&&<div style={{width:"100%",maxWidth:360,marginTop:16}}>
<div style={{fontSize:14,fontWeight:700,color:"#333",marginBottom:10}}>🏆 Themed Challenges</div>
{THEME_CLUSTERS.map((cl,ci)=>{const done=cl.units.filter(u=>isDone(u)).length;const unlocked=done>=cl.minDone;
return<button key={ci} onClick={()=>{if(!unlocked)return;
const words=cl.units.filter(u=>isDone(u)).flatMap(u=>D[u].w);const rv=generateReview(shuffle(words).slice(0,15),ALL_WORDS);
setFlow(rv);setFI(0);setScore(0);setAns(null);setTypeIn("");setTyped(false);setIsTest(false);
setFR(false);setConvoI(0);setConvoAns(null);setWordOrder([]);setOrderDone(false);setMicText("");setMicDone(false);setInUnit(true);playSound("click")
}} disabled={!unlocked} className="b" style={{width:"100%",padding:"10px 14px",borderRadius:12,marginBottom:6,textAlign:"left",
background:unlocked?"#fff":"rgba(0,0,0,.03)",border:"1px solid "+(unlocked?"rgba(11,74,62,.15)":"rgba(0,0,0,.05)"),opacity:unlocked?1:.5,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div><div style={{fontSize:14,fontWeight:600}}>{cl.name}</div>
<div style={{fontSize:11,color:"#888"}}>{cl.desc}</div></div>
<div style={{fontSize:12,fontWeight:700,color:done>=cl.minDone?"#2E7D32":"#999"}}>{done}/{cl.units.length}</div>
</button>})}
</div>}
</div>}

{tab==="practice"&&pOn&&!pDone&&<div style={{padding:"18px 0",display:"flex",flexDirection:"column",gap:14,minHeight:400,animation:"fi .3s"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setPOn(false)} className="b" style={{background:"none",fontSize:24,color:"#0B4A3E",padding:0}}>‹</button>
<div style={{display:"flex",gap:14,fontSize:14}}><span style={{color:"#2E7D32",fontWeight:700}}>✓{pSt.y}</span><span style={{color:"#D94535",fontWeight:700}}>✗{pSt.n}</span></div>
<button onClick={()=>setPDone(true)} className="b" style={{background:"rgba(255,255,255,.8)",border:"1px solid rgba(0,0,0,.08)",borderRadius:10,padding:"6px 16px",fontSize:13}}>End</button></div>
<div key={pI} onClick={()=>{if(!pS){setPS(true);playSound("flip")}}} className="c" style={{padding:pS?"28px 22px":"56px 22px",textAlign:"center",cursor:pS?"default":"pointer",flex:1,
display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10,animation:"si .3s"}}>
{!pS&&<><div style={{fontSize:W?48:42,fontWeight:700,fontFamily:"Georgia,serif"}}>{pCard[0]}</div><div style={{fontSize:14,color:"#bbb",marginTop:20}}>Tap to reveal</div></>}
{pS&&<><div style={{fontSize:W?34:28,fontWeight:700,fontFamily:"Georgia,serif",animation:"fi .3s"}}>{pCard[0]}</div>
<div style={{fontSize:W?22:20,color:"#0B4A3E",fontWeight:700,marginTop:6,animation:"fi .3s .1s both"}}>{pCard[1]}</div>
<div style={{fontSize:15,color:"#0B4A3E",fontFamily:"monospace",marginTop:8,animation:"fi .3s .2s both"}}>/{pCard[2]}/</div>
<button onClick={e=>{e.stopPropagation();speakPT(pCard[0],()=>setSpk(true),()=>setSpk(false))}} className="b"
style={{marginTop:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:10,padding:"10px 22px",fontSize:14,animation:"fi .3s .3s both"}}>🔊</button></>}</div>
{pS&&<div style={{display:"flex",gap:10,animation:"fi .3s"}}>
<button onClick={()=>rateF(false)} className="b" style={{flex:1,padding:16,borderRadius:14,border:"2px solid #EF5350",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",fontSize:15,fontWeight:700,color:"#C62828"}}>✗ Learning</button>
<button onClick={()=>rateF(true)} className="b" style={{flex:1,padding:16,borderRadius:14,border:"2px solid #4CAF50",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",fontSize:15,fontWeight:700,color:"#2E7D32"}}>✓ Got it</button></div>}</div>}

{tab==="practice"&&pOn&&pDone&&<div style={{padding:"28px 0",display:"flex",flexDirection:"column",alignItems:"center",gap:18,animation:"pop .5s"}}>
<div style={{fontSize:56}}>{(pSt.y/(pSt.y+pSt.n||1)*100)>=80?"🏆":"💪"}</div>
<div style={{fontSize:24,fontWeight:700,fontFamily:"Georgia,serif"}}>Session Done</div>
<div className="c" style={{padding:"20px 28px",width:"100%",maxWidth:340}}>
{[["Cards",pSt.y+pSt.n,"#1a1a1a"],["✓ Got it",pSt.y,"#2E7D32"],["✗ Learning",pSt.n,"#C62828"]].map(([l,v,c],i)=>
<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderTop:i?"1px solid rgba(0,0,0,.06)":"none"}}>
<span style={{color:"#888"}}>{l}</span><span style={{fontWeight:700,color:c}}>{v}</span></div>)}</div>
<div style={{display:"flex",gap:10}}>
<button onClick={startF} className="b" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:14,padding:"14px 28px",fontSize:16,fontWeight:700}}>Again</button>
<button onClick={()=>{setPOn(false);setPDone(false)}} className="b" style={{background:"rgba(255,255,255,.8)",border:"1px solid rgba(0,0,0,.08)",borderRadius:14,padding:"14px 28px",fontSize:16}}>Done</button></div></div>}

{/* ═══ STATS TAB ═══ */}
{tab==="stats"&&<div style={{padding:"20px 0",display:"flex",flexDirection:"column",gap:16,animation:"fi .4s"}}>
{/* Sub-tabs */}
<div style={{display:"flex",gap:8}}>
{[["overview","📊 Overview"],["vocab","📚 My Vocabulary"]].map(([id,lb])=>
<button key={id} onClick={()=>{setStatsView(id);playSound("tap")}} className="b"
style={{padding:"8px 18px",borderRadius:10,fontSize:13,fontWeight:statsView===id?700:500,
background:statsView===id?"linear-gradient(135deg,#0B4A3E,#1B6B56)":"rgba(255,255,255,.8)",
color:statsView===id?"#fff":"#666",border:statsView===id?"none":"1px solid rgba(0,0,0,.06)"}}>{lb}</button>)}
</div>

{statsView==="overview"&&<>
{/* OVERALL PROGRESS */}
<div className="c" style={{padding:"20px",textAlign:"center",animation:"pop .3s"}}>
<div style={{fontSize:W?48:40,fontWeight:800,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{pct}%</div>
<div style={{fontSize:14,color:"#888",marginTop:4}}>Overall Completion</div>
<div style={{background:"rgba(11,74,62,.06)",borderRadius:8,height:12,overflow:"hidden",margin:"12px 0"}}>
<div style={{height:"100%",borderRadius:8,background:"linear-gradient(90deg,#0B4A3E,#2D8B6E)",width:`${pct}%`,transition:"width .5s"}}/></div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"#999"}}>
<span>{(prog.units||[]).length}/151 units</span>
<span>{doneW}/1510 words</span>
</div>
</div>

{/* BIA STAGE */}
<div className="c" style={{padding:"16px 18px",display:"flex",alignItems:"center",gap:14,animation:"fi .3s .1s both"}}>
<div style={{fontSize:36}}>🤖</div>
<div style={{flex:1,textAlign:"left"}}>
<div style={{fontSize:14,fontWeight:700,color:"#C9982E"}}>Bia's Level: {(prog.units||[]).length<=5?"Beginner":(prog.units||[]).length<=15?"Elementary":(prog.units||[]).length<=30?"Pre-Intermediate":(prog.units||[]).length<=50?"Intermediate":(prog.units||[]).length<=80?"Upper-Intermediate":(prog.units||[]).length<=120?"Advanced":"Near-Native"}</div>
<div style={{fontSize:12,color:"#888",marginTop:2}}>Complete more units to level up Bia's conversation skills</div>
{(prog.weakWords||[]).length>0&&<div style={{fontSize:11,color:"#D94535",marginTop:3}}>🔴 {(prog.weakWords||[]).length} words need review</div>}
</div></div>

<div style={{display:"grid",gridTemplateColumns:W?"1fr 1fr 1fr":"1fr 1fr",gap:10}}>
{[[`⭐ ${prog.xp}`,"XP","#C9982E"],[`📚 ${doneW}`,"Words","#0B4A3E"],[`🎯 ${acc}%`,"Accuracy","#2E7D32"],
[`⏱️ ${fmt(prog.time||0)}`,"Time","#666"],[`🔥 ${prog.streak||0}`,"Streak","#D94535"],[`📝 ${prog.exDone||0}`,"Exercises","#1B6B56"]].map(([val,label,c],i)=>
<div key={i} className="c" style={{padding:"16px 14px",textAlign:"center",animation:`fi .3s ${i*.05}s both`}}>
<div style={{fontSize:W?24:20,fontWeight:700,color:c,fontFamily:"Georgia,serif"}}>{val}</div>
<div style={{fontSize:11,color:"#999",marginTop:4}}>{label}</div></div>)}</div>

{/* DAILY TRACKER */}
<div className="c" style={{padding:"16px 18px"}}>
<div style={{fontSize:15,fontWeight:700,fontFamily:"Georgia,serif",marginBottom:12}}>📅 This Week</div>
{(()=>{const days=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5);
days.push({date:d.toISOString().split('T')[0],label:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()],
isToday:i===0,...((prog.daily||{})[d.toISOString().split('T')[0]]||{ex:0,ok:0,time:0,flash:0})})}
const maxEx=Math.max(...days.map(d=>d.ex+d.flash),1);
return<div style={{display:"flex",flexDirection:"column",gap:8}}>
{days.map((d,i)=>{const total=d.ex+d.flash;const pctBar=Math.round((total/maxEx)*100);
return<div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
<div style={{width:36,fontSize:12,fontWeight:d.isToday?700:500,color:d.isToday?"#0B4A3E":"#999"}}>{d.isToday?"Today":d.label}</div>
<div style={{flex:1,background:"rgba(11,74,62,.06)",borderRadius:6,height:22,overflow:"hidden"}}>
{total>0&&<div style={{height:"100%",borderRadius:6,width:`${Math.max(pctBar,12)}%`,
background:d.isToday?"linear-gradient(90deg,#0B4A3E,#2D8B6E)":"linear-gradient(90deg,#1B6B56,#2D8B6E80)",
display:"flex",alignItems:"center",paddingLeft:8}}>
<span style={{fontSize:11,fontWeight:700,color:"#fff"}}>{total}</span></div>}</div>
<div style={{width:38,textAlign:"right",fontSize:11,color:d.time?"#2E7D32":"#ccc",fontWeight:600}}>{d.time?fmt(d.time):"—"}</div>
</div>})}</div>})()}
</div></>}

{/* VOCABULARY LIST */}
{statsView==="vocab"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
{learnedW().length===0&&<div style={{textAlign:"center",padding:40,color:"#999"}}>Complete units to see your vocabulary here</div>}
{D.filter((_,i)=>isDone(i)).map((u,i)=><div key={i} className="c" style={{padding:"14px 18px",animation:`fi .3s ${i*.03}s both`}}>
<div style={{fontSize:14,fontWeight:700,color:"#0B4A3E",marginBottom:10}}>{u.n}</div>
<div style={{display:"flex",flexWrap:"wrap",gap:6}}>
{u.w.map(([pt,en],j)=><button key={j} onClick={()=>{speakPT(pt,()=>setSpk(true),()=>setSpk(false));playSound("tap")}} className="b"
style={{background:"rgba(11,74,62,.06)",border:"1px solid rgba(11,74,62,.1)",borderRadius:8,padding:"6px 12px",fontSize:13}}>
<span style={{fontWeight:600,color:"#0B4A3E"}}>{pt}</span> <span style={{color:"#888"}}>{en}</span></button>)}</div>
</div>)}</div>}
</div>}

{/* ═══ TALK TAB ═══ */}
{tab==="talk"&&!chatMode&&<div style={{padding:"24px 0",display:"flex",flexDirection:"column",alignItems:"center",gap:20,minHeight:400,animation:"fi .4s"}}>
<div style={{fontSize:60}}>🇧🇷</div>
<div style={{fontSize:W?24:20,fontWeight:700,fontFamily:"Georgia,serif"}}>Chat with Bia</div>
<div style={{fontSize:14,color:"#888",textAlign:"center",maxWidth:340}}>Choose how you want to practice</div>
<div style={{display:"flex",flexDirection:"column",gap:12,width:"100%",maxWidth:380}}>
<button onClick={()=>{setChatMode("practice");setMsgs([{id:nid.current++,role:"a",pt:"Oi! Vamos praticar o que você aprendeu! 📚",en:"Hi! Let's practice what you've learned!"}])}} className="c b"
style={{padding:W?"22px 24px":"18px 20px",textAlign:"left",width:"100%"}}>
<div style={{display:"flex",alignItems:"center",gap:14}}>
<div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#C9982E,#D4A027)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>📚</div>
<div><div style={{fontSize:W?17:15,fontWeight:700,color:"#1a1a1a"}}>Practice Mode</div>
<div style={{fontSize:12,color:"#888",marginTop:3,lineHeight:1.4}}>Bia adapts to your level! She only uses vocabulary and grammar from your completed units. The more you learn, the smarter she gets.</div>
<div style={{fontSize:11,color:"#C9982E",fontWeight:600,marginTop:4}}>📖 {learnedW().length} words · {(prog.units||[]).length} units · Stage: {(prog.units||[]).length<=5?"Beginner":(prog.units||[]).length<=15?"Elementary":(prog.units||[]).length<=30?"Pre-Intermediate":(prog.units||[]).length<=50?"Intermediate":(prog.units||[]).length<=80?"Upper-Intermediate":(prog.units||[]).length<=120?"Advanced":"Near-Native"}</div></div></div></button>
<button onClick={()=>{setChatMode("free");setMsgs([{id:nid.current++,role:"a",pt:"Oi! Eu sou a Bia 😊 Tô aqui pra te ajudar!",en:"Hi! I'm Bia 😊 I'm here to help!"}])}} className="c b"
style={{padding:W?"22px 24px":"18px 20px",textAlign:"left",width:"100%"}}>
<div style={{display:"flex",alignItems:"center",gap:14}}>
<div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>💬</div>
<div><div style={{fontSize:W?17:15,fontWeight:700,color:"#1a1a1a"}}>Free Chat</div>
<div style={{fontSize:12,color:"#888",marginTop:3,lineHeight:1.4}}>Talk about anything in Portuguese or English. Bia uses all vocabulary, corrects mistakes, and gives tips. No restrictions!</div></div></div></button>
</div></div>}

{tab==="talk"&&chatMode&&msgs.length===0&&<div style={{padding:"40px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,minHeight:400,animation:"fi .4s"}}>
<div style={{fontSize:60}}>🇧🇷</div>
<div style={{fontSize:W?24:20,fontWeight:700,fontFamily:"Georgia,serif"}}>Chat with Bia</div>
<div style={{fontSize:14,color:"#888"}}>Practice Portuguese or English</div>
<button onClick={()=>setMsgs([{id:nid.current++,role:"a",pt:"Oi! Eu sou a Bia 😊 Tô aqui pra te ajudar!",en:"Hi! I'm Bia 😊 I'm here to help!"}])}
className="b" style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:18,padding:"18px 48px",fontSize:18,fontWeight:700,boxShadow:"0 6px 24px rgba(11,74,62,.3)"}}>Start</button></div>}

{tab==="talk"&&chatMode&&msgs.length>0&&<div style={{padding:"16px 0",display:"flex",flexDirection:"column",gap:12}}>
{/* Mode badge */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 4px"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<div style={{background:chatMode==="practice"?"linear-gradient(135deg,#C9982E,#D4A027)":"linear-gradient(135deg,#0B4A3E,#2D8B6E)",
color:"#fff",borderRadius:8,padding:"4px 12px",fontSize:12,fontWeight:700}}>{chatMode==="practice"?"📚 Practice":"💬 Free"}</div>
{chatMode==="practice"&&<div style={{fontSize:11,color:"#888"}}>{learnedW().length} words active</div>}</div>
<button onClick={()=>{setChatMode(null);setMsgs([])}} className="b" style={{background:"none",fontSize:12,color:"#888",textDecoration:"underline",padding:0}}>Switch mode</button></div>
{msgs.map(m=>m.role==="a"?<div key={m.id} style={{display:"flex",gap:10,maxWidth:"85%",animation:"fi .3s"}}>
<div style={{width:32,height:32,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:700}}>B</div>
<div style={{display:"flex",flexDirection:"column",gap:5}}>
<div className="c" style={{borderRadius:"4px 16px 16px 16px",padding:"12px 16px"}}>
<div style={{fontSize:15,lineHeight:1.6,color:"#1a1a1a",fontFamily:"Georgia,serif"}}>{m.pt}</div>
<div style={{marginTop:8,paddingTop:8,borderTop:"1px solid rgba(0,0,0,.06)",fontSize:12,color:"#888",fontStyle:"italic"}}>{m.en}</div></div>
{m.fix&&<div style={{background:"linear-gradient(135deg,#FFF3E0,#FFE0B2)",borderRadius:10,padding:"6px 12px",fontSize:12,color:"#704000"}}>✏️ {m.fix}</div>}
{m.tip&&<div style={{background:"#FFFBEA",borderRadius:10,padding:"6px 12px",fontSize:12,color:"#5D4500"}}>💡 {m.tip}</div>}
</div></div>
:<div key={m.id} style={{alignSelf:"flex-end",maxWidth:"80%",animation:"fi .3s"}}>
<div style={{background:"linear-gradient(135deg,#C8E6CF,#A5D6B0)",borderRadius:"16px 4px 16px 16px",padding:"12px 16px",fontSize:15,color:"#1a1a1a"}}>{m.text}</div></div>)}
{busy&&<div style={{display:"flex",gap:10}}><div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:12}}>B</div>
<div className="c" style={{borderRadius:"4px 16px 16px 16px",padding:"14px 18px",display:"flex",gap:6}}><div className="ld"/><div className="ld"/><div className="ld"/></div></div>}
<div ref={btm}/></div>}
</div></div>

{err&&<div style={{margin:"0 14px 8px",padding:"10px 14px",background:"#FFEBEE",border:"1px solid #EF5350",borderRadius:12,fontSize:13,color:"#C62828",display:"flex",justifyContent:"space-between"}}>
{err}<button onClick={()=>setErr(null)} className="b" style={{background:"none",fontSize:18,color:"#C62828"}}>×</button></div>}

{tab==="talk"&&chatMode&&msgs.length>0&&<div style={{background:"rgba(255,255,255,.92)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(0,0,0,.06)",padding:"12px 16px 14px",flexShrink:0}}>
<div className="w" style={{display:"flex",gap:8}}>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder={chatMode==="practice"?"Practice with your learned words...":"Type in Portuguese or English..."} style={{flex:1,padding:"12px 16px",borderRadius:14,border:"1px solid rgba(0,0,0,.08)",fontSize:15}}/>
<button onClick={sendChat} disabled={busy||!chatIn.trim()} className="b"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:14,padding:"12px 20px",fontSize:15,fontWeight:700}}>→</button>
<button onClick={()=>{setChatMode(null);setMsgs([])}} className="b" style={{background:"none",fontSize:20,color:"#888"}}>↻</button>
</div></div>}

{/* TAB BAR */}
<div style={{display:"flex",borderTop:"1px solid rgba(0,0,0,.06)",background:"rgba(255,255,255,.92)",backdropFilter:"blur(16px)",flexShrink:0}}>
<div className="w" style={{display:"flex"}}>
{[{id:"learn",ic:"📚",lb:"Learn"},{id:"practice",ic:"🃏",lb:"Practice"},{id:"stats",ic:"📊",lb:"Stats"},{id:"talk",ic:"💬",lb:"Talk"}].map(t=>
<button key={t.id} onClick={()=>{setTab(t.id);playSound("tap");if(t.id==="learn"){setInUnit(false);setFlow([]);setScore(0)}if(t.id==="practice"){setPOn(false);setPDone(false)}}}
className="b" style={{flex:1,padding:W?"14px 0 10px":"12px 0 8px",background:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:2,
color:tab===t.id?"#0B4A3E":"#999",fontWeight:tab===t.id?700:400,fontSize:11}}>
<span style={{fontSize:W?24:20,transform:tab===t.id?"scale(1.2)":"scale(1)",transition:"transform .2s"}}>{t.ic}</span><span>{t.lb}</span></button>)}
</div></div>
</div>)}
