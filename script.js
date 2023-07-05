//storing required elements in variables
const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");

//getting colors
//the value in the element is acquired using leftinput.value
let leftColor = leftInput.value;
let rightColor = rightInput.value;

//function to change background
const changeBackground = () => {
    const cssString = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    //we change the background of the body using the below statement
    body.style.background = cssString;
    //also we have to correspondingly change the css output with new colors
    cssOutput.textContent = `background:${cssString}`;
};
//adding events on inputs
leftInput.addEventListener("change", (Event) => {
    leftColor = Event.target.value;
    changeBackground();
});
rightInput.addEventListener("change", (Event) => {
    rightColor = Event.target.value;
    changeBackground();
});
//to generate a random background we use math random function
//random color generates a random color
const Button = document.querySelector("button");
const colors = "0123456789abcdef";
const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        //returns a random number 0 to 16
        let random = Math.floor(Math.random() * 16);
        color += colors[random];
    }
    return color;
};
Button.addEventListener("click", (Event) => {
    leftColor = randomColor();
    rightColor = randomColor();
    leftInput.value = leftColor;
    rightInput.value = rightColor;
    changeBackground();
});