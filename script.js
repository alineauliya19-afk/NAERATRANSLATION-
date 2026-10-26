/*
  SETUP SUPABASE (lihat README.md):
  Masukkan Project URL dan anon/public key di bawah.
  Jangan pernah memasukkan service_role key atau password database ke file publik.
*/
const SUPABASE_URL = "PASTE_PROJECT_URL_DI_SINI";
const SUPABASE_ANON_KEY = "PASTE_ANON_PUBLIC_KEY_DI_SINI";

const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusBox = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusBox.className = "form-status";
  statusBox.textContent = "";
  if (SUPABASE_URL.startsWith("PASTE_") || SUPABASE_ANON_KEY.startsWith("PASTE_")) {
    statusBox.classList.add("error");
    statusBox.textContent = "Formulir belum aktif. Database perlu dikonfigurasi oleh pemilik website.";
    return;
  }
  if (!window.supabase?.createClient) {
    statusBox.classList.add("error");
    statusBox.textContent = "Komponen database belum termuat. Periksa koneksi internet.";
    return;
  }
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const direction = form.elements.direction.value;
  const message = form.elements.message.value.trim();
  if (name.length < 2 || message.length < 10 || !direction) {
    statusBox.classList.add("error");
    statusBox.textContent = "Periksa kembali nama, arah bahasa, dan pesan Anda.";
    return;
  }
  submitButton.disabled = true;
  submitButton.textContent = "Mengirim...";
  try {
    const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { error } = await db.from("contact_messages").insert([{ name, email, direction, message }]);
    if (error) throw error;
    statusBox.classList.add("success");
    statusBox.textContent = "Terima kasih. Pertanyaan Anda berhasil dikirim.";
    form.reset();
  } catch (err) {
    console.error("Supabase submission error:", err);
    statusBox.classList.add("error");
    statusBox.textContent = "Pesan belum terkirim. Silakan hubungi kami lewat WhatsApp atau email.";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Kirim pertanyaan <span>↗</span>';
  }
});
