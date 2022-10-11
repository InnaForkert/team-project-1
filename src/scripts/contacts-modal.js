const modalCL = document.querySelector('[data-contacts-location-modal]');
const overlayCL = document.querySelector('[data-contacts-location-overlay]');
const openModalBtnCL = document.querySelector('[data-contacts-location-open]');
const closeModalBtnCL = document.querySelector(
  '[data-contacts-location-close]'
);

const openModalCL = function () {
  modalCL.classList.remove('is-hidden');
  overlayCL.classList.remove('is-hidden');
};

openModalBtnCL.addEventListener('click', openModalCL);

const closeModalCL = function () {
  modalCL.classList.add('is-hidden');
  overlayCL.classList.add('is-hidden');
};

closeModalBtnCL.addEventListener('click', closeModalCL);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalCL.classList.contains('is-hidden')) {
    closeModalCL();
  }
});

///desktop
const modalCF = document.querySelector('[data-contacts-franchise-modal]');
const overlayCF = document.querySelector('[data-contacts-franchise-overlay]');
const openModalBtnCF = document.querySelector('[data-contacts-franchise-open]');
const closeModalBtnCF = document.querySelector(
  '[data-contacts-franchise-close]'
);

const openModalCF = function () {
  modalCF.classList.remove('is-hidden');
  overlayCF.classList.remove('is-hidden');
};

openModalBtnCF.addEventListener('click', openModalCF);

const closeModalCF = function () {
  modalCF.classList.add('is-hidden');
  overlayCF.classList.add('is-hidden');
};

closeModalBtnCF.addEventListener('click', closeModalCF);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalCF.classList.contains('is-hidden')) {
    closeModalCF();
  }
});
