let bgColorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fontSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let customButtonElement = document.getElementById("customButton");
let borderRadiusInput = document.getElementById("borderRadiusInput");

function apply() {
    let bgColorValue = bgColorElement.value;
    let fontColorValue = fontColorElement.value;
    let fontSizeValue = fontSizeElement.valuel;
    let fontWeightValue = fontColorElement.value;
    let paddingValue = paddingElement.value;
    let borderRadiusValue = borderRadiusInput.value;
    customButtonElement.style.backgroundColor = bgColorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontColorValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = borderRadiusValue;
}