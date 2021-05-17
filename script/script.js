// var slides = document.querySelector(".slider-items").children;
var slides = [
  {
    image: "images/image-tanya.jpg",
    caption:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m nowin the job of my dreams and so excited about the future. ”",
    username: "Tanya Sinclair",
    skill: "UX Engineer",
  },
  {
    image: "images/image-john.jpg",
    caption:
      " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    username: "John Smith",
    skill: "Junior Frontend Developer",
  },
];
var image = document.querySelector("img");
var caption = document.querySelector("p");
var username = document.querySelector(".name");
var skill = document.querySelector(".skill");

// console.log(slides)
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");

var totalSlides = slides.length;
// console.log(totalSlides);
var index = 0;
// nextSlide.addEventListener('onclick', () => {
//      console.log('click');
// });

nextSlide.onclick = function () {
  // console.log('click');
  navigateSlider("next");
};

prevSlide.onclick = function () {
  // console.log('prev click')
  navigateSlider("prev");
};

function loadItem(index) {
  data = slides[index];
  image.src = data.image;
  caption.innerText = data.caption;
  username.innerText = data.username;
  skill.innerText = data.skill;
}

function navigateSlider(direction) {
  index += direction === "next" ? 1 : -1;
  if (index === -1) index = totalSlides - 1;
  if (index === totalSlides) index = 0;
  loadItem(index);
}

loadItem(0);
