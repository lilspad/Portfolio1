let shapes = document.getElementsByClassName('shape');

for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.width = '10%';
        shapes[i].style.height = '10%';
    }

for (let i = 0; i < shapes.length; i++) {
    shapes[i].addEventListener('click', () => {
        shapes[i].style.height = '100%'
    })
}