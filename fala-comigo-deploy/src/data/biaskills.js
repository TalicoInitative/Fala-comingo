// What Bia unlocks with each completed unit
// skills: what she can DO, topics: what she can TALK ABOUT, grammar: structures she can USE
// These compound — completing more units = richer Bia

export const BIA_SKILLS = {
  0: {skill:"basic greetings",topic:"saying hi/bye",grammar:"present tense 'é'"},
  1: {skill:"polite requests",topic:"being polite",grammar:"por favor/obrigado"},
  2: {skill:"introductions",topic:"where people are from",grammar:"ser/estar basics"},
  3: {skill:"shopping basics",topic:"buying things, prices",grammar:"querer + noun"},
  4: {skill:"family talk",topic:"family members, ages",grammar:"ter (to have)"},
  5: {skill:"basic descriptions",topic:"colors, sizes",grammar:"adjective agreement"},
  6: {skill:"describe objects",topic:"what things look like",grammar:"ser vs estar"},
  7: {skill:"food discussion",topic:"meals, ingredients",grammar:"gostar de"},
  8: {skill:"restaurant scenarios",topic:"ordering food, bills",grammar:"querer/pedir"},
  9: {skill:"giving directions",topic:"locations, navigation",grammar:"ficar/ir + prepositions"},
  10: {skill:"time telling",topic:"schedules, appointments",grammar:"time expressions"},
  11: {skill:"weather chat",topic:"weather, seasons",grammar:"estar + weather"},
  12: {skill:"health talk",topic:"body, symptoms",grammar:"estar com + sensation"},
  13: {skill:"number usage",topic:"quantities, phone numbers",grammar:"numbers 20-100"},
  14: {skill:"abilities",topic:"what people can/know how to do",grammar:"saber/poder/conseguir"},
  15: {skill:"emotions",topic:"how people feel",grammar:"estar + emotion"},
  16: {skill:"shopping",topic:"stores, prices, sizes",grammar:"quanto custa"},
  17: {skill:"home description",topic:"rooms, furniture",grammar:"ter/há for existence"},
  18: {skill:"clothing talk",topic:"what to wear",grammar:"vestir/usar"},
  19: {skill:"transport",topic:"buses, taxis, metro",grammar:"ir de + transport"},
  20: {skill:"routines",topic:"daily schedule",grammar:"reflexive actions"},
  21: {skill:"sight discussion",topic:"tourism, landmarks",grammar:"vamos + infinitive"},
  22: {skill:"past narration",topic:"what happened yesterday",grammar:"pretérito perfeito (fui/fiz/comi)"},
  23: {skill:"work/study talk",topic:"jobs, school, careers",grammar:"trabalhar/estudar"},
  24: {skill:"city navigation",topic:"buildings, neighborhoods",grammar:"ficar + location"},
  25: {skill:"hobby chat",topic:"interests, free time",grammar:"gostar de + infinitive"},
  26: {skill:"action narration",topic:"describing activities",grammar:"more past tense verbs"},
  27: {skill:"opinion sharing",topic:"agree/disagree",grammar:"achar que/na minha opinião"},
  28: {skill:"love talk",topic:"relationships, dating",grammar:"estar apaixonado/namorar"},
  29: {skill:"romance vocab",topic:"dates, feelings, attraction",grammar:"conhecer/encontrar"},
  30: {skill:"slang usage",topic:"casual chat",grammar:"informal contractions (tô/tá/pra)"},
  31: {skill:"abstract discussion",topic:"ideas, concepts",grammar:"advanced verbs"},
  32: {skill:"linking ideas",topic:"connecting thoughts",grammar:"mas/porém/embora/porque"},
  33: {skill:"idiom usage",topic:"figurative language",grammar:"fixed expressions"},
  34: {skill:"formal register",topic:"polite/professional speech",grammar:"gostaria/poderia/seria"},
  35: {skill:"tech talk",topic:"phones, apps, internet",grammar:"tech vocabulary"},
  36: {skill:"detailed descriptions",topic:"people, places",grammar:"adjective stacking"},
  37: {skill:"kitchen talk",topic:"cooking, appliances",grammar:"kitchen vocabulary"},
  38: {skill:"beach/nature",topic:"outdoor activities",grammar:"vamos à + place"},
  39: {skill:"animal talk",topic:"pets, wildlife",grammar:"animal vocabulary"},
  40: {skill:"sports chat",topic:"games, exercise",grammar:"jogar/praticar"},
  41: {skill:"career discussion",topic:"professions, dreams",grammar:"querer ser/trabalhar como"},
  42: {skill:"travel planning",topic:"flights, hotels, trips",grammar:"future with ir + infinitive"},
  43: {skill:"medical scenarios",topic:"doctor visits, pharmacy",grammar:"health imperatives"},
  44: {skill:"nature appreciation",topic:"forests, rivers, hiking",grammar:"nature vocabulary"},
  45: {skill:"deep emotions",topic:"saudade, longing, joy",grammar:"sentir/sentir-se"},
  46: {skill:"relationship depth",topic:"marriage, bonds",grammar:"relationship vocabulary"},
  47: {skill:"culture chat",topic:"Brazilian customs, traditions",grammar:"cultural expressions"},
  48: {skill:"polite phrases",topic:"social niceties",grammar:"fique à vontade/imagina"},
  49: {skill:"business talk",topic:"office, projects",grammar:"professional vocabulary"},
  50: {skill:"phone skills",topic:"calls, messages",grammar:"ligar/mandar/receber"},
  51: {skill:"education chat",topic:"university, courses",grammar:"academic vocabulary"},
  52: {skill:"banking",topic:"accounts, payments, Pix",grammar:"financial vocabulary"},
  53: {skill:"event planning",topic:"meetings, parties",grammar:"organizar/confirmar"},
  54: {skill:"office banter",topic:"coworkers, happy hour",grammar:"informal professional"},
  55: {skill:"job topics",topic:"interviews, resumes",grammar:"experiência/qualificação"},
  56: {skill:"negotiation",topic:"prices, deals",grammar:"conditional offers"},
  57: {skill:"presentations",topic:"data, charts",grammar:"formal speaking"},
  58: {skill:"problem solving",topic:"solutions, teamwork",grammar:"precisar/resolver"},
  59: {skill:"music chat",topic:"genres, dancing",grammar:"music vocabulary"},
  60: {skill:"food culture",topic:"Brazilian dishes, recipes",grammar:"food vocabulary"},
  61: {skill:"geography",topic:"states, regions",grammar:"geographic vocabulary"},
  62: {skill:"holiday talk",topic:"festivals, celebrations",grammar:"holiday vocabulary"},
  63: {skill:"soccer talk",topic:"games, teams, players",grammar:"sports expressions"},
  64: {skill:"art/lit chat",topic:"books, exhibitions",grammar:"cultural vocabulary"},
  65: {skill:"street scenes",topic:"markets, vendors",grammar:"street vocabulary"},
  66: {skill:"bargaining",topic:"haggling, prices",grammar:"pechinchar/levar por"},
  67: {skill:"religion chat",topic:"faith, beliefs",grammar:"religious expressions"},
  68: {skill:"music deep dive",topic:"MPB, bossa nova",grammar:"music terminology"},
  69: {skill:"wishes/hopes",topic:"desires, expectations",grammar:"SUBJUNCTIVE (espero que/quero que)"},
  70: {skill:"hypotheticals",topic:"what-if scenarios",grammar:"CONDITIONAL (se eu pudesse/faria)"},
  71: {skill:"comparisons",topic:"comparing things",grammar:"mais/menos/tão...quanto/melhor/pior"},
  72: {skill:"time references",topic:"duration, frequency",grammar:"faz/há + time, daqui a"},
  73: {skill:"linking discourse",topic:"essay-style connections",grammar:"além disso/portanto/contudo"},
  74: {skill:"emotional depth",topic:"complex feelings",grammar:"sentir-se + adjective"},
  75: {skill:"event narration",topic:"news, incidents",grammar:"acontecer/surgir/melhorar"},
  76: {skill:"cause-effect",topic:"reasons, consequences",grammar:"por causa de/devido a/portanto"},
  77: {skill:"advanced chat",topic:"flowing conversation",grammar:"aliás/inclusive/enfim/pois é"},
  78: {skill:"colloquial PT",topic:"street-level casual",grammar:"tô nem aí/ficar ligado/cair a ficha"},
  79: {skill:"abstract thought",topic:"philosophy lite",grammar:"abstract noun patterns"},
  80: {skill:"social issues",topic:"inequality, poverty",grammar:"social vocabulary"},
  81: {skill:"environment",topic:"nature, sustainability",grammar:"environmental terms"},
  82: {skill:"media talk",topic:"news, TV, journalism",grammar:"media vocabulary"},
  83: {skill:"philosophy",topic:"meaning, truth, wisdom",grammar:"philosophical terms"},
  84: {skill:"legal basics",topic:"rights, laws",grammar:"legal vocabulary"},
  85: {skill:"science chat",topic:"research, discoveries",grammar:"scientific terms"},
  86: {skill:"medical depth",topic:"healthcare system",grammar:"medical terminology"},
  87: {skill:"psychology",topic:"mental health",grammar:"psychological terms"},
  88: {skill:"future plans",topic:"goals, dreams",grammar:"pretender/planear + infinitive"},
  89: {skill:"emergencies",topic:"accidents, help",grammar:"emergency vocabulary"},
  90: {skill:"housing",topic:"rent, apartments",grammar:"housing vocabulary"},
  91: {skill:"driving",topic:"cars, traffic",grammar:"driving vocabulary"},
  92: {skill:"cooking verbs",topic:"recipes, techniques",grammar:"cooking imperatives"},
  93: {skill:"biome talk",topic:"ecosystems, wildlife",grammar:"biome vocabulary"},
  94: {skill:"pet care",topic:"vets, pet routines",grammar:"pet vocabulary"},
  95: {skill:"materials",topic:"what things are made of",grammar:"de + material"},
  96: {skill:"shapes/sizes",topic:"geometry, dimensions",grammar:"shape adjectives"},
  97: {skill:"home repair",topic:"fixing things",grammar:"repair vocabulary"},
  98: {skill:"weather depth",topic:"storms, climate",grammar:"weather vocabulary"},
  99: {skill:"academic writing",topic:"theses, research",grammar:"academic register"},
  100: {skill:"legal talk",topic:"courts, trials",grammar:"legal terminology"},
  101: {skill:"storytelling",topic:"narratives, tales",grammar:"era uma vez/enredo/desfecho"},
  102: {skill:"debate",topic:"arguments, persuasion",grammar:"concordar/discordar/rebater"},
  103: {skill:"emotion mastery",topic:"gratitude, empathy",grammar:"advanced emotion vocabulary"},
  104: {skill:"business advanced",topic:"revenue, startups",grammar:"business terminology"},
  105: {skill:"daily expressions",topic:"casual reactions",grammar:"imagina!/pois é/faz parte"},
  106: {skill:"tech depth",topic:"AI, coding, databases",grammar:"tech terminology"},
  107: {skill:"proverb usage",topic:"wisdom, sayings",grammar:"proverbial structures"},
  108: {skill:"meta-language",topic:"discussing fluency itself",grammar:"language-learning terms"},
  109: {skill:"season/month talk",topic:"calendar, planning",grammar:"month/season vocabulary"},
  110: {skill:"weekly planning",topic:"day-by-day schedules",grammar:"day-of-week usage"},
  111: {skill:"question forming",topic:"asking anything",grammar:"all question words"},
  112: {skill:"body detail",topic:"specific body parts",grammar:"body vocabulary"},
  113: {skill:"hygiene",topic:"bathroom, grooming",grammar:"hygiene vocabulary"},
  114: {skill:"furniture",topic:"home decoration",grammar:"furniture vocabulary"},
  115: {skill:"taste description",topic:"food textures, flavors",grammar:"taste adjectives"},
  116: {skill:"spatial relations",topic:"where things are",grammar:"prepositions (em/de/para/com/por)"},
  117: {skill:"reactions",topic:"surprise, excitement",grammar:"exclamation patterns"},
  118: {skill:"school supplies",topic:"classroom, study",grammar:"school vocabulary"},
  119: {skill:"tool usage",topic:"building, crafting",grammar:"tool vocabulary"},
  120: {skill:"big numbers",topic:"millions, statistics",grammar:"large number formation"},
  121: {skill:"phone culture",topic:"WhatsApp, calls",grammar:"digital communication"},
  122: {skill:"verb mastery",topic:"conjugation patterns",grammar:"ALL major tense conjugations"},
  123: {skill:"giving commands",topic:"instructions",grammar:"IMPERATIVE (fale/venha/abra)"},
  124: {skill:"ongoing actions",topic:"what's happening now",grammar:"GERUND (estou fazendo/correndo)"},
  125: {skill:"reflexive mastery",topic:"self-actions, routines",grammar:"REFLEXIVE (me levanto/se chama)"},
  126: {skill:"recent actions",topic:"what you've been doing",grammar:"PERFECT (tenho feito/tem estudado)"},
  127: {skill:"passive voice",topic:"formal/news style",grammar:"PASSIVE (foi feito/é falado)"},
  128: {skill:"reported speech",topic:"what others said",grammar:"REPORTED (ele disse que/perguntou se)"},
  129: {skill:"diminutives",topic:"cute/soft expressions",grammar:"DIMINUTIVE (-inho/-inha)"},
  130: {skill:"augmentatives",topic:"emphasis, exaggeration",grammar:"AUGMENTATIVE (-ão/-ona)"},
  131: {skill:"error awareness",topic:"common mistakes",grammar:"pra eu (not mim)/a gente vai (not vamos)"},
  132: {skill:"internet talk",topic:"texting, memes",grammar:"internet abbreviations (vc/tb/kk)"},
  133: {skill:"regional variety",topic:"dialects, accents",grammar:"regional expressions (oxe/bah/mano)"},
  134: {skill:"physical sensations",topic:"hunger, cold, tired",grammar:"estar com + physical state"},
  135: {skill:"dating depth",topic:"flirting, relationships",grammar:"ficar/namorar/paquerar"},
  136: {skill:"nightlife",topic:"parties, clubs",grammar:"nightlife vocabulary"},
  137: {skill:"history",topic:"Brazilian history",grammar:"historical vocabulary"},
  138: {skill:"music expertise",topic:"composition, genres",grammar:"music terminology"},
  139: {skill:"weather idioms",topic:"weather expressions",grammar:"idiomatic weather phrases"},
  140: {skill:"cooking mastery",topic:"advanced techniques",grammar:"cooking terminology"},
  141: {skill:"filler mastery",topic:"natural speech flow",grammar:"tipo/sei lá/né/pois é/enfim"},
  142: {skill:"farewell culture",topic:"Brazilian goodbyes",grammar:"farewell expressions"},
  143: {skill:"review mastery",topic:"everything",grammar:"all structures"},
  144: {skill:"extended basics",topic:"essential phrases",grammar:"dar/coisa/jeito/lugar"},
  145: {skill:"pharmacy",topic:"medicine, symptoms",grammar:"pharmacy vocabulary"},
  146: {skill:"housework",topic:"chores, maintenance",grammar:"household verb vocabulary"},
  147: {skill:"plan making",topic:"arranging meetups",grammar:"combinar/avisar/confirmar"},
  148: {skill:"latest slang",topic:"current trends",grammar:"mitar/cringe/zueira"},
  149: {skill:"beach culture",topic:"surfing, sun",grammar:"beach vocabulary"},
  150: {skill:"airport mastery",topic:"flights, customs",grammar:"airport vocabulary"},
};

