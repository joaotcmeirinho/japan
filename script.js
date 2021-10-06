const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');

const bottomLeft = document.querySelector('.slider__btn--left');

const bottomRight = document.querySelector('.slider__btn--right');

let maxSlide = slides.length -1;

let currentSlide = 0;

let cameraGirl = document.getElementById('chicacamara');

//styles of sun://///////////////////////////////////////

 let sun = document.getElementById('solecito');

//  sun.style.transform = `translateX(-700px)`;

 sun.style.transition = '3s';

 sun.style.transitionTimingFunction = 'ease';

 sun.style.transform = `translateY(-700px)`;

////////////////////////////////////////////////////////////////


//moving girl:

cameraGirl.style.transform = `translateX(150px)`;

//slider.style.transform = `scale(0.5) translatex(-300px)`;



bottomRight.addEventListener('click',nextSlide);

bottomLeft.addEventListener('click',prevSlide);

//function to make it work in both botones y no repetirlo

function goToSlide(slide) {
  
    slides.forEach((s, i) => {
        //console.log(currentSlide);
        s.style.transform = `translatex(${100 * (i - slide)}%)`;
        
    }); 
};


function nextSlide() {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    goToSlide(currentSlide);
};



function prevSlide() {
   
    if (currentSlide === 0) {
        currentSlide = maxSlide;
   
    } else {
        currentSlide--
    }

    goToSlide(currentSlide);
};


