let skills = document.getElementById('skills');
let skillsContent = document.getElementById('skills-content');

skills.addEventListener('pointerover', () => {
    hero.style.width = '90%';
});

skills.addEventListener('pointerout', () => {
    hero.style.width = '60%';
});