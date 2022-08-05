const menuBtn = document.querySelector('.menu-btn button')
const menu = document.querySelector('.menu')


menuBtn.addEventListener('click', function() {   
    menu.classList.toggle('open')
})