import { useState, useRef, useEffect, useCallback } from "react";

// ═══ VERIFIED VOCABULARY — 300 words ═══
const LV=["Foundations","Survival","Everyday","Social","Fluency"];
const LI=["👋","🗺️","🏠","🤝","🎓"];
const LC=["#0B4A3E","#1B6B56","#2D8B6E","#C9982E","#8B5E3C"];

const D=[
{l:0,n:"Greetings",w:[["Oi","Hi","oy"],["Tchau","Bye","chow"],["Bom dia","Good morning","bohn JEE-ah"],["Boa tarde","Good afternoon","BOH-ah TAR-jee"],["Boa noite","Good evening","BOH-ah NOY-chee"],["Tudo bem?","How are you?","TOO-doo bayn"],["Olá","Hello","oh-LAH"],["Até logo","See you later","ah-TEH LAW-goo"],["Até amanhã","See you tomorrow","ah-TEH ah-mah-NYAH"],["Bem-vindo","Welcome","bayn-VEEN-doo"]]},
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
const SOUNDS=[
  {icon:"🅳",title:"D → J",rule:"Before I or E, D sounds like J in 'jeans'",ex:[["cidade","see-DAH-jee"],["dia","JEE-ah"],["onde","OHN-jee"]]},
  {icon:"🅃",title:"T → CH",rule:"Before I or E, T sounds like CH in 'cheese'",ex:[["noite","NOY-chee"],["gente","ZHEN-chee"],["leite","LAY-chee"]]},
  {icon:"🇷",title:"R → H",rule:"Initial R and double RR sound like H in 'house'",ex:[["rio","HEE-oo"],["carro","KAH-hoo"],["rua","HOO-ah"]]},
  {icon:"🅻",title:"L → W",rule:"L at end of syllable sounds like W",ex:[["Brasil","brah-ZEW"],["legal","leh-GOW"],["hospital","ohs-pee-TOW"]]},
  {icon:"👃",title:"Nasal ÃO",rule:"Say 'ow' (like cow) but through your nose",ex:[["não","nown"],["pão","pown"],["coração","koh-rah-SOWN"]]},
  {icon:"🔤",title:"NH = NY",rule:"Like 'ny' in 'canyon'",ex:[["amanhã","ah-mah-NYAH"],["banheiro","bah-NYAY-roo"],["cozinha","koh-ZEEN-yah"]]},
  {icon:"🔤",title:"LH = LY",rule:"Like 'lli' in 'million'",ex:[["filho","FEE-lyoo"],["trabalho","trah-BAH-lyoo"],["olho","OH-lyoo"]]},
  {icon:"🔤",title:"J = ZH",rule:"Like S in 'viSion'",ex:[["hoje","OH-zhee"],["janela","zhah-NEH-lah"],["loja","LOH-zhah"]]},
];

// ═══ HELPERS ═══
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z\s]/g,"").trim();
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const fmt=s=>{if(s<60)return`${s}s`;if(s<3600)return`${Math.floor(s/60)}m`;return`${Math.floor(s/3600)}h ${Math.floor((s%3600)/60)}m`};

function speakPT(t,s,e){window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="pt-BR";u.rate=.85;
const g=()=>{const v=window.speechSynthesis.getVoices();const b=v.find(x=>x.lang==="pt-BR")||v.find(x=>x.lang.startsWith("pt"));
if(b)u.voice=b;u.onstart=()=>s?.();u.onend=()=>e?.();u.onerror=()=>e?.();window.speechSynthesis.speak(u)};
window.speechSynthesis.getVoices().length?g():window.speechSynthesis.addEventListener("voiceschanged",g,{once:true})}

async function askAI(sys,p){const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},
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

// ═══ COMPONENT ═══
export default function App(){
const[tab,setTab]=useState("learn");
const[lv,setLv]=useState("levels");const[selL,setSelL]=useState(0);const[selU,setSelU]=useState(0);
const[exs,setExs]=useState([]);const[eI,setEI]=useState(0);const[eAns,setEAns]=useState(null);const[eScore,setEScore]=useState(0);
const[isTest,setIsTest]=useState(false);const[typeIn,setTypeIn]=useState("");const[typed,setTyped]=useState(false);
const[showSounds,setShowSounds]=useState(false);const[xpPop,setXpPop]=useState(null);
const[fD,setFD]=useState([]);const[fI,setFI]=useState(0);const[fS,setFS]=useState(false);
const[fSt,setFSt]=useState({y:0,n:0});const[fDn,setFDn]=useState(false);const[fOn,setFOn]=useState(false);
const[msgs,setMsgs]=useState([]);const[chatIn,setChatIn]=useState("");const[busy,setBusy]=useState(false);
const[spk,setSpk]=useState(false);const[err,setErr]=useState(null);
const[prog,setProg]=useState({xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:0,lastDate:null,daily:{}});
const[anim,setAnim]=useState("");

const nid=useRef(1),btm=useRef(null),mr=useRef(msgs);mr.current=msgs;
useEffect(()=>{btm.current?.scrollIntoView({behavior:"smooth"})},[msgs,busy]);

useEffect(()=>{try{const raw=window.storage.get("fala-v6").then(r=>r?.value).catch(()=>null);if(raw){const p=JSON.parse(raw);
const today=new Date().toDateString();if(p.lastDate&&p.lastDate!==today){
const y=new Date(Date.now()-864e5).toDateString();p.streak=p.lastDate===y?(p.streak||0)+1:1;p.lastDate=today;}
else if(!p.lastDate){p.lastDate=today;p.streak=1;}setProg(p);window.storage.set("fala-v6",JSON.stringify(p))}
else{const p={xp:0,units:[],levels:[0],exDone:0,exOk:0,time:0,streak:1,lastDate:new Date().toDateString(),daily:{}};
setProg(p);window.storage.set("fala-v6",JSON.stringify(p))}}catch{}},[]);

useEffect(()=>{const iv=setInterval(()=>{setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};daily[d].time=(daily[d].time||0)+30;
const np={...p,time:(p.time||0)+30,daily};
try{window.storage.set("fala-v6",JSON.stringify(np))}catch{};return np})},3e4);return()=>clearInterval(iv)},[]);