// Build Bia's dynamic system prompt based on completed units
export function buildBiaPrompt(completedUnits, allWords) {
  const skills = [];
  const topics = [];
  const grammar = [];
  const unitCount = completedUnits.length;

  completedUnits.forEach(i => {
    const s = BIA_SKILLS[i];
    if (s) {
      skills.push(s.skill);
      topics.push(s.topic);
      grammar.push(s.grammar);
    }
  });

  // Determine Bia's personality stage
  let stage, style;
  if (unitCount <= 5) {
    stage = "BEGINNER";
    style = "Use VERY simple sentences (3-5 words). Ask yes/no questions. Speak slowly. Use only basic present tense. Repeat words often. Be very encouraging.";
  } else if (unitCount <= 15) {
    stage = "ELEMENTARY";
    style = "Use simple sentences (5-8 words). Ask simple questions. You can use past tense if the student has learned it. Be warm and patient.";
  } else if (unitCount <= 30) {
    stage = "PRE-INTERMEDIATE";
    style = "Use natural short sentences. Ask about their daily life, opinions, preferences. Mix present and past tense. Start introducing new expressions naturally.";
  } else if (unitCount <= 50) {
    stage = "INTERMEDIATE";
    style = "Speak naturally. Ask open-ended questions. Use idioms the student has learned. Discuss culture, food, travel. Gently correct mistakes.";
  } else if (unitCount <= 80) {
    stage = "UPPER-INTERMEDIATE";
    style = "Speak at near-native speed. Use subjunctive and conditional if learned. Discuss opinions, news, social topics. Challenge them with longer responses.";
  } else if (unitCount <= 120) {
    stage = "ADVANCED";
    style = "Speak naturally with slang, idioms, and filler words. Discuss abstract topics, philosophy, history. Use all grammar structures they've learned. Push them.";
  } else {
    stage = "NEAR-NATIVE";
    style = "Speak exactly like a native Brazilian friend. Use regional expressions, internet slang, augmentatives, diminutives. Debate, joke, tell stories. Full natural Portuguese.";
  }

  const recentTopics = topics.slice(-10).join(", ");
  const grammarList = [...new Set(grammar)].join(", ");
  // Send ALL learned words (up to 400) so Bia knows exactly what's available
  const wordList = allWords.slice(0, 400).map(w => `${w[0]}(${w[1]})`).join(", ");

  return `You are Bia, a warm Brazilian Portuguese tutor. Stage: ${stage} (${unitCount} units completed).

STYLE: ${style}

TOPICS you can discuss (based on completed units): ${recentTopics}

GRAMMAR the student knows: ${grammarList}

ALLOWED VOCABULARY — use ONLY these words in your Portuguese replies:
${wordList}

STRICT RULES:
- CRITICAL: Your Portuguese response MUST use ONLY words from the ALLOWED VOCABULARY list above. Do NOT use any Portuguese word that is not in that list. If you need a word not in the list, use the English word instead and teach it.
- Use ONLY grammar structures listed above. Don't use subjunctive if they haven't learned it. Don't use past tense if they haven't learned it.
- For BEGINNER stage: use maximum 3-5 word sentences. Ask yes/no questions only. Stick to greetings and basic nouns.
- Prioritize recently learned topics to reinforce new vocabulary.
- If they write in English, respond in simple Portuguese (using only allowed words) with translation.
- EXCEPTION FOR QUESTIONS: If the student ASKS A QUESTION about Portuguese — like "how do I say X?", "what does Y mean?", "why is it Z?", "can you translate this?", or asks about grammar — then ANSWER THEIR QUESTION fully and helpfully in the "en" field, even if it requires Portuguese words outside the allowed list. Teaching them a new word or explaining grammar when they ask is ALWAYS allowed. Put the answer in "en" and any example Portuguese in "pt". Helping a curious student learn is more important than the vocabulary restriction.
- If they make a grammar mistake, gently correct it using the "fix" field.
- Reply ONLY raw JSON: {"pt":"Portuguese reply","en":"English translation OR answer to their question","tip":"grammar/culture tip or null","fix":"correction of their mistake or null"}
- Brazilian Portuguese only (not European).`;
}

