const themeButton = document.getElementById('theme');
const page = document.querySelector('body');
const shapes = document.getElementsByClassName("shape");
const buttons = document.getElementsByClassName("button");
const contact = document.querySelector(".contact");
const contactContainer = document.querySelector(".contact-container");
const inputs = document.getElementsByTagName("input");
const text = document.querySelector("textarea");
const copyR = document.querySelector(".copyright");

let theme = "light";

const v = {
    backgroundColor: "#DAEFB3",
    mainColor: "#EEF4D4",
    accentColor1: "#1C2826",
    accentColor2: "#EA9E8D",
    accentColor3: "#D64550"
};

function setDark() {
    theme = "dark";

    page.style.backgroundColor = v.accentColor1;

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.border = "3px solid" + v.accentColor1;
    };
    
    buttons[0].style.backgroundColor = v.accentColor3;
    buttons[1].style.backgroundColor = v.backgroundColor;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('pointerover', () => buttons[i].style.backgroundColor = v.accentColor3);
        buttons[i].addEventListener('pointerout', () => buttons[i].style.backgroundColor = v.backgroundColor);
    };

    contact.style.backgroundColor = "black";
    contact.style.color = "white";
    contactContainer.style.color = "white";

    text.style.backgroundColor = v.backgroundColor;

    inputs[0].style.backgroundColor = v.backgroundColor;
    inputs[1].style.backgroundColor = v.backgroundColor;
    inputs[2].style.backgroundColor = v.backgroundColor;

    copyR.style.color = "white";
}

function setLight() {
    theme = "light";

    page.style.backgroundColor = v.backgroundColor;

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.border = "3px solid" + v.backgroundColor;
    }

    buttons[0].style.backgroundColor = v.accentColor1;
    buttons[1].style.backgroundColor = "white";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('pointerover', () => buttons[i].style.backgroundColor = v.accentColor1);
        buttons[i].addEventListener('pointerout', () => buttons[i].style.backgroundColor = "white");
    };

    contact.style.backgroundColor = "white";
    contact.style.color = "black";
    contactContainer.style.color = "black";

    text.style.backgroundColor = v.mainColor;

    inputs[0].style.backgroundColor = v.mainColor;
    inputs[1].style.backgroundColor = v.mainColor;
    inputs[2].style.backgroundColor = v.mainColor;

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