const save=useCallback(p=>{setProg(p);try{window.storage.set("fala-v6",JSON.stringify(p))}catch{}},[]);
const addXP=useCallback((n)=>{setProg(p=>{const np={...p,xp:p.xp+n};try{window.storage.set("fala-v6",JSON.stringify(np))}catch{};return np});
setXpPop(n);setTimeout(()=>setXpPop(null),1200)},[]);

const trackDay=useCallback((field,val)=>{setProg(p=>{const d=new Date().toISOString().split('T')[0];
const daily={...(p.daily||{})};if(!daily[d])daily[d]={ex:0,ok:0,time:0,flash:0};
daily[d][field]=(daily[d][field]||0)+val;const np={...p,daily};
try{window.storage.set("fala-v6",JSON.stringify(np))}catch{};return np})},[]);

const isOpen=l=>prog.levels.includes(l);const isDone=i=>prog.units.includes(i);
const lvUnits=l=>D.map((u,i)=>({...u,idx:i})).filter(u=>u.l===l);
const lvWords=l=>D.filter(u=>u.l===l).flatMap(u=>u.w);
const unlocked=()=>D.filter(u=>isOpen(u.l)).flatMap(u=>u.w);
const allDone=l=>lvUnits(l).every(u=>isDone(u.idx));

const startUnit=i=>{const u=D[i];setExs(makeEx(u.w,lvWords(u.l),10));setEI(0);setEAns(null);setEScore(0);setIsTest(false);setTypeIn("");setTyped(false);setSelU(i);setLv("ex");setAnim("slideIn")};
const startTest=l=>{const p=lvWords(l);setExs(makeEx(shuffle(p).slice(0,15),p,15));setEI(0);setEAns(null);setEScore(0);setIsTest(true);setTypeIn("");setTyped(false);setSelL(l);setLv("ex");setAnim("slideIn")};

const answerEx=ans=>{if(eAns!==null)return;const ex=exs[eI];
let correct;if(ex.t==="true_false")correct=ans===ex.a;
else correct=norm(String(ans))===norm(String(ex.a));
setEAns(ans);setAnim(correct?"correct":"wrong");
trackDay("ex",1);if(correct)trackDay("ok",1);
const newOk=prog.exOk+(correct?1:0);const newDone=prog.exDone+1;
setProg(p=>({...p,exDone:newDone,exOk:newOk}));
if(correct)addXP(2);
setTimeout(()=>{if(eI+1>=exs.length){
if(isTest){const passed=(eScore+(correct?1:0))>=Math.ceil(exs.length*.8);
if(passed&&!prog.levels.includes(selL+1)){save({...prog,levels:[...prog.levels,selL+1],xp:prog.xp+20,exDone:newDone,exOk:newOk})}}
else if(!prog.units.includes(selU)){save({...prog,units:[...prog.units,selU],exDone:newDone,exOk:newOk})}
setLv("result");setAnim("pop")}else{setEI(i=>i+1);setEAns(null);setTypeIn("");setTyped(false);setAnim("slideIn")}
},correct?700:1300);if(correct)setEScore(s=>s+1)};

const submitType=()=>{if(!typeIn.trim()||typed)return;setTyped(true);answerEx(typeIn.trim())};
const curEx=exs[eI];const fScore=eScore;const fTotal=exs.length;
const testPass=isTest&&fScore>=Math.ceil(fTotal*.8);

const startF=()=>{setFD(shuffle(unlocked()));setFI(0);setFS(false);setFSt({y:0,n:0});setFDn(false);setFOn(true)};
const rateF=k=>{if(k)addXP(1);trackDay("flash",1);setFSt(s=>({y:s.y+(k?1:0),n:s.n+(k?0:1)}));
const nx=fI+1;if(nx>=fD.length){setFD(shuffle(unlocked()));setFI(0)}else setFI(nx);setFS(false)};
const fCard=fD[fI]||["","",""];const fTot=fSt.y+fSt.n;const fPct=fTot?Math.round(fSt.y/fTot*100):0;

const sendChat=async()=>{const t=chatIn.trim();if(!t||busy)return;
setMsgs(p=>[...p,{id:nid.current++,role:"u",text:t}]);setBusy(true);setChatIn("");
try{const hist=mr.current.slice(-6).flatMap(m=>m.role==="u"?[{role:"user",content:m.text}]:[{role:"assistant",content:m.pt}]);
hist.push({role:"user",content:t});
const r=await askAI(`You are Bia, warm Brazilian Portuguese tutor. Reply ONLY raw JSON:{"pt":"reply in PT","en":"English","tip":"tip or null","fix":"correction or null"} Brazilian PT only. Be warm, fun.`,
hist.map(m=>`${m.role}:${m.content}`).join("\n"));
setMsgs(p=>[...p,{id:nid.current++,role:"a",...r}]);addXP(3);speakPT(r.pt,()=>setSpk(true),()=>setSpk(false))}
catch{setErr("Couldn't reach Bia — try again.")}finally{setBusy(false)}};

const totalWords=D.length*10;const learnedWords=prog.units.length*10;
const pct=Math.round((learnedWords/totalWords)*100);
const acc=prog.exDone?Math.round((prog.exOk/prog.exDone)*100):0;

const Ring=({pct:p,size:sz=140,stroke:sw=12,color="#0B4A3E"})=>{const r=(sz-sw)/2;const c=2*Math.PI*r;
return<svg width={sz} height={sz} style={{display:"block",margin:"0 auto"}}><circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="rgba(11,74,62,.1)" strokeWidth={sw}/>
<circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeDasharray={c} strokeDashoffset={c*(1-(p||0)/100)}
strokeLinecap="round" transform={`rotate(-90 ${sz/2} ${sz/2})`} style={{transition:"stroke-dashoffset 1s ease-out",filter:"drop-shadow(0 0 6px rgba(11,74,62,.3))"}}/></svg>};

