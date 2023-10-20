
ScrollReveal().reveal('.sobre-mi');
ScrollReveal().reveal('.name');
ScrollReveal().reveal('.PI, .IPI', {delay: 500});
ScrollReveal().reveal('.main-body', {delay: 500});
ScrollReveal().reveal('.Knowledges', {delay: 700});
ScrollReveal().reveal('.habilidades-nav', {delay: 500});
ScrollReveal().reveal('.habilidades-list', {delay: 700});
ScrollReveal().reveal('.nav-referencias', {delay: 500});
ScrollReveal().reveal('.referenciado-grupo', {delay: 700});

let toggle = document.getElementById('modo');
let body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}