// Bia scenario modes — specific situations to practice
export const BIA_SCENARIOS = [
  {id:"restaurant",icon:"🍽️",name:"At the Restaurant",desc:"Order food, ask about the menu, pay the bill",prompt:"You are a waiter at a Brazilian restaurant. The student just sat down. Take their order, suggest dishes, discuss the menu. Use only vocabulary they know.",reqUnits:8},
  {id:"airport",icon:"✈️",name:"At the Airport",desc:"Check in, find your gate, handle delays",prompt:"You are an airport attendant in São Paulo. Help the student check in, find their gate, and handle a flight delay. Use only vocabulary they know.",reqUnits:42},
  {id:"doctor",icon:"🏥",name:"At the Doctor",desc:"Describe symptoms, understand instructions",prompt:"You are a doctor in Brazil. The student is your patient. Ask about symptoms, give a diagnosis, prescribe treatment. Use only vocabulary they know.",reqUnits:12},
  {id:"shopping",icon:"🛍️",name:"Going Shopping",desc:"Try on clothes, ask about sizes, bargain",prompt:"You are a vendor at a Brazilian market. Help the student find clothes, discuss sizes and prices, and negotiate. Use only vocabulary they know.",reqUnits:6},
  {id:"friends",icon:"🤝",name:"Making Friends",desc:"Introduce yourself, make plans, chat casually",prompt:"You are a friendly Brazilian meeting the student at a party. Make small talk, ask about their life, make plans to hang out. Use only vocabulary they know.",reqUnits:2},
  {id:"work",icon:"💼",name:"Job Interview",desc:"Answer questions, discuss experience",prompt:"You are interviewing the student for a job in Brazil. Ask about experience, skills, and availability. Be professional but friendly. Use only vocabulary they know.",reqUnits:49},
  {id:"hotel",icon:"🏨",name:"At the Hotel",desc:"Check in, ask about amenities, report issues",prompt:"You are a hotel receptionist in Rio. Help the student check in, explain amenities, and handle a room complaint. Use only vocabulary they know.",reqUnits:17},
  {id:"taxi",icon:"🚕",name:"In a Taxi",desc:"Give directions, chat with the driver",prompt:"You are a chatty taxi driver in São Paulo. Ask where the student wants to go, talk about the city, recommend places. Use only vocabulary they know.",reqUnits:9},
];

