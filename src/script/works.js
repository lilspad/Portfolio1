let works = document.getElementById('works');
let worksContainer = document.getElementById('works-container');

let projects = [];

let names = ['KoiBoi | mini game', 'Scrabble | React App', 'Capricious | Website', 'Skincare | Website', 'Currently working on', 'More projects'];
let sources = ['https://github.com/lilspad/KoiBoi', 'https://github.com/lilspad/scrabble-app', 'https://github.com/lilspad/capricious-garden', 'wbs2src', '', 'https://github.com/lilspad?tab=repositories'];
let demos = ['https://koi-boi.herokuapp.com/', 'https://wildwood-scrabble.herokuapp.com/', 'wbs1demo', 'wbs2demo'];

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
    } else {
        element.innerHTML = '<div class="other"><a href="' + project.src + ' target="blank" >' + project.name + '</a></div>';
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

