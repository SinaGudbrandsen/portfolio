// Html elementer
const omMeg = document.querySelector(".omMeg"); 
const textWrapper = document.querySelector(".textWrapper");
const back = document.querySelector(".back");
const backShow = document.querySelector(".backShow");
const textWrapperShow = document.querySelector(".textWrapperShow"); 
const about = document.querySelector(".about");



function showAboutMe(event) {

    textWrapper.classList.toggle("textWrapperShow"); 
    omMeg.classList.toggle("omMegClicked"); 
    back.classList.toggle("backShow");
    about.classList.toggle("aboutSlideIn");

}

function goBackToHero(event) {
    textWrapper.classList.toggle("textWrapperShow"); 
    omMeg.classList.toggle("omMegClicked"); 
    back.classList.toggle("backShow");
    about.classList.toggle("aboutSlideIn");
    
}

omMeg.addEventListener("click", showAboutMe); 
back.addEventListener("click", goBackToHero);