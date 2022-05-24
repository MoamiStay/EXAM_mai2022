const menu = document.querySelector("nav");
const showMenu = document.querySelector("#ham_menu"); //home "menu" button
const hideMenu = document.querySelector("#backButton"); //menu "back" button


showMenu.onclick = function() {showMe()};
hideMenu.onclick = function() {hideMe()};


function showMe() {
    console.log(menu);
    menu.classList.toggle("nav-hidden");
    menu.style.animationName = "dropdown";
}

function hideMe() {
    menu.style.animationName = "dropup";
    setTimeout(() => {
        menu.classList.toggle("nav-hidden");
    }, 300)
}