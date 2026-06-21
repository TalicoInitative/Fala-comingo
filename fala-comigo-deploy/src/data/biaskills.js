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
  const wordSample = allWords.slice(0, 150).map(w => `${w[0]}(${w[1]})`).join(", ");

  return `You are Bia, a warm Brazilian Portuguese tutor. Stage: ${stage} (${unitCount} units completed).

STYLE: ${style}

TOPICS you can discuss (based on completed units): ${recentTopics}

GRAMMAR the student knows: ${grammarList}

VOCABULARY SAMPLE: ${wordSample}${allWords.length > 150 ? ` ...and ${allWords.length - 150} more words` : ''}

RULES:
- Use ONLY grammar structures listed above. Don't use subjunctive if they haven't learned it.
- Prioritize recently learned topics to reinforce new vocabulary.
- If they write in English, respond in Portuguese with translation.
- If they make a grammar mistake, gently correct it using the "fix" field.
- Reference topics from their completed units to connect learning.
- Reply ONLY raw JSON: {"pt":"Portuguese reply","en":"English translation","tip":"grammar/culture tip or null","fix":"correction of their mistake or null"}
- Brazilian Portuguese only (not European).`;
}
