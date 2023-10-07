const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');
    menuLinks = document.querySelectorAll('.menu-link1, .menu-link2, .menu-link3, .menu-link4, .menu-link5, .menu-link6');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const procentes = document.querySelectorAll('.skills-ability__procente'),
      indicatorSize = document.querySelectorAll('.skills-ability__indicator');

procentes.forEach((procent, size) => {
    indicatorSize[size].style.width = procent.innerHTML;
});
