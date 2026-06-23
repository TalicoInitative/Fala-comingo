// Simple login system — 10 pre-set accounts.
// Progress is stored per-username in localStorage so different people on the
// same device keep separate progress, and the same person can log in on any
// device (though progress is still local to each device unless they use the
// same browser — there's no server sync, but each account is isolated).

export const ACCOUNTS = [
  { user: "aluno1", pass: "brasil01" },
  { user: "aluno2", pass: "brasil02" },
  { user: "aluno3", pass: "brasil03" },
  { user: "aluno4", pass: "brasil04" },
  { user: "aluno5", pass: "brasil05" },
  { user: "aluno6", pass: "brasil06" },
  { user: "aluno7", pass: "brasil07" },
  { user: "aluno8", pass: "brasil08" },
  { user: "aluno9", pass: "brasil09" },
  { user: "aluno10", pass: "brasil10" },
];

export function checkLogin(user, pass) {
  const u = (user || "").trim().toLowerCase();
  const p = (pass || "").trim();
  return ACCOUNTS.find(a => a.user === u && a.pass === p) || null;
}

// Each user's progress is stored under a namespaced key
export function progressKey(user) {
  return "fala-prog-" + user;
}
