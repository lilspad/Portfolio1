const hero = document.querySelector('.hero-display');

let initials = ['LI', 'LY', 'PA', 'CZE', 'SNI', 'AK']

let mediaQuery = window.matchMedia("(max-width: 1000px)");

hero.addEventListener('pointerover', () => {
    hero.style.width = '90%';

    if (hero.classList.contains('worksOn')) {
        return;
    }

})

function handleChange() {
    
    if (hero.classList.contains('worksOn')) {
        return;
    }

    hero.style.width = '70%';
    hero.style.height = '100%';

    let j = 0;

    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains('two') || shapes[i].classList.contains('three')) {

            shapes[i].innerHTML = '<h1 class="initials">' + initials[j] + '</h1>';
            j++;

            shapes[i].id = '';
            shapes[i].style.width = '100%';
        }
    }

    about.style.display = 'flex';
    skills.style.display = 'flex';

    

    if (mediaQuery.matches) {
        skillsContainer.style.flexWrap = 'wrap';
        skillsContainer.style.height = '43%';
        about.style.height = 'unset';
        about.style.minHeight = '100px';
        skills.style.height = 'unset';
        skills.style.minHeight = '100px';
        skills.style.zIndex = '1';
    } else {
        about.style.width = '100%';
        skills.style.width = '100%';
        about.style.minWidth = '200px';
        skills.style.minWidth = '50%';
        skills.style.zIndex = '1';
    }

}

hero.addEventListener('pointerleave', () => {
    hero.classList.remove('worksOn');
    handleChange();
});