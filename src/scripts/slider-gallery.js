const sliderGallery = () => {
    let slideIndex = 1,
    slides = document.querySelectorAll('.gallery__img');

    showSlides(slideIndex);

    function showSlides(n) {
        
        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.classList.add('swing-in-top-fwd');
            item.style.display = 'none';
        });
        
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    setInterval( () => {
        plusSlides(1);
    }, 7000);
}

sliderGallery();