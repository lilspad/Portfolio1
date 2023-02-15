let works = document.getElementById('works');
let worksContainer = document.getElementById('works-container');

let projects = [];

let names = ['Skincare | eCommerce App', 'Scrabble | React App', 'Capricious | Website', 'KoiBoi | mini game', 'Currently working on', 'More projects'];
let sources = ['appsrc', 'https://github.com/lilspad/scrabble-app', 'https://github.com/lilspad/capricious-garden', 'https://github.com/lilspad/KoiBoi', '', 'https://github.com/lilspad?tab=repositories'];
let demos = ['appdemo', 'https://wildwood-scrabble.herokuapp.com/', 'https://dreamy-meringue-2d3f95.netlify.app/', 'https://koi-boi.herokuapp.com/'];

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
        element.innerHTML = '<div class="more"><h3>' + project.name + '</h3><div class="content"><div><h2>Learning..</h2><p>C#</p><p>React native</p></div>' + 
        '<div><h2>Developing..</h2><p>Scrabble React App</p><p>Utility Mobile app</p><p>2D RPG game</p></div></div></div>';
    } else if (project.name === "More projects") {
        element.innerHTML = '<div class="more"><h3>' + project.name + '</h3><div class="content column">' + 
        '<a href="https://github.com/lilspad/lilspad.github.io" target="blank">This portofolio</a>' + 
        '<a href="" target="blank">Some website</a>'+ 
        '<a href="" target="blank">Some website</a>' + 
        '<a href="' + project.src + '" class="button">GitHub repositories ></a></div></div>';
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

