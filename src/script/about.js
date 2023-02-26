let about = document.getElementById('about');
let aboutContainer = document.getElementById('about-container');

let title = document.querySelector('.about-content .title');
let p = document.querySelector('.about-content p');


const handleOverAbout = () => {

    if (hero.classList.contains('worksOn')) {
        hero.classList.remove('worksOn');
        handleChange();
    }

    p.style.marginTop = '0';
    title.style.padding = '10px';
    title.style.fontSize = '2rem';

    aboutContainer.style.height = '95%';
    about.style.width = '75%';

    hero.style.marginTop = '3%';
}

const handleOutAbout = () => {
    
    p.style.marginTop = "100%";
    title.style.padding = '50px';
    title.style.fontSize = '3.75rem';

    aboutContainer.style.height = '50%';
    about.style.width = '50%';

    hero.style.marginTop = '5%';
}

about.addEventListener('pointerover', handleOverAbout);

about.addEventListener('pointerout', handleOutAbout);


