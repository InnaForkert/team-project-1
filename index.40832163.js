var modalBM=document.querySelector("[data-buy-mobile-modal]"),overlayBM=document.querySelector("[data-buy-mobile-overlay]"),openModalBtnBM=document.querySelector("[data-buy-mobile-open]"),closeModalBtnBM=document.querySelector("[data-buy-mobile-close]"),openModalBM=function(){modalBM.classList.remove("is-hidden"),overlayBM.classList.remove("is-hidden")};openModalBtnBM.addEventListener("click",openModalBM);var closeModalBM=function(){modalBM.classList.add("is-hidden"),overlayBM.classList.add("is-hidden")};closeModalBtnBM.addEventListener("click",closeModalBM),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modalBM.classList.contains("is-hidden")||closeModalBM()}));var modalBD=document.querySelector("[data-buy-desktop-modal]"),overlayBD=document.querySelector("[data-buy-desktop-overlay]"),openModalBtnBD=document.querySelector("[data-buy-desktop-open]"),closeModalBtnBD=document.querySelector("[data-buy-desktop-close]"),openModalBD=function(){modalBD.classList.remove("is-hidden"),overlayBD.classList.remove("is-hidden")};openModalBtnBD.addEventListener("click",openModalBD);var closeModalBD=function(){modalBD.classList.add("is-hidden"),overlayBD.classList.add("is-hidden")};closeModalBtnBD.addEventListener("click",closeModalBD),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modalBD.classList.contains("is-hidden")||closeModalBD()}));
//# sourceMappingURL=index.40832163.js.map
