const menu = document.querySelector('#menu');
const nav = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('uil-times');
    nav.classList.toggle('nav-link')
}

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});