// Exercise generation engine v4 — balanced flow, proper variety
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z\s]/g, "").trim();
const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const QUIZ_TYPES = ["pick_en", "pick_pt", "listen", "type_pt", "true_false", "listen_type"];

function makeQuiz(word, pool, type) {
  let wp = shuffle(pool.filter(x => x[1] !== word[1])).slice(0, 3);
  // Pad with fallback options if pool is too small
  const fallback = [["sim","yes","seeng"],["não","no","nowng"],["talvez","maybe","tahl-VEZ"],["aqui","here","ah-KEE"]];
  while(wp.length < 3) { const fb = fallback[wp.length]; if(fb && !wp.some(w=>w[1]===fb[1]) && fb[1]!==word[1]) wp.push(fb); else break; }
  switch (type) {
    case "pick_en": return { t: "pick_en", q: word[0], a: word[1], opts: shuffle([word, ...wp]).map(x => x[1]) };
    case "pick_pt": return { t: "pick_pt", q: word[1], a: word[0], opts: shuffle([word, ...wp]).map(x => x[0]) };
    case "listen": return { t: "listen", audio: word[0], a: word[1], opts: shuffle([word, ...wp]).map(x => x[1]) };
    case "type_pt": return { t: "type_pt", q: word[1], a: word[0] };
    case "true_false": { const fake = Math.random() > 0.5; const shown = fake ? wp[0][1] : word[1];
      return { t: "true_false", q: word[0], shown, a: !fake, correct: word[1] }; }
    case "listen_type": return { t: "listen_type", audio: word[0], a: word[0] };
    default: return { t: "pick_en", q: word[0], a: word[1], opts: shuffle([word, ...wp]).map(x => x[1]) };
  }
}

function rw(words, n) { return words[Math.floor(Math.random() * Math.min(n || words.length, words.length))]; }

const ERROR_BANK = [
  {wrong:"Pra mim fazer o trabalho",right:"Pra eu fazer o trabalho",rule:"'Mim' can't be a subject — use 'eu'"},
  {wrong:"A gente vamos ao cinema",right:"A gente vai ao cinema",rule:"'A gente' takes singular verb"},
  {wrong:"Fazem dois dias que não chove",right:"Faz dois dias que não chove",rule:"'Fazer' for time is always singular"},
  {wrong:"Menas pessoas vieram",right:"Menos pessoas vieram",rule:"'Menos' never changes — there's no 'menas'"},
  {wrong:"Haviam muitas pessoas",right:"Havia muitas pessoas",rule:"'Haver' meaning 'exist' is always singular"},
  {wrong:"Eu assisti o filme",right:"Eu assisti ao filme",rule:"'Assistir' takes 'a' — assistir ao filme"},
  {wrong:"Eu fui no mercado",right:"Eu fui ao mercado",rule:"'Ir' takes 'a' — fui ao mercado, not no mercado"},
  {wrong:"Obrigado (said by a woman)",right:"Obrigada",rule:"Women say 'obrigada', men say 'obrigado'"},
];

function spiralPick(allCompleted, count) {
  if (!allCompleted?.length) return [];
  const weighted = allCompleted.map((w, i) => ({ word: w, weight: 1 + (allCompleted.length - i) / allCompleted.length }));
  const total = weighted.reduce((s, w) => s + w.weight, 0);
  const picked = []; const used = new Set();
  for (let i = 0; i < Math.min(count, allCompleted.length); i++) {
    let r = Math.random() * total;
    for (const w of weighted) { r -= w.weight; if (r <= 0 && !used.has(w.word[0])) { picked.push(w.word); used.add(w.word[0]); break; } }
  }
  return picked;
}

const makeSent = (s) => ({ ...s, shuffledOpts: shuffle([s.a, ...s.opts]) });
const makeStory = (st) => st ? { ...st, questions: st.questions.map(q => ({ ...q, shuffledOpts: shuffle([q.a, ...q.opts]) })) } : null;