return(
<div style={{display:"flex",flexDirection:"column",height:"100vh",background:"linear-gradient(180deg,#F0EBE1 0%,#F7F3EC 40%,#F0EBE1 100%)",maxWidth:480,margin:"0 auto",overflow:"hidden",fontFamily:"system-ui,-apple-system,sans-serif",position:"relative"}}>
<style>{`
@keyframes slideIn{from{transform:translateX(40px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes pop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}
@keyframes correct{0%{box-shadow:0 0 0 0 rgba(76,175,80,.5)}50%{box-shadow:0 0 30px 8px rgba(76,175,80,.3)}100%{box-shadow:none}}
@keyframes wrong{0%,100%{transform:translateX(0)}15%,45%,75%{transform:translateX(-5px)}30%,60%,90%{transform:translateX(5px)}}
@keyframes xpFloat{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-60px) scale(1.3);opacity:0}}
@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes glow{0%,100%{filter:brightness(1)}50%{filter:brightness(1.15)}}
@keyframes db{0%,60%,100%{opacity:.3}30%{opacity:1}}
.ld{width:7px;height:7px;border-radius:50%;background:#0B4A3E}.ld:nth-child(1){animation:db 1.2s 0s infinite}.ld:nth-child(2){animation:db 1.2s .2s infinite}.ld:nth-child(3){animation:db 1.2s .4s infinite}
.card{background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.6);box-shadow:0 4px 24px rgba(0,0,0,.06),0 1px 3px rgba(0,0,0,.04);border-radius:16px}
.card:active{transform:scale(.98);transition:transform .1s}
.btn{transition:all .15s;cursor:pointer}.btn:active{transform:scale(.95)}
.opt{transition:all .2s;cursor:pointer;border:2px solid #E5DFD4;border-radius:14px;padding:15px 18px;font-size:16px;font-weight:500;text-align:left;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);font-family:Georgia,serif}
.opt:active{transform:scale(.97)}
.anim-in{animation:fadeIn .4s ease-out}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:#ccc;border-radius:3px}
input:focus{outline:2px solid #0B4A3E;outline-offset:2px}
`}</style>

{/* XP POP-UP */}
{xpPop&&<div style={{position:"absolute",top:70,left:"50%",transform:"translateX(-50%)",zIndex:100,
animation:"xpFloat 1.2s ease-out forwards",pointerEvents:"none"}}>
<div style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",color:"#fff",fontWeight:800,fontSize:18,
padding:"8px 20px",borderRadius:24,boxShadow:"0 4px 16px rgba(255,165,0,.4)",fontFamily:"Georgia,serif"}}>+{xpPop} XP</div></div>}

