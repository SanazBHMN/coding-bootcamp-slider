var slides = document.querySelector('.slider-items').children;
// console.log(slides)
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');

var totalSlides = slides.length;
// console.log(totalSlides);
var index = 0;
// nextSlide.addEventListener('onclick', () => {
//      console.log('click');
// });

nextSlide.onclick = function() {
      // console.log('click');
      next('next');
}

prevSlide.onclick = function() {
      // console.log('prev click')
      next('prev');
}

function next(direction) {
      if(direction === 'next') {
            index++;
            if(index === totalSlides) {
                  index = 0;
            }
      } else {
           if(index == 0) {
                 index = totalSlides - 1;
           } else {
                 index--;
           }
      }

      for(var i = 0; i< slides.length; i++) {
            slides[i].classList.remove('active');
      }

      slides[index].classList.add('active');
}