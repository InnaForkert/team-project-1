const sliderReview = () => {
    let slideIndex = 1,
    slides = document.querySelectorAll('.reviews__slide'),
    dotsWrap = document.querySelector('.reviews__wrapper-dots'),
    dots = document.querySelectorAll('.reviews__dot');

    showSlides(slideIndex);

    function showSlides(n) {

        dots.forEach((item) => item.classList.remove('reviews__dot--active'));
        
        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.classList.remove('animate__slideInRight');
            item.style.display = 'none';
        });
        
        dots[slideIndex - 1].classList.add('reviews__dot--active');
        slides[slideIndex - 1].style.display = 'block';
        
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('reviews__dot') && event.target == dots[i - 1]) {
                currentSlide(i);
                slides[slideIndex - 1].classList.add('animate__slideInRight');
                dots[slideIndex - 1].classList.add('reviews__dot--active');
            }
        }
    });
}

sliderReview();