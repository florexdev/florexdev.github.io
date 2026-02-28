(function () {
  'use strict';

  const STORAGE_KEY = 'florexdev_lang';

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'tr';

function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    const elements = document.querySelectorAll('[data-tr], [data-en]');

    elements.forEach(el => {
      const trText = el.getAttribute('data-tr');
      const enText = el.getAttribute('data-en');

      if (trText === null || enText === null) return;

      if (el.children.length === 0) {
        el.textContent = lang === 'tr' ? trText : enText;
      }
    });

    document.title = lang === 'tr'
      ? 'florexdev — Portföy'
      : 'florexdev — Portfolio';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'tr'
        ? 'florexdev — Frontend & Masaüstü Uygulama Geliştirici Portföyü'
        : 'florexdev — Frontend & Desktop Application Developer Portfolio'
      );
    }

    updateToggleUI(lang);
  }

  function updateToggleUI(lang) {
    const trSpan = document.querySelector('.lang-tr');
    const enSpan = document.querySelector('.lang-en');
    if (!trSpan || !enSpan) return;

    trSpan.classList.toggle('active', lang === 'tr');
    enSpan.classList.toggle('active', lang === 'en');
  }

  function init() {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const next = currentLang === 'tr' ? 'en' : 'tr';
        applyLang(next);
      });
    }

    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
