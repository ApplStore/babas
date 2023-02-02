const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('.btn-container');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuBtn.classList.toggle('active');
})


const slideshow = document.querySelector(".slide-img");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    let index = 0;

    prevButton.addEventListener("click", function () {
        index = (index === 0) ? 4 : index - 1;
        slideshow.style.transform = `translateX(-${index * 500}px)`;
        slideshow.style.animation = "none";
      })

      nextButton.addEventListener("click", function () {
        index = (index === 4) ? 0 : index + 1;
        slideshow.style.transform = `translateX(-${index * 500}px)`;
        slideshow.style.animation = "none";
      })

setInterval(function () {
    if (slideshow.style.animation === "none") {
      slideshow.style.animation = "slide 5s forwards infinite";
    }
    index = (index === 4) ? 0 : index + 1;
    slideshow.style.transform = `translateX(-${index * 500}px)`;
}, 2000)