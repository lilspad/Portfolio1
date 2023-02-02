const hero = document.querySelector('.hero-display');

let initials = ['LI', 'LY', 'PA', 'CZE', 'SNI', 'AK']

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
    hero.style.height = '50%';
    hero.style.marginTop = '5%';

    let j = 0;

    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains('two') || shapes[i].classList.contains('three')) {

            shapes[i].innerHTML = '<h1 class="initials">' + initials[j] + '</h1>';
            j++;

            shapes[i].id = '';
            shapes[i].style.width = '25%';
        }
    }

    about.style.display = 'flex';
    skills.style.display = 'flex';

    about.style.width = '50%';
    skills.style.width = '50%';

}

hero.addEventListener('pointerleave', () => {
    hero.classList.remove('worksOn');
    handleChange();
});