export function generateUnitFlow(unit, allLevelWords, prevUnitWords, grammarNotes, convos, sentences, story, allCompletedWords, crossSentences) {
  const flow = [];
  const words = unit.w;
  const pool = [...allLevelWords, ...(prevUnitWords || [])];
  const cv = convos?.length ? shuffle([...convos]) : [];
  const convo = i => cv.length ? cv[i % cv.length] : null;
  const multiWord = words.filter(w => w[0].includes(" "));
  const rMW = () => multiWord.length > 0 ? multiWord[Math.floor(Math.random() * multiWord.length)] : null;
  const sents = sentences?.length ? shuffle([...sentences]) : [];
  const eligibleCross = (crossSentences || []).filter(cs => cs.req <= (allCompletedWords?.length ? Math.floor(allCompletedWords.length / 10) : 0));
  const crossPool = shuffle(eligibleCross);

  // Track how many times each word has been practiced (for spacing)
  const seen = {};
  words.forEach(w => seen[w[0]] = 0);
  const bump = w => { seen[w[0]] = (seen[w[0]] || 0) + 1; };

  // ══════════════════════════════════════════════════════════════
  // RESEARCH-BASED FLOW (Webb 2007, Nation 2001, Bisson 2014):
  // Every word gets: MEET (multimodal, no pressure) → RECOGNIZE (4-choice)
  // → RECALL (harder) → PRODUCE (type/speak), spaced across the lesson.
  // Target: 8-12 exposures per word with increasing difficulty.
  // ══════════════════════════════════════════════════════════════

  // Helper: introduce a word gently (meet it — see + hear + meaning, NO test)
  const meet = (w) => { flow.push({ t: "intro", word: w }); bump(w); };
  // Helper: easy recognition test (4-option multiple choice with the answer visible-ish)
  const recognize = (w, dir) => { flow.push(makeQuiz(w, pool, dir || "pick_en")); bump(w); };

  // ─── PHASE 1: MEET FIRST 3 WORDS (pure exposure, build familiarity) ───
  // Research: first exposures should be multimodal with no retrieval pressure
  meet(words[0]);
  meet(words[1]);
  meet(words[2]);
  // Now a GENTLE recognition check on word 1 (it's been seen once, low pressure)
  recognize(words[0], "pick_en");
  flow.push({ t: "flash", word: words[1] }); bump(words[1]);  // flashcard = self-paced recognition
  recognize(words[2], "pick_en");

  // 💬 Conversation 1 (words appear in natural context)
  if (convo(0)) flow.push({ t: "convo", data: convo(0) });

  // Re-test words 1-3 (spaced — they've had a gap now)
  recognize(words[1], "pick_pt");
  recognize(words[0], "listen");  // hear it, pick meaning

  // ─── PHASE 2: MEET WORDS 4-6 ───
  meet(words[3]);
  meet(words[4]);
  meet(words[5] || words[Math.min(5, words.length - 1)]);
  recognize(words[3], "pick_en");
  flow.push({ t: "flash", word: words[4] }); bump(words[4]);
  if (grammarNotes?.[0]) flow.push({ t: "grammar", text: grammarNotes[0] });
  recognize(words[5] || words[Math.min(5, words.length - 1)], "pick_en");

  // Spaced recall of phase-1 words (now harder — pick_pt = produce direction)
  recognize(words[2], "pick_pt");
  if (sents[0]) flow.push({ t: "sentence", data: makeSent(sents[0]) });

  // 💬 Conversation 2
  if (convo(1)) flow.push({ t: "convo", data: convo(1) });

  // ─── PHASE 3: MEET WORDS 7-10 ───
  for (let i = 6; i < words.length; i++) {
    meet(words[i]);
    // Immediately reinforce with a flashcard (recognition, low pressure)
    if (i % 2 === 0) { flow.push({ t: "flash", word: words[i] }); bump(words[i]); }
  }
  // Gentle recognition pass on the new words
  recognize(words[6] || words[0], "pick_en");
  recognize(words[Math.min(7, words.length - 1)], "pick_en");
  if (grammarNotes?.[1]) flow.push({ t: "grammar", text: grammarNotes[1] });
  if (words.length > 8) recognize(words[8], "pick_en");
  if (sents[1]) flow.push({ t: "sentence", data: makeSent(sents[1]) });

  // 💬 Conversation 3
  if (convo(2)) flow.push({ t: "convo", data: convo(2) });

  // ─── PHASE 4: STRENGTHEN — every word gets a recall rep ───
  // Now words have been MET and RECOGNIZED. Time for harder retrieval.
  // Find the words seen the least and prioritize them.
  const leastSeen = [...words].sort((a, b) => (seen[a[0]] || 0) - (seen[b[0]] || 0));
  // First listening practice
  flow.push(makeQuiz(leastSeen[0], pool, "listen")); bump(leastSeen[0]);
  recognize(leastSeen[1], "pick_pt");
  flow.push({ t: "mimicry", word: leastSeen[2] || words[0] }); bump(leastSeen[2] || words[0]);

  // Multi-word phrase ordering
  const mw1 = rMW();
  if (mw1) { flow.push({ t: "word_order", word: mw1, scrambled: shuffle(mw1[0].split(" ")) }); bump(mw1); }

  if (sents[2]) flow.push({ t: "sentence", data: makeSent(sents[2]) });

  // Sentence builder (cross-unit, uses old + new vocabulary)
  if (crossPool[0]) flow.push({ t: "sentence_build", data: { ...crossPool[0], shuffledWords: shuffle([...crossPool[0].words]) } });

  // Error correction (level 3+)
  if (unit.l >= 3) {
    if (Math.random() > 0.4) {
      const err = ERROR_BANK[Math.floor(Math.random() * ERROR_BANK.length)];
      flow.push({ t: "error_correct", data: { ...err, isWrong: true } });
    } else {
      const correct_sents = [
        { sentence: "Eu gosto de café com leite.", rule: "Correct! 'Gostar de' + noun is the standard construction." },
        { sentence: "A gente vai ao cinema hoje.", rule: "Correct! 'A gente' takes singular verb 'vai'." },
        { sentence: "Ela é mais alta que eu.", rule: "Correct! 'Mais...que' for comparisons is right." },
        { sentence: "Faz dois anos que eu moro aqui.", rule: "Correct! 'Fazer' for time is always singular." },
        { sentence: "Eu fui ao mercado comprar frutas.", rule: "Correct! 'Ir a' (not 'ir em') for destinations." },
        { sentence: "Obrigada, disse a mulher.", rule: "Correct! Women say 'obrigada' with -a ending." },
      ];
      const cs = correct_sents[Math.floor(Math.random() * correct_sents.length)];
      flow.push({ t: "error_correct", data: { wrong: cs.sentence, right: cs.sentence, rule: cs.rule, isWrong: false } });
    }
  }

  // 💬 Conversation 4
  if (convo(3)) flow.push({ t: "convo", data: convo(3) });

  // Spiral review — old words from past units mixed in
  const spiralWords = spiralPick(allCompletedWords, 2);
  spiralWords.forEach(sw => {
    flow.push(makeQuiz(sw, [...pool, ...spiralWords], QUIZ_TYPES[Math.floor(Math.random() * 4)]));
  });

  // ─── PHASE 5: PRODUCE & MASTER — hardest retrieval, full production ───
  // Re-sort by least seen so under-practiced words get final reps
  const stillWeak = [...words].sort((a, b) => (seen[a[0]] || 0) - (seen[b[0]] || 0));

  // Free recall (cross-unit)
  if (crossPool[1]) flow.push({ t: "free_recall", data: crossPool[1] });

  // GUARANTEED REINFORCEMENT: every word that has fewer than 5 exposures gets
  // topped up now with spaced recognition reps (research: aim for 8-12 total).
  // We interleave them so it's not repetitive.
  const needsMore = words.filter(w => (seen[w[0]] || 0) < 5);
  const reinforceTypes = ["pick_en", "pick_pt", "listen", "pick_en"];
  needsMore.forEach((w, idx) => {
    flow.push(makeQuiz(w, pool, reinforceTypes[idx % reinforceTypes.length]));
    bump(w);
    // Drop in a flashcard every 3rd word to vary the rhythm
    if (idx % 3 === 2) { flow.push({ t: "flash", word: w }); bump(w); }
  });

  // Typing = full production (hardest). Give it to the most-practiced words so it's fair.
  const mostPracticed = [...words].sort((a, b) => (seen[b[0]] || 0) - (seen[a[0]] || 0));
  flow.push(makeQuiz(mostPracticed[0], pool, "type_pt")); bump(mostPracticed[0]);
  flow.push(makeQuiz(mostPracticed[1] || words[0], pool, "type_pt")); bump(mostPracticed[1] || words[0]);

  const mw2 = rMW();
  if (mw2) { flow.push({ t: "word_order", word: mw2, scrambled: shuffle(mw2[0].split(" ")) }); bump(mw2); }
  if (grammarNotes?.[2]) flow.push({ t: "grammar", text: grammarNotes[2] });

  // Mini-story (words in rich narrative context — research shows +67% retention)
  if (story) flow.push({ t: "story", data: makeStory(story) });

  // Final recognition + speaking on the words that still need it most
  const finalWeak = [...words].sort((a, b) => (seen[a[0]] || 0) - (seen[b[0]] || 0));
  flow.push(makeQuiz(finalWeak[0], pool, "pick_en")); bump(finalWeak[0]);
  flow.push(makeQuiz(finalWeak[1] || words[0], pool, "listen")); bump(finalWeak[1] || words[0]);
  flow.push({ t: "mimicry", word: finalWeak[2] || words[0] });

  // 💬 Conversation 5
  if (convo(4)) flow.push({ t: "convo", data: convo(4) });

  return flow;
}