// Cultural tips — one per day, rotated
export const CULTURAL_TIPS = [
  {tip:"Brazilians greet friends with a kiss on the cheek (one in São Paulo, two in Rio). Even men greet women this way.",cat:"🤝 Greetings"},
  {tip:"'Jeitinho brasileiro' means finding a creative workaround. It's a core cultural concept — Brazilians are masters of improvising solutions.",cat:"🧠 Culture"},
  {tip:"Thumbs up (👍) is the Brazilian 'OK.' It's used way more than in English — to say thanks, agree, or just acknowledge.",cat:"🤙 Gestures"},
  {tip:"Lunch is the biggest meal in Brazil, not dinner. Many businesses close for a long lunch break (almoço) from 12-2pm.",cat:"🍽️ Food"},
  {tip:"Brazilians LOVE diminutives. 'Cafezinho' (little coffee) isn't about size — it's affection. Everything gets an '-inho' or '-inha'.",cat:"💬 Language"},
  {tip:"Never give someone an even number of flowers in Brazil — even numbers are for funerals. Always odd!",cat:"🎁 Customs"},
  {tip:"'Saudade' has no English translation. It's the longing for something or someone you love. Brazilians consider it the most beautiful word.",cat:"💚 Emotion"},
  {tip:"Brazilians say 'Bom dia' (good morning), 'Boa tarde' (good afternoon), and 'Boa noite' (good evening) based on time of day. Using the wrong one is noticeable!",cat:"🤝 Greetings"},
  {tip:"The 'OK' sign (👌) is OFFENSIVE in Brazil. It's equivalent to the middle finger. Use thumbs up instead!",cat:"🤙 Gestures"},
  {tip:"Feijoada on Saturday is a tradition. Families and restaurants serve this black bean stew with rice, farofa, and orange slices.",cat:"🍽️ Food"},
  {tip:"'Você' is used everywhere in Brazil, but some regions (like Rio Grande do Sul) use 'tu.' In São Paulo, it's always 'você.'",cat:"💬 Language"},
  {tip:"Brazilians are famously late. '8 o'clock' often means 8:30 or 9. It's not rude — it's just Brazilian time!",cat:"⏰ Culture"},
  {tip:"Personal space is smaller in Brazil. People stand closer, touch arms while talking, and are very physically expressive.",cat:"🤝 Social"},
  {tip:"Açaí in Brazil is eaten as a thick bowl with granola, NOT as a smoothie. And it's savory in some northern regions!",cat:"🍽️ Food"},
  {tip:"Carnival isn't just in Rio! Salvador, Recife, and Olinda each have completely different styles of celebration.",cat:"🎭 Culture"},
  {tip:"'Obrigado' (men) vs 'Obrigada' (women) — the ending agrees with the SPEAKER, not the person being thanked.",cat:"💬 Language"},
  {tip:"Brazilian addresses often use 'sem número' (no number). Many houses don't have street numbers!",cat:"🏠 Daily Life"},
  {tip:"In Brazil, 'education' (educação) means 'manners' more than schooling. Calling someone 'mal-educado' means rude, not uneducated.",cat:"💬 Language"},
  {tip:"Brazilians wave goodbye with the palm facing IN (towards themselves), not out. The opposite of the American wave.",cat:"🤙 Gestures"},
  {tip:"CPF is like a social security number in Brazil. You need it for EVERYTHING — even buying a phone or returning an item.",cat:"📋 Daily Life"},
  {tip:"The phrase 'Deus quiser' (God willing) is used constantly. Making plans? 'Amanhã, se Deus quiser!' It's not deeply religious — just cultural.",cat:"🙏 Culture"},
  {tip:"Brazilian Portuguese sounds VERY different from European Portuguese. Brazilians joke that they can't understand Portuguese people!",cat:"💬 Language"},
  {tip:"Churrasco (barbecue) is serious business. The 'churrasqueiro' (grill master) is a respected role, and the meat is salted with coarse salt only.",cat:"🍽️ Food"},
  {tip:"WhatsApp is the primary communication tool in Brazil — more than texting, email, or calling. Businesses run on WhatsApp.",cat:"📱 Modern"},
  {tip:"Brazilians don't say 'I'm hot' as 'Eu sou quente' — that means 'I'm attractive/sexy.' Say 'Estou com calor' instead!",cat:"⚠️ Mistakes"},
  {tip:"The word 'legal' in Brazilian Portuguese means 'cool/awesome,' not 'legal/lawful.' 'Que legal!' = 'How cool!'",cat:"💬 Language"},
  {tip:"Pix (instant payment) replaced cash and cards in Brazil almost overnight. Everyone from street vendors to dentists accepts Pix.",cat:"💰 Modern"},
  {tip:"In Brazil, the ground floor is 'térreo,' and what Americans call the '2nd floor' is the '1st floor' (primeiro andar).",cat:"🏢 Daily Life"},
  {tip:"Novelas (soap operas) are a cultural phenomenon. The final episode of a popular novela can get 60+ million viewers.",cat:"📺 Culture"},
  {tip:"Brigadeiro (chocolate truffle) is named after a Brazilian military officer. It's THE birthday party dessert — no party is complete without it.",cat:"🍽️ Food"},
];