{/* HEADER */}
<div style={{background:"linear-gradient(135deg,#082F27 0%,#0B4A3E 40%,#1B6B56 100%)",color:"#fff",padding:"18px 20px 16px",flexShrink:0,
boxShadow:"0 4px 20px rgba(0,0,0,.2)"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div><div style={{fontSize:24,fontWeight:700,fontFamily:"Georgia,serif",letterSpacing:"-.5px",
textShadow:"0 2px 8px rgba(0,0,0,.2)"}}>Fala Comigo</div>
<div style={{fontSize:11,opacity:.5,marginTop:3}}>{learnedWords} words learned · Level {Math.min(prog.levels.length,5)}</div></div>
<div style={{display:"flex",gap:8,alignItems:"center"}}>
{prog.streak>0&&<div style={{background:"rgba(255,150,0,.2)",border:"1px solid rgba(255,150,0,.3)",borderRadius:20,padding:"5px 12px",fontSize:13,fontWeight:700,
display:"flex",alignItems:"center",gap:4}}>🔥 {prog.streak}</div>}
<div style={{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.15)",borderRadius:20,padding:"5px 14px",fontSize:14,fontWeight:700}}>⭐ {prog.xp}</div>
</div></div></div>

<div style={{flex:1,overflowY:"auto"}}>

{/* ═══ LEARN: LEVELS ═══ */}
{tab==="learn"&&lv==="levels"&&!showSounds&&<div className="anim-in" style={{padding:18,display:"flex",flexDirection:"column",gap:12}}>
<button onClick={()=>setShowSounds(true)} className="card btn" style={{padding:"18px 20px",display:"flex",alignItems:"center",gap:16,border:"none",
background:"linear-gradient(135deg,rgba(27,107,86,.12),rgba(45,139,110,.08))",textAlign:"left",width:"100%"}}>
<div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#1B6B56,#2D8B6E)",display:"flex",alignItems:"center",justifyContent:"center",
fontSize:24,flexShrink:0,boxShadow:"0 4px 12px rgba(27,107,86,.3)"}}>🔊</div>
<div><div style={{fontSize:17,fontWeight:700,color:"#0B4A3E"}}>Pronunciation Guide</div>
<div style={{fontSize:12,color:"#888",marginTop:3}}>8 essential Brazilian sound rules</div></div></button>

{LV.map((name,l)=>{const open=isOpen(l);const units=lvUnits(l);const done=units.filter(u=>isDone(u.idx)).length;
const passed=prog.levels.includes(l+1);
return<button key={l} onClick={()=>{if(open){setSelL(l);setLv("units");setAnim("slideIn")}}} disabled={!open}
className="card btn" style={{padding:"18px 20px",textAlign:"left",width:"100%",opacity:open?1:.4,
border:open?"1px solid rgba(255,255,255,.6)":"1px solid #E5DFD4",display:"flex",alignItems:"center",gap:16}}>
<div style={{width:52,height:52,borderRadius:16,background:passed?"linear-gradient(135deg,#C8E6CF,#A5D6B0)":open?`linear-gradient(135deg,${LC[l]},${LC[Math.min(l+1,4)]})`:"#ddd",
display:"flex",alignItems:"center",justifyContent:"center",fontSize:passed?22:24,flexShrink:0,
boxShadow:open?`0 4px 14px ${LC[l]}50`:"none",color:passed?"#2E7D32":"#fff",fontWeight:700}}>
{!open?"🔒":passed?"✓":LI[l]}</div>
<div style={{flex:1}}>
<div style={{fontSize:17,fontWeight:700,fontFamily:"Georgia,serif",color:open?"#1a1a1a":"#aaa"}}>Level {l+1}: {name}</div>
<div style={{fontSize:12,color:"#888",marginTop:4}}>{open?`${done}/${units.length} units complete`:"Pass previous test"}</div>
{open&&<div style={{background:"rgba(11,74,62,.1)",borderRadius:6,height:6,marginTop:8,overflow:"hidden"}}>
<div style={{height:"100%",borderRadius:6,background:`linear-gradient(90deg,${LC[l]},${LC[Math.min(l+1,4)]})`,width:`${(done/units.length)*100}%`,transition:"width .6s ease-out"}}/></div>}
</div></button>})}
</div>}

{/* SOUND GUIDE */}
{tab==="learn"&&showSounds&&<div className="anim-in" style={{padding:18}}>
<button onClick={()=>setShowSounds(false)} className="btn" style={{background:"none",border:"none",fontSize:24,color:"#0B4A3E",padding:0,marginBottom:14}}>‹ Back</button>
<div style={{fontSize:22,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginBottom:14}}>🔊 Sound Rules</div>
<div style={{display:"flex",flexDirection:"column",gap:12}}>
{SOUNDS.map((s,i)=><div key={i} className="card" style={{padding:"16px 18px"}}>
<div style={{fontSize:17,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{s.title}</div>
<div style={{fontSize:13,color:"#888",marginTop:5,lineHeight:1.5}}>{s.rule}</div>
<div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:12}}>
{s.ex.map(([w,ph],j)=><button key={j} onClick={()=>speakPT(w,()=>setSpk(true),()=>setSpk(false))}
className="btn" style={{background:"linear-gradient(135deg,rgba(11,74,62,.08),rgba(11,74,62,.04))",border:"1px solid rgba(11,74,62,.15)",
borderRadius:10,padding:"8px 14px",fontSize:14}}>
<span style={{fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{w}</span>
<span style={{color:"#888",marginLeft:8,fontSize:12,fontFamily:"monospace"}}>/{ph}/</span></button>)}</div></div>)}</div></div>}

{/* ═══ UNITS ═══ */}
{tab==="learn"&&lv==="units"&&<div className="anim-in" style={{padding:18}}>
<button onClick={()=>{setLv("levels");setAnim("fadeIn")}} className="btn" style={{background:"none",border:"none",fontSize:24,color:"#0B4A3E",padding:0,marginBottom:14}}>‹ {LV[selL]}</button>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{lvUnits(selL).map(u=>{const dn=isDone(u.idx);
return<button key={u.idx} onClick={()=>startUnit(u.idx)} className="card btn" style={{padding:"16px 18px",textAlign:"left",width:"100%",display:"flex",alignItems:"center",gap:14,border:"none"}}>
<div style={{width:40,height:40,borderRadius:12,background:dn?"linear-gradient(135deg,#C8E6CF,#A5D6B0)":`linear-gradient(135deg,${LC[selL]}15,${LC[selL]}08)`,
display:"flex",alignItems:"center",justifyContent:"center",fontSize:dn?16:14,color:dn?"#2E7D32":"#0B4A3E",fontWeight:700,flexShrink:0,
border:dn?"none":`1px solid ${LC[selL]}25`}}>{dn?"✓":u.idx+1}</div>
<div style={{flex:1}}><div style={{fontSize:16,fontWeight:600,color:"#1a1a1a"}}>{u.n}</div>
<div style={{fontSize:12,color:"#888",marginTop:2}}>{u.w.length} words · 6 exercise types</div></div></button>})}
{(()=>{const ad=allDone(selL);const passed=prog.levels.includes(selL+1);
return selL<LV.length-1?<button onClick={()=>{if(ad&&!passed)startTest(selL)}} disabled={!ad||passed}
className="btn" style={{background:passed?"linear-gradient(135deg,#C8E6CF,#A5D6B0)":ad?"linear-gradient(135deg,#0B4A3E,#1B6B56)":"rgba(11,74,62,.1)",
border:"none",borderRadius:16,padding:18,textAlign:"center",width:"100%",opacity:ad?1:.4,marginTop:6,
boxShadow:ad&&!passed?"0 6px 20px rgba(11,74,62,.3)":"none"}}>
{passed?<div style={{fontSize:16,fontWeight:700,color:"#2E7D32"}}>✓ Test Passed — Level {selL+2} Unlocked</div>
:<><div style={{fontSize:16,fontWeight:700,color:ad?"#fff":"#999"}}>🏆 Level Test</div>
<div style={{fontSize:12,color:ad?"rgba(255,255,255,.7)":"#bbb",marginTop:4}}>{ad?"15 questions · 80% to pass":"Complete all units first"}</div></>}
</button>:ad&&<div className="card" style={{padding:20,textAlign:"center",background:"linear-gradient(135deg,#C8E6CF,#A5D6B0)"}}>
<div style={{fontSize:18,fontFamily:"Georgia,serif",fontWeight:700,color:"#2E7D32"}}>🏆 All Complete!</div></div>})()}
</div></div>}

{/* ═══ EXERCISES ═══ */}
{tab==="learn"&&lv==="ex"&&curEx&&<div key={eI} style={{padding:20,display:"flex",flexDirection:"column",gap:16,animation:"slideIn .35s ease-out"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setLv("units")} className="btn" style={{background:"none",border:"none",fontSize:22,color:"#0B4A3E",padding:0}}>✕</button>
<div style={{fontSize:13,color:"#888",fontWeight:600}}>{eI+1}/{exs.length}</div>
<div style={{fontSize:14,fontWeight:800,color:"#0B4A3E"}}>{eScore}✓</div></div>
<div style={{background:"rgba(11,74,62,.08)",borderRadius:8,height:6,overflow:"hidden"}}>
<div style={{height:"100%",borderRadius:8,background:"linear-gradient(90deg,#0B4A3E,#2D8B6E)",width:`${(eI/exs.length)*100}%`,transition:"width .4s ease-out"}}/></div>

<div className="card" style={{padding:"28px 22px",textAlign:"center",
animation:anim==="correct"?"correct .6s ease-out":anim==="wrong"?"wrong .4s ease-out":"pop .3s ease-out"}}>
<div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:"#999",marginBottom:12,fontWeight:600}}>
{curEx.t==="pick_en"?"What does this mean?":curEx.t==="pick_pt"?"Say in Portuguese":
curEx.t==="listen"?"What do you hear?":curEx.t==="type_pt"?"Type in Portuguese":
curEx.t==="true_false"?"True or false?":"Type what you hear"}</div>
{(curEx.t==="listen"||curEx.t==="listen_type")?
<button onClick={()=>speakPT(curEx.audio,()=>setSpk(true),()=>setSpk(false))} className="btn"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:20,width:80,height:80,fontSize:32,
margin:"8px auto",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 20px rgba(11,74,62,.35)",
animation:"glow 2s infinite"}}>🔊</button>
:curEx.t==="true_false"?<div><div style={{fontSize:30,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{curEx.q}</div>
<div style={{fontSize:20,color:"#888",marginTop:10,fontFamily:"Georgia,serif"}}>= {curEx.shown}?</div></div>
:<div style={{fontSize:30,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{curEx.q}</div>}
</div>

{(curEx.t==="pick_en"||curEx.t==="pick_pt"||curEx.t==="listen")&&
<div style={{display:"flex",flexDirection:"column",gap:8}}>
{curEx.opts.map((o,i)=>{const isOk=norm(o)===norm(curEx.a);const isPk=eAns!==null&&norm(o)===norm(String(eAns));const rv=eAns!==null;
let bg="rgba(255,255,255,.9)",bd="#E5DFD4",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={i} onClick={()=>answerEx(o)} disabled={rv} className="opt"
style={{background:bg,borderColor:bd,color:tc,animation:rv&&isPk&&!isOk?"wrong .4s":"none"}}>{o}</button>})}</div>}

{curEx.t==="true_false"&&<div style={{display:"flex",gap:10}}>
{[true,false].map(v=>{const rv=eAns!==null;const isOk=v===curEx.a;const isPk=eAns===v;
let bg="rgba(255,255,255,.9)",bd="#E5DFD4",tc="#1a1a1a";
if(rv&&isOk){bg="linear-gradient(135deg,#E8F5E9,#C8E6CF)";bd="#4CAF50";tc="#2E7D32"}
else if(rv&&isPk&&!isOk){bg="linear-gradient(135deg,#FFEBEE,#FFCDD2)";bd="#EF5350";tc="#C62828"}
return<button key={String(v)} onClick={()=>answerEx(v)} disabled={rv} className="btn"
style={{flex:1,background:bg,border:`2px solid ${bd}`,borderRadius:14,padding:18,fontSize:18,fontWeight:700,color:tc}}>{v?"✓ True":"✗ False"}</button>})}
</div>}

{(curEx.t==="type_pt"||curEx.t==="listen_type")&&<div>
<div style={{display:"flex",gap:8}}>
<input value={typeIn} onChange={e=>setTypeIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!typed)submitType()}}
disabled={typed} placeholder={curEx.t==="listen_type"?"Type what you hear...":"Type the Portuguese..."}
style={{flex:1,padding:"15px 18px",borderRadius:14,border:`2px solid ${typed?(norm(typeIn)===norm(curEx.a)?"#4CAF50":"#EF5350"):"#E5DFD4"}`,
fontSize:17,fontFamily:"Georgia,serif",background:typed?(norm(typeIn)===norm(curEx.a)?"#E8F5E9":"#FFEBEE"):"rgba(255,255,255,.9)",
backdropFilter:"blur(8px)",transition:"all .2s"}}/>
{!typed&&<button onClick={submitType} disabled={!typeIn.trim()} className="btn"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:14,padding:"15px 22px",fontSize:16,fontWeight:700,
boxShadow:"0 4px 14px rgba(11,74,62,.3)"}}>→</button>}</div>
{typed&&norm(typeIn)!==norm(curEx.a)&&<div className="card" style={{marginTop:10,padding:"12px 16px",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",
fontSize:16,color:"#2E7D32",fontFamily:"Georgia,serif",animation:"fadeIn .3s"}}>Correct: <strong>{curEx.a}</strong></div>}
</div>}
</div>}

