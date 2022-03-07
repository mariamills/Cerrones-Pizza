let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('uil-times');
    nav.classList.toggle('nav-link')
}