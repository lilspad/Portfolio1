const skills = document.getElementById('skills');
const skillsTitle = document.getElementById('skills-title');
const skillsContainer = document.getElementById('skills-container');
const shapeTwo1 = document.getElementById('two1')
const shapeTwo2 = document.getElementById('two2')
const shapeH1 = document.getElementsByClassName('initials');
const shapeH2 = document.getElementsByClassName('title');

const skillsContent = document.getElementById('skills-content');
const skillIcons = document.getElementsByClassName('skill-icon');
const sections = document.getElementsByClassName('skills-section');


const handleOverSkills = () => {

    if (hero.classList.contains('worksOn')) {
        hero.classList.remove('worksOn');
        handleChange();
    }

    skills.style.minHeight = '400px';
    skillsTitle.style.display = "none";

    aboutContainer.style.height = '2%';
    worksContainer.style.height = '2%';
    aboutContainer.style.minHeight = '2%';
    worksContainer.style.minHeight = '2%';

    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].id !== 'skills') {
            shapes[i].style.height = '100%';
            shapes[i].style.minHeight = '5%';
        } 
    }

    
    if (mediaQuery.matches) {
        shapeTwo1.style.height = '1%';
        shapeTwo2.style.height = '1%';
        skills.style.height = '200%';
        skills.style.width = '100%';
    } else {
        shapeTwo1.style.height = '100%';
        shapeTwo2.style.height = '100%';
        shapeTwo1.style.width = '1%';
        shapeTwo2.style.width = '1%';
        shapeTwo1.style.minWidth = '1%';
        shapeTwo2.style.minWidth = '1%';
        skillsContainer.style.height = '140%';
        skills.style.width = '98%';
    }

    for (let i = 0; i < shapeH2.length; i ++) {
        
        shapeH2[i].style.fontSize = "0";
        
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "0";
    }

    skillsContent.style.marginTop = '10%';
}

const handleOutSkills = () => {

    if (mediaQuery.matches) {
        skillsContainer.style.height = '43%';
    } else {
        skillsContainer.style.height = '25%';
        skillsContainer.style.minHeight = '100px';
    }
    
    skills.style.width = '100%';
    skills.style.minWidth = '50%';
    shapeTwo1.style.width = '25%';
    shapeTwo2.style.width = '25%';
    shapeTwo1.style.minWidth = '200px';
    shapeTwo2.style.minWidth = '200px';
    skillsTitle.style.display = "block";

    aboutContainer.style.height = '25%';
    worksContainer.style.height = '25%';
    
    aboutContainer.style.minHeight = '100px';
    worksContainer.style.minHeight = '100px';

    hero.style.height = '100%';
    hero.style.marginTop = '8vh';

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.height = 'unset';
        shapes[i].style.minHeight = '100px';
    }

    for (let i = 0; i < shapeH2.length; i ++) {

        shapeH2[i].style.fontSize = "3.75rem";
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "7.5rem";
    }

    skillsContent.style.marginTop = '100vh';

}

skills.addEventListener('pointerover', handleOverSkills);

skills.addEventListener('pointerout', handleOutSkills);

const handleNavClick = (event) => {

    let icon = event.target;

    if (!icon.id) {
        icon = icon.parentElement;
    }

    for (let i = 0; i< skillIcons.length; i ++) {
        skillIcons[i].classList.remove('active');
        sections[i].classList.remove('active');
    }

    icon.classList.add('active');

    const sectionId = icon.id.replace('-icon', '');
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}

for (let i = 0; i < skillIcons.length; i ++) {
    skillIcons[i].addEventListener('click', (e) => handleNavClick(e));
}