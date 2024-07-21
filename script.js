const menu = document.querySelector('#menu-icon') //Seleccionando por ID
const navList = document.querySelector('.navlist') //Seleccionando por CLASE

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 400, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll-down', {delay: 450, origin: 'rigth'})