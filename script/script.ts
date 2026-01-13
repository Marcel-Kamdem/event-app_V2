const ham = document.querySelector(".ham") as HTMLElement;
const hamLight = document.querySelector(".light-ham") as HTMLElement;
const hamDark = document.querySelector(".dark-ham") as HTMLElement;
const offScreen = document.querySelector(".off-screen-menu") as HTMLElement;
const body = document.querySelector("body") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLElement;
const themeButtun = document.querySelector(".theme-btn") as HTMLElement;
const moon = document.querySelector(".moon") as HTMLElement;
const sun = document.querySelector(".sun") as HTMLElement;
const categories = document.querySelectorAll(".categories div");
const evenements = document.querySelectorAll(".events div");
const inscriptionForm = document.querySelector(".inscription-form") as HTMLElement;

/*
*  Overlay humberger button
**/ 
hamLight.addEventListener("click",()=>{
    offScreen.classList.add('on');
    overlay.style.display = "block";
} );

hamDark.addEventListener("click",()=>{
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
    if(window.innerWidth < 500){
        hamLight.style.display = "none";
        hamDark.style.display= "block";
    }
})

moon.addEventListener("click", ()=>{
    body.classList.remove("theme-light");
    sun.style.display = "block";
    moon.style.display = "none";
    if (window.innerWidth < 500) {
        hamLight.style.display = "block";
        hamDark.style.display= "none";
    }
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

