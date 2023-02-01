let works = document.getElementById('works');
let worksContainer = document.getElementById('works-container');

let projects = [];

let names = ['KoiBoi | Phaser.js mini game', 'Scrabble | React App', 'Website 1', 'Website 2', 'Currently working on', 'Other >'];
let sources = ['https://github.com/lilspad/KoiBoi', 'https://github.com/lilspad/scrabble-app', 'wbs1src', 'wbs2src', '', 'othersrc'];
let demos = ['koiboidemo', 'scrabbledemo', 'wbs1demo', 'wbs2demo'];

function createProject(name, src, demo) {
    return {
        name: name,
        src: src,
        demo: demo
    }
}

for (let i = 0; i < names.length; i++) {
    let project = createProject(names[i], sources[i], demos[i]);
    projects.push(project)
}

function createElement(project, num) {
    let element = document.createElement('div');
    element.classList.add('initials');
    element.id = 'project' + num;
    element.innerHTML = '<h3>' + project.name + '</h3><a href="' + project.src + '" class="source">Source</a><a href="' + project.demo + '" class="demo">Demo</a>'
    return element;
}

const handleOverWorks = () => {

    let j = 0;
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains('two') || shapes[i].classList.contains('three')) {   
            shapes[i].innerHTML = '';

            let element = createElement(projects[j], j);
            shapes[i].appendChild(element);
            j ++;
        }
    }

    about.removeEventListener('pointerover', handleOverAbout);
    skills.removeEventListener('pointerover', handleOverSkills);

}

const handleOutWorks = () => {

    about.addEventListener('pointerover', handleOverAbout);
    skills.addEventListener('pointerover', handleOverSkills);
}


works.addEventListener('pointerover', handleOverWorks);
works.addEventListener('pointerout', handleOutWorks)