{/* ═══ RESULT ═══ */}
{tab==="learn"&&lv==="result"&&<div className="anim-in" style={{padding:28,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,minHeight:400}}>
<div style={{fontSize:56,animation:"pop .5s ease-out"}}>{fScore/fTotal>=.8?"🏆":fScore/fTotal>=.5?"👏":"💪"}</div>
{isTest&&<div style={{fontSize:16,fontWeight:700,color:testPass?"#2E7D32":"#D94535",fontFamily:"Georgia,serif",
animation:"fadeIn .4s"}}>{testPass?`Level ${selL+2} Unlocked! 🔓`:"Need 80% — try again!"}</div>}
<div style={{fontSize:52,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E",animation:"pop .5s ease-out .2s both"}}>{fScore}/{fTotal}</div>
<div style={{fontSize:15,color:"#888"}}>+{fScore*2} XP earned</div>
<div style={{display:"flex",gap:10,marginTop:8}}>
{isTest&&!testPass&&<button onClick={()=>startTest(selL)} className="btn" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:14,padding:"14px 28px",fontSize:16,fontWeight:700,boxShadow:"0 4px 16px rgba(11,74,62,.3)"}}>Retry</button>}
<button onClick={()=>setLv("units")} className="btn" style={{background:isTest&&!testPass?"rgba(255,255,255,.9)":"linear-gradient(135deg,#0B4A3E,#1B6B56)",
color:isTest&&!testPass?"#1a1a1a":"#fff",border:"1px solid #E5DFD4",borderRadius:14,padding:"14px 28px",fontSize:16,fontWeight:600}}>Continue</button>
</div></div>}

