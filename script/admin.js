var ham = document.querySelector(".ham");
var offScreen = document.querySelector(".off-screen-menu");
var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
var moon = document.querySelector(".moon");
var sun = document.querySelector(".sun");
// Admin
var addEvenementForm = document.querySelector(".creation-form");
var updateEvenementForm = document.querySelector(".update-form");
var deleteEventForm = document.querySelector(".delete-form");
var addbtn = document.querySelector(".add");
var updateBtn = document.querySelector(".update");
var deleteBtn = document.querySelector(".delete");
/*
*  Overlay humberger button
**/
ham.addEventListener("click", function () {
    offScreen.classList.add('on');
    overlay.style.display = "block";
});
//fermer le off screen menu lorsque l'on clique hors de la div
overlay.addEventListener("click", function () {
    offScreen.classList.remove('on');
    addEvenementForm.classList.remove("selected");
    updateEvenementForm.classList.remove("selected");
    deleteEventForm.classList.remove("selected");
    overlay.style.display = "none";
});
/*
*  switching theme
**/
sun.addEventListener("click", function () {
    body.classList.add("theme-light");
    sun.style.display = "none";
    moon.style.display = "block";
});
moon.addEventListener("click", function () {
    body.classList.remove("theme-light");
    moon.style.display = "none";
    sun.style.display = "block";
});
addbtn.addEventListener("click", function () {
    addEvenementForm.classList.add("selected");
    overlay.style.display = "block";
});
updateBtn.addEventListener("click", function () {
    updateEvenementForm.classList.add("selected");
    overlay.style.display = "block";
});
deleteBtn.addEventListener("click", function () {
    deleteEventForm.classList.add("selected");
    overlay.style.display = "block";
});