// False Friends — Portuguese words that look like English but mean something different
export const FALSE_FRIENDS = [
  {pt:"Excitado",looks:"Excited",actually:"Sexually aroused",correct:"Animado / Empolgado",danger:5,example:"Estou animado com a viagem! (I'm excited about the trip!)"},
  {pt:"Puxe",looks:"Push",actually:"Pull",correct:"Empurre (Push)",danger:5,example:"Puxe a porta! (Pull the door!)"},
  {pt:"Constipado",looks:"Constipated",actually:"Having a cold",correct:"Prisão de ventre (Constipated)",danger:4,example:"Estou constipado, preciso de lenço. (I have a cold, need tissues.)"},
  {pt:"Pretender",looks:"Pretend",actually:"To intend / plan",correct:"Fingir (Pretend)",danger:4,example:"Pretendo viajar em julho. (I plan to travel in July.)"},
  {pt:"Educado",looks:"Educated",actually:"Polite / well-mannered",correct:"Instruído / Culto (Educated)",danger:4,example:"Ele é muito educado. (He is very polite.)"},
  {pt:"Parente",looks:"Parent",actually:"Relative (any family member)",correct:"Pai/Mãe (Parent)",danger:4,example:"Tenho muitos parentes no Sul. (I have many relatives in the South.)"},
  {pt:"Assistir",looks:"Assist",actually:"To watch / attend",correct:"Ajudar (Assist)",danger:3,example:"Vou assistir o jogo. (I'm going to watch the game.)"},
  {pt:"Realizar",looks:"Realize",actually:"To accomplish / achieve",correct:"Perceber (Realize)",danger:3,example:"Realizei meu sonho! (I achieved my dream!)"},
  {pt:"Resumo",looks:"Resume",actually:"Summary",correct:"Retomar (Resume) / Currículo (CV)",danger:3,example:"Veja o resumo do jogo. (See the game summary.)"},
  {pt:"Costume",looks:"Costume",actually:"Habit / custom",correct:"Fantasia (Costume)",danger:3,example:"Tenho o costume de correr de manhã. (I have the habit of running in the morning.)"},
  {pt:"Fábrica",looks:"Fabric",actually:"Factory",correct:"Tecido (Fabric)",danger:3,example:"Trabalho na fábrica. (I work at the factory.)"},
  {pt:"Atualmente",looks:"Actually",actually:"Currently / nowadays",correct:"Na verdade (Actually)",danger:3,example:"Atualmente moro no Brasil. (Currently I live in Brazil.)"},
  {pt:"Jornal",looks:"Journal",actually:"Newspaper / TV news",correct:"Diário (Journal/diary)",danger:2,example:"Leio o jornal todo dia. (I read the newspaper every day.)"},
  {pt:"Colégio",looks:"College",actually:"School (elementary/high)",correct:"Faculdade (College/university)",danger:2,example:"Meu filho está no colégio. (My son is at school.)"},
  {pt:"Eventualmente",looks:"Eventually",actually:"Occasionally",correct:"Finalmente (Eventually)",danger:2,example:"Eventualmente eu corro. (I occasionally run.)"},
];

