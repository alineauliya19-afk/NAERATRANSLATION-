
/* ============================================
   NAERA TRANSLATION
   CHRISTMAS & NEW YEAR SPECIAL 2026
   COMPLETE VERSION
============================================ */

(() => {
  "use strict";

  if (window.naeraChristmasLoaded) return;
  window.naeraChristmasLoaded = true;

  const english = document.documentElement.lang
    .toLowerCase().startsWith("en");

  const CSS = `
    :root {
      --xmas-red: #a41230;
      --xmas-green: #075b40;
      --xmas-gold: #e8c477;
      --xmas-cream: #fff8e9;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--xmas-cream) !important;
    }

    .header, header.header {
      background: #073e30 !important;
      border-bottom: 3px solid var(--xmas-gold) !important;
    }

    .header a,
    .header .brand,
    .header .brand-name,
    .header button {
      color: #fff8e9 !important;
    }

    .hero, #home {
      background:
        radial-gradient(
          circle at 85% 25%,
          rgba(232,196,119,.19),
          transparent 35%
        ),
        linear-gradient(
          135deg,
          #063e30,
          #075b40 45%,
          #790d24
        ) !important;
      color: white !important;
    }

    .hero h1,
    .hero p,
    .hero .eyebrow,
    .hero .hero-lead {
      color: #fff8e9 !important;
    }

    .hero h1 em {
      color: #ffe3a1 !important;
    }

    .section:not(.hero) {
      border-bottom: 1px solid rgba(158,16,40,.12);
    }

    .section h2 em {
      color: #b71b36;
    }

    .btn-gold,
    .nav-contact,
    .submit-btn {
      background: linear-gradient(
        135deg, #e9c77d, #fff0b5
      ) !important;
      color: #48231b !important;
      border-radius: 30px !important;
    }

    .service-card,
    .price-card,
    .sample-card {
      border: 2px solid rgba(7,91,64,.24) !important;
      border-radius: 18px !important;
    }

    /* FASTTRACK PROMO */

    .price-card-featured {
      background: linear-gradient(
        145deg, #075b40, #08382e
      ) !important;
      border: 3px solid #e8c477 !important;
      box-shadow: 0 12px 35px rgba(112,0,27,.22);
    }

    .price-card-featured h3,
    .price-card-featured p,
    .price-card-featured span {
      color: #fff8e9 !important;
    }

    .naera-promo-label {
      display: inline-block;
      padding: 9px 14px;
      background: #a41230;
      color: white !important;
      border: 1px solid #e8c477;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .naera-old-price {
      text-decoration: line-through;
      color: white !important;
      opacity: .85;
      font-size: 19px;
      margin: 10px 0;
    }

    .naera-new-price {
      display: block;
      width: fit-content;
      max-width: 100%;
      margin: 12px auto 18px;
      padding: 12px 18px;
      background: white !important;
      color: #c8102e !important;
      border: 3px solid #e8c477;
      border-radius: 14px;
      font-size: clamp(25px,4vw,43px);
      font-weight: 900;
      line-height: 1.2;
      text-align: center;
      box-shadow: 0 5px 16px rgba(0,0,0,.18);
    }

    .price-card-featured .naera-new-price {
      color: #c8102e !important;
    }

    /* HOLIDAY BANNER */

    .naera-holiday-banner {
      background: linear-gradient(
        110deg, #850c27, #bd1835, #075b40
      );
      color: white;
      padding: 35px 20px;
      text-align: center;
      border-top: 3px solid #e8c477;
      border-bottom: 3px solid #e8c477;
      position: relative;
      overflow: hidden;
    }

    .naera-holiday-banner h2 {
      color: #ffe5a1 !important;
      font-size: clamp(23px,4vw,39px);
      margin: 12px 0;
    }

    .naera-holiday-banner p {
      color: white !important;
      margin: 10px auto;
    }

    .naera-holiday-banner a {
      display: inline-block;
      margin-top: 18px;
      padding: 13px 26px;
      background: #fff1c8;
      color: #721326;
      font-weight: 800;
      text-decoration: none;
      border-radius: 30px;
      transition: transform .3s ease;
    }

    .naera-holiday-banner a:hover {
      transform: translateY(-3px);
    }

    .naera-banner-old {
      text-decoration: line-through;
      color: white;
      opacity: .8;
      font-size: 21px;
    }

    .naera-banner-price {
      display: inline-block;
      background: white;
      color: #c8102e;
      padding: 10px 22px;
      border-radius: 15px;
      font-size: clamp(28px,5vw,44px);
      font-weight: 900;
      margin: 10px auto;
    }

    /* TWO SIDE SANTAS */

    .naera-side-santa {
      position: fixed;
      top: 43%;
      z-index: 900;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: santaSwing 3.5s ease-in-out infinite;
      filter: drop-shadow(0 5px 8px rgba(0,0,0,.25));
    }

    .naera-side-santa.left { left: 4px; }

    .naera-side-santa.right {
      right: 4px;
      animation-delay: -1.7s;
    }

    .naera-side-santa .santa-icon {
      font-size: 85px;
      line-height: 1.1;
    }

    .naera-side-santa .gift-icon {
      font-size: 32px;
    }

    @keyframes santaSwing {
      0%,100% {
        transform: translateY(0) rotate(-5deg);
      }
      50% {
        transform: translateY(-10px) rotate(5deg);
      }
    }

    /* SIX CHRISTMAS TREES */

    .naera-tree-side {
      position: fixed;
      z-index: 850;
      pointer-events: none;
      font-size: 46px;
      line-height: 1;
      filter: drop-shadow(0 3px 5px rgba(0,0,0,.2));
      animation: treeSwing 3.4s ease-in-out infinite;
    }

    .naera-tree-side.left { left: 4px; }
    .naera-tree-side.right { right: 4px; }

    .naera-tree-side.t1 { top: 12%; }
    .naera-tree-side.t2 { top: 32%; }
    .naera-tree-side.t3 { top: 78%; }

    .naera-tree-side.right.t1 {
      animation-delay: -.7s;
    }

    .naera-tree-side.right.t2 {
      animation-delay: -1.3s;
    }

    .naera-tree-side.right.t3 {
      animation-delay: -2s;
    }

    @keyframes treeSwing {
      0%,100% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
    }

    /* CONTINUOUS SNOW */

    .naera-snow {
      position: fixed;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: 1000;
    }

    .naera-flake {
      position: absolute;
      top: -30px;
      left: var(--x);
      font-size: var(--size);
      color: white;
      opacity: var(--opacity);
      text-shadow: 0 1px 4px #23534b;
      animation: snowFall var(--duration)
        linear infinite;
      animation-delay: var(--delay);
    }

    @keyframes snowFall {
      from {
        transform: translate3d(0,-5vh,0);
      }
      to {
        transform:
          translate3d(var(--drift),110vh,0);
      }
    }

    /* SIX SMALL REINDEER */

    .naera-reindeer-parade {
      position: fixed;
      top: 23%;
      left: 0;
      z-index: 950;
      pointer-events: none;
      width: max-content;
      animation: deerTravel 18s linear infinite;
      will-change: transform;
    }

    .naera-reindeer-line {
      display: flex;
      align-items: center;
      gap: 5px;
      animation: deerFloat 1.8s ease-in-out infinite;
    }

    .naera-reindeer-animal {
      display: inline-block;
      font-size: 30px;
      line-height: 1.2;
      transform: scaleX(-1);
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.2));
    }

    .naera-reindeer-animal:nth-child(even) {
      margin-top: 9px;
    }

    @keyframes deerTravel {
      from {
        transform: translateX(calc(100vw + 30px));
      }
      to {
        transform: translateX(-110%);
      }
    }

    @keyframes deerFloat {
      0%,100% { translate: 0 0; }
      50% { translate: 0 -8px; }
    }

    /* PRICING NAVIGATION */

    #pricing, #pricelist, #harga {
      scroll-margin-top: 110px;
    }

    /* MOBILE */

    @media (max-width:600px) {
      .naera-side-santa {
        top: 54%;
      }

      .naera-side-santa .santa-icon {
        font-size: 40px;
      }

      .naera-side-santa .gift-icon {
        font-size: 18px;
      }

      .naera-tree-side {
        font-size: 26px;
      }

      .naera-tree-side.t1 { top: 13%; }
      .naera-tree-side.t2 { top: 34%; }
      .naera-tree-side.t3 { top: 79%; }

      .naera-reindeer-parade {
        top: 25%;
        animation-duration: 14s;
      }

      .naera-reindeer-animal {
        font-size: 23px;
      }

      .naera-reindeer-line {
        gap: 3px;
      }

      .naera-new-price {
        font-size: 27px;
        padding: 10px 12px;
      }

      .naera-holiday-banner {
        padding: 30px 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .naera-side-santa,
      .naera-tree-side,
      .naera-reindeer-parade,
      .naera-flake {
        animation: none !important;
      }
      .naera-snow,
      .naera-reindeer-parade {
        display: none;
      }
    }
  `;

  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  function createBanner() {
    if (document.querySelector(".naera-holiday-banner")) return;

    const hero = document.querySelector("#home, .hero");
    if (!hero) return;

    const banner = document.createElement("section");
    banner.className = "naera-holiday-banner";

    banner.innerHTML = `
      <div style="font-size:45px">🎅🎄🎁</div>
      <h2>Christmas & New Year Special</h2>
      <p>${english
        ? "Celebrate the holidays with NAERA TRANSLATION!"
        : "Rayakan Natal dan Tahun Baru bersama NAERA TRANSLATION!"
      }</p>
      <p><strong>${english
        ? "Special Fasttrack Translation Package"
        : "Paket Fasttrack Khusus Natal & Tahun Baru"
      }</strong></p>
      <div class="naera-banner-old">Rp65.000</div>
      <div class="naera-banner-price">Rp55.000</div>
      <p>${english
        ? "Per page · Estimated 4–5 days"
        : "Per halaman · Estimasi 4–5 hari"
      }</p>
      <a href="#pricing" class="naera-holiday-link">
        ${english
          ? "View Holiday Offer"
          : "Lihat Promo Spesial"
        }
      </a>
    `;

    hero.insertAdjacentElement("afterend", banner);
  }

  function updateFasttrackPrice() {
    const cards = [
      ...document.querySelectorAll(
        ".price-card, .pricing-card, article"
      )
    ];

    const fasttrack = cards.find(card =>
      /fast[\s-]*track/i.test(
        card.querySelector("h3")?.textContent ||
        card.textContent.slice(0,120)
      ) &&
      /65[.,]000/.test(card.textContent)
    );

    if (!fasttrack ||
        fasttrack.querySelector(".naera-new-price")) return;

    const price = [
      ...fasttrack.querySelectorAll("*")
    ].find(el =>
      el.children.length === 0 &&
      /65[.,]000/.test(el.textContent)
    );

    const label = document.createElement("div");
    label.className = "naera-promo-label";
    label.textContent = "🎁 CHRISTMAS & NEW YEAR SPECIAL";

    const oldPrice = document.createElement("div");
    oldPrice.className = "naera-old-price";
    oldPrice.textContent = "Rp65.000";

    const newPrice = document.createElement("div");
    newPrice.className = "naera-new-price";
    newPrice.textContent = english
      ? "Rp55.000 / page"
      : "Rp55.000 / halaman";

    if (price) {
      const container =
        price.closest(".price-amount") || price;
      container.replaceWith(label, oldPrice, newPrice);
    } else {
      fasttrack.append(label, oldPrice, newPrice);
    }
  }

  function connectPricingButton() {
    const button = document.querySelector(
      ".naera-holiday-link"
    );
    if (!button) return;

    button.addEventListener("click", event => {
      const pricing =
        document.querySelector("#pricing") ||
        document.querySelector("#pricelist") ||
        document.querySelector("#harga") ||
        [...document.querySelectorAll("section")]
          .find(section =>
            /pricing|daftar harga/i.test(
              section.querySelector("h2")?.textContent || ""
            )
          );

      if (!pricing) return;

      event.preventDefault();
      pricing.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  function createSideDecorations() {
    if (document.querySelector(".naera-side-santa")) return;

    ["left", "right"].forEach(side => {
      const santa = document.createElement("div");
      santa.className = "naera-side-santa " + side;
      santa.setAttribute("aria-hidden", "true");
      santa.innerHTML = `
        <span class="santa-icon">🎅</span>
        <span class="gift-icon">🎁🎄</span>
      `;
      document.body.appendChild(santa);
    });

    ["left", "right"].forEach(side => {
      for (let i = 1; i <= 3; i++) {
        const tree = document.createElement("div");
        tree.className =
          "naera-tree-side " + side + " t" + i;
        tree.textContent = "🎄";
        tree.setAttribute("aria-hidden", "true");
        document.body.appendChild(tree);
      }
    });
  }

  function createSnow() {
    if (document.querySelector(".naera-snow")) return;

    const snow = document.createElement("div");
    snow.className = "naera-snow";
    snow.setAttribute("aria-hidden", "true");

    const count = window.innerWidth < 600 ? 32 : 65;

    for (let i = 0; i < count; i++) {
      const flake = document.createElement("span");
      flake.className = "naera-flake";
      flake.textContent = i % 4 === 0 ? "❄" : "•";

      flake.style.setProperty("--x",
        Math.random() * 100 + "%");
      flake.style.setProperty("--size",
        (7 + Math.random() * 13) + "px");
      flake.style.setProperty("--opacity",
        0.35 + Math.random() * .55);
      flake.style.setProperty("--duration",
        (9 + Math.random() * 12) + "s");
      flake.style.setProperty("--delay",
        (-Math.random() * 20) + "s");
      flake.style.setProperty("--drift",
        ((Math.random() - .5) * 110) + "px");

      snow.appendChild(flake);
    }

    document.body.appendChild(snow);
  }

  function createReindeer() {
    if (document.querySelector(
      ".naera-reindeer-parade"
    )) return;

    const parade = document.createElement("div");
    parade.className = "naera-reindeer-parade";
    parade.setAttribute("aria-hidden", "true");

    const line = document.createElement("div");
    line.className = "naera-reindeer-line";

    for (let i = 0; i < 6; i++) {
      const deer = document.createElement("span");
      deer.className = "naera-reindeer-animal";
      deer.textContent = "🦌";
      line.appendChild(deer);
    }

    parade.appendChild(line);
    document.body.appendChild(parade);
  }

  function initializeChristmas() {
    // Remove previous flying Santa elements
    document.querySelector("#naera-santa-fly")?.remove();
    document.querySelectorAll(".naera-flying-santa")
      .forEach(el => el.remove());

    // Remove old single tree if present
    document.querySelector(".naera-tree")?.remove();

    createBanner();
    updateFasttrackPrice();
    connectPricingButton();
    createSideDecorations();
    createSnow();
    createReindeer();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeChristmas,
      { once: true }
    );
  } else {
    initializeChristmas();
  }
})();
        
