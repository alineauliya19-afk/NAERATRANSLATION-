'use strict';
(() => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menuToggle');
  const isEnglish = document.documentElement.lang === 'en';
  if (!nav || !toggle) return;
  const labels = isEnglish ? ['Open navigation menu', 'Close navigation menu'] : ['Buka menu navigasi', 'Tutup menu navigasi'];
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', labels[open ? 1 : 0]);
    toggle.textContent = open ? '×' : '☰';
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false); });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const sectionLinks = [...nav.querySelectorAll('[data-section-link]')];
  const updateActive = () => {
    let active = 'home';
    for (const section of document.querySelectorAll('main section[id]')) {
      if (section.getBoundingClientRect().top <= 145) active = section.id;
    }
    sectionLinks.forEach(a => {
      if (a.getAttribute('href') === '#' + active) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('hashchange', updateActive);
  updateActive();
  const switchLink = nav.querySelector('.lang');
  if (switchLink) switchLink.addEventListener('click', () => {
    switchLink.href = (isEnglish ? 'index.html' : 'index-en.html') + window.location.hash;
  });
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const fields = form.elements;
    const subject = encodeURIComponent('NAERA TRANSLATION — ' + (isEnglish ? 'Translation Inquiry' : 'Permintaan Terjemahan'));
    const body = encodeURIComponent(`${isEnglish ? 'Name' : 'Nama'}: ${fields.name.value}\nEmail: ${fields.email.value}\n${isEnglish ? 'Direction' : 'Arah penerjemahan'}: ${fields.direction.value}\n\n${fields.message.value}`);
    window.location.href = `mailto:alineauliya19@gmail.com?subject=${subject}&body=${body}`;
  });
})();
