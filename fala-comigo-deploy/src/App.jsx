import { useState, useRef, useEffect, useCallback } from "react";

const LV=["Foundations","Survival","Everyday","Social","Fluency"];
const LI=["👋","🗺️","🏠","🤝","🎓"];
const LC=["#0B4A3E","#1B6B56","#2D8B6E","#C9982E","#8B5E3C"];
const D=[
{l:0,n:"Greetings",w:[["Oi","Hi","oy — rhymes with 'boy'"],["Tchau","Bye","chow — like 'ciao'"],["Bom dia","Good morning","bohn JEE-ah"],["Boa tarde","Good afternoon","BOH-ah TAR-jee"],["Boa noite","Good evening","BOH-ah NOY-chee"],["Tudo bem?","How are you?","TOO-doo bayn"],["Olá","Hello","oh-LAH"],["Até logo","See you later","ah-TEH LAW-goo"],["Até amanhã","See you tomorrow","ah-TEH ah-mah-NYAH"],["Bem-vindo","Welcome","bayn-VEEN-doo"]]},
{l:0,n:"Polite Words",w:[["Obrigado","Thank you (m)","oh-bree-GAH-doo"],["Obrigada","Thank you (f)","oh-bree-GAH-dah"],["Por favor","Please","por fah-VOR"],["Com licença","Excuse me","kohn lee-SEN-sah"],["Desculpa","Sorry","des-KOOL-pah"],["De nada","You're welcome","jee NAH-dah"],["Sim","Yes","seen"],["Não","No","nown"],["Talvez","Maybe","tow-VEHZ"],["Claro","Of course","KLAH-roo"]]},
{l:0,n:"Meeting People",w:[["Meu nome é","My name is","MEH-oo NOH-mee eh"],["Prazer","Nice to meet you","prah-ZEHR"],["De onde você é?","Where are you from?","jee OHN-jee voh-SEH eh"],["Eu sou","I am","EH-oo soh"],["Eu moro em","I live in","EH-oo MOH-roo ayn"],["Você fala inglês?","Do you speak English?","voh-SEH FAH-lah een-GLAYS"],["Um pouco","A little","oom POH-koo"],["Não entendo","I don't understand","nown en-TEN-doo"],["Pode repetir?","Can you repeat?","POH-jee heh-peh-CHEER"],["Como se diz?","How do you say?","KOH-moo see jeez"]]},
{l:0,n:"Numbers",w:[["Um","One","oom"],["Dois","Two","doyss"],["Três","Three","trayss"],["Quatro","Four","KWAH-troo"],["Cinco","Five","SEEN-koo"],["Seis","Six","sayss"],["Sete","Seven","SEH-chee"],["Oito","Eight","OY-too"],["Nove","Nine","NAW-vee"],["Dez","Ten","dehz"]]},
{l:0,n:"Family",w:[["Mãe","Mom","my (nasal)"],["Pai","Dad","pie"],["Irmão","Brother","eer-MOWN"],["Irmã","Sister","eer-MAH"],["Filho","Son","FEE-lyoo"],["Filha","Daughter","FEE-lyah"],["Avô","Grandfather","ah-VOH"],["Avó","Grandmother","ah-VAW"],["Marido","Husband","mah-REE-doo"],["Esposa","Wife","es-POH-zah"]]},
{l:0,n:"Basics",w:[["Muito","Very / A lot","MOOY-too"],["Pouco","Little / Few","POH-koo"],["Bom","Good","bohn"],["Ruim","Bad","hoo-EEN"],["Grande","Big","GRAHN-jee"],["Pequeno","Small","peh-KEH-noo"],["Bonito","Beautiful","boh-NEE-too"],["Novo","New","NOH-voo"],["Velho","Old","VEH-lyoo"],["Aqui","Here","ah-KEE"]]},
{l:1,n:"Food & Drink",w:[["Comida","Food","koh-MEE-dah"],["Água","Water","AH-gwah"],["Café","Coffee","kah-FEH"],["Cerveja","Beer","sehr-VEH-zhah"],["Pão","Bread","pown"],["Arroz","Rice","ah-HOHZ"],["Feijão","Beans","fay-ZHOWN"],["Carne","Meat","KAR-nee"],["Fruta","Fruit","FROO-tah"],["Leite","Milk","LAY-chee"]]},
{l:1,n:"Restaurant",w:[["Cardápio","Menu","kar-DAH-pee-oo"],["Garçom","Waiter","gar-SOHN"],["A conta","The check","ah KOHN-tah"],["Prato","Plate / Dish","PRAH-too"],["Copo","Glass","KOH-poo"],["Garfo","Fork","GAR-foo"],["Faca","Knife","FAH-kah"],["Colher","Spoon","koh-LYEHR"],["Gostoso","Delicious","gohs-TOH-zoo"],["Sem","Without","sayn"]]},
{l:1,n:"Directions",w:[["Rua","Street","HOO-ah"],["Direita","Right","jee-RAY-tah"],["Esquerda","Left","es-KEHR-dah"],["Longe","Far","LOHN-zhee"],["Perto","Close / Near","PEHR-too"],["Banheiro","Bathroom","bah-NYAY-roo"],["Farmácia","Pharmacy","far-MAH-see-ah"],["Ônibus","Bus","OH-nee-boos"],["Aeroporto","Airport","ah-eh-roh-POR-too"],["Táxi","Taxi","TAH-ksee"]]},
{l:1,n:"Time & Days",w:[["Hoje","Today","OH-zhee"],["Amanhã","Tomorrow","ah-mah-NYAH"],["Ontem","Yesterday","OHN-tayn"],["Agora","Now","ah-GOH-rah"],["Manhã","Morning","mah-NYAH"],["Tarde","Afternoon","TAR-jee"],["Noite","Night","NOY-chee"],["Semana","Week","seh-MAH-nah"],["Mês","Month","mayss"],["Ano","Year","AH-noo"]]},
{l:1,n:"Weather",w:[["Sol","Sun","sow"],["Chuva","Rain","SHOO-vah"],["Calor","Hot weather","kah-LOR"],["Frio","Cold","FREE-oo"],["Vento","Wind","VEN-too"],["Praia","Beach","PRY-ah"],["Mar","Sea","mar"],["Céu","Sky","SEH-oo"],["Nuvem","Cloud","NOO-vayn"],["Estrela","Star","es-TREH-lah"]]},
{l:1,n:"Body & Health",w:[["Cabeça","Head","kah-BEH-sah"],["Mão","Hand","mown"],["Pé","Foot","peh"],["Olho","Eye","OH-lyoo"],["Boca","Mouth","BOH-kah"],["Doente","Sick","doh-EN-chee"],["Médico","Doctor","MEH-jee-koo"],["Remédio","Medicine","heh-MEH-jee-oo"],["Dor","Pain","dor"],["Ajuda","Help","ah-ZHOO-dah"]]},
{l:2,n:"Core Verbs",w:[["Ser","To be (perm)","sehr"],["Estar","To be (temp)","es-TAR"],["Ter","To have","tehr"],["Ir","To go","eer"],["Fazer","To do / make","fah-ZEHR"],["Querer","To want","keh-REHR"],["Poder","To be able to","poh-DEHR"],["Saber","To know (fact)","sah-BEHR"],["Precisar","To need","preh-see-ZAR"],["Falar","To speak","fah-LAR"]]},
{l:2,n:"Feelings",w:[["Feliz","Happy","feh-LEEZ"],["Triste","Sad","TREES-chee"],["Cansado","Tired","kahn-SAH-doo"],["Com fome","Hungry","kohn FOH-mee"],["Com sede","Thirsty","kohn SEH-jee"],["Com medo","Scared","kohn MEH-doo"],["Animado","Excited","ah-nee-MAH-doo"],["Preocupado","Worried","preh-oh-koo-PAH-doo"],["Saudade","Longing","sow-DAH-jee"],["Com raiva","Angry","kohn HY-vah"]]},
{l:2,n:"Shopping",w:[["Loja","Store","LOH-zhah"],["Dinheiro","Money","jeen-YAY-roo"],["Caro","Expensive","KAH-roo"],["Barato","Cheap","bah-RAH-too"],["Comprar","To buy","kohm-PRAR"],["Pagar","To pay","pah-GAR"],["Troco","Change (money)","TROH-koo"],["Cartão","Card","kar-TOWN"],["Desconto","Discount","des-KOHN-too"],["Quanto custa?","How much?","KWAHN-too KOOS-tah"]]},
{l:2,n:"Home",w:[["Casa","House","KAH-zah"],["Apartamento","Apartment","ah-par-tah-MEN-too"],["Quarto","Bedroom","KWAR-too"],["Cozinha","Kitchen","koh-ZEEN-yah"],["Sala","Living room","SAH-lah"],["Porta","Door","POR-tah"],["Janela","Window","zhah-NEH-lah"],["Cama","Bed","KAH-mah"],["Mesa","Table","MEH-zah"],["Cadeira","Chair","kah-DAY-rah"]]},
{l:2,n:"Clothing",w:[["Roupa","Clothes","HOH-pah"],["Camisa","Shirt","kah-MEE-zah"],["Calça","Pants","KOW-sah"],["Sapato","Shoe","sah-PAH-too"],["Vestido","Dress","ves-CHEE-doo"],["Casaco","Jacket","kah-ZAH-koo"],["Chapéu","Hat","shah-PEH-oo"],["Bolsa","Bag","BOW-sah"],["Cinto","Belt","SEEN-too"],["Meia","Sock","MAY-ah"]]},
{l:2,n:"Transport",w:[["Carro","Car","KAH-hoo"],["Metrô","Subway","meh-TROH"],["Avião","Airplane","ah-vee-OWN"],["Trem","Train","trayn"],["Bicicleta","Bicycle","bee-see-KLEH-tah"],["Estação","Station","es-tah-SOWN"],["Passagem","Ticket","pah-SAH-zhayn"],["Parada","Stop","pah-RAH-dah"],["Trânsito","Traffic","TRAHN-see-too"],["Motorista","Driver","moh-toh-REES-tah"]]},
{l:3,n:"Past Tense",w:[["Fui","I went","foo-ee"],["Fiz","I did / made","feez"],["Comi","I ate","koh-MEE"],["Bebi","I drank","beh-BEE"],["Falei","I spoke","fah-LAY"],["Comprei","I bought","kohm-PRAY"],["Vi","I saw","vee"],["Disse","I said","JEE-see"],["Tive","I had","CHEE-vee"],["Estive","I was","es-CHEE-vee"]]},
{l:3,n:"Hobbies",w:[["Jogar","To play (games)","zhoh-GAR"],["Ler","To read","lehr"],["Escrever","To write","es-kreh-VEHR"],["Nadar","To swim","nah-DAR"],["Correr","To run","koh-HEHR"],["Cozinhar","To cook","koh-zeen-YAR"],["Dançar","To dance","dahn-SAR"],["Cantar","To sing","kahn-TAR"],["Viajar","To travel","vee-ah-ZHAR"],["Assistir","To watch","ah-sees-CHEER"]]},
{l:3,n:"Work & Study",w:[["Trabalho","Work / Job","trah-BAH-lyoo"],["Escritório","Office","es-kree-TAW-ree-oo"],["Reunião","Meeting","heh-oo-nee-OWN"],["Chefe","Boss","SHEH-fee"],["Colega","Colleague","koh-LEH-gah"],["Faculdade","University","fah-koo-DAH-jee"],["Estudar","To study","es-too-DAR"],["Professor","Teacher","proh-feh-SOR"],["Aula","Class","OW-lah"],["Prova","Exam","PRAW-vah"]]},
{l:3,n:"City & Places",w:[["Cidade","City","see-DAH-jee"],["Prédio","Building","PREH-jee-oo"],["Igreja","Church","ee-GREH-zhah"],["Parque","Park","PAR-kee"],["Restaurante","Restaurant","hes-tow-RAHN-chee"],["Supermercado","Supermarket","soo-pehr-mehr-KAH-doo"],["Banco","Bank","BAHN-koo"],["Cinema","Movie theater","see-NEH-mah"],["Museu","Museum","moo-ZEH-oo"],["Padaria","Bakery","pah-dah-REE-ah"]]},
{l:3,n:"Social Phrases",w:[["Parabéns","Congratulations","pah-rah-BAYNS"],["Saúde","Cheers","sah-OO-jee"],["Que legal","How cool","kee leh-GOW"],["Que pena","What a shame","kee PEH-nah"],["Com certeza","Definitely","kohn sehr-TEH-zah"],["Nossa","Wow","NOH-sah"],["Sério?","Really?","SEH-ree-oo"],["Que chato","How annoying","kee SHAH-too"],["Tô feliz","I'm happy","toh feh-LEEZ"],["Tô cansado","I'm tired","toh kahn-SAH-doo"]]},
{l:3,n:"Daily Actions",w:[["Acordar","To wake up","ah-kor-DAR"],["Dormir","To sleep","dor-MEER"],["Comer","To eat","koh-MEHR"],["Beber","To drink","beh-BEHR"],["Andar","To walk","ahn-DAR"],["Sentar","To sit","sen-TAR"],["Abrir","To open","ah-BREER"],["Fechar","To close","feh-SHAR"],["Começar","To start","koh-meh-SAR"],["Terminar","To finish","tehr-mee-NAR"]]},
{l:4,n:"Slang",w:[["Beleza","Cool / OK","beh-LEH-zah"],["Valeu","Thanks (casual)","vah-LEH-oo"],["Cara","Dude","KAH-rah"],["E aí?","What's up?","ee ah-EE"],["Tá ligado?","You know?","tah lee-GAH-doo"],["Tipo","Like (filler)","CHEE-poo"],["Massa","Awesome","MAH-sah"],["Pô","Man / Come on","poh"],["Firmeza","Solid / Deal","feer-MEH-zah"],["Tá bom","Okay","tah bohn"]]},
{l:4,n:"Advanced Verbs",w:[["Conseguir","To manage","kohn-seh-GEER"],["Perceber","To realize","pehr-seh-BEHR"],["Lembrar","To remember","lem-BRAR"],["Esquecer","To forget","es-keh-SEHR"],["Escolher","To choose","es-koh-LYEHR"],["Explicar","To explain","es-plee-KAR"],["Acontecer","To happen","ah-kohn-teh-SEHR"],["Acreditar","To believe","ah-kreh-jee-TAR"],["Combinar","To arrange","kohm-bee-NAR"],["Aproveitar","To enjoy","ah-proh-vay-TAR"]]},
{l:4,n:"Abstract",w:[["Liberdade","Freedom","lee-behr-DAH-jee"],["Coragem","Courage","koh-RAH-zhayn"],["Orgulho","Pride","or-GOO-lyoo"],["Vergonha","Embarrassment","vehr-GOHN-yah"],["Confiança","Trust","kohn-fee-AHN-sah"],["Esperança","Hope","es-peh-RAHN-sah"],["Verdade","Truth","vehr-DAH-jee"],["Mentira","Lie","men-CHEE-rah"],["Sabedoria","Wisdom","sah-beh-doh-REE-ah"],["Paz","Peace","pahz"]]},
{l:4,n:"Connectors",w:[["Porque","Because","por-KEH"],["Porém","However","poh-RAYN"],["Então","So / Then","en-TOWN"],["Também","Also","tahm-BAYN"],["Ainda","Still / Yet","ah-EEN-dah"],["Já","Already","zhah"],["Nunca","Never","NOON-kah"],["Sempre","Always","SEM-pree"],["Quase","Almost","KWAH-zee"],["Enquanto","While","en-KWAHN-too"]]},
{l:4,n:"Idioms",w:[["Dar um jeitinho","Find a way","dar oom zhay-CHEEN-yoo"],["Ficar de boa","Take it easy","fee-KAR jee BOH-ah"],["Pagar mico","Embarrass yourself","pah-GAR MEE-koo"],["Quebrar o gelo","Break the ice","keh-BRAR oo ZHEH-loo"],["Dar certo","Work out","dar SEHR-too"],["Fazer falta","Be missed","fah-ZEHR FOW-tah"],["Tomar um fora","Get rejected","toh-MAR oom FOH-rah"],["Deixa pra lá","Let it go","DAY-shah prah LAH"],["Puxa vida","Geez / Oh man","POO-shah VEE-dah"],["Bater papo","To chat","bah-TEHR PAH-poo"]]},
{l:4,n:"Formal",w:[["Prezado","Dear (formal)","preh-ZAH-doo"],["Agradecer","To thank","ah-grah-deh-SEHR"],["Solicitar","To request","soh-lee-see-TAR"],["Informar","To inform","een-for-MAR"],["Confirmar","To confirm","kohn-feer-MAR"],["Cancelar","To cancel","kahn-seh-LAR"],["Receber","To receive","heh-seh-BEHR"],["Enviar","To send","en-vee-AR"],["Disponível","Available","jees-poh-NEE-vew"],["Atenciosamente","Sincerely","ah-ten-see-oh-zah-MEN-chee"]]},
];

