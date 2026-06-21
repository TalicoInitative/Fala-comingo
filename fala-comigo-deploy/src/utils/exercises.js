// Exercise generation engine v3 — with spiral review, sentence builder, free recall, daily challenge
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z\s]/g, "").trim();
const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const QUIZ_TYPES = ["pick_en", "pick_pt", "listen", "type_pt", "true_false", "listen_type"];

function makeQuizExercise(word, pool, type) {
  const wrongPool = shuffle(pool.filter(x => x[1] !== word[1])).slice(0, 3);
  switch (type) {
    case "pick_en": return { t: "pick_en", q: word[0], a: word[1], opts: shuffle([word, ...wrongPool]).map(x => x[1]) };
    case "pick_pt": return { t: "pick_pt", q: word[1], a: word[0], opts: shuffle([word, ...wrongPool]).map(x => x[0]) };
    case "listen": return { t: "listen", audio: word[0], a: word[1], opts: shuffle([word, ...wrongPool]).map(x => x[1]) };
    case "type_pt": return { t: "type_pt", q: word[1], a: word[0] };
    case "true_false": { const fake = Math.random() > 0.5; const shown = fake ? wrongPool[0][1] : word[1];
      return { t: "true_false", q: word[0], shown, a: !fake, correct: word[1] }; }
    case "listen_type": return { t: "listen_type", audio: word[0], a: word[0] };
    default: return { t: "pick_en", q: word[0], a: word[1], opts: shuffle([word, ...wrongPool]).map(x => x[1]) };
  }
}

function rw(words, n) { return words[Math.floor(Math.random() * Math.min(n || words.length, words.length))]; }

// Error correction bank
const ERROR_BANK = [
  {wrong:"Pra mim fazer o trabalho",right:"Pra eu fazer o trabalho",rule:"'Mim' can't be a subject — use 'eu'"},
  {wrong:"A gente vamos ao cinema",right:"A gente vai ao cinema",rule:"'A gente' takes singular verb"},
  {wrong:"Fazem dois dias que não chove",right:"Faz dois dias que não chove",rule:"'Fazer' for time is always singular"},
  {wrong:"Menas pessoas vieram",right:"Menos pessoas vieram",rule:"'Menos' never changes — there's no 'menas'"},
  {wrong:"Eu vi ele ontem",right:"Eu o vi ontem",rule:"Use object pronoun 'o/a' in written Portuguese"},
  {wrong:"Haviam muitas pessoas",right:"Havia muitas pessoas",rule:"'Haver' meaning 'exist' is always singular"},
  {wrong:"Eu assisti o filme",right:"Eu assisti ao filme",rule:"'Assistir' takes 'a' — assistir ao filme"},
  {wrong:"Ela namorou com ele",right:"Ela namorou ele",rule:"'Namorar' is direct — no 'com' needed"},
  {wrong:"Eu fui no mercado",right:"Eu fui ao mercado",rule:"'Ir' takes 'a' — fui ao mercado, not no mercado"},
  {wrong:"Onde você vai?",right:"Aonde você vai?",rule:"'Aonde' for motion (vai), 'onde' for location (está)"},
  {wrong:"Eu e ela fomos",right:"Ela e eu fomos",rule:"In Portuguese, put yourself last: 'Ela e eu', not 'Eu e ela'"},
  {wrong:"Obrigado (said by a woman)",right:"Obrigada",rule:"Women say 'obrigada', men say 'obrigado' — it agrees with the speaker"},
];

// Spiral review: pick words from ALL completed units, weighted by recency
function spiralPick(allCompletedWords, count) {
  if (!allCompletedWords?.length) return [];
  // Weight older words higher (they need more review)
  const weighted = allCompletedWords.map((w, i) => ({
    word: w,
    weight: 1 + (allCompletedWords.length - i) / allCompletedWords.length // older = higher weight
  }));
  const totalWeight = weighted.reduce((s, w) => s + w.weight, 0);
  const picked = [];
  const used = new Set();
  for (let i = 0; i < Math.min(count, allCompletedWords.length); i++) {
    let r = Math.random() * totalWeight;
    for (const w of weighted) {
      r -= w.weight;
      if (r <= 0 && !used.has(w.word[0])) { picked.push(w.word); used.add(w.word[0]); break; }
    }
  }
  return picked;
}

