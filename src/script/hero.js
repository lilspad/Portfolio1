const hero = document.querySelector('.hero-display');

let back = ['LI', 'LY', 'PA', 'CZE', 'SNI', 'AK']

hero.addEventListener('pointerover', () => {
    hero.style.width = '90%';
})

hero.addEventListener('pointerout', () => {
    hero.style.width = '70%';
    /*let j = 0;
    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains('two') || shapes[i].classList.contains('three')) {
            shapes[i].innerHTML = '<h1 class="initials">' + back[j] + '</h1>';
            j++;
        }
    } */
})