const menu = document.querySelector("nav");
const showMenu = document.querySelector("#ham_menu"); //home "menu" button
const hideMenu = document.querySelector("#backButton"); //menu "back" button


showMenu.onclick = function() {showMe()};
hideMenu.onclick = function() {hideMe()};


function showMe() {
    menu.classList.toggle("nav-hidden");}

function hideMe() {
    menu.classList.toggle("nav-hidden");}