const ALL_W=D.flatMap(u=>u.w);
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z\s]/g,"").trim();
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const fmt=s=>{if(s<60)return`${s}s`;if(s<3600)return`${Math.floor(s/60)}m`;return`${Math.floor(s/3600)}h ${Math.floor((s%3600)/60)}m`};

function speakPT(t,s,e){window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="pt-BR";u.rate=.85;
const g=()=>{const v=window.speechSynthesis.getVoices();const b=v.find(x=>x.lang==="pt-BR")||v.find(x=>x.lang.startsWith("pt"));
if(b)u.voice=b;u.onstart=()=>s?.();u.onend=()=>e?.();u.onerror=()=>e?.();window.speechSynthesis.speak(u)};
window.speechSynthesis.getVoices().length?g():window.speechSynthesis.addEventListener("voiceschanged",g,{once:true})}

async function askAI(sys,p){const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system:sys,messages:[{role:"user",content:p}]})});
if(!r.ok)throw new Error(`${r.status}`);const d=await r.json();
return JSON.parse((d.content.find(b=>b.type==="text")?.text||"").replace(/```json\n?|```/g,"").trim())}

const TYPES=["pick_en","pick_pt","listen","type_pt","true_false","listen_type"];
function makeEx(words,pool,count){const ex=[];for(let i=0;i<count;i++){
const w=words[i%words.length];const t=TYPES[i%TYPES.length];
const wr=shuffle(pool.filter(x=>x[1]!==w[1])).slice(0,3);
if(t==="pick_en")ex.push({t,q:w[0],a:w[1],opts:shuffle([w,...wr]).map(x=>x[1])});
else if(t==="pick_pt")ex.push({t,q:w[1],a:w[0],opts:shuffle([w,...wr]).map(x=>x[0])});
else if(t==="listen")ex.push({t,audio:w[0],a:w[1],opts:shuffle([w,...wr]).map(x=>x[1])});
else if(t==="type_pt")ex.push({t,q:w[1],a:w[0]});
else if(t==="true_false"){const fake=Math.random()>.5;const shown=fake?wr[0][1]:w[1];ex.push({t,q:w[0],shown,a:!fake,correct:w[1]});}
else ex.push({t,audio:w[0],a:w[0]});}return shuffle(ex)}

