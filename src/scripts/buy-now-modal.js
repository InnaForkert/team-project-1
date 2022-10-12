const modalBM = document.querySelector('[data-buy-mobile-modal]');
const overlayBM = document.querySelector('[data-buy-mobile-overlay]');
const openModalBtnBM = document.querySelector('[data-buy-mobile-open]');
const closeModalBtnBM = document.querySelector('[data-buy-mobile-close]');

const openModalBM = function () {
  modalBM.classList.remove('is-hidden');
  overlayBM.classList.remove('is-hidden');
};

openModalBtnBM.addEventListener('click', openModalBM, {passive: true});

const closeModalBM = function () {
  modalBM.classList.add('is-hidden');
  overlayBM.classList.add('is-hidden');
};

closeModalBtnBM.addEventListener('click', closeModalBM, {passive: true});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalBM.classList.contains('is-hidden')) {
    closeModalBM();
  }
}, {passive: true});

///desktop
const modalBD = document.querySelector('[data-buy-desktop-modal]');
const overlayBD = document.querySelector('[data-buy-desktop-overlay]');
const openModalBtnBD = document.querySelector('[data-buy-desktop-open]');
const closeModalBtnBD = document.querySelector('[data-buy-desktop-close]');

const openModalBD = function () {
  modalBD.classList.remove('is-hidden');
  overlayBD.classList.remove('is-hidden');
};

openModalBtnBD.addEventListener('click', openModalBD, {passive: true});

const closeModalBD = function () {
  modalBD.classList.add('is-hidden');
  overlayBD.classList.add('is-hidden');
};

closeModalBtnBD.addEventListener('click', closeModalBD, {passive: true});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalBD.classList.contains('is-hidden')) {
    closeModalBD();
  }
});
