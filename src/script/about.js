let about = document.getElementById('about');
let aboutContainer = document.getElementById('about-container');
let aboutContent = document.getElementById('about-content')

let title = document.querySelector('.title');
let p = document.querySelector('.about-content p');

let mediaQuery = window.matchMedia("(max-width: 1500px)")


const handleOverAbout = () => {

    if (hero.classList.contains('worksOn')) {
        hero.classList.remove('worksOn');
        handleChange();
    }

    if (mediaQuery.matches) {
        p.style.marginTop = '5%';
        title.style.marginTop = '-100%';
    } else {
        p.style.marginTop = '10%';
        title.style.marginTop = '-35%';
        title.style.fontSize = '2rem';
    }

    aboutContainer.style.height = '95%';
    about.style.width = '75%';

    hero.style.marginTop = '3%';
}

const handleOutAbout = () => {
    
    p.style.marginTop = "100%";
    title.style.marginTop = "0"
    title.style.fontSize = '3.75rem';

    aboutContainer.style.height = '50%';
    about.style.width = '50%';

    hero.style.marginTop = '5%';
}

about.addEventListener('pointerover', handleOverAbout);

about.addEventListener('pointerout', handleOutAbout);


