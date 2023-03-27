let about = document.getElementById('about');
let aboutContainer = document.getElementById('about-container');
let aboutContent = document.getElementById('about-content')

let title = document.querySelector('.title');
let p = document.querySelector('.about-content p');


const handleOverAbout = () => {

    if (hero.classList.contains('worksOn')) {
        hero.classList.remove('worksOn');
        handleChange();
    }

    p.style.marginTop = '5%';
    title.style.marginTop = '-100vh';


    aboutContainer.style.height = '500px';
    about.style.width = '120%';
    about.style.height = '100%';
}

const handleOutAbout = () => {
    
    p.style.marginTop = "100vh";
    title.style.marginTop = "0"
    title.style.fontSize = '3.75rem';

    aboutContainer.style.height = '25%';
    about.style.width = '100%';
    about.style.height = 'unset';

}

about.addEventListener('pointerover', handleOverAbout);

about.addEventListener('pointerout', handleOutAbout);