// Ser vs Estar drills
export const SER_ESTAR_DRILLS = [
  {sentence:"Eu ___ brasileiro.",answer:"sou",verb:"ser",why:"Nationality is permanent — use ser."},
  {sentence:"Eu ___ cansado hoje.",answer:"estou",verb:"estar",why:"Tiredness is temporary — use estar."},
  {sentence:"Ela ___ bonita.",answer:"é",verb:"ser",why:"Beauty as a characteristic — use ser."},
  {sentence:"Ela ___ bonita hoje!",answer:"está",verb:"estar",why:"Looking good TODAY (temporary) — use estar."},
  {sentence:"O café ___ quente.",answer:"está",verb:"estar",why:"Temperature is a current state — use estar."},
  {sentence:"O Rio ___ no Brasil.",answer:"fica/é",verb:"ser",why:"Location of a city (permanent) — use ser or ficar."},
  {sentence:"Ele ___ médico.",answer:"é",verb:"ser",why:"Profession is identity — use ser."},
  {sentence:"A festa ___ na casa da Ana.",answer:"é",verb:"ser",why:"Events use ser for location."},
  {sentence:"Nós ___ felizes aqui.",answer:"estamos",verb:"estar",why:"Feeling happy (current emotion) — use estar."},
  {sentence:"A comida ___ deliciosa!",answer:"está",verb:"estar",why:"Tasting good right now — use estar."},
  {sentence:"Ele ___ alto e magro.",answer:"é",verb:"ser",why:"Physical traits (permanent) — use ser."},
  {sentence:"Eu ___ com fome.",answer:"estou",verb:"estar",why:"Hunger is temporary — use estar."},
  {sentence:"Que horas ___?",answer:"são",verb:"ser",why:"Time always uses ser."},
  {sentence:"A porta ___ aberta.",answer:"está",verb:"estar",why:"Open/closed is a current state — use estar."},
  {sentence:"Eles ___ irmãos.",answer:"são",verb:"ser",why:"Family relationships are permanent — use ser."},
  {sentence:"Eu ___ perdido!",answer:"estou",verb:"estar",why:"Being lost is temporary — use estar."},
  {sentence:"Hoje ___ segunda-feira.",answer:"é",verb:"ser",why:"Days of the week use ser."},
  {sentence:"O livro ___ de madeira.",answer:"é",verb:"ser",why:"Material composition is permanent — use ser."},
  {sentence:"A Maria ___ doente.",answer:"está",verb:"estar",why:"Illness is a temporary condition — use estar."},
  {sentence:"Nós ___ estudantes.",answer:"somos",verb:"ser",why:"Being a student is identity — use ser."},
];

