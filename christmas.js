/* NAERA TRANSLATION - CHRISTMAS SPECIAL 2026 */
(() => {
  "use strict";

  if (window.naeraChristmasLoaded) return;
  window.naeraChristmasLoaded = true;

  const english =
    document.documentElement.lang.toLowerCase().startsWith("en");

  const style = document.createElement("style");
  style.textContent = `
    :root {
      --christmas-red: #9e1028;
      --christmas-green: #075b40;
      --christmas-gold: #e8c477;
      --christmas-cream: #fff8e9;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--christmas-cream) !important;
    }

    .header, header.header {
      background: #073e30 !important;
      border-bottom: 3px solid var(--christmas-gold) !important;
    }

    .header a, .header .brand,
    .header .brand-name, .header button {
      color: #fff8e9 !important;
    }

    .hero, #home {
      background:
        radial-gradient(circle at 85% 25%,
          rgba(232,196,119,.19), transparent 35%),
        linear-gradient(135deg,
          #063e30 0%, #075b40 45%, #790d24 100%) !important;
      color: white !important;
      position: relative;
      overflow: hidden;
    }

    .hero h1, .hero p, .hero .eyebrow,
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

    .btn-gold, .nav-contact, .submit-btn {
      background: linear-gradient(135deg,
        #e9c77d, #fff0b5) !important;
      color: #48231b !important;
      border-radius: 30px !important;
    }

    .service-card, .price-card, .sample-card {
      border: 2px solid rgba(7,91,64,.24) !important;
      border-radius: 18px !important;
    }

    .price-card-featured {
      background: linear-gradient(145deg,
        #075b40, #08382e) !important;
      border: 3px solid #e8c477 !important;
      box-shadow: 0 12px 35px rgba(112,0,27,.22);
    }

    .price-card-featured,
    .price-card-featured h3,
    .price-card-featured p,
    .price-card-featured span {
      color: #fff8e9 !important;
    }

    .naera-old-price {
      text-decoration: line-through;
      opacity: .75;
      font-size: 19px;
      margin: 12px 0 3px;
      color: #ffe2c9;
    }

    .naera-new-price {
      font-size: clamp(30px, 5vw, 49px);
      font-weight: 800;
      color: #ffe49b !important;
      margin: 5px 0 15px;
      line-height: 1.2;
    }

    .naera-promo-label {
      display: inline-block;
      padding: 8px 13px;
      background: #aa1733;
      color: white !important;
      border: 1px solid #e8c477;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .6px;
    }

    .naera-holiday-banner {
      background: linear-gradient(110deg,
        #850c27, #bd1835, #075b40);
      color: white;
      padding: 26px 18px;
      text-align: center;
      border-top: 3px solid #e8c477;
      border-bottom: 3px solid #e8c477;
      position: relative;
      overflow: hidden;
    }

    .naera-holiday-banner h2 {
      color: #ffe5a1 !important;
      font-size: clamp(23px, 4vw, 39px);
      margin: 10px 0;
    }

    .naera-holiday-banner p {
      color: white !important;
      margin: 8px auto;
      max-width: 650px;
    }

    .naera-holiday-banner a {
      display: inline-block;
      margin-top: 15px;
      padding: 12px 24px;
      border-radius: 30px;
      background: #fff1c8;
      color: #721326;
      font-weight: 800;
      text-decoration: none;
    }

    .naera-santa {
      display: inline-block;
      font-size: 50px;
      animation: naeraWave 2.5s ease-in-out infinite;
    }

    .naera-tree {
      position: fixed;
      right: 12px;
      bottom: 15px;
      z-index: 50;
      font-size: 57px;
      transform-origin: bottom center;
      animation: naeraTree 3.2s ease-in-out infinite;
      pointer-events: none;
      filter: drop-shadow(0 5px 8px rgba(0,0,0,.22));
    }

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
      text-shadow:
        0 1px 4px #23534b,
        0 0 7px rgba(0,0,0,.3);
      animation: naeraSnow var(--duration) linear infinite;
      animation-delay: var(--delay);
    }

    @keyframes naeraSnow {
      from {
        transform: translate3d(0,-5vh,0) rotate(0);
      }
      to {
        transform:
          translate3d(var(--drift),110vh,0)
          rotate(180deg);
      }
    }

    @keyframes naeraTree {
      0%,100% { transform: rotate(-4deg); }
      50% { transform: rotate(4deg); }
    }

    @keyframes naeraWave {
      0%,100% { transform: rotate(-8deg); }
      50% { transform: rotate(10deg); }
    }

    @media (max-width: 600px) {
      .naera-tree {
        font-size: 38px;
        right: 6px;
        bottom: 8px;
      }
      .naera-holiday-banner {
        padding: 24px 16px;
      }
      .naera-santa { font-size: 40px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .naera-tree, .naera-santa, .naera-flake {
        animation: none !important;
      }
      .naera-snow { display: none; }
    }
  `;
  document.head.appendChild(style);

  function initializeChristmas() {
    // Banner Natal
    const banner = document.createElement("section");
    banner.className = "naera-holiday-banner";
    banner.innerHTML = `
      <span class="naera-santa" aria-hidden="true">🎅</span>
      <h2>🎄 Christmas & New Year Special 🎄</h2>
      <p>${english
        ? "Celebrate the holidays with NAERA TRANSLATION!"
        : "Rayakan Natal dan Tahun Baru bersama NAERA TRANSLATION!"
      }</p>
      <p>${english
        ? "Special Fasttrack Translation Package"
        : "Paket Fasttrack Khusus Natal & Tahun Baru"
      }</p>
      <h2><s>Rp65.000</s> → Rp55.000</h2>
      <p>${english
        ? "Per page · Estimated 4–5 days"
        : "Per halaman · Estimasi 4–5 hari"
      }</p>
      <a href="#pricelist">
        ${english ? "View Holiday Offer" : "Lihat Promo Spesial"}
      </a>
    `;

    const hero = document.querySelector("#home");
    if (hero) hero.insertAdjacentElement("afterend", banner);

    // Perbarui kartu harga Fasttrack
    const cards = [...document.querySelectorAll(
      ".price-card, .pricing-card, article"
    )];

    const fasttrack = cards.find(card =>
      /fasttrack/i.test(card.querySelector("h3")?.textContent || "")
      && /65[.,]000/.test(card.textContent)
    );

    if (fasttrack) {
      const price = [...fasttrack.querySelectorAll("*")]
        .find(el =>
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
      newPrice.textContent = "Rp55.000 / halaman";

      if (price) {
        const container = price.closest(".price-amount") || price;
        container.replaceWith(label, oldPrice, newPrice);
      } else {
        fasttrack.append(label, oldPrice, newPrice);
      }
    }

    // Pohon Natal bergerak
    const tree = document.createElement("div");
    tree.className = "naera-tree";
    tree.textContent = "🎄";
    tree.setAttribute("aria-hidden", "true");
    document.body.appendChild(tree);

    // Salju pada seluruh halaman, termasuk setiap section
    const snow = document.createElement("div");
    snow.className = "naera-snow";
    snow.setAttribute("aria-hidden", "true");

    const count = window.innerWidth < 600 ? 32 : 65;

    for (let i = 0; i < count; i++) {
      const flake = document.createElement("span");
      flake.className = "naera-flake";
      flake.textContent = i % 4 === 0 ? "❄" : "•";

      flake.style.setProperty("--x", Math.random() * 100 + "%");
      flake.style.setProperty(
        "--size", (7 + Math.random() * 13) + "px"
      );
      flake.style.setProperty(
        "--opacity", (0.35 + Math.random() * .55)
      );
      flake.style.setProperty(
        "--duration", (9 + Math.random() * 12) + "s"
      );
      flake.style.setProperty(
        "--delay", (-Math.random() * 20) + "s"
      );
      flake.style.setProperty(
        "--drift", ((Math.random() - .5) * 110) + "px"
      );

      snow.appendChild(flake);
    }

    document.body.appendChild(snow);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded", initializeChristmas, { once: true }
    );
  } else {
    initializeChristmas();
  }
})();
  /* SINTERKLAS JUMBO - NAERA CHRISTMAS */

