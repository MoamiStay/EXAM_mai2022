let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts";
let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media";
const out = document.querySelector("#posts");
const loadBtn = document.querySelector("#load-more");
let albumTitles = [""];
let data = ""

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
    for(title of titles) {
        albumTitles.push(title.title);
    }
    return albumTitles;
}


//To get cover image
let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    setTimeout(() => {
        listCovers(parsedData);
        allPosts = parsedData;}, 1000);
})
.catch((error) => (out.innerHTML = "Second place!" + error))
.finally(() => document.querySelector(".loader").remove())


function listCovers(posts) {
    out.innerHTML = "";
    counter = 0;
    // console.log(posts);
    for(post of posts) {
        // console.log(post);
        counter ++;
        out.innerHTML += `
        <div>
         <a href="discdetail.html?id=${post.id}">
             <img src="${post.guid.rendered}" alt="${post.alt_text}">
             <h3>${albumTitles[counter].rendered}</h3>
         </a>
        </div>`
    }
    loadBtn.classList.toggle("hidden");
};

loadBtn.addEventListener("click", loadMore);

function loadMore() {
    console.log("katten til per");
    let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts?per_page=20";
    let urlImg = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=20";
}
