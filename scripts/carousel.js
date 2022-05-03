const carouselSection = document.querySelector("#carousel-section");
const hideleft = document.querySelector(".hideleft");
const lastleft = document.querySelector(".lastleft");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const next = document.querySelector(".next");
const lastright = document.querySelector(".lastright");
const hideright = document.querySelector(".hideright");
const toLeft = document.querySelector(".turn-left");
const toRight = document.querySelector(".turn-right");
let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=20";

let allImg;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
        carousel(parsedData);})
.catch((error) => (carouselSection.innerHTML = "A wild error appeared: " + error))
// .finally(() => document.querySelector(".loader").remove())


let thirdlast = 13; // items.length-2;
let secondlast = 14; // items.length-1;
let first = 0;
let second = 1;
let third = 2;


toLeft.addEventListener("click", turnLeft);

function turnLeft(){
    console.log(thirdlast+1);
    thirdlast = thirdlast+1;
    secondlast = secondlast+1;
    first = first+1;
    second = second+1;
    third = third+1;
    return thirdlast, secondlast, first, second, third;
}; 


function carousel(items) {
for(item of items) {
    const preL = items[thirdlast].id; // 16
    const preLImg = items[thirdlast].guid.rendered;

    const lastL = items[secondlast].id; // 15
    const lastLImg = items[secondlast].guid.rendered;

    const latest = items[first].id; // 0
    const latestImg = items[first].guid.rendered;

    const nextR = items[second].id; // 1
    const nextImg = items[second].guid.rendered;

    const lastR = items[third].id; // 2
    const lastRImg = items[third].guid.rendered;

    lastleft.innerHTML = `<img src="${preLImg}" />`;
    previous.innerHTML = `<img src="${lastLImg}" />`;
    current.innerHTML = `<a href="disc.html"><img src="${latestImg}" /></a>`;
    next.innerHTML = `<img src="${nextImg}" />`;
    lastright.innerHTML = `<img src="${lastRImg}" />`;
   }    
};




