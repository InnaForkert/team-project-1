(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  }, {passive: true});

  const mobileMenuLinks = document.querySelectorAll('[data-nav-link]');

  const addEvt = function (link) {
    link.addEventListener('click', () => {
      menuBtnRef.classList.remove('is-open');
      mobileMenuRef.classList.remove('is-open');
    }, {passive: true});
  };

  mobileMenuLinks.forEach(link => addEvt(link));
})();
