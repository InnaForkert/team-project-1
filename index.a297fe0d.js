var sliderGallery=function(){var l=1,e=document.querySelectorAll(".gallery__img");function n(n){n>e.length&&(l=1),n<1&&(l=e.length),e.forEach((function(l){l.classList.add("swing-in-top-fwd"),l.style.display="none"})),e[l-1].style.display="block"}n(l),setInterval((function(){n(l+=1)}),7e3)};sliderGallery();
//# sourceMappingURL=index.a297fe0d.js.map
