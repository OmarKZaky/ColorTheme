const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#nav_logo');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu .addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#homePage');
    const aboutMenu = document.querySelector('#aboutPage');
    const serviceMenu = document.querySelector('#servicesPage');
    let scrollpos = window.scrollY;

    // adds highlight to menu items
    if (window.innerWidth > 960 && scrollpos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } 
    else if (window.innerWidth > 960 && scrollpos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollpos < 2345){
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if (elem && window.innerWidth < 960 && scrollpos < 600 || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close menu in mobile version
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);