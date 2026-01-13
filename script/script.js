var ham = document.querySelector(".ham");
var hamLight = document.querySelector(".light-ham");
var hamDark = document.querySelector(".dark-ham");
var offScreen = document.querySelector(".off-screen-menu");
var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
var themeButtun = document.querySelector(".theme-btn");
var moon = document.querySelector(".moon");
var sun = document.querySelector(".sun");
var categories = document.querySelectorAll(".categories div");
var evenements = document.querySelectorAll(".events div");
var inscriptionForm = document.querySelector(".inscription-form");
/*
*  Overlay humberger button
**/
hamLight.addEventListener("click", function () {
    offScreen.classList.add('on');
    overlay.style.display = "block";
});
hamDark.addEventListener("click", function () {
    offScreen.classList.add('on');
    overlay.style.display = "block";
});
//fermer le off screen menu lorsque l'on clique hors de la div
overlay.addEventListener("click", function () {
    offScreen.classList.remove('on');
    inscriptionForm.classList.remove("selected");
    overlay.style.display = "none";
});
/*
*  switching theme
**/
sun.addEventListener("click", function () {
    body.classList.add("theme-light");
    sun.style.display = "none";
    moon.style.display = "block";
    if (window.innerWidth < 500) {
        hamLight.style.display = "none";
        hamDark.style.display = "block";
    }
});
moon.addEventListener("click", function () {
    body.classList.remove("theme-light");
    sun.style.display = "block";
    moon.style.display = "none";
    if (window.innerWidth < 500) {
        hamLight.style.display = "block";
        hamDark.style.display = "none";
    }
});
/**
 * categories selectionner
 */
categories.forEach(function (div) {
    div.addEventListener("click", function () {
        var actuel = document.querySelector(".categories .active");
        if (actuel) {
            actuel.classList.remove("active");
        }
        div.classList.add("active");
    });
});
/**
 * Apparition fiche d'inscription
 * */
evenements.forEach(function (div) {
    div.addEventListener("click", function () {
        inscriptionForm.classList.add("selected");
        overlay.style.display = "block";
    });
});
