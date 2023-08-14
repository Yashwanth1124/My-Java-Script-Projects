let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitElement = document.getElementById("timeToVisitButton");
let attractionsElement = document.getElementById("attractionsButton");

let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function about() {
    aboutButtonElement.classList.add("selected-button");
    timeToVisitTabElement.classList.remove("selected-button");
    attractionsElement.classList.remove("selected-button");
    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
}

function visit() {
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.add("selected-button");
    attractionsElement.classList.remove("selected-button");
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");
}

function attractions() {
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitTabElement.classList.remove("selected-button");
    attractionsElement.classList.add("selected-button");
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");
}