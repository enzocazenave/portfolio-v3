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