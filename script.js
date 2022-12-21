// HEADER
const header = document.querySelector('.header');
const logo = document.querySelector('.header_logos-logo');
const navItems = document.querySelectorAll('.header_nav-ul__li--a');

// SECTIONS
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const experience = document.querySelector('#experience');
const skills = document.querySelector('#skills');
const sections = document.querySelectorAll('.section');

// LOADER
const loading = document.querySelector('.loading');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loading.style.display = 'none';
    }, 1000);
})

window.addEventListener('scroll', () => {    
    header.classList.toggle('header_active', scrollY > (innerHeight / 4));
    logo.classList.toggle('header_logos-logo__active', scrollY > (innerHeight / 4));
});

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section;
        }
    });

    navItems.forEach(navItem => {
        const condition = navItem.id === `${current.getAttribute('id')}-item`;
        navItem.classList.toggle('header_nav-ul__li--a___selected', condition);
    });
});


ScrollReveal().reveal('.home_text', { delay: 1200 });
ScrollReveal().reveal('.home_contact', { delay: 1200 });
ScrollReveal().reveal('.header', { delay: 1200 });
ScrollReveal({ reset: true }).reveal('.experience_title', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.about_left', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.about_right', { delay: 400 });
ScrollReveal({ reset: true }).reveal('.experience_title', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.experience_cards', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.skills_title', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.skills_container', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.degrees_title', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.degrees_container', { delay: 400 });
ScrollReveal({ reset: true }).reveal('.contact_container', { delay: 250 });
ScrollReveal({ reset: true }).reveal('.contact_title', { delay: 250 });
ScrollReveal({ reset: true }).reveal('#circle-1', { delay: 250 });
ScrollReveal({ reset: true }).reveal('#circle-2', { delay: 350 });
ScrollReveal({ reset: true }).reveal('#circle-3', { delay: 450 });