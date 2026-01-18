const ham = document.querySelector(".ham") as HTMLElement;
const offScreen = document.querySelector(".off-screen-menu") as HTMLElement;
const body = document.querySelector("body") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLElement;
const themeButtun = document.querySelector(".theme-btn") as HTMLElement;
const moon = document.querySelector(".moon") as HTMLElement;
const sun = document.querySelector(".sun") as HTMLElement;
const categories = document.querySelectorAll(".categories div");
const evenements = document.querySelectorAll(".events div");
const inscriptionForm = document.querySelector(".inscription-form") as HTMLElement;
// Admin
const addEvenementForm = document.querySelector(".creation-form") as HTMLElement;
const addbtn = document.querySelector(".add") as HTMLElement;
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
        inscriptionForm.classList.remove("selected");
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


/**
 * categories selectionner
 */

categories.forEach(div =>{
    div.addEventListener("click", ()=>{
        let actuel = document.querySelector(".categories .active");

        if(actuel){
            actuel.classList.remove("active");
        }
        div.classList.add("active");
    });
});

/** 
 * Apparition fiche d'inscription
 * */ 

evenements.forEach(div =>{
        div.addEventListener("click", ()=>{
        inscriptionForm.classList.add("selected");
        overlay.style.display = "block";
    });
});



// Admin
addbtn.addEventListener("click", ()=>{
    addEvenementForm.classList.add("selected");
    overlay.style.display = "block";
});