{/* ═══ PRACTICE ═══ */}
{tab==="practice"&&!fOn&&<div className="anim-in" style={{padding:28,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,minHeight:400}}>
<div style={{fontSize:60,animation:"pop .5s ease-out"}}>🃏</div>
<div style={{fontSize:24,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>Flashcards</div>
<div style={{fontSize:14,color:"#888",textAlign:"center"}}>{unlocked().length} words unlocked</div>
<button onClick={startF} className="btn" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:16,padding:"16px 44px",fontSize:17,fontWeight:700,boxShadow:"0 6px 24px rgba(11,74,62,.3)"}}>Start</button>
</div>}

{tab==="practice"&&fOn&&!fDn&&<div className="anim-in" style={{padding:18,display:"flex",flexDirection:"column",gap:14,minHeight:400}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setFOn(false)} className="btn" style={{background:"none",border:"none",fontSize:24,color:"#0B4A3E",padding:0}}>‹</button>
<div style={{display:"flex",gap:14,fontSize:14}}><span style={{color:"#2E7D32",fontWeight:700}}>✓{fSt.y}</span><span style={{color:"#D94535",fontWeight:700}}>✗{fSt.n}</span></div>
<button onClick={()=>setFDn(true)} className="btn" style={{background:"rgba(255,255,255,.8)",border:"1px solid #E5DFD4",borderRadius:10,padding:"6px 16px",fontSize:13}}>End</button></div>
<div key={fI} onClick={()=>!fS&&setFS(true)} className="card" style={{padding:fS?"28px 22px":"56px 22px",textAlign:"center",cursor:fS?"default":"pointer",minHeight:280,
display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10,animation:"slideIn .3s ease-out"}}>
{!fS&&<><div style={{fontSize:46,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a"}}>{fCard[0]}</div><div style={{fontSize:14,color:"#bbb",marginTop:20}}>Tap to reveal</div></>}
{fS&&<><div style={{fontSize:30,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",animation:"fadeIn .3s"}}>{fCard[0]}</div>
<div style={{fontSize:22,color:"#0B4A3E",fontWeight:700,marginTop:6,animation:"fadeIn .3s .1s both"}}>{fCard[1]}</div>
<div style={{fontSize:15,color:"#0B4A3E",fontFamily:"monospace",marginTop:8,animation:"fadeIn .3s .2s both"}}>/{fCard[2]}/</div>
<button onClick={e=>{e.stopPropagation();speakPT(fCard[0],()=>setSpk(true),()=>setSpk(false))}} className="btn"
style={{marginTop:14,background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:10,padding:"10px 22px",fontSize:14,boxShadow:"0 4px 12px rgba(11,74,62,.25)",animation:"fadeIn .3s .3s both"}}>🔊 Hear it</button></>}</div>
{fS&&<div style={{display:"flex",gap:10,animation:"fadeIn .3s"}}>
<button onClick={()=>rateF(false)} className="btn" style={{flex:1,padding:16,borderRadius:14,border:"2px solid #EF5350",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",fontSize:16,fontWeight:700,color:"#C62828"}}>✗ Learning</button>
<button onClick={()=>rateF(true)} className="btn" style={{flex:1,padding:16,borderRadius:14,border:"2px solid #4CAF50",background:"linear-gradient(135deg,#E8F5E9,#C8E6CF)",fontSize:16,fontWeight:700,color:"#2E7D32"}}>✓ Got it</button></div>}</div>}

{tab==="practice"&&fOn&&fDn&&<div className="anim-in" style={{padding:28,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,minHeight:400}}>
<div style={{fontSize:56,animation:"pop .5s"}}>{fPct>=80?"🏆":"💪"}</div>
<div style={{fontSize:24,fontWeight:700,fontFamily:"Georgia,serif"}}>Session Done</div>
<div className="card" style={{padding:"20px 28px",width:"100%",maxWidth:300}}>
{[["Cards",fTot,"#1a1a1a"],["✓ Got it",fSt.y,"#2E7D32"],["✗ Learning",fSt.n,"#C62828"],["Accuracy",fPct+"%","#0B4A3E"]].map(([l,v,c],i)=>
<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderTop:i?`1px solid rgba(0,0,0,.06)`:"none"}}>
<span style={{color:"#888",fontSize:15}}>{l}</span><span style={{fontWeight:700,fontSize:15,color:c}}>{v}</span></div>)}</div>
<div style={{display:"flex",gap:10}}>
<button onClick={startF} className="btn" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:14,padding:"14px 28px",fontSize:16,fontWeight:700}}>Again</button>
<button onClick={()=>{setFOn(false);setFDn(false)}} className="btn" style={{background:"rgba(255,255,255,.8)",border:"1px solid #E5DFD4",borderRadius:14,padding:"14px 28px",fontSize:16}}>Done</button></div></div>}

{/* ═══ STATS ═══ */}
{tab==="stats"&&<div className="anim-in" style={{padding:20,display:"flex",flexDirection:"column",gap:16}}>
<div className="card" style={{padding:"28px 22px",textAlign:"center"}}>
<div style={{position:"relative",display:"inline-block"}}><Ring pct={pct}/>
<div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
<div style={{fontSize:36,fontWeight:700,fontFamily:"Georgia,serif",color:"#0B4A3E"}}>{pct}%</div>
<div style={{fontSize:11,color:"#888",marginTop:2}}>Complete</div></div></div>
<div style={{fontSize:14,color:"#888",marginTop:12}}>{learnedWords} of {totalWords} words</div></div>

<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
{[[`⭐ ${prog.xp}`,"Total XP","#C9982E"],[`📚 ${learnedWords}`,"Words Learned","#0B4A3E"],
[`🎯 ${acc}%`,"Accuracy","#2E7D32"],[`⏱️ ${fmt(prog.time||0)}`,"Time Studied","#666"],
[`🔥 ${prog.streak||0}`,"Day Streak","#D94535"],[`📝 ${prog.exDone||0}`,"Exercises Done","#1B6B56"]].map(([val,label,c],i)=>
<div key={i} className="card" style={{padding:"18px 16px",textAlign:"center",animation:`fadeIn .4s ease-out ${i*.08}s both`}}>
<div style={{fontSize:22,fontWeight:700,color:c,fontFamily:"Georgia,serif"}}>{val}</div>
<div style={{fontSize:11,color:"#999",marginTop:5}}>{label}</div></div>)}</div>

{/* DAILY TRACKER */}
<div className="card" style={{padding:"18px 20px"}}>
<div style={{fontSize:16,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginBottom:14}}>📅 This Week</div>
{(()=>{const days=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5);
days.push({date:d.toISOString().split('T')[0],label:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d.getDay()],
isToday:i===0,...((prog.daily||{})[d.toISOString().split('T')[0]]||{ex:0,ok:0,time:0,flash:0})})}
const maxEx=Math.max(...days.map(d=>d.ex),1);
return<div style={{display:"flex",flexDirection:"column",gap:8}}>
{days.map((d,i)=>{const pctBar=Math.round((d.ex/maxEx)*100);const dayAcc=d.ex?Math.round((d.ok/d.ex)*100):0;
return<div key={i} style={{display:"flex",alignItems:"center",gap:10,animation:`fadeIn .3s ease-out ${i*.05}s both`}}>
<div style={{width:36,fontSize:12,fontWeight:d.isToday?700:500,color:d.isToday?"#0B4A3E":"#999"}}>{d.isToday?"Today":d.label}</div>
<div style={{flex:1,background:"rgba(11,74,62,.06)",borderRadius:6,height:24,overflow:"hidden",position:"relative"}}>
{d.ex>0&&<div style={{height:"100%",borderRadius:6,width:`${Math.max(pctBar,8)}%`,
background:d.isToday?"linear-gradient(90deg,#0B4A3E,#2D8B6E)":"linear-gradient(90deg,#1B6B56,#2D8B6E80)",
transition:"width .6s ease-out",display:"flex",alignItems:"center",paddingLeft:8}}>
<span style={{fontSize:11,fontWeight:700,color:"#fff",whiteSpace:"nowrap"}}>{d.ex} ex</span></div>}
{d.ex===0&&<div style={{position:"absolute",top:"50%",left:8,transform:"translateY(-50%)",fontSize:11,color:"#ccc"}}>—</div>}
</div>
<div style={{width:42,textAlign:"right",fontSize:11,color:d.ex?"#2E7D32":"#ccc",fontWeight:600}}>
{d.ex?`${dayAcc}%`:"—"}</div>
</div>})}
{(()=>{const todayData=(prog.daily||{})[new Date().toISOString().split('T')[0]]||{ex:0,ok:0,time:0,flash:0};
return todayData.ex>0||todayData.flash>0?<div style={{marginTop:10,paddingTop:10,borderTop:"1px solid rgba(0,0,0,.06)",
display:"flex",justifyContent:"space-around",textAlign:"center"}}>
<div><div style={{fontSize:18,fontWeight:700,color:"#0B4A3E",fontFamily:"Georgia,serif"}}>{todayData.ex}</div>
<div style={{fontSize:10,color:"#999"}}>Exercises</div></div>
<div><div style={{fontSize:18,fontWeight:700,color:"#2E7D32",fontFamily:"Georgia,serif"}}>{todayData.ex?Math.round((todayData.ok/todayData.ex)*100):0}%</div>
<div style={{fontSize:10,color:"#999"}}>Accuracy</div></div>
<div><div style={{fontSize:18,fontWeight:700,color:"#1B6B56",fontFamily:"Georgia,serif"}}>{fmt(todayData.time||0)}</div>
<div style={{fontSize:10,color:"#999"}}>Time</div></div>
<div><div style={{fontSize:18,fontWeight:700,color:"#C9982E",fontFamily:"Georgia,serif"}}>{todayData.flash}</div>
<div style={{fontSize:10,color:"#999"}}>Cards</div></div>
</div>:null})()}
</div>})()}</div>

<div className="card" style={{padding:"18px 20px"}}>
<div style={{fontSize:16,fontWeight:700,fontFamily:"Georgia,serif",color:"#1a1a1a",marginBottom:14}}>Level Progress</div>
{LV.map((name,l)=>{const units=lvUnits(l);const done=units.filter(u=>isDone(u.idx)).length;const open=isOpen(l);
return<div key={l} style={{marginBottom:12,opacity:open?1:.35}}>
<div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:5}}>
<span style={{fontWeight:600,color:"#1a1a1a"}}>L{l+1}: {name}</span>
<span style={{color:"#888"}}>{done}/{units.length}</span></div>
<div style={{background:"rgba(0,0,0,.05)",borderRadius:6,height:8,overflow:"hidden"}}>
<div style={{height:"100%",borderRadius:6,background:`linear-gradient(90deg,${LC[l]},${LC[Math.min(l+1,4)]})`,width:`${(done/units.length)*100}%`,
transition:"width .6s ease-out",boxShadow:done?`0 0 8px ${LC[l]}40`:"none"}}/></div></div>})}</div></div>}

