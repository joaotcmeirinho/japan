const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');

const bottomLeft = document.querySelector('.slider__btn--left');

const bottomRight = document.querySelector('.slider__btn--right');

let maxSlide = slides.length -1;

let currentSlide = 0;



console.log(slides);


console.log(bottomLeft);

console.log(bottomRight);


slider.style.transform = `scale(0.3) translatex(-300px)`;



bottomRight.addEventListener('click', function () {

    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {

        currentSlide++;
    }

    slides.forEach((s, i) => {

        
        console.log(currentSlide);
        s.style.transform = `translatex(${100 * (i - currentSlide)}%)`;
        
    });
    
});

