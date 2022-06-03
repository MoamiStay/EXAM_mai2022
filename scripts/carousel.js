const carouselSection = document.querySelector("#carousel-section");
const cover1 = document.querySelector(".cover1");
const cover2 = document.querySelector(".cover2");
const cover3 = document.querySelector(".cover3");
const toLeft = document.querySelector(".turn-left");
const toRight = document.querySelector(".turn-right");
let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=50";
let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts?per_page=50";

let allImg;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {postsArray(parsedData); allImg = parsedData;})
.catch((error) => (carouselSection.innerHTML = "A wild error appeared: " + error))
.finally(() => { document.querySelector("#spinner").remove(); 
document.querySelector("main").style.backgroundColor = "transparent";
document.querySelector("header").style.backgroundColor = "transparent";
})

let allPosts;
fetch(urlPosts)
.then((response) => response.json())
.then((parsedData) => {linkDetails(parsedData); allPosts = parsedData})
.catch((error) => (carouselSection.innerHTML = "First place!" + error))


//// PUT COVERS, ALT-TEXT AND DETAILS LINK IN ARRAY ////
let albums = []; 
let alt = [];
function postsArray(allImg) {
    // console.log(allImg);
    for(item of allImg) {
        // console.log(item.caption.rendered.indexOf("gallery")); // "gallery" is only included in img that are in gallery.
        if(item.caption.rendered.indexOf("gallery") === -1) { // only get images that are not part of gallery. (just albums)
        let link = (item.guid.rendered); 
        let altText = (item.alt_text);
        albums.push(link);
        alt.push(altText);
        } else continue;
    }
    return albums, alt;
};

let links = [];
 function linkDetails(data) {
    // console.log(data);
    for(post of data) {
        // get links to individual pages
        // console.log(post.categories[0] === 3);
        if(post.categories[0] === 3) { //only get posts under category: albums (category 3)
        let link = (post.id);
        links.push(link); 
    } else continue;
    }
    return links;
};

//// GET CORRESPONDING NUMBER FOR EACH POST ////
let last;
let first = 0;
let third = 1;

setTimeout(function() {
    last = Object.keys(albums).length-1;
    return last;
 }, 400);



setTimeout(function() {
    // console.log(alt);
    // console.log(albums);
    // console.log(last);
    for(let i = 0; i < Object.keys(albums).length; i++) {
        // console.log(links[first]+1);
        cover1.innerHTML = `<img src="${albums[last]}" alt="${alt[last]}">`;
        cover2.innerHTML = `<a href="discdetail.html?id=${links[first]+1}"><img src="${albums[first]}" alt="${alt[first]}"></a>`;
        cover3.innerHTML = `<img src="${albums[third]}" alt="${alt[third]}">`;
    }
}, 700);

toRight.addEventListener("click", turnLeft);
cover3.addEventListener("click", turnLeft);
toLeft.addEventListener("click", turnRight);
cover1.addEventListener("click", turnRight);

function turnLeft() {
    console.log("turnLeft");
    last = last+1;
    first = first+1;
    third = third+1;
    
    if(last >= 15) {last = 0};
    if(first >= 15) {first = 0};
    if(third >= 15) {third = 0};
    console.log(last, first, third);

        cover1.innerHTML = `<img src="${albums[last]}" alt="${alt[last]}">`;
        cover2.innerHTML = `<a href="discdetail.html?id=${links[first]+1}"><img src="${albums[first]}" alt="${alt[first]}"></a>`;
        cover3.innerHTML = `<img src="${albums[third]}" alt="${alt[third]}">`;
};

function turnRight() {
    first = first-1;
    last = last-1;
    third = third-1;
    
    if(last >= 15) {last = 0};
    if(last == -1) {last = 14};
    if(first >= 15) {first = 0};
    if(first == -1) {first = 14};
    if(third >= 15) {third = 0};
    if(third == -1) {third = 14};
    console.log(first, last, third);

        cover1.innerHTML = `<img src="${albums[last]}" alt="${alt[last]}">`;
        cover2.innerHTML = `<a href="discdetail.html?id=${links[first]+1}"><img src="${albums[first]}" alt="${alt[first]}"></a>`;
        cover3.innerHTML = `<img src="${albums[third]}" alt="${alt[third]}">`;
};