const skills = document.getElementById('skills');
const skillsTitle = document.getElementById('skills-title');
const skillsContainer = document.getElementById('skills-container');
const shapeTwo1 = document.getElementById('two1')
const shapeTwo2 = document.getElementById('two2')
const shapeH1 = document.getElementsByClassName('initials');
const shapeH2 = document.getElementsByClassName('title')

const handleOverSkills = () => {

    if (hero.classList.contains('worksOn')) {
        hero.classList.remove('worksOn');
        handleChange();
    }

    skillsContainer.style.height = '145%';
    skills.style.width = '98%';
    shapeTwo1.style.width = '1%';
    shapeTwo2.style.width = '1%';
    skillsTitle.style.display = "none";

    aboutContainer.style.height = '5%';
    worksContainer.style.height = '5%';

    hero.style.height = '60%';
    hero.style.marginTop = '3%';

    for (let i = 0; i < shapeH2.length; i ++) {
        
        shapeH2[i].style.fontSize = "0";
        
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "0";
    }

}

const handleOutSkills = () => {


    skillsContainer.style.height = '50%';
    skills.style.width = '50%';
    shapeTwo1.style.width = '25%';
    shapeTwo2.style.width = '25%';
    skillsTitle.style.display = "block";

    aboutContainer.style.height = '50%';
    worksContainer.style.height = '50%';

    hero.style.height = '50%';
    hero.style.marginTop = '4%';

    for (let i = 0; i < shapeH2.length; i ++) {

        shapeH2[i].style.fontSize = "3.75rem";
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "7.5rem";
    }

}

skills.addEventListener('pointerover', handleOverSkills);

skills.addEventListener('pointerout', handleOutSkills);