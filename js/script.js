const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('.btn-container');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuBtn.classList.toggle('active');
})
