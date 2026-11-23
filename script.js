
// NAERA TRANSLATION
// Digunakan oleh halaman Indonesia dan Inggris.

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");

  if (menuButton && menu) {
    const isEnglish = document.documentElement.lang === "en";

    function closeMenu() {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        isEnglish ? "Open menu" : "Buka menu"
      );
    }

    function openMenu() {
      menu.classList.add("is-open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute(
        "aria-label",
        isEnglish ? "Close menu" : "Tutup menu"
      );
    }

    menuButton.addEventListener("click", () => {
      if (menu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Tutup menu setelah pengguna memilih bagian.
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Tutup menu ketika pengguna mengetuk area luar.
    document.addEventListener("click", (event) => {
      const clickedOutside =
        !menu.contains(event.target) &&
        !menuButton.contains(event.target);

      if (clickedOutside) {
        closeMenu();
      }
    });

    // Tutup menu dengan tombol Escape.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  // Perbarui tahun copyright secara otomatis.
  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Formulir dikirim langsung melalui FormSubmit.
  // Jangan menambahkan preventDefault() pada submit.
});
                                                     
