let themeButton = document.getElementById('theme');
let page = document.querySelector('body');
let shapes = document.getElementsByClassName("shape");
let buttons = document.getElementsByClassName("button");
let contact = document.querySelector(".contact");
let contactContainer = document.querySelector(".contact-container");
let inputs = document.getElementsByTagName("input");
let text = document.querySelector("textarea");
let copyR = document.querySelector(".copyright");

let theme = "light";

function setDark() {
    theme = "dark";

    page.style.backgroundColor = "#1C2826";

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.border = "3px solid #1C2826";
    };
    
    buttons[0].style.backgroundColor = '#D64550';
    buttons[1].style.backgroundColor = "#DAEFB3";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('pointerover', () => buttons[i].style.backgroundColor = "#D64550");
        buttons[i].addEventListener('pointerout', () => buttons[i].style.backgroundColor = "#DAEFB3");
    };

    contact.style.backgroundColor = "black";
    contact.style.color = "white";
    contactContainer.style.color = "white";

    text.style.backgroundColor = "#DAEFB3";

    inputs[0].style.backgroundColor = "#DAEFB3";
    inputs[1].style.backgroundColor = "#DAEFB3";
    inputs[2].style.backgroundColor = "#DAEFB3";

    copyR.style.color = "white";
}

function setLight() {
    theme = "light";

    page.style.backgroundColor = "#DAEFB3";

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.border = "3px solid #DAEFB3";
    }

    buttons[0].style.backgroundColor = "#1C2826"
    buttons[1].style.backgroundColor = "white";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('pointerover', () => buttons[i].style.backgroundColor = "#1C2826");
        buttons[i].addEventListener('pointerout', () => buttons[i].style.backgroundColor = "white");
    };

    contact.style.backgroundColor = "white";
    contact.style.color = "black";
    contactContainer.style.color = "black";

    text.style.backgroundColor = "#EEF4D4";

    inputs[0].style.backgroundColor = "#EEF4D4";
    inputs[1].style.backgroundColor = "#EEF4D4";
    inputs[2].style.backgroundColor = "#EEF4D4";

    copyR.style.color = "black";
}

function setTheme() {
    switch (theme)  {
        case "light":
            setDark();
            break;
        case "dark":
            setLight();
            break;
    }
}

themeButton.addEventListener('click', setTheme);