// Generate the mixed exercise flow for a unit
export function generateUnitFlow(unit, allLevelWords, prevUnitWords, grammarNotes, convos, sentences, story, allCompletedWords, crossSentences) {
  const flow = [];
  const words = unit.w;
  const pool = [...allLevelWords, ...(prevUnitWords || [])];

  const cv = convos?.length ? shuffle([...convos]) : [];
  const convo = i => cv.length ? cv[i % cv.length] : null;
  const multiWord = words.filter(w => w[0].includes(" "));
  const rMW = () => multiWord.length > 0 ? multiWord[Math.floor(Math.random() * multiWord.length)] : null;
  const sents = sentences?.length ? shuffle([...sentences]) : [];
  const makeSent = (s) => ({ ...s, shuffledOpts: shuffle([s.a, ...s.opts]) });
  const makeStory = (st) => st ? { ...st, questions: st.questions.map(q => ({ ...q, shuffledOpts: shuffle([q.a, ...q.opts]) })) } : null;

  // Get eligible cross-unit sentences
  const eligibleCross = (crossSentences || []).filter(cs => cs.req <= (allCompletedWords?.length ? Math.floor(allCompletedWords.length / 10) : 0));
  const crossPool = shuffle(eligibleCross);

  // ── PHASE 1: DISCOVER (words 1-3) — listen-first ──
  for (let i = 0; i < Math.min(3, words.length); i++) {
    // Listen-first: audio plays before text reveals
    flow.push({ t: "intro_listen", word: words[i] });
  }
  flow.push({ t: "mimicry", word: words[Math.min(2, words.length - 1)] });
  if (grammarNotes?.[0]) flow.push({ t: "grammar", text: grammarNotes[0] });

  // 💬 Conversation 1
  if (convo(0)) flow.push({ t: "convo", data: convo(0) });

  // ── PHASE 2: EXPAND (words 4-6) ──
  for (let i = 3; i < Math.min(6, words.length); i++) {
    flow.push({ t: "intro_listen", word: words[i] });
  }
  if (sents[0]) flow.push({ t: "sentence", data: makeSent(sents[0]) });
  else flow.push({ t: "flash", word: rw(words, 6) });
  flow.push(makeQuizExercise(rw(words, 6), pool, "pick_en"));
  flow.push({ t: "mimicry", word: rw(words, 6) });

  // 💬 Conversation 2
  if (convo(1)) flow.push({ t: "convo", data: convo(1) });

  // ── PHASE 3: COMPLETE (words 7-10) ──
  for (let i = 6; i < words.length; i++) {
    flow.push({ t: "intro", word: words[i] }); // Later words use regular intro
  }
  if (grammarNotes?.[1]) flow.push({ t: "grammar", text: grammarNotes[1] });
  if (sents[1]) flow.push({ t: "sentence", data: makeSent(sents[1]) });
  flow.push({ t: "mimicry", word: rw(words) });
  const mw1 = rMW();
  if (mw1) flow.push({ t: "word_order", word: mw1, scrambled: shuffle(mw1[0].split(" ")) });

  // 💬 Conversation 3
  if (convo(2)) flow.push({ t: "convo", data: convo(2) });

  // ── PHASE 4: REINFORCE ──
  const quizWords = shuffle([...words]);
  for (let i = 0; i < 3; i++) {
    flow.push(makeQuizExercise(quizWords[i % quizWords.length], pool, QUIZ_TYPES[i % QUIZ_TYPES.length]));
  }

  // Sentence builder (cross-unit) — arrange word bubbles
  if (crossPool[0]) flow.push({ t: "sentence_build", data: crossPool[0] });

  // Error correction (levels 3+)
  if (unit.l >= 3) {
    const err = ERROR_BANK[Math.floor(Math.random() * ERROR_BANK.length)];
    flow.push({ t: "error_correct", data: err });
  }

  flow.push({ t: "mimicry", word: rw(words) });

  // 🔄 SPIRAL REVIEW — pull from ALL completed units (not just last 3)
  const spiralWords = spiralPick(allCompletedWords, 3);
  spiralWords.forEach(sw => {
    flow.push(makeQuizExercise(sw, [...pool, ...spiralWords], QUIZ_TYPES[Math.floor(Math.random() * 4)]));
  });

  // 💬 Conversation 4
  if (convo(3)) flow.push({ t: "convo", data: convo(3) });

  // ── PHASE 5: MASTER ──
  // Free recall — type a full Portuguese sentence from English
  if (crossPool[1]) flow.push({ t: "free_recall", data: crossPool[1] });
  else flow.push(makeQuizExercise(rw(words), pool, "type_pt"));

  const mw2 = rMW();
  if (mw2) flow.push({ t: "word_order", word: mw2, scrambled: shuffle(mw2[0].split(" ")) });
  flow.push({ t: "mimicry", word: rw(words) });
  if (grammarNotes?.[2]) flow.push({ t: "grammar", text: grammarNotes[2] });

  // Second sentence builder if available
  if (crossPool[2]) flow.push({ t: "sentence_build", data: crossPool[2] });

  // Mini-story
  if (story) flow.push({ t: "story", data: makeStory(story) });

  // Final quiz
  for (let i = 0; i < 2; i++) {
    flow.push(makeQuizExercise(rw(words), pool, QUIZ_TYPES[(i + 2) % QUIZ_TYPES.length]));
  }

  // 💬 Conversation 5
  if (convo(4)) flow.push({ t: "convo", data: convo(4) });

  return flow;
}