const santaBigStyle = document.createElement("style");

santaBigStyle.textContent = `
  .naera-flying-santa {
    top: 18% !important;
    z-index: 9999 !important;
  }

  .naera-santa-scene {
    transform-origin: center center;
    animation: santaFloatBig 2s ease-in-out infinite !important;
  }

  .naera-reindeer {
    font-size: 115px !important;
  }

  .naera-sleigh {
    font-size: 145px !important;
    background: transparent !important;
  }

  .naera-rope {
    width: 65px !important;
  }

  .naera-gifts {
    font-size: 125px !important;
  }

  @keyframes santaFloatBig {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 600px) {
    .naera-flying-santa {
      top: 20% !important;
    }

    .naera-reindeer {
      font-size: 75px !important;
    }

    .naera-sleigh {
      font-size: 105px !important;
    }

    .naera-gifts {
      font-size: 90px !important;
    }

    .naera-rope {
      width: 30px !important;
    }
  }
`;

document.head.appendChild(santaBigStyle);
/* NAERA - SANTA TERBANG BERULANG */

(() => {
  if (document.querySelector("#naera-santa-fly")) return;

  const css = document.createElement("style");
  css.textContent = `
    #naera-santa-fly {
      position: fixed;
      top: 17%;
      left: 0;
      z-index: 99999;
      pointer-events: none;
      width: max-content;
      animation: naeraSantaCross 16s linear infinite;
      will-change: transform;
    }

    #naera-santa-fly .santa-group {
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 8px;
      animation: naeraSantaBounce 2s ease-in-out infinite;
    }

    #naera-santa-fly .deer {
      font-size: 100px;
      display: inline-block;
      transform: scaleX(-1);
    }

    #naera-santa-fly .santa {
      font-size: 145px;
    }

    #naera-santa-fly .gifts {
      font-size: 95px;
    }

    @keyframes naeraSantaCross {
      from {
        transform: translateX(calc(100vw + 50px));
      }
      to {
        transform: translateX(-110%);
      }
    }

    @keyframes naeraSantaBounce {
      0%, 100% { translate: 0 0; }
      50% { translate: 0 -22px; }
    }

    @media (max-width: 600px) {
      #naera-santa-fly {
        top: 22%;
        animation-duration: 12s;
      }
      #naera-santa-fly .deer {
        font-size: 65px;
      }
      #naera-santa-fly .santa {
        font-size: 105px;
      }
      #naera-santa-fly .gifts {
        font-size: 65px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #naera-santa-fly {
        animation: none;
        transform: translateX(0);
      }
      #naera-santa-fly .santa-group {
        animation: none;
      }
    }
  `;

  document.head.appendChild(css);

  function startSanta() {
    const santa = document.createElement("div");
    santa.id = "naera-santa-fly";
    santa.setAttribute("aria-hidden", "true");

    santa.innerHTML = `
      <div class="santa-group">
        <span class="deer">🦌</span>
        <span class="deer">🦌</span>
        <span style="color:#e8c477;font-size:35px">〰</span>
        <span class="santa">🎅</span>
        <span class="gifts">🛷🎁🎁</span>
        <span style="font-size:35px">✨❄️</span>
      </div>
    `;

    document.body.appendChild(santa);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded", startSanta, { once: true }
    );
  } else {
    startSanta();
  }
})();
/* NAERA CHRISTMAS - SANTA DI KANAN & KIRI */