// Achievement badges — unlockable milestones
export const ACHIEVEMENTS = [
  {id:"first_unit",icon:"🌱",name:"Primeira Palavra",desc:"Complete your first unit",check:p=>(p.units||[]).length>=1},
  {id:"ten_units",icon:"🔟",name:"Dez Unidades",desc:"Complete 10 units",check:p=>(p.units||[]).length>=10},
  {id:"fifty_units",icon:"🌟",name:"Metade do Caminho",desc:"Complete 50 units",check:p=>(p.units||[]).length>=50},
  {id:"hundred_units",icon:"💎",name:"Centenário",desc:"Complete 100 units",check:p=>(p.units||[]).length>=100},
  {id:"all_units",icon:"🇧🇷",name:"Brasileiro!",desc:"Complete all 151 units",check:p=>(p.units||[]).length>=151},
  {id:"words_100",icon:"💯",name:"100 Palavras",desc:"Learn 100 words",check:p=>(p.units||[]).length>=10},
  {id:"words_500",icon:"📚",name:"500 Palavras",desc:"Learn 500 words",check:p=>(p.units||[]).length>=50},
  {id:"words_1000",icon:"🏆",name:"Mil Palavras",desc:"Learn 1,000 words",check:p=>(p.units||[]).length>=100},
  {id:"words_1510",icon:"👑",name:"Vocabulário Completo",desc:"Learn all 1,510 words",check:p=>(p.units||[]).length>=151},
  {id:"streak_3",icon:"🔥",name:"Três Dias",desc:"3-day streak",check:p=>(p.streak||0)>=3},
  {id:"streak_7",icon:"🔥",name:"Semana de Fogo",desc:"7-day streak",check:p=>(p.streak||0)>=7},
  {id:"streak_30",icon:"🔥",name:"Mês de Fogo",desc:"30-day streak",check:p=>(p.streak||0)>=30},
  {id:"streak_100",icon:"💪",name:"Imparável",desc:"100-day streak",check:p=>(p.streak||0)>=100},
  {id:"xp_100",icon:"⭐",name:"Primeiro XP",desc:"Earn 100 XP",check:p=>(p.xp||0)>=100},
  {id:"xp_1000",icon:"⭐",name:"Mil XP",desc:"Earn 1,000 XP",check:p=>(p.xp||0)>=1000},
  {id:"xp_5000",icon:"🌟",name:"XP Master",desc:"Earn 5,000 XP",check:p=>(p.xp||0)>=5000},
  {id:"exercises_100",icon:"📝",name:"Exercitador",desc:"Complete 100 exercises",check:p=>(p.exDone||0)>=100},
  {id:"exercises_500",icon:"📝",name:"Praticante",desc:"Complete 500 exercises",check:p=>(p.exDone||0)>=500},
  {id:"exercises_1000",icon:"🎯",name:"Dedicado",desc:"Complete 1,000 exercises",check:p=>(p.exDone||0)>=1000},
  {id:"accuracy_90",icon:"🎯",name:"Precisão",desc:"90%+ accuracy (50+ exercises)",check:p=>(p.exDone||0)>=50&&(p.exOk||0)/(p.exDone||1)>=0.9},
  {id:"level_5",icon:"📈",name:"Nível 5",desc:"Unlock Level 5",check:p=>(p.levels||[]).length>=5},
  {id:"level_10",icon:"📈",name:"Nível 10",desc:"Unlock Level 10",check:p=>(p.levels||[]).length>=10},
  {id:"level_15",icon:"🏅",name:"Todos os Níveis",desc:"Unlock all 15 levels",check:p=>(p.levels||[]).length>=15},
  {id:"cefr_a2",icon:"🌍",name:"A2 Alcançado",desc:"Reach CEFR A2",check:p=>(p.units||[]).length>=30},
  {id:"cefr_b1",icon:"🌍",name:"B1 Alcançado",desc:"Reach CEFR B1",check:p=>(p.units||[]).length>=60},
  {id:"time_1h",icon:"⏰",name:"Uma Hora",desc:"Study for 1 hour total",check:p=>(p.time||0)>=3600},
  {id:"time_10h",icon:"⏰",name:"Dez Horas",desc:"Study for 10 hours total",check:p=>(p.time||0)>=36000},
  {id:"chat_first",icon:"💬",name:"Primeira Conversa",desc:"Chat with Bia",check:p=>(p.chatCount||0)>=1},
];
