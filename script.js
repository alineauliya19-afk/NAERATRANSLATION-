
// NAERA TRANSLATION
// Shared script for Indonesian and English pages.

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");

  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        document.documentElement.lang === "en"
          ? "Open navigation menu"
          : "Buka menu navigasi"
      );
    };

    const openMenu = () => {
      menu.classList.add("is-open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute(
        "aria-label",
        document.documentElement.lang === "en"
          ? "Close navigation menu"
          : "Tutup menu navigasi"
      );
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the menu after selecting a section.
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close when tapping outside the navigation.
    document.addEventListener("click", (event) => {
      if (
        menu.classList.contains("is-open") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Support keyboard navigation.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  // Keep the footer year current.
  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // FormSubmit handles form submission directly.
  // Do not use preventDefault() here, because that would
  // stop the form from being sent to FormSubmit.
});
