const modalAbout = () => {
  const triggerBtn = document.querySelector('.about__btn'),
    overflowWindow = document.querySelector('.about__overflow'),
    closeBtn = document.querySelector('.about__modal-btn'),
    iconSvg = document.querySelector('.about__modal-icon');

  triggerBtn.addEventListener('click', () => {
    overflowWindow.classList.toggle('is-hidden');
  });

  closeBtn.addEventListener('click', e => {
    if (e.target === closeBtn) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });

  overflowWindow.addEventListener('click', e => {
    if (e.target === overflowWindow) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });

  iconSvg.addEventListener('click', e => {
    if (e.target === iconSvg) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });
};

modalAbout();
