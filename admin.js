/*
  Gunakan Project URL + anon/public key yang sama seperti script.js.
  Akses baca/hapus tetap dibatasi oleh Row Level Security di Supabase.
*/
const SUPABASE_URL = "PASTE_PROJECT_URL_DI_SINI";
const SUPABASE_ANON_KEY = "PASTE_ANON_PUBLIC_KEY_DI_SINI";
const ADMIN_EMAIL = "alineauliya19@gmail.com";
const loginPanel = document.getElementById("loginPanel");
const inboxPanel = document.getElementById("inboxPanel");
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");
const inboxStatus = document.getElementById("inboxStatus");
const messageList = document.getElementById("messageList");
const loginButton = document.getElementById("loginButton");
let db = null;

function setStatus(node, message, success = false) {
  node.textContent = message;
  node.className = success ? "status success" : "status";
}
function setupClient() {
  if (SUPABASE_URL.startsWith("PASTE_") || SUPABASE_ANON_KEY.startsWith("PASTE_")) {
    setStatus(loginStatus, "Konfigurasi Supabase belum diisi di admin.js.");
    return false;
  }
  if (!window.supabase?.createClient) {
    setStatus(loginStatus, "Pustaka database tidak termuat. Periksa koneksi internet.");
    return false;
  }
  if (!db) db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return true;
}
function showLogin() {
  loginPanel.hidden = false;
  inboxPanel.hidden = true;
}
function showInbox() {
  loginPanel.hidden = true;
  inboxPanel.hidden = false;
}
async function loadMessages() {
  messageList.innerHTML = "";
  setStatus(inboxStatus, "Memuat pesan...");
  const { data, error } = await db.from("contact_messages").select("id,name,email,direction,message,created_at").order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    setStatus(inboxStatus, "Tidak dapat memuat pesan. Periksa policy RLS dan email akun admin.");
    return;
  }
  setStatus(inboxStatus, `${data.length} pesan ditemukan.`, true);
  if (!data.length) {
    messageList.innerHTML = '<div class="empty">Belum ada pesan masuk.</div>';
    return;
  }
  for (const item of data) {
    const card = document.createElement("article");
    card.className = "message-card";
    const top = document.createElement("div"); top.className = "message-top";
    const identity = document.createElement("div");
    const title = document.createElement("h3"); title.textContent = item.name;
    const meta = document.createElement("div"); meta.className = "meta";
    const date = item.created_at ? new Date(item.created_at).toLocaleString("id-ID") : "";
    meta.textContent = `${item.email} · ${date}`;
    identity.append(title, meta);
    top.append(identity);
    const direction = document.createElement("span"); direction.className = "direction"; direction.textContent = item.direction || "Konsultasi";
    const body = document.createElement("p"); body.className = "message-body"; body.textContent = item.message;
    const actions = document.createElement("div"); actions.className = "message-actions";
    const emailLink = document.createElement("a"); emailLink.href = `mailto:${encodeURIComponent(item.email)}?subject=${encodeURIComponent("Pertanyaan penerjemahan - NAERA TRANSLATION")}`; emailLink.textContent = "Balas via email";
    const deleteButton = document.createElement("button"); deleteButton.textContent = "Hapus pesan";
    deleteButton.addEventListener("click", async () => {
      if (!confirm("Hapus pesan ini? Tindakan ini tidak dapat dibatalkan.")) return;
      deleteButton.disabled = true;
      const { error: deleteError } = await db.from("contact_messages").delete().eq("id", item.id);
      if (deleteError) {
        setStatus(inboxStatus, "Pesan tidak dapat dihapus. Periksa policy RLS.");
        deleteButton.disabled = false;
      } else {
        await loadMessages();
      }
    });
    actions.append(emailLink, deleteButton);
    card.append(top, direction, body, actions);
    messageList.append(card);
  }
}
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus(loginStatus, "");
  if (!setupClient()) return;
  const email = document.getElementById("adminEmail").value.trim().toLowerCase();
  const password = document.getElementById("adminPassword").value;
  if (email !== ADMIN_EMAIL.toLowerCase()) {
    setStatus(loginStatus, "Email ini tidak diizinkan sebagai admin.");
    return;
  }
  loginButton.disabled = true;
  loginButton.textContent = "Memeriksa akun...";
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  loginButton.disabled = false;
  loginButton.textContent = "Masuk ke dashboard ↗";
  if (error) {
    setStatus(loginStatus, "Login gagal. Periksa email/password atau buat akun admin di Supabase Authentication.");
    return;
  }
  if (data.user?.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    await db.auth.signOut();
    setStatus(loginStatus, "Akun ini tidak memiliki akses admin.");
    return;
  }
  showInbox();
  await loadMessages();
});
document.getElementById("logoutButton").addEventListener("click", async () => {
  if (db) await db.auth.signOut();
  showLogin();
});
(async function restoreSession() {
  if (!setupClient()) return;
  const { data } = await db.auth.getSession();
  const user = data?.session?.user;
  if (user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    showInbox();
    await loadMessages();
  } else {
    if (user) await db.auth.signOut();
    showLogin();
  }
})();
