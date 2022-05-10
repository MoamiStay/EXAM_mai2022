let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts?per_page=50";
let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=50";
const out = document.querySelector("#posts");
const loadBtn = document.querySelector("#load-more");
let albumTitles = [""];
let data = "";
let counter = 0;

//To get Title
let allPosts;
fetch(urlPosts)
.then((response) => response.json())
.then((parsedData) => {
    allPosts = parsedData;
    data = allPosts;
    return data;
})
.then((data) => {
    getTitles(data);
    allPosts = data;
})
.catch((error) => (out.innerHTML = "First place!" + error))



// Collect all titles in an array
function getTitles(titles) {
    // console.log(titles);
    for(title of titles) {
        // console.log(title.categories[0]);
        // console.log(title);
        if(title.categories[0] === 3) {
        albumTitles.push(title.title);
    }}     return albumTitles;
};


//To get cover image
let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    setTimeout(() => {
        listCovers(parsedData);
        document.querySelector("main").style.backgroundColor = "transparent";
        document.querySelector("header").style.backgroundColor = "transparent";
        allPosts = parsedData;}, 1500);
})
.catch((error) => (out.innerHTML = "Second place!" + error))
.finally(() => {document.querySelector("#spinner").remove()})

let covers = [];
function listCovers(posts) {
    // console.log(posts);
    out.innerHTML = "";

    for(post of posts) {
        // console.log(post.caption.rendered.indexOf("gallery"));
        if (post.caption.rendered.indexOf("gallery") === -1) { 
        covers.push(post);}
    }
        return covers;
    }

setTimeout(() => {
    for(post of covers) {
        counter ++;
        if(counter <= 10) {
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
               <h3>${albumTitles[counter].rendered}</h3>
           </a>
          </div>`
      } }
      loadBtn.classList.toggle("hidden");
    }, 2000);


loadBtn.addEventListener("click", loadMore);

function loadMore() {
    for(post of covers) {
        if(counter <= counter + 10) {
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
               <h3>${albumTitles[counter].rendered}</h3>
           </a>
          </div>`
      }
    }};



// loadBtn.addEventListener("click", loadMore);

// function loadMore() {
//     // console.log("katten til per");
//     let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts?per_page=20";
//     let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=20";
//  }
