const ham = document.querySelector(".ham") as HTMLElement;
const offScreen = document.querySelector(".off-screen-menu") as HTMLElement;
const body = document.querySelector("body") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLElement;
const moon = document.querySelector(".moon") as HTMLElement;
const sun = document.querySelector(".sun") as HTMLElement;
// Admin
const addEvenementForm = document.querySelector(".creation-form") as HTMLElement;
const updateEvenementForm = document.querySelector(".update-form") as HTMLElement;
const deleteEventForm = document.querySelector(".delete-form") as HTMLElement;
const addbtn = document.querySelector(".add") as HTMLElement;
const updateBtn = document.querySelector(".update") as HTMLElement;
const deleteBtn = document.querySelector(".delete") as HTMLElement;
/*
*  Overlay humberger button
**/ 
ham.addEventListener("click",()=>{
    offScreen.classList.add('on');
    overlay.style.display = "block";
} );


//fermer le off screen menu lorsque l'on clique hors de la div
overlay.addEventListener("click",()=>{
    offScreen.classList.remove('on');
    addEvenementForm.classList.remove("selected");
    updateEvenementForm.classList.remove("selected");
    deleteEventForm.classList.remove("selected");
    overlay.style.display = "none";

});

/*
*  switching theme
**/ 
sun.addEventListener("click", ()=>{
    body.classList.add("theme-light");
    sun.style.display = "none";
    moon.style.display = "block";
})

moon.addEventListener("click", ()=>{
    body.classList.remove("theme-light");
    moon.style.display = "none";
    sun.style.display = "block";
})


addbtn.addEventListener("click", ()=>{
    addEvenementForm.classList.add("selected");
    overlay.style.display = "block";
});

updateBtn.addEventListener("click", ()=>{
    updateEvenementForm.classList.add("selected");
    overlay.style.display = "block";
});

deleteBtn.addEventListener("click", ()=>{
    deleteEventForm.classList.add("selected");
    overlay.style.display = "block";
});