const menu = document.querySelector("nav");
const showMenu = document.querySelector(".menu"); //home "menu" button
const hideMenu = document.querySelector("#backButton"); //menu "back" button
const splatter = document.querySelector(".splatter-menu") //paint image


showMenu.onclick = function() {showMe()};
hideMenu.onclick = function() {hideMe()};


function showMe() {
    console.log(menu);
    menu.classList.toggle("nav-hidden");
    menu.style.animationName = "dropdown";
    if(splatter) {
    splatter.style.animationName = "dropdown"; }
}

function hideMe() {
    menu.style.animationName = "dropup";
    if(splatter) {
    splatter.style.animationName = "dropup"; }
    setTimeout(() => {
        menu.classList.toggle("nav-hidden");
    }, 300)
}