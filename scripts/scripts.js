let counter = 2;
let urlImg = `https://momis.world/exam1/wp-json/wp/v2/media?page=${counter}`;
const out = document.querySelector("#posts");
const filter = document.querySelector("#filter");
const outError = document.querySelector("main");
const loadBtn = document.querySelector("#load-more");
const loader = document.querySelector("#loadButton");
let covers = [];
let dataImg = "";


//To get cover image
let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    allCovers = parsedData;
    dataImg = allCovers;
    return dataImg;
})
.catch((error) => (
    document.querySelector("#splatter-general").style.display = "none",
    outError.innerHTML = `
<div class="error-msg"> 
<h2>There was a problem with retrieving data.</h2>
<p><a href="index.html">Go back to homescreen</a></p>`))
// .finally(() => {document.querySelector("#spinner").remove()})


setTimeout(function() {
listCovers(dataImg);
}, 1000)



function listCovers(dataImg) {
    covers = [];
    for(post of dataImg) {
        // console.log(post.caption.rendered.indexOf("gallery"));
        if (post.caption.rendered.indexOf("gallery") === -1) { 
        covers.push(post);}
    }
        return covers;
    };


setTimeout(() => {
    out.innerHTML = "";
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


function loadMore() {

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
.catch((error) => (out.innerHTML = "Second place!" + error))
// .finally(() => {document.querySelector("#spinner").remove()})


setTimeout(function() {
    listCovers(dataImg);
    }, 1000)
    
    
    function listCovers(dataImg) {
        covers = [];
        for(post of dataImg) {
            // console.log(post.caption.rendered.indexOf("gallery"));
            if (post.caption.rendered.indexOf("gallery") === -1) { 
            covers.push(post);}
        }
            return covers;
        };


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

loadBtn.addEventListener("click", loadMore);











