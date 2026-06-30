// Sound effects using Web Audio API — no audio files needed
let audioCtx = null;
function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

export function playSound(type) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    if (type === "correct") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.1);
      osc.frequency.setValueAtTime(784, now + 0.2);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now); osc.stop(now + 0.4);
    } else if (type === "wrong") {
      osc.type = "square";
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.setValueAtTime(150, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now); osc.stop(now + 0.08);
    }
  } catch (e) {}
}

// TTS with slow mode support
let ttsAvailable = null;
let slowMode = false;

export function setSlowMode(v) { slowMode = !!v; }
export function getSlowMode() { return slowMode; }
export function isTTSAvailable() { return ttsAvailable !== false; }

export function speakPT(text, onStart, onEnd) {
  try {
    if (!window.speechSynthesis) { ttsAvailable = false; onEnd?.(); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = slowMode ? 0.6 : 0.85;
    let started = false;
    const timeout = setTimeout(() => {
      if (!started) { ttsAvailable = false; onEnd?.(); }
    }, 3000);
    const go = () => {
      const voices = window.speechSynthesis.getVoices();
      const br = voices.find(v => v.lang === "pt-BR") || voices.find(v => v.lang.startsWith("pt"));
      if (br) u.voice = br;
      u.onstart = () => { started = true; clearTimeout(timeout); ttsAvailable = true; onStart?.(); };
      u.onend = () => onEnd?.();
      u.onerror = () => { clearTimeout(timeout); ttsAvailable = false; onEnd?.(); };
      window.speechSynthesis.speak(u);
    };
    if (window.speechSynthesis.getVoices().length) go();
    else window.speechSynthesis.addEventListener("voiceschanged", go, { once: true });
  } catch (e) {
    ttsAvailable = false;
    onEnd?.();
  }
}
