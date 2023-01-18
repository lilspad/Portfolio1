let works = document.getElementById('works');


works.addEventListener('pointerover', () => {
    hero.style.width = '90%';
});

works.addEventListener('pointerout', () => {
    hero.style.width = '70%';
});