{/* ═══ TALK ═══ */}
{tab==="talk"&&msgs.length===0&&<div className="anim-in" style={{padding:28,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,minHeight:400}}>
<div style={{fontSize:60,animation:"pop .5s"}}>🇧🇷</div>
<div style={{fontSize:22,fontWeight:700,fontFamily:"Georgia,serif"}}>Chat with Bia</div>
<div style={{fontSize:14,color:"#888",textAlign:"center"}}>Practice in Portuguese or English</div>
<button onClick={()=>setMsgs([{id:nid.current++,role:"a",pt:"Oi! Eu sou a Bia 😊 Tô aqui pra te ajudar. Pode falar em inglês ou português!",en:"Hi! I'm Bia 😊 I'm here to help. Speak English or Portuguese!"}])}
className="btn" style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:16,padding:"16px 40px",fontSize:17,fontWeight:700,boxShadow:"0 6px 24px rgba(11,74,62,.3)"}}>Start</button></div>}

{tab==="talk"&&msgs.length>0&&<div style={{padding:16,display:"flex",flexDirection:"column",gap:12}}>
{msgs.map((m,i)=>m.role==="a"?<div key={m.id} style={{display:"flex",gap:10,maxWidth:"88%",animation:`fadeIn .3s ease-out ${i===msgs.length-1?".1s":""} both`}}>
<div style={{width:34,height:34,borderRadius:"50%",flexShrink:0,background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",
display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#fff",fontWeight:700,marginTop:2,boxShadow:"0 2px 8px rgba(11,74,62,.2)"}}>B</div>
<div style={{display:"flex",flexDirection:"column",gap:6}}>
<div className="card" style={{borderRadius:"4px 16px 16px 16px",padding:"13px 16px"}}>
<div style={{fontSize:16,lineHeight:1.6,color:"#1a1a1a",fontFamily:"Georgia,serif"}}>{m.pt}</div>
<div style={{marginTop:8,paddingTop:8,borderTop:"1px solid rgba(0,0,0,.06)",fontSize:13,color:"#888",fontStyle:"italic",lineHeight:1.5}}>{m.en}</div></div>
{m.fix&&<div style={{background:"linear-gradient(135deg,#FFF3E0,#FFE0B2)",border:"1px solid #FFBB66",borderRadius:10,padding:"7px 12px",fontSize:12,color:"#704000",display:"flex",gap:7}}>✏️ {m.fix}</div>}
{m.tip&&<div style={{background:"linear-gradient(135deg,#FFFBEA,#FFF8E1)",border:"1px solid #EDCC4A",borderRadius:10,padding:"7px 12px",fontSize:12,color:"#5D4500",display:"flex",gap:7}}>💡 {m.tip}</div>}</div></div>
:<div key={m.id} style={{alignSelf:"flex-end",maxWidth:"80%",animation:"fadeIn .3s ease-out"}}>
<div style={{background:"linear-gradient(135deg,#C8E6CF,#A5D6B0)",borderRadius:"16px 4px 16px 16px",padding:"12px 16px",fontSize:16,color:"#1a1a1a",lineHeight:1.5,boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}>{m.text}</div></div>)}
{busy&&<div style={{display:"flex",gap:10}}><div style={{width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#0B4A3E,#2D8B6E)",
display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#fff",fontWeight:700}}>B</div>
<div className="card" style={{borderRadius:"4px 16px 16px 16px",padding:"14px 18px",display:"flex",gap:6,alignItems:"center"}}>
<div className="ld"/><div className="ld"/><div className="ld"/></div></div>}
<div ref={btm}/></div>}
</div>

{err&&<div style={{margin:"0 14px 8px",padding:"10px 14px",background:"linear-gradient(135deg,#FFEBEE,#FFCDD2)",border:"1px solid #EF5350",borderRadius:12,fontSize:13,color:"#C62828",
display:"flex",justifyContent:"space-between",alignItems:"center",animation:"fadeIn .3s"}}>
{err}<button onClick={()=>setErr(null)} className="btn" style={{background:"none",border:"none",fontSize:18,color:"#C62828"}}>×</button></div>}

{tab==="talk"&&msgs.length>0&&<div style={{background:"rgba(255,255,255,.9)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(0,0,0,.06)",padding:"12px 16px 16px",flexShrink:0}}>
<div style={{display:"flex",gap:8}}>
<input value={chatIn} onChange={e=>setChatIn(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")sendChat()}}
placeholder="Type in Portuguese or English..." style={{flex:1,padding:"13px 16px",borderRadius:14,border:"1px solid #E5DFD4",fontSize:16,
fontFamily:"system-ui",background:"rgba(255,255,255,.8)"}}/>
<button onClick={sendChat} disabled={busy||!chatIn.trim()} className="btn"
style={{background:"linear-gradient(135deg,#0B4A3E,#1B6B56)",color:"#fff",border:"none",borderRadius:14,padding:"13px 18px",fontSize:15,fontWeight:700,
boxShadow:"0 4px 12px rgba(11,74,62,.25)"}}>→</button>
<button onClick={()=>setMsgs([])} className="btn" style={{background:"none",border:"none",fontSize:20,color:"#888"}}>↻</button>
</div></div>}

<div style={{display:"flex",borderTop:"1px solid rgba(0,0,0,.06)",background:"rgba(255,255,255,.9)",backdropFilter:"blur(16px)",flexShrink:0}}>
{[{id:"learn",ic:"📚",lb:"Learn"},{id:"practice",ic:"🃏",lb:"Practice"},{id:"stats",ic:"📊",lb:"Stats"},{id:"talk",ic:"💬",lb:"Talk"}].map(t=>
<button key={t.id} onClick={()=>{setTab(t.id);if(t.id==="learn"){setLv("levels");setShowSounds(false)}if(t.id==="practice"){setFOn(false);setFDn(false)}}}
className="btn" style={{flex:1,padding:"12px 0 10px",border:"none",background:"transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:3,
color:tab===t.id?"#0B4A3E":"#999",fontWeight:tab===t.id?700:400,fontSize:11,transition:"color .2s"}}>
<span style={{fontSize:22,transition:"transform .2s",transform:tab===t.id?"scale(1.15)":"scale(1)"}}>{t.ic}</span><span>{t.lb}</span></button>)}</div>
</div>)}