// Confetti component
const Confetti=()=>{const cols=["#FFD700","#FF6B6B","#4CAF50","#2196F3","#FF9800","#E91E63","#9C27B0","#00BCD4"];
return<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:200,overflow:"hidden"}}>
{Array.from({length:50}).map((_,i)=><div key={i} style={{position:"absolute",left:`${Math.random()*100}%`,top:-10,
width:`${6+Math.random()*10}px`,height:`${6+Math.random()*10}px`,background:cols[i%cols.length],
borderRadius:Math.random()>.5?"50%":"2px",animation:`confettiFall ${1.5+Math.random()*2}s ease-out ${Math.random()*.8}s forwards`,
transform:`rotate(${Math.random()*360}deg)`}}/>)}</div>};

export default function App(){
const[tab,setTab]=useState("learn");const[lv,setLv]=useState("levels");const[selL,setSelL]=useState(0);const[selU,setSelU]=useState(0);
const[phase,setPhase]=useState("learn");const[wI,setWI]=useState(0);const[pass,setPass]=useState(1);
const[fR,setFR]=useState(false);const[flashMissed,setFlashMissed]=useState([]);
const[exs,setExs]=useState([]);const[eI,setEI]=useState(0);const[eAns,setEAns]=useState(null);const[eScore,setEScore]=useState(0);
const[isTest,setIsTest]=useState(false);const[typeIn,setTypeIn]=useState("");const[typed,setTyped]=useState(false);
const[xpPop,setXpPop]=useState(null);const[showConfetti,setShowConfetti]=useState(false);
const[fD,setFD]=useState([]);const[fI,setFI]=useState(0);const[fS,setFS]=useState(false);
const[fSt,setFSt]=useState({y:0,n:0});const[fDn,setFDn]=useState(false);const[fOn,setFOn]=useState(false);
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[spk,setSpk]=useState(false);const[err,setErr]=useState(null);
const[prog,setProg]=useState({xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:0,lastDate:null,daily:{}});

const nid=useRef(1),btm=useRef(null),mr=useRef(msgs);mr.current=msgs;
useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

useEffect(()=>{try{const raw=localStorage.getItem("fala-v8");if(raw){const p=JSON.parse(raw);
const today=new Date().toDateString();if(p.lastDate&&p.lastDate!==today){
const y=new Date(Date.now()-864e5).toDateString();p.streak=p.lastDate===y?(p.streak||0)+1:1;p.lastDate=today;}
else if(!p.lastDate){p.lastDate=today;p.streak=1;}setProg(p);localStorage.setItem("fala-v8",JSON.stringify(p))}
else{const p={xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:1,lastDate:new Date().toDateString(),daily:{}};
setProg(p);localStorage.setItem("fala-v8",JSON.stringify(p))}}catch{}},[]);

useEffect(()=>{const iv=setInterval(()=>{setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};daily[d].time=(daily[d].time||0)+30;
const np={...p,time:(p.time||0)+30,daily};try{localStorage.setItem("fala-v8",JSON.stringify(np))}catch{};return np})},3e4);return()=>clearInterval(iv)},[]);

const save=useCallback(p=>{setProg(p);try{localStorage.setItem("fala-v8",JSON.stringify(p))}catch{}},[]);
const addXP=useCallback(n=>{setProg(p=>{const np={...p,xp:p.xp+n};try{localStorage.setItem("fala-v8",JSON.stringify(np))}catch{};return np});
setXpPop(n);setTimeout(()=>setXpPop(null),1200)},[]);
const trackDay=useCallback((field,val)=>{setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};daily[d][field]=(daily[d][field]||0)+val;
const np={...p,daily};try{localStorage.setItem("fala-v8",JSON.stringify(np))}catch{};return np})},[]);
const celebrate=()=>{setShowConfetti(true);setTimeout(()=>setShowConfetti(false),3000)};

const isOpen=l=>prog.levels.includes(l);const isDone=i=>prog.units.includes(i);
const lvUnits=l=>D.map((u,i)=>({...u,idx:i})).filter(u=>u.l===l);
const lvWords=l=>D.filter(u=>u.l===l).flatMap(u=>u.w);
const learnedW=()=>D.filter((_,i)=>isDone(i)).flatMap(u=>u.w);
const allDone=l=>lvUnits(l).every(u=>isDone(u.idx));

const startUnit=i=>{setSelU(i);setPhase("learn");setWI(0);setPass(1);setFR(false);setFlashMissed([]);setLv("unit");
speakPT(D[i].w[0][0],()=>setSpk(true),()=>setSpk(false))};
const startTest=l=>{const p=lvWords(l);setExs(makeEx(shuffle(p).slice(0,15),p,15));setEI(0);setEAns(null);setEScore(0);setIsTest(true);setTypeIn("");setTyped(false);setSelL(l);setLv("test")};

const curUnit=D[selU];const curWord=curUnit?.w[wI];
// Learn: pass 1 = in order, pass 2 = shuffled review
const nextWord=()=>{if(wI+1>=curUnit.w.length){if(pass===1){setPass(2);setWI(0);
// Shuffle for pass 2
}else{setPhase("flash");setWI(0);setFR(false);setFlashMissed([])}}
else{const ni=wI+1;setWI(ni);speakPT(curUnit.w[ni][0],()=>setSpk(true),()=>setSpk(false))}};
const prevWord=()=>{if(wI>0){const ni=wI-1;setWI(ni);speakPT(curUnit.w[ni][0],()=>setSpk(true),()=>setSpk(false))}};