(() => {
  if (window.naeraSideSantaLoaded) return;
  window.naeraSideSantaLoaded = true;

  const style = document.createElement("style");

  style.textContent = `
    /* Sembunyikan Santa yang terbang */
    #naera-santa-fly,
    .naera-flying-santa {
      display: none !important;
    }

    /* Santa di samping halaman */
    .naera-side-santa {
      position: fixed;
      top: 42%;
      z-index: 900;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: naeraSideSwing 3s ease-in-out infinite;
      filter: drop-shadow(0 5px 8px rgba(0,0,0,.25));
    }

    .naera-side-santa.left {
      left: 5px;
    }

    .naera-side-santa.right {
      right: 5px;
      animation-delay: 1.5s;
    }

    .naera-side-santa .santa-icon {
      font-size: 85px;
      line-height: 1.1;
    }

    .naera-side-santa .gift-icon {
      font-size: 40px;
    }

    @keyframes naeraSideSwing {
      0%, 100% {
        transform: translateY(0) rotate(-5deg);
      }
      50% {
        transform: translateY(-12px) rotate(5deg);
      }
    }

    @media (max-width: 600px) {
      .naera-side-santa {
        top: 65%;
        opacity: .9;
      }

      .naera-side-santa .santa-icon {
        font-size: 48px;
      }

      .naera-side-santa .gift-icon {
        font-size: 25px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .naera-side-santa {
        animation: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  function createSideSanta() {
    if (document.querySelector(".naera-side-santa")) return;

    const left = document.createElement("div");
    left.className = "naera-side-santa left";
    left.setAttribute("aria-hidden", "true");
    left.innerHTML = `
      <span class="santa-icon">🎅</span>
      <span class="gift-icon">🎁🎄</span>
    `;

    const right = document.createElement("div");
    right.className = "naera-side-santa right";
    right.setAttribute("aria-hidden", "true");
    right.innerHTML = `
      <span class="santa-icon">🎅</span>
      <span class="gift-icon">🎄🎁</span>
    `;

    document.body.append(left, right);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded", createSideSanta, { once: true }
    );
  } else {
    createSideSanta();
  }
})();
