const hamburger = document.querySelector('.hamburger');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    main.classList.toggle('active');
});