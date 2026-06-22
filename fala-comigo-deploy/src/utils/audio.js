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
      osc.frequency.setValueAtTime(523, now); // C5
      osc.frequency.setValueAtTime(659, now + 0.1); // E5
      osc.frequency.setValueAtTime(784, now + 0.2); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === "wrong") {
      osc.type = "square";
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.setValueAtTime(150, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "levelup") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.15);
      osc.frequency.setValueAtTime(784, now + 0.3);
      osc.frequency.setValueAtTime(1047, now + 0.45);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.7);
    } else if (type === "complete") {
      // Two-note success chime
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc.type = "sine";
      osc2.type = "sine";
      osc.frequency.setValueAtTime(523, now);
      osc2.frequency.setValueAtTime(784, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      gain2.gain.setValueAtTime(0.12, now + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.3);
      osc2.start(now + 0.15);
      osc2.stop(now + 0.5);
    } else if (type === "flip") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.setValueAtTime(900, now + 0.06);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === "tap") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(700, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    // Audio not available — silent fallback
  }
}

// TTS availability tracker
let ttsAvailable = null; // null=unknown, true=works, false=broken

export function isTTSAvailable() { return ttsAvailable !== false; }

export function speakPT(text, onStart, onEnd) {
  try {
    if (!window.speechSynthesis) { ttsAvailable = false; onEnd?.(); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 0.85;
    // Timeout — if speech never starts within 3 seconds, give up
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
    else {
      window.speechSynthesis.addEventListener("voiceschanged", go, { once: true });
      // If voiceschanged never fires, timeout handles it
    }
  } catch (e) {
    ttsAvailable = false;
    onEnd?.();
  }
}
