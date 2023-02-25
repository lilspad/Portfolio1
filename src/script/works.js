let works = document.getElementById('works');
let worksContainer = document.getElementById('works-container');

let projects = [];

let names = ['Modest | eCommerce App', 'Some | New App', 'Capricious | Website', 'KoiBoi | mini game', 'Currently working on', 'More projects'];
let sources = ['https://github.com/lilspad/modest', '', 'https://github.com/lilspad/capricious-garden', 'https://github.com/lilspad/KoiBoi'];
let demos = ['appdemo', '', 'https://capricious.netlify.app/', 'https://koi-boi.herokuapp.com/'];

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

function createElement(project) {
    let element = document.createElement('div');
    element.classList.add('project');

    if (project.demo) {
        element.innerHTML = '<h3>' + project.name + '</h3><a href="' + project.src + '"target="blank" class="button source">Source</a><a href="' +
        project.demo + '"target="blank" class="button demo">Demo</a>'; 
    } else if (project.name === "Currently working on") {
        element.innerHTML = '<div class="more"><h3>' + project.name + '</h3><div class="content"><h2>Developing..</h2>' + 
        '<div><a href="https://github.com/lilspad?tab=repositories" target="blank">Scrabble React App</a><a href="https://wildwood-scrabble.herokuapp.com/" target="blank" > ( Demo ) </a></div>' + 
        '<a href="" target="blank">2D RPG game</a></div>' + 
        '<div class="content"><div><h2>Learning..</h2><p>C#</p><p>MongoDB</p></div></div>';
    } else if (project.name === "More projects") {
        element.innerHTML = '<div class="more"><h3>' + project.name + '</h3><div class="content column">' + 
        '<a href="https://github.com/lilspad/lilspad.github.io" target="blank">This portofolio</a>' + 
        '<a href="https://capricious.netlify.app/" target="blank">Capricious Garden Centre</a>'+ 
        '<a href="https://github.com/lilspad/silver-sparrows" target="blank">Silver Sparrows</a>' + 
        '<a href="https://github.com/lilspad?tab=repositories" target="blank" class="button">GitHub repositories ></a></div></div>';
    }
    return element;
}

const handleOverWorks = () => {
    hero.classList.add('worksOn');

    hero.style.height = '60%';
    hero.style.marginTop = '3%';

    let j = 0;
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains('two') || shapes[i].classList.contains('three')) {   
            shapes[i].innerHTML = '';

            let element = createElement(projects[j]);
            shapes[i].appendChild(element);
            shapes[i].id = 'project' + j;
            j ++;

            shapes[i].style.width = '50%';
        }
    }

    about.style.width = '0%';
    skills.style.width = '0%';
    

    about.addEventListener('transitionend', () => {
        if (!hero.classList.contains('worksOn')) {
            return;
        }
        about.style.display = 'none';
        skills.style.display = 'none';

    })

    
}


works.addEventListener('pointerover', handleOverWorks);