// Generate daily challenge — 3-minute mixed review from ALL completed words
export function generateDailyChallenge(allCompletedWords, crossSentences) {
  if (!allCompletedWords?.length) return [];
  const pool = [...allCompletedWords];
  const flow = [];
  const words = shuffle(pool).slice(0, 12);
  const eligible = (crossSentences || []).filter(cs => cs.req <= Math.floor(pool.length / 10));
  const cross = shuffle(eligible);

  // Warm up — 2 quick picks
  flow.push(makeQuizExercise(words[0], pool, "pick_en"));
  flow.push(makeQuizExercise(words[1], pool, "pick_pt"));

  // Sentence builder
  if (cross[0]) flow.push({ t: "sentence_build", data: cross[0] });

  // Listen exercise
  flow.push(makeQuizExercise(words[2], pool, "listen"));
  flow.push({ t: "mimicry", word: words[3] });

  // Type exercise
  flow.push(makeQuizExercise(words[4], pool, "type_pt"));

  // Free recall
  if (cross[1]) flow.push({ t: "free_recall", data: cross[1] });

  // Error correction
  const err = ERROR_BANK[Math.floor(Math.random() * ERROR_BANK.length)];
  flow.push({ t: "error_correct", data: err });

  // Final sprint
  flow.push(makeQuizExercise(words[5], pool, "listen_type"));
  if (cross[2]) flow.push({ t: "sentence_build", data: cross[2] });
  flow.push(makeQuizExercise(words[6 % words.length], pool, "pick_en"));

  return flow;
}

// Generate level test
export function generateLevelTest(allLevelWords) {
  const pool = [...allLevelWords];
  const selected = shuffle(pool).slice(0, 20);
  const flow = [];
  for (let i = 0; i < 20; i++) {
    const type = QUIZ_TYPES[i % QUIZ_TYPES.length];
    flow.push(makeQuizExercise(selected[i], pool, type));
    if (i % 5 === 4) flow.push({ t: "mimicry", word: selected[Math.floor(Math.random() * selected.length)] });
  }
  const multiWord = allLevelWords.filter(w => w[0].includes(" "));
  if (multiWord.length > 0) {
    const target = multiWord[Math.floor(Math.random() * multiWord.length)];
    flow.push({ t: "word_order", word: target, scrambled: shuffle(target[0].split(" ")) });
  }
  return flow;
}

// Generate review session from weak words
export function generateReview(weakWords, allWords) {
  const pool = [...allWords];
  const flow = [];
  const words = shuffle([...weakWords]).slice(0, 10);
  words.forEach((w, i) => {
    flow.push({ t: "flash", word: w });
    flow.push(makeQuizExercise(w, pool, QUIZ_TYPES[i % QUIZ_TYPES.length]));
    if (i % 3 === 2) flow.push({ t: "mimicry", word: w });
  });
  return flow;
}

export { norm, shuffle };
