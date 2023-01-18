let about = document.getElementById('about');
let aboutContainer = document.getElementById('about-container');
let hero = document.querySelector('.hero-display');
let title = document.querySelector('.about-content .title');
let p = document.querySelector('.about-content p');
let all = document.querySelector('*');


about.addEventListener('pointerover', () => {
    p.style.marginTop = '0';
    title.style.padding = '4px';
    aboutContainer.style.height = '95%';
    hero.style.marginTop = '1%';
    hero.style.width = '90%'
});

about.addEventListener('pointerout', () => {
    p.style.marginTop = "100%";
    title.style.padding = '50px';
    aboutContainer.style.height = '50%';
    hero.style.marginTop = '4%';
    hero.style.width = '70%'
});