const nextFlash=knew=>{
if(!knew)setFlashMissed(p=>[...p,curUnit.w[wI]]);
if(wI+1>=curUnit.w.length){
// If missed words, loop them
if(flashMissed.length>0&&!knew){setWI(0);/* continue with missed */}
else{setPhase("test");setExs(makeEx(curUnit.w,lvWords(curUnit.l),10));setEI(0);setEAns(null);setEScore(0);setIsTest(false);setTypeIn("");setTyped(false)}}
else{setWI(wI+1);setFR(false)}};

const answerEx=ans=>{if(eAns!==null)return;const ex=exs[eI];
let correct;if(ex.t==="true_false")correct=ans===ex.a;else correct=norm(String(ans))===norm(String(ex.a));
setEAns(ans);trackDay("ex",1);if(correct){trackDay("ok",1);addXP(2)}
setProg(p=>({...p,exDone:(p.exDone||0)+1,exOk:(p.exOk||0)+(correct?1:0)}));
setTimeout(()=>{if(eI+1>=exs.length){
if(isTest){const passed=(eScore+(correct?1:0))>=Math.ceil(exs.length*.8);
if(passed&&!prog.levels.includes(selL+1)){save({...prog,levels:[...prog.levels,selL+1],xp:prog.xp+20});celebrate()}}
else{if(!prog.units.includes(selU)){save({...prog,units:[...prog.units,selU]});celebrate()}}
setPhase("result")}else{setEI(i=>i+1);setEAns(null);setTypeIn("");setTyped(false)}
},correct?700:1300);if(correct)setEScore(s=>s+1)};
const submitType=()=>{if(!typeIn.trim()||typed)return;setTyped(true);answerEx(typeIn.trim())};
const curEx=exs[eI];

const startF=()=>{const w=learnedW();if(!w.length)return;setFD(shuffle(w));setFI(0);setFS(false);setFSt({y:0,n:0});setFDn(false);setFOn(true)};
const rateF=k=>{if(k)addXP(1);trackDay("flash",1);setFSt(s=>({y:s.y+(k?1:0),n:s.n+(k?0:1)}));
const nx=fI+1;if(nx>=fD.length){setFD(shuffle(learnedW()));setFI(0)}else setFI(nx);setFS(false)};
const fCard=fD[fI]||["","",""];const fTot=fSt.y+fSt.n;const fPct=fTot?Math.round(fSt.y/fTot*100):0;

const sendChat=async()=>{const t=chatIn.trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");
try{const hist=mr.current.slice(-6).flatMap(m=>m.role==="u"?[{role:"user",content:m.text}]:[{role:"assistant",content:m.pt}]);
hist.push({role:"user",content:t});
const r=await askAI(`You are Bia, warm Brazilian Portuguese tutor. Reply ONLY raw JSON:{"pt":"reply in PT","en":"English","tip":"tip or null","fix":"correction or null"} Brazilian PT only. Be warm, fun.`,
hist.map(m=>`${m.role}:${m.content}`).join("\n"));
setMsgs(p=>[...p,{id:nid.current++,role:"a",...r}]);addXP(3);speakPT(r.pt,()=>setSpk(true),()=>setSpk(false))}
catch{setErr("Couldn't reach Bia — try again.")}finally{setBusy(false)}};

const totalW=D.length*10;const doneW=prog.units.length*10;const pct=Math.round((doneW/totalW)*100);
const acc=prog.exDone?Math.round((prog.exOk/prog.exDone)*100):0;
const Ring=({pct:p,sz=160,sw=14})=>{const r=(sz-sw)/2;const c=2*Math.PI*r;
return<svg width={sz} height={sz} style={{display:"block",margin:"0 auto"}}><circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="rgba(11,74,62,.08)" strokeWidth={sw}/>
<circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="url(#ringGrad)" strokeWidth={sw} strokeDasharray={c} strokeDashoffset={c*(1-(p||0)/100)}
strokeLinecap="round" transform={`rotate(-90 ${sz/2} ${sz/2})`} style={{transition:"stroke-dashoffset 1.5s ease-out",filter:"drop-shadow(0 0 8px rgba(11,74,62,.25))"}}/>
<defs><linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0B4A3E"/><stop offset="100%" stopColor="#2D8B6E"/></linearGradient></defs></svg>};

const W=typeof window!=="undefined"&&window.innerWidth>=768;

return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:"linear-gradient(135deg,#E8E2D6 0%,#F2EDE4 30%,#E5DFD3 60%,#F0EBE1 100%)",overflow:"hidden",fontFamily:"system-ui,-apple-system,sans-serif",position:"relative"}}>
<style>{`
@keyframes slideIn{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes pop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes correct{0%{box-shadow:0 0 0 0 rgba(76,175,80,.6)}50%{box-shadow:0 0 40px 12px rgba(76,175,80,.25)}100%{box-shadow:none}}
@keyframes wrong{0%,100%{transform:translateX(0)}15%,45%,75%{transform:translateX(-8px)}30%,60%,90%{transform:translateX(8px)}}
@keyframes xpFloat{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-80px) scale(1.4);opacity:0}}
@keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(11,74,62,.3)}50%{box-shadow:0 0 40px rgba(11,74,62,.5)}}
@keyframes confettiFall{0%{transform:translateY(0) rotate(0deg) scale(1);opacity:1}100%{transform:translateY(100vh) rotate(720deg) scale(.3);opacity:0}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes db{0%,60%,100%{opacity:.3}30%{opacity:1}}
.ld{width:8px;height:8px;border-radius:50%;background:#0B4A3E}.ld:nth-child(1){animation:db 1.2s 0s infinite}.ld:nth-child(2){animation:db 1.2s .2s infinite}.ld:nth-child(3){animation:db 1.2s .4s infinite}
.wrap{max-width:${W?720:480}px;margin:0 auto;width:100%;padding:0 ${W?32:0}px}
.cd{background:rgba(255,255,255,.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.7);box-shadow:0 4px 30px rgba(0,0,0,.06),0 1px 3px rgba(0,0,0,.04);border-radius:20px;transition:transform .2s,box-shadow .2s}
.cd:hover{${W?"transform:translateY(-2px);box-shadow:0 8px 40px rgba(0,0,0,.1)":""}}
.cd:active{transform:scale(.98)}
.bt{transition:all .2s;cursor:pointer;border:none;font-family:inherit}.bt:active{transform:scale(.94)}
.bt:hover{${W?"filter:brightness(1.05)":""}}
.opt{transition:all .25s;cursor:pointer;border:2px solid rgba(0,0,0,.08);border-radius:16px;padding:${W?"18px 22px":"15px 18px"};font-size:${W?18:16}px;font-weight:500;text-align:left;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);font-family:Georgia,serif}
.opt:hover{${W?"transform:translateY(-1px);box-shadow:0 4px 20px rgba(0,0,0,.08);border-color:rgba(11,74,62,.2)":""}}
.opt:active{transform:scale(.97)}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px}
input:focus{outline:3px solid rgba(11,74,62,.3);outline-offset:2px}
`}</style>

{showConfetti&&<Confetti/>}
{xpPop&&<div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",zIndex:100,animation:"xpFloat 1.2s ease-out forwards",pointerEvents:"none"}}>
<div style={{background:"linear-gradient(135deg,#FFD700,#FF8C00)",color:"#fff",fontWeight:900,fontSize:22,padding:"10px 28px",borderRadius:30,boxShadow:"0 6px 24px rgba(255,140,0,.5)",fontFamily:"Georgia,serif",letterSpacing:"1px"}}>+{xpPop} XP</div></div>}

