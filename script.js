// Menu fixo
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')

    header.classList.toggle('roll', window.scrollY > 0);
})

// Efeito rolagem
window.revelar = ScrollReveal({reset:true})

    // TOP Site

    revelar.reveal('.efeito-txt-top', {
        duration: 2000,
        distance: '90px'
    })

    revelar.reveal('.efeito-img-top', {
        duration: 2000,
        distance: '90px',
        delay: 500
    })

    // titulo 

    revelar.reveal('.titulo', {
        duration: 2000,
        distance: '90px'
    })

    // Habilidades

    revelar.reveal('.effect-hab1', {
        duration: 2000,
        distance: '90px',
        delay: 500
    })

    revelar.reveal('.effect-hab2', {
        duration: 2000,
        distance: '90px',
        delay: 1000
    })

    revelar.reveal('.effect-hab3', {
        duration: 2000,
        distance: '90px',
        delay: 1500
    })

    // Sobre

    revelar.reveal('.effect-txt-sobre', {
        duration: 2000,
        distance: '90px',
        origin: 'right',
        delay: 700
    })

    revelar.reveal('.effect-img-sobre', {
        duration: 2000,
        distance: '90px',
        delay: 700,
        origin: 'left' 
    })

// Menu Mobile

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    overlay.style.display = 'block';
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
})