// Daily challenge
export function generateDailyChallenge(allCompletedWords, crossSentences) {
  if (!allCompletedWords?.length) return [];
  const pool = [...allCompletedWords];
  const flow = [];
  const words = shuffle(pool).slice(0, 12);
  const eligible = (crossSentences || []).filter(cs => cs.req <= Math.floor(pool.length / 10));
  const cross = shuffle(eligible);

  flow.push(makeQuiz(words[0], pool, "pick_en"));
  flow.push(makeQuiz(words[1], pool, "pick_pt"));
  if (cross[0]) flow.push({ t: "sentence_build", data: cross[0] });
  flow.push(makeQuiz(words[2], pool, "listen"));
  flow.push({ t: "mimicry", word: words[3] });
  flow.push(makeQuiz(words[4], pool, "type_pt"));
  if (cross[1]) flow.push({ t: "free_recall", data: cross[1] });
  const err = ERROR_BANK[Math.floor(Math.random() * ERROR_BANK.length)];
  flow.push({ t: "error_correct", data: err });
  flow.push(makeQuiz(words[5], pool, "listen_type"));
  if (cross[2]) flow.push({ t: "sentence_build", data: cross[2] });
  flow.push(makeQuiz(words[6 % words.length], pool, "pick_en"));

  return flow;
}

export function generateLevelTest(allLevelWords) {
  const pool = [...allLevelWords]; const selected = shuffle(pool).slice(0, 20); const flow = [];
  for (let i = 0; i < 20; i++) {
    flow.push(makeQuiz(selected[i], pool, QUIZ_TYPES[i % QUIZ_TYPES.length]));
    if (i % 5 === 4) flow.push({ t: "mimicry", word: selected[Math.floor(Math.random() * selected.length)] });
  }
  const mw = allLevelWords.filter(w => w[0].includes(" "));
  if (mw.length > 0) { const t = mw[Math.floor(Math.random() * mw.length)]; flow.push({ t: "word_order", word: t, scrambled: shuffle(t[0].split(" ")) }); }
  return flow;
}

export function generateReview(weakWords, allWords) {
  const pool = [...allWords]; const flow = []; const words = shuffle([...weakWords]).slice(0, 10);
  words.forEach((w, i) => {
    flow.push({ t: "flash", word: w });
    flow.push(makeQuiz(w, pool, QUIZ_TYPES[i % QUIZ_TYPES.length]));
    if (i % 3 === 2) flow.push({ t: "mimicry", word: w });
  });
  return flow;
}

export { norm, shuffle };