{/* HEADER */}
<div style={{background:"linear-gradient(135deg,#061F1A 0%,#0B4A3E 35%,#1B6B56 70%,#2D8B6E 100%)",color:"#fff",padding:`${W?"22px 40px 18px":"18px 20px 16px"}`,flexShrink:0,boxShadow:"0 4px 30px rgba(0,0,0,.25)"}}>
<div className="wrap" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div><div style={{fontSize:W?32:24,fontWeight:700,fontFamily:"Georgia,serif",letterSpacing:"-1px",textShadow:"0 2px 12px rgba(0,0,0,.3)"}}>Fala Comigo</div>
<div style={{fontSize:W?13:11,opacity:.5,marginTop:3}}>{doneW} words learned · Brazilian Portuguese</div></div>
<div style={{display:"flex",gap:10,alignItems:"center"}}>
{prog.streak>0&&<div style={{background:"rgba(255,150,0,.2)",border:"1px solid rgba(255,150,0,.35)",borderRadius:24,padding:"6px 14px",fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:5}}>🔥 {prog.streak}</div>}
<div style={{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.18)",borderRadius:24,padding:"6px 16px",fontSize:15,fontWeight:700}}>⭐ {prog.xp}</div>
</div></div></div>

<div style={{flex:1,overflowY:"auto"}}>
<div className="wrap">

{/* ═══ LEVELS ═══ */}
{tab==="learn"&&lv==="levels"&&<div style={{padding:`${W?"28px 0":"18px 0"}`,display:"flex",flexDirection:"column",gap:14,animation:"fadeIn .4s"}}>
<div style={{fontSize:W?15:13,color:"#999",padding:"0 2px"}}>{prog.units.length}/{D.length} units complete · {prog.levels.length}/{LV.length} levels unlocked</div>
{LV.map((name,l)=>{const open=isOpen(l);const units=lvUnits(l);const done=units.filter(u=>isDone(u.idx)).length;const passed=prog.levels.includes(l+1);
return<button key={l} onClick={()=>{if(open){setSelL(l);setLv("units")}}} disabled={!open}
className="cd bt" style={{padding:W?"22px 28px":"18px 20px",textAlign:"left",width:"100%",opacity:open?1:.35,display:"flex",alignItems:"center",gap:W?20:16}}>
<div style={{width:W?60:52,height:W?60:52,borderRadius:W?18:16,background:passed?"linear-gradient(135deg,#A5D6B0,#66BB6A)":open?`linear-gradient(135deg,${LC[l]},${LC[Math.min(l+1,4)]})`:"#ccc",
display:"flex",alignItems:"center",justifyContent:"center",fontSize:passed?26:W?28:24,flexShrink:0,
boxShadow:open?`0 6px 20px ${LC[l]}40`:"none",color:passed?"#fff":"#fff",fontWeight:700}}>
{!open?"🔒":passed?"✓":LI[l]}</div>
<div style={{flex:1}}>
<div style={{fontSize:W?20:17,fontWeight:700,fontFamily:"Georgia,serif",color:open?"#1a1a1a":"#aaa"}}>Level {l+1}: {name}</div>
<div style={{fontSize:W?14:12,color:"#888",marginTop:5}}>{open?`${done}/${units.length} units complete`:"Pass previous level test"}</div>
{open&&<div style={{background:"rgba(11,74,62,.08)",borderRadius:8,height:8,marginTop:10,overflow:"hidden"}}>
<div style={{height:"100%",borderRadius:8,background:`linear-gradient(90deg,${LC[l]},${LC[Math.min(l+1,4)]})`,width:`${(done/units.length)*100}%`,transition:"width .8s ease-out"}}/></div>}
</div></button>})}
</div>}

{/* ═══ UNITS ═══ */}
{tab==="learn"&&lv==="units"&&<div style={{padding:`${W?"28px 0":"18px 0"}`,animation:"fadeIn .3s"}}>
<button onClick={()=>setLv("levels")} className="bt" style={{background:"none",fontSize:W?28:24,color:"#0B4A3E",padding:0,marginBottom:16}}>‹ {LV[selL]}</button>
<div style={{display:"flex",flexDirection:"column",gap:12}}>
{lvUnits(selL).map(u=>{const dn=isDone(u.idx);
return<button key={u.idx} onClick={()=>startUnit(u.idx)} className="cd bt" style={{padding:W?"20px 24px":"16px 18px",textAlign:"left",width:"100%",display:"flex",alignItems:"center",gap:16}}>
<div style={{width:W?48:40,height:W?48:40,borderRadius:14,background:dn?"linear-gradient(135deg,#A5D6B0,#66BB6A)":`linear-gradient(135deg,${LC[selL]}18,${LC[selL]}08)`,
display:"flex",alignItems:"center",justifyContent:"center",fontSize:dn?18:15,color:dn?"#fff":"#0B4A3E",fontWeight:700,flexShrink:0}}>{dn?"✓":u.idx+1}</div>
<div style={{flex:1}}><div style={{fontSize:W?18:16,fontWeight:600}}>{u.n}</div>
<div style={{fontSize:W?14:12,color:"#888",marginTop:3}}>Learn → Review → Test</div></div></button>})}
{(()=>{const ad=allDone(selL);const passed=prog.levels.includes(selL+1);
return selL<LV.length-1&&<button onClick={()=>{if(ad&&!passed)startTest(selL)}} disabled={!ad||passed}
className="bt" style={{background:passed?"linear-gradient(135deg,#A5D6B0,#66BB6A)":ad?"linear-gradient(135deg,#0B4A3E,#1B6B56)":"rgba(11,74,62,.08)",
borderRadius:20,padding:W?22:18,textAlign:"center",width:"100%",opacity:ad?1:.4,marginTop:8,color:passed?"#fff":ad?"#fff":"#999",
boxShadow:ad&&!passed?"0 6px 24px rgba(11,74,62,.3)":"none"}}>
<div style={{fontSize:W?18:16,fontWeight:700}}>{passed?"✓ Test Passed":"🏆 Level Test"}</div>
{!passed&&<div style={{fontSize:13,opacity:.7,marginTop:5}}>{ad?"15 questions · 80% to pass":"Complete all units"}</div>}
</button>})()}
</div></div>}

{/* ═══ LEARN PHASE ═══ */}
{tab==="learn"&&lv==="unit"&&phase==="learn"&&curWord&&<div key={`l-${wI}-${pass}`} style={{padding:`${W?"32px 0":"20px 0"}`,display:"flex",flexDirection:"column",gap:20,animation:"slideIn .4s",minHeight:"65vh",justifyContent:"center"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setLv("units")} className="bt" style={{background:"none",fontSize:24,color:"#0B4A3E",padding:0}}>✕</button>
<div style={{fontSize:14,color:pass===2?"#C9982E":"#888",fontWeight:600}}>{pass===2?"Review":"Learn"} · {wI+1}/{curUnit.w.length}</div><div/></div>
<div style={{background:pass===2?"rgba(201,152,46,.12)":"rgba(11,74,62,.08)",borderRadius:10,height:8}}>
<div style={{height:"100%",borderRadius:10,background:pass===2?"linear-gradient(90deg,#C9982E,#D4A027)":"linear-gradient(90deg,#0B4A3E,#2D8B6E)",width:`${((wI+1)/curUnit.w.length)*100}%`,transition:"width .5s"}}/></div>

{pass===2&&wI===0&&<div style={{textAlign:"center",padding:"8px 0",animation:"pop .4s"}}>
<span style={{background:"linear-gradient(135deg,#C9982E,#D4A027)",color:"#fff",padding:"6px 20px",borderRadius:20,fontSize:13,fontWeight:700}}>🔄 Round 2 — Let's reinforce!</span></div>}

<div className="cd" style={{padding:W?"48px 40px":"36px 24px",textAlign:"center",flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:8}}>
<div style={{fontSize:12,textTransform:"uppercase",letterSpacing:3,color:pass===2?"#C9982E":"#999",fontWeight:700}}>{pass===2?"Remember this?":"New word"}</div>
<div style={{fontSize:W?48:38,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12}}>{curWord[0]}</div>
<div style={{fontSize:W?26:22,color:"#0B4A3E",fontWeight:600,marginTop:12}}>{curWord[1]}</div>
<div style={{fontSize:W?18:16,color:"#0B4A3E",fontFamily:"monospace",marginTop:14,opacity:.7}}>/{curWord[2]}/</div>
<button onClick={()=>speakPT(curWord[0],()=>setSpk(true),()=>setSpk(false))} className="bt"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:W?90:80,height:W?90:80,fontSize:W?36:32,
margin:"24px auto 0",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 30px rgba(11,74,62,.35)",animation:"glow 2.5s infinite"}}>🔊</button>
<div style={{fontSize:13,color:"#bbb",marginTop:10}}>Listen and repeat out loud</div></div>

<div style={{display:"flex",gap:12}}>
{wI>0&&<button onClick={prevWord} className="bt" style={{flex:1,padding:W?18:16,borderRadius:16,background:"rgba(255,255,255,.9)",border:"1px solid rgba(0,0,0,.08)",fontSize:W?18:16,fontWeight:600,color:"#666"}}>← Back</button>}
<button onClick={nextWord} className="bt" style={{flex:2,padding:W?18:16,borderRadius:16,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",fontSize:W?18:16,fontWeight:700,color:"#fff",
boxShadow:"0 6px 20px rgba(11,74,62,.3)",animation:wI+1>=curUnit.w.length&&pass===2?"pulse 1.5s infinite":"none"}}>
{wI+1>=curUnit.w.length?(pass===1?"Start Round 2 🔄":"Start Review →"):"Next →"}</button></div>
</div>}

{/* ═══ FLASH REVIEW ═══ */}
{tab==="learn"&&lv==="unit"&&phase==="flash"&&curUnit&&<div key={`f-${wI}`} style={{padding:`${W?"32px 0":"20px 0"}`,display:"flex",flexDirection:"column",gap:20,animation:"slideIn .3s",minHeight:"65vh",justifyContent:"center"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setLv("units")} className="bt" style={{background:"none",fontSize:24,color:"#0B4A3E",padding:0}}>✕</button>
<div style={{fontSize:14,color:"#C9982E",fontWeight:600}}>Review · {wI+1}/{curUnit.w.length}</div><div/></div>

<div onClick={()=>!fR&&setFR(true)} className="cd" style={{padding:fR?(W?"40px 32px":"32px 24px"):(W?"64px 32px":"56px 24px"),textAlign:"center",cursor:fR?"default":"pointer",flex:1,
display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10}}>
{!fR&&<><div style={{fontSize:12,textTransform:"uppercase",letterSpacing:3,color:"#C9982E",fontWeight:700}}>Do you remember?</div>
<div style={{fontSize:W?48:42,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginTop:12}}>{curUnit.w[wI][0]}</div>
<div style={{fontSize:16,color:"#bbb",marginTop:24}}>Tap to reveal</div></>}
{fR&&<><div style={{fontSize:W?34:30,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",animation:"fadeIn .3s"}}>{curUnit.w[wI][0]}</div>
<div style={{fontSize:W?24:22,color:"#0B4A3E",fontWeight:600,marginTop:8,animation:"fadeIn .3s .1s both"}}>{curUnit.w[wI][1]}</div>
<div style={{fontSize:W?17:15,color:"#0B4A3E",fontFamily:"monospace",marginTop:10,animation:"fadeIn .3s .2s both"}}>/{curUnit.w[wI][2]}/</div>
<button onClick={e=>{e.stopPropagation();speakPT(curUnit.w[wI][0],()=>setSpk(true),()=>setSpk(false))}} className="bt"
style={{marginTop:16,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:12,padding:"12px 26px",fontSize:15,boxShadow:"0 4px 16px rgba(11,74,62,.25)",animation:"fadeIn .3s .3s both"}}>🔊 Hear it</button></>}</div>

{fR&&<div style={{display:"flex",gap:12,animation:"fadeIn .3s"}}>
<button onClick={()=>{setFR(false);nextFlash(false)}} className="bt" style={{flex:1,padding:W?18:16,borderRadius:16,border:"2px solid #EF5350",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",fontSize:W?17:16,fontWeight:700,color:"#C62828"}}>✗ Didn't know</button>
<button onClick={()=>{setFR(false);nextFlash(true)}} className="bt" style={{flex:1,padding:W?18:16,borderRadius:16,border:"2px solid #4CAF50",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",fontSize:W?17:16,fontWeight:700,color:"#2E7D32"}}>✓ Got it</button></div>}
</div>}

{/* ═══ TEST / EXERCISES ═══ */}
{tab==="learn"&&(lv==="unit"&&phase==="test"||lv==="test")&&curEx&&<div key={`e-${eI}`} style={{padding:`${W?"32px 0":"20px 0"}`,display:"flex",flexDirection:"column",gap:18,animation:"slideIn .35s"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setLv("units")} className="bt" style={{background:"none",fontSize:24,color:"#0B4A3E",padding:0}}>✕</button>
<div style={{fontSize:14,color:"#888",fontWeight:600}}>Test · {eI+1}/{exs.length}</div>
<div style={{fontSize:16,fontWeight:800,color:"#0B4A3E"}}>{eScore}✓</div></div>
<div style={{background:"rgba(11,74,62,.08)",borderRadius:10,height:8}}><div style={{height:"100%",borderRadius:10,background:"linear-gradient(90deg,#0B4A3E,#2D8B6E)",width:`${(eI/exs.length)*100}%`,transition:"width .5s"}}/></div>

<div className="cd" style={{padding:W?"32px 28px":"24px 22px",textAlign:"center",
animation:eAns!==null?(norm(String(eAns))===norm(String(curEx.a))||(curEx.t==="true_false"&&eAns===curEx.a)?"correct .6s":"wrong .4s"):"pop .3s"}}>
<div style={{fontSize:12,textTransform:"uppercase",letterSpacing:3,color:"#999",marginBottom:14,fontWeight:700}}>
{curEx.t==="pick_en"?"What does this mean?":curEx.t==="pick_pt"?"Say in Portuguese":
curEx.t==="listen"?"What do you hear?":curEx.t==="type_pt"?"Type in Portuguese":
curEx.t==="true_false"?"True or false?":"Type what you hear"}</div>
{(curEx.t==="listen"||curEx.t==="listen_type")?
<button onClick={()=>speakPT(curEx.audio,()=>setSpk(true),()=>setSpk(false))} className="bt"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:"50%",width:W?90:80,height:W?90:80,fontSize:W?36:32,
margin:"8px auto",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 30px rgba(11,74,62,.35)",animation:"glow 2s infinite"}}>🔊</button>
:curEx.t==="true_false"?<div><div style={{fontSize:W?32:28,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{curEx.q}</div>
<div style={{fontSize:W?22:20,color:"#888",marginTop:12,fontFamily:"Georgia,serif"}}>= {curEx.shown}?</div></div>
:<div style={{fontSize:W?32:28,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{curEx.q}</div>}</div>

{(curEx.t==="pick_en"||curEx.t==="pick_pt"||curEx.t==="listen")&&
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{curEx.opts.map((o,i)=>{const isOk=norm(o)===norm(curEx.a);const isPk=eAns!==null&&norm(o)===norm(String(eAns));const rv=eAns!==null;
let bg="rgba(255,255,255,.95)",bd="rgba(0,0,0,.08)",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={i} onClick={()=>answerEx(o)} disabled={rv} className="opt"
style={{background:bg,borderColor:bd,color:tc,animation:rv&&isPk&&!isOk?"wrong .4s":"none"}}>{o}</button>})}</div>}

{curEx.t==="true_false"&&<div style={{display:"flex",gap:12}}>
{[true,false].map(v=>{const rv=eAns!==null;const isOk=v===curEx.a;const isPk=eAns===v;
let bg="rgba(255,255,255,.95)",bd="rgba(0,0,0,.08)",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={String(v)} onClick={()=>answerEx(v)} disabled={rv} className="bt"
style={{flex:1,background:bg,border:`2px solid ${bd}`,borderRadius:16,padding:W?20:18,fontSize:W?20:18,fontWeight:700,color:tc}}>{v?"✓ True":"✗ False"}</button>})}</div>}

{(curEx.t==="type_pt"||curEx.t==="listen_type")&&<div>
<div style={{display:"flex",gap:10}}>
<input value={typeIn} onChange={e=>setTypeIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!typed)submitType()}}
disabled={typed} placeholder={curEx.t==="listen_type"?"Type what you hear...":"Type in Portuguese..."}
style={{flex:1,padding:W?"18px 22px":"15px 18px",borderRadius:16,border:`2px solid ${typed?(norm(typeIn)===norm(curEx.a)?"#4CAF50":"#EF5350"):"rgba(0,0,0,.08)"}`,
fontSize:W?18:17,fontFamily:"Georgia,serif",background:typed?(norm(typeIn)===norm(curEx.a)?"#E8F5E9":"#FFEBEE"):"rgba(255,255,255,.95)",transition:"all .2s"}}/>
{!typed&&<button onClick={submitType} disabled={!typeIn.trim()} className="bt"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"15px 24px",fontSize:W?18:16,fontWeight:700,
boxShadow:"0 4px 16px rgba(11,74,62,.3)"}}>→</button>}</div>
{typed&&norm(typeIn)!==norm(curEx.a)&&<div className="cd" style={{marginTop:12,padding:"14px 18px",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",
fontSize:W?18:16,color:"#2E7D32",fontFamily:"Georgia,serif",animation:"fadeIn .3s"}}>Correct: <strong>{curEx.a}</strong></div>}
</div>}
</div>}

{/* ═══ RESULT ═══ */}
{tab==="learn"&&phase==="result"&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,minHeight:400,animation:"pop .5s"}}>
<div style={{fontSize:W?72:56}}>{eScore/exs.length>=.8?"🏆":eScore/exs.length>=.5?"👏":"💪"}</div>
{isTest&&<div style={{fontSize:W?20:16,fontWeight:700,color:eScore>=Math.ceil(exs.length*.8)?"#2E7D32":"#D94535",fontFamily:"Georgia,serif"}}>
{eScore>=Math.ceil(exs.length*.8)?`Level ${selL+2} Unlocked! 🔓`:"Need 80% — try again!"}</div>}
{!isTest&&<div style={{fontSize:W?20:16,fontWeight:700,color:"#2E7D32",fontFamily:"Georgia,serif"}}>Unit Complete! 🎉</div>}
<div style={{fontSize:W?64:52,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{eScore}/{exs.length}</div>
<div style={{fontSize:W?18:15,color:"#888"}}>+{eScore*2} XP earned</div>
<div style={{display:"flex",gap:12,marginTop:10}}>
{isTest&&eScore<Math.ceil(exs.length*.8)&&<button onClick={()=>startTest(selL)} className="bt" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"16px 32px",fontSize:W?18:16,fontWeight:700,boxShadow:"0 6px 20px rgba(11,74,62,.3)"}}>Retry</button>}
<button onClick={()=>{setLv("units");setPhase("learn")}} className="bt" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"16px 32px",fontSize:W?18:16,fontWeight:700,boxShadow:"0 6px 20px rgba(11,74,62,.3)"}}>Continue</button>
</div></div>}

{/* ═══ PRACTICE ═══ */}
{tab==="practice"&&!fOn&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24,minHeight:400,animation:"fadeIn .4s"}}>
<div style={{fontSize:W?72:60}}>🃏</div>
<div style={{fontSize:W?28:24,fontWeight:700,fontFamily:"Georgia,serif"}}>Flashcards</div>
<div style={{fontSize:W?16:14,color:"#888"}}>{learnedW().length} words from completed units</div>
{learnedW().length>0?
<button onClick={startF} className="bt" style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:20,padding:"18px 52px",fontSize:W?20:17,fontWeight:700,boxShadow:"0 8px 30px rgba(11,74,62,.3)"}}>Start</button>
:<div style={{fontSize:15,color:"#999",textAlign:"center",maxWidth:320}}>Complete your first unit in Learn to unlock flashcard practice!</div>}
</div>}

{tab==="practice"&&fOn&&!fDn&&<div style={{padding:W?"28px 0":"18px 0",display:"flex",flexDirection:"column",gap:16,minHeight:400,animation:"fadeIn .3s"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setFOn(false)} className="bt" style={{background:"none",fontSize:26,color:"#0B4A3E",padding:0}}>‹</button>
<div style={{display:"flex",gap:16,fontSize:W?16:14}}><span style={{color:"#2E7D32",fontWeight:700}}>✓{fSt.y}</span><span style={{color:"#D94535",fontWeight:700}}>✗{fSt.n}</span></div>
<button onClick={()=>setFDn(true)} className="bt" style={{background:"rgba(255,255,255,.8)",border:"1px solid rgba(0,0,0,.08)",borderRadius:12,padding:"7px 18px",fontSize:14}}>End</button></div>
<div key={fI} onClick={()=>!fS&&setFS(true)} className="cd" style={{padding:fS?(W?"36px 32px":"28px 22px"):(W?"64px 32px":"56px 24px"),textAlign:"center",cursor:fS?"default":"pointer",flex:1,
display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:12,animation:"slideIn .3s"}}>
{!fS&&<><div style={{fontSize:W?52:46,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{fCard[0]}</div><div style={{fontSize:16,color:"#bbb",marginTop:24}}>Tap to reveal</div></>}
{fS&&<><div style={{fontSize:W?36:30,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",animation:"fadeIn .3s"}}>{fCard[0]}</div>
<div style={{fontSize:W?26:22,color:"#0B4A3E",fontWeight:700,marginTop:8,animation:"fadeIn .3s .1s both"}}>{fCard[1]}</div>
<div style={{fontSize:W?17:15,color:"#0B4A3E",fontFamily:"monospace",marginTop:10,animation:"fadeIn .3s .2s both"}}>/{fCard[2]}/</div>
<button onClick={e=>{e.stopPropagation();speakPT(fCard[0],()=>setSpk(true),()=>setSpk(false))}} className="bt"
style={{marginTop:18,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:14,padding:"12px 28px",fontSize:16,boxShadow:"0 4px 16px rgba(11,74,62,.25)",animation:"fadeIn .3s .3s both"}}>🔊</button></>}</div>
{fS&&<div style={{display:"flex",gap:12,animation:"fadeIn .3s"}}>
<button onClick={()=>rateF(false)} className="bt" style={{flex:1,padding:W?18:16,borderRadius:16,border:"2px solid #EF5350",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",fontSize:W?17:16,fontWeight:700,color:"#C62828"}}>✗ Learning</button>
<button onClick={()=>rateF(true)} className="bt" style={{flex:1,padding:W?18:16,borderRadius:16,border:"2px solid #4CAF50",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",fontSize:W?17:16,fontWeight:700,color:"#2E7D32"}}>✓ Got it</button></div>}</div>}

{tab==="practice"&&fOn&&fDn&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,minHeight:400,animation:"pop .5s"}}>
<div style={{fontSize:W?64:56}}>{fPct>=80?"🏆":"💪"}</div>
<div style={{fontSize:W?28:24,fontWeight:700,fontFamily:"Georgia,serif"}}>Session Done</div>
<div className="cd" style={{padding:"24px 32px",width:"100%",maxWidth:360}}>
{[["Cards",fTot,"#1a1a1a"],["✓ Got it",fSt.y,"#2E7D32"],["✗ Learning",fSt.n,"#C62828"],["Accuracy",fPct+"%","#0B4A3E"]].map(([l,v,c],i)=>
<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderTop:i?"1px solid rgba(0,0,0,.06)":"none"}}>
<span style={{color:"#888",fontSize:W?16:15}}>{l}</span><span style={{fontWeight:700,fontSize:W?16:15,color:c}}>{v}</span></div>)}</div>
<div style={{display:"flex",gap:12}}>
<button onClick={startF} className="bt" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",borderRadius:16,padding:"16px 32px",fontSize:W?17:16,fontWeight:700}}>Again</button>
<button onClick={()=>{setFOn(false);setFDn(false)}} className="bt" style={{background:"rgba(255,255,255,.9)",border:"1px solid rgba(0,0,0,.08)",borderRadius:16,padding:"16px 32px",fontSize:W?17:16}}>Done</button></div></div>}

{/* ═══ STATS ═══ */}
{tab==="stats"&&<div style={{padding:W?"28px 0":"20px 0",display:"flex",flexDirection:"column",gap:18,animation:"fadeIn .4s"}}>
<div className="cd" style={{padding:W?"36px 28px":"28px 22px",textAlign:"center"}}>
<div style={{position:"relative",display:"inline-block"}}><Ring pct={pct}/>
<div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
<div style={{fontSize:W?44:36,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{pct}%</div>
<div style={{fontSize:12,color:"#888",marginTop:3}}>Complete</div></div></div>
<div style={{fontSize:W?16:14,color:"#888",marginTop:14}}>{doneW} of {totalW} words learned</div></div>

<div style={{display:"grid",gridTemplateColumns:W?"1fr 1fr 1fr":"1fr 1fr",gap:12}}>
{[[`⭐ ${prog.xp}`,"Total XP","#C9982E"],[`📚 ${doneW}`,"Words","#0B4A3E"],
[`🎯 ${acc}%`,"Accuracy","#2E7D32"],[`⏱️ ${fmt(prog.time||0)}`,"Time","#666"],
[`🔥 ${prog.streak||0}`,"Streak","#D94535"],[`📝 ${prog.exDone||0}`,"Exercises","#1B6B56"]].map(([val,label,c],i)=>
<div key={i} className="cd" style={{padding:W?"22px 20px":"18px 16px",textAlign:"center",animation:`fadeIn .4s ${i*.06}s both`}}>
<div style={{fontSize:W?26:22,fontWeight:700,color:c,fontFamily:"Georgia,serif"}}>{val}</div>
<div style={{fontSize:W?12:11,color:"#999",marginTop:6}}>{label}</div></div>)}</div>

<div className="cd" style={{padding:W?"22px 24px":"18px 20px"}}>
<div style={{fontSize:W?18:16,fontWeight:700,fontFamily:"Georgia,serif",marginBottom:16}}>📅 This Week</div>
{(()=>{const days=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5);
days.push({date:d.toISOString().split('T')[0],label:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()],
isToday:i===0,...((prog.daily||{})[d.toISOString().split('T')[0]]||{ex:0,ok:0,time:0,flash:0})})}
const maxEx=Math.max(...days.map(d=>d.ex+d.flash),1);
return<div style={{display:"flex",flexDirection:"column",gap:10}}>
{days.map((d,i)=>{const total=d.ex+d.flash;const pctBar=Math.round((total/maxEx)*100);
return<div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
<div style={{width:W?48:36,fontSize:W?14:12,fontWeight:d.isToday?700:500,color:d.isToday?"#0B4A3E":"#999"}}>{d.isToday?"Today":d.label}</div>
<div style={{flex:1,background:"rgba(11,74,62,.06)",borderRadius:8,height:W?28:24,overflow:"hidden"}}>
{total>0&&<div style={{height:"100%",borderRadius:8,width:`${Math.max(pctBar,12)}%`,
background:d.isToday?"linear-gradient(90deg,#0B4A3E,#2D8B6E)":"linear-gradient(90deg,#1B6B56,#2D8B6E80)",
display:"flex",alignItems:"center",paddingLeft:10,transition:"width .6s"}}>
<span style={{fontSize:W?13:11,fontWeight:700,color:"#fff"}}>{total}</span></div>}</div>
<div style={{width:W?50:40,textAlign:"right",fontSize:W?13:11,color:d.time?"#2E7D32":"#ccc",fontWeight:600}}>{d.time?fmt(d.time):"—"}</div>
</div>})}
</div>})()}</div></div>}

{/* ═══ TALK ═══ */}
{tab==="talk"&&msgs.length===0&&<div style={{padding:W?"40px 0":"28px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,minHeight:400,animation:"fadeIn .4s"}}>
<div style={{fontSize:W?72:60}}>🇧🇷</div>
<div style={{fontSize:W?26:22,fontWeight:700,fontFamily:"Georgia,serif"}}>Chat with Bia</div>
<div style={{fontSize:W?16:14,color:"#888"}}>Practice in Portuguese or English</div>
<button onClick={()=>setMsgs([{id:nid.current++,role:"a",pt:"Oi! Eu sou a Bia 😊 Tô aqui pra te ajudar!",en:"Hi! I'm Bia 😊 I'm here to help!"}])}
className="bt" style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:20,padding:"18px 48px",fontSize:W?20:17,fontWeight:700,boxShadow:"0 8px 30px rgba(11,74,62,.3)"}}>Start</button></div>}

{tab==="talk"&&msgs.length>0&&<div style={{padding:"16px 0",display:"flex",flexDirection:"column",gap:14}}>
{msgs.map(m=>m.role==="a"?<div key={m.id} style={{display:"flex",gap:12,maxWidth:"85%",animation:"fadeIn .3s"}}>
<div style={{width:W?40:34,height:W?40:34,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",
display:"flex",alignItems:"center",justifyContent:"center",fontSize:W?16:14,color:"#fff",fontWeight:700,marginTop:2}}>B</div>
<div style={{display:"flex",flexDirection:"column",gap:6}}>
<div className="cd" style={{borderRadius:"4px 18px 18px 18px",padding:W?"16px 20px":"13px 16px"}}>
<div style={{fontSize:W?18:16,lineHeight:1.6,color:"#1a1a1a",fontFamily:"Georgia,serif"}}>{m.pt}</div>
<div style={{marginTop:10,paddingTop:10,borderTop:"1px solid rgba(0,0,0,.06)",fontSize:W?15:13,color:"#888",fontStyle:"italic"}}>{m.en}</div></div>
{m.fix&&<div style={{background:"linear-gradient(135deg,#FFF3E0,#FFE0B2)",border:"1px solid #FFBB66",borderRadius:12,padding:"8px 14px",fontSize:W?14:12,color:"#704000"}}>✏️ {m.fix}</div>}
{m.tip&&<div style={{background:"linear-gradient(135deg,#FFFBEA,#FFF8E1)",border:"1px solid #EDCC4A",borderRadius:12,padding:"8px 14px",fontSize:W?14:12,color:"#5D4500"}}>💡 {m.tip}</div>}
</div></div>
:<div key={m.id} style={{alignSelf:"flex-end",maxWidth:"80%",animation:"fadeIn .3s"}}>
<div style={{background:"linear-gradient(135deg,#C8E6CF,#A5D6B0)",borderRadius:"18px 4px 18px 18px",padding:W?"14px 20px":"12px 16px",fontSize:W?18:16,color:"#1a1a1a",lineHeight:1.5}}>{m.text}</div></div>)}
{busy&&<div style={{display:"flex",gap:12}}><div style={{width:W?40:34,height:W?40:34,borderRadius:"50%",background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:W?16:14,color:"#fff",fontWeight:700}}>B</div>
<div className="cd" style={{borderRadius:"4px 18px 18px 18px",padding:"16px 20px",display:"flex",gap:6,alignItems:"center"}}><div className="ld"/><div className="ld"/><div className="ld"/></div></div>}
<div ref={btm}/></div>}
</div></div>

{err&&<div style={{margin:"0 16px 8px",padding:"12px 16px",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",border:"1px solid #EF5350",borderRadius:14,fontSize:14,color:"#C62828",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
{err}<button onClick={()=>setErr(null)} className="bt" style={{background:"none",fontSize:20,color:"#C62828"}}>×</button></div>}

{tab==="talk"&&msgs.length>0&&<div className="wrap" style={{background:"rgba(255,255,255,.92)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(0,0,0,.06)",padding:"14px 0 16px",flexShrink:0}}>
<div style={{display:"flex",gap:10,padding:"0 16px"}}>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder="Type in Portuguese or English..." style={{flex:1,padding:W?"15px 20px":"13px 16px",borderRadius:16,border:"1px solid rgba(0,0,0,.08)",fontSize:W?17:16}}/>
<button onClick={sendChat} disabled={busy||!chatIn.trim()} className="bt"
style={{background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",color:"#fff",borderRadius:16,padding:"13px 22px",fontSize:W?17:15,fontWeight:700,boxShadow:"0 4px 16px rgba(11,74,62,.25)"}}>→</button>
<button onClick={()=>setMsgs([])} className="bt" style={{background:"none",fontSize:22,color:"#888"}}>↻</button>
</div></div>}

<div style={{display:"flex",borderTop:"1px solid rgba(0,0,0,.06)",background:"rgba(255,255,255,.92)",backdropFilter:"blur(20px)",flexShrink:0}}>
<div className="wrap" style={{display:"flex"}}>
{[{id:"learn",ic:"📚",lb:"Learn"},{id:"practice",ic:"🃏",lb:"Practice"},{id:"stats",ic:"📊",lb:"Stats"},{id:"talk",ic:"💬",lb:"Talk"}].map(t=>
<button key={t.id} onClick={()=>{setTab(t.id);if(t.id==="learn")setLv("levels");if(t.id==="practice"){setFOn(false);setFDn(false)}}}
className="bt" style={{flex:1,padding:W?"14px 0 12px":"12px 0 10px",background:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:3,
color:tab===t.id?"#0B4A3E":"#999",fontWeight:tab===t.id?700:400,fontSize:W?12:11}}>
<span style={{fontSize:W?26:22,transform:tab===t.id?"scale(1.2)":"scale(1)",transition:"transform .25s ease-out"}}>{t.ic}</span><span>{t.lb}</span></button>)}
</div></div>
</div>)}
