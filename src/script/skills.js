let skills = document.getElementById('skills');
let skillsContainer = document.getElementById('skills-container');
let shapeTwo1 = document.getElementById('two1')
let shapeTwo2 = document.getElementById('two2')
let shapeH1 = document.getElementsByClassName('initials');
let shapeH2 = document.getElementsByClassName('title')

const handleOverSkills = () => {

    skillsContainer.style.height = '150%';
    skills.style.width = '100%';
    shapeTwo1.style.width = '0';
    shapeTwo2.style.width = '0';

    aboutContainer.style.height = '0';
    worksContainer.style.height = '0';

    for (let i = 0; i < shapeH2.length; i ++) {
        shapeH2[i].style.fontSize = "0";
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "0";
    }
}

const handleOutSkills = () => {

    for (let i = 0; i < shapeH2.length; i ++) {
        shapeH2[i].style.fontSize = "3.75rem";
    }

    for (let i = 0; i < shapeH1.length; i ++) {
        shapeH1[i].style.fontSize = "7.5rem";
    }

    skillsContainer.style.height = '50%';
    skills.style.width = '50%';
    shapeTwo1.style.width = '25%';
    shapeTwo2.style.width = '25%';

    aboutContainer.style.height = '50%';
    worksContainer.style.height = '50%';
}

skills.addEventListener('pointerover', handleOverSkills);

skills.addEventListener('pointerout', handleOutSkills);