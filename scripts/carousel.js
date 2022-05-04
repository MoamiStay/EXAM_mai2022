const carouselSection = document.querySelector("#carousel-section");
const cover1 = document.querySelector(".cover1");
const cover2 = document.querySelector(".cover2");
const cover3 = document.querySelector(".cover3");
const cover4 = document.querySelector(".cover4");
const toLeft = document.querySelector(".turn-left");
const toRight = document.querySelector(".turn-right");
let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=20";

let allImg;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {postsArray(parsedData); allImg = parsedData;})
.catch((error) => (carouselSection.innerHTML = "A wild error appeared: " + error))
.finally(() => document.querySelector(".loader").remove())


//----

let albums = []; 
function postsArray(allImg) {
    for(item of allImg) {
        let link = (item.guid.rendered);
        albums.push(link);
    }
    return albums;
};

let first = 0;
let second = 1;
let third = 2;
let fourth = 3;

setTimeout(function(allImg) {
    // console.log(allImg);
    for(let i = 0; i < Object.keys(albums).length; i++) {
        cover1.innerHTML = `<div><img src="${albums[first]}" alt="yo"></div>`;
        cover2.innerHTML = `<div><img src="${albums[second]}" alt="yo"></div>`;
        cover3.innerHTML = `<div><img src="${albums[third]}" alt="yo"></div>`;
        cover4.innerHTML = `<div><img src="${albums[fourth]}" alt="yo"></div>`;
    }
}, 1000);

toRight.addEventListener("click", turnLeft);
toLeft.addEventListener("click", turnRight);


function turnLeft() {
    first = first+1;
    second = second+1;
    third = third+1;
    fourth = fourth+1;
    
    if(first >= 15) {first = 0};
    if(second >= 15) {second = 0};
    if(third >= 15) {third = 0};
    if(fourth >= 15) {fourth = 0};
    console.log(first, second, third, fourth);

        cover1.innerHTML = `<div><img src="${albums[first]}" alt="yo"></div>`;
        cover2.innerHTML = `<div><img src="${albums[second]}" alt="yo"></div>`;
        cover3.innerHTML = `<div><img src="${albums[third]}" alt="yo"></div>`;
        cover4.innerHTML = `<div><img src="${albums[fourth]}" alt="yo"></div>`;
};

function turnRight() {
    first = first-1;
    second = second-1;
    third = third-1;
    fourth = fourth-1;
    
    if(first >= 15) {first = 0};
    if(first == -1) {first = 14};
    if(second >= 15) {second = 0};
    if(second == -1) {second = 14};
    if(third >= 15) {third = 0};
    if(third == -1) {third = 14};
    if(fourth >= 15) {fourth = 0};
    if(fourth == -1) {fourth = 14};
    console.log(first, second, third, fourth);

        cover1.innerHTML = `<div><img src="${albums[first]}" alt="yo"></div>`;
        cover2.innerHTML = `<div><img src="${albums[second]}" alt="yo"></div>`;
        cover3.innerHTML = `<div><img src="${albums[third]}" alt="yo"></div>`;
        cover4.innerHTML = `<div><img src="${albums[fourth]}" alt="yo"></div>`;
};