let counter = 2;
// let urlPosts = `https://momis.world/exam1/wp-json/wp/v2/posts?page=${counter}`;
let urlImg = `https://momis.world/exam1/wp-json/wp/v2/media?page=${counter}`;
const out = document.querySelector("#posts");
const filter = document.querySelector("#filter");
const outError = document.querySelector("main");
const loadBtn = document.querySelector("#load-more");
const loader = document.querySelector("#loadButton");
// let albumTitles = [];
let covers = [];
// let data = "";
let dataImg = "";

//To get Title
// let allPosts;
// fetch(urlPosts)
// .then((response) => response.json())
// .then((parsedData) => {
//     allPosts = parsedData;
//     data = allPosts;
//     return data;
// })
// .catch((error) => (out.innerHTML = "First place!" + error))


//To get cover image
let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    allCovers = parsedData;
    dataImg = allCovers;
    return dataImg;
})
//     setTimeout(() => {
//         listCovers(parsedData);
//         document.querySelector("main").style.backgroundColor = "transparent";
//         document.querySelector("header").style.backgroundColor = "transparent";
//         allPosts = parsedData;}, 1500);
// })
.catch((error) => (
    document.querySelector("#splatter-general").style.display = "none",
    outError.innerHTML = `
<div class="error-msg"> 
<h2>There was a problem with retrieving data.</h2>
<p><a href="index.html">Go back to homescreen</a></p>`))
// .finally(() => {document.querySelector("#spinner").remove()})


//////////////////////////////////


setTimeout(function() {
// getTitles(data);
listCovers(dataImg);
}, 1000)



function listCovers(dataImg) {
    // out.innerHTML = "";
    covers = [];
    for(post of dataImg) {
        // console.log(post.caption.rendered.indexOf("gallery"));
        if (post.caption.rendered.indexOf("gallery") === -1) { 
        covers.push(post);}
    }
        return covers;
    };


// Collect all titles in an array
// function getTitles(data) {
//     albumTitles = [];
//     for(title of data) {
//         // console.log(title.categories[0]);
//         // console.log(title);
//         if(title.categories[0] === 3) {
//         albumTitles.push(title.title);
//     }}     return albumTitles;
// };


setTimeout(() => {
    out.innerHTML = "";
    // document.querySelector("#spinner").remove()
    for(post of covers) {
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
           </a>
          </div>`
       }
      loadBtn.classList.toggle("hidden");
    }, 1100);


// function plus() {
//     return counter = counter+1;
// }

// function getTitles2() {
//     listCovers(dataImg);
//     // getTitles(data);
// }

function loadMore() {
//To get Title
// let allPosts;
// fetch(urlPosts)
// .then((response) => response.json())
// .then((parsedData) => {
//     allPosts = parsedData;
//     data = allPosts;
//     return data;
// })
// .catch((error) => (out.innerHTML = "First place!" + error))


//To get cover image
counter = counter+1;
let urlImg = `https://momis.world/exam1/wp-json/wp/v2/media?page=${counter}`;

let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    allCovers = parsedData;
    dataImg = allCovers;
    return dataImg;
})
//     setTimeout(() => {
//         listCovers(parsedData);
//         document.querySelector("main").style.backgroundColor = "transparent";
//         document.querySelector("header").style.backgroundColor = "transparent";
//         allPosts = parsedData;}, 1500);
// })
.catch((error) => (out.innerHTML = "Second place!" + error))
// .finally(() => {document.querySelector("#spinner").remove()})


setTimeout(function() {
    // getTitles(data);
    listCovers(dataImg);
    }, 1000)
    
    
    
    function listCovers(dataImg) {
        // out.innerHTML = "";
        covers = [];
        for(post of dataImg) {
            // console.log(post.caption.rendered.indexOf("gallery"));
            if (post.caption.rendered.indexOf("gallery") === -1) { 
            covers.push(post);}
        }
            return covers;
        };
    
    
    // Collect all titles in an array
    // function getTitles(data) {
    //     albumTitles = [];
    //     for(title of data) {
    //         // console.log(title.categories[0]);
    //         // console.log(title);
    //         if(title.categories[0] === 3) {
    //         albumTitles.push(title.title);
    //     }}     return albumTitles;
    // };


setTimeout(() => {
    for(post of covers) {
        console.log(post);
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
           </a>
          </div>`
       }
      loadBtn.classList.toggle("hidden");
    }, 1100);

};
    
// loadBtn.addEventListener("click", plus);
// loadBtn.addEventListener("click", getTitles2);
loadBtn.addEventListener("click", loadMore);











