const modalproducts = () => {
  const triggersBtn = document.querySelectorAll('.products__btn'),
    overflowWindow = document.querySelector('.products__overflow'),
    closeBtn = document.querySelector('.products__modal-btn'),
    iconSvg = document.querySelector('.products__modal-icon');

  triggersBtn.forEach(btn =>
    btn.addEventListener('click', () => {
      overflowWindow.classList.toggle('is-hidden');
    })
  );

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

modalproducts();
