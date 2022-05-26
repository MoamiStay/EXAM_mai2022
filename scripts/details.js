const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {
    window.location = "disc.html";
}

console.log(id-1);

const urlPosts = `https://momis.world/exam1/wp-json/wp/v2/posts/${Number(id)-1}`
const outTitle = document.querySelector(".titleHeader");
const errorOut = document.querySelector("main");
const pageTitle = document.querySelector("title");
const out = document.querySelector("#post");
let data = ""

let allPosts;
fetch(urlPosts)
.then((response) => response.json())
.then((parsedData) => {
    allPosts = parsedData;
    data = allPosts;
    return data;
})
.then((data) => {
    listPosts(data);
    allPosts = data;
})
.catch((error) => (
    document.querySelector("#splatter-general").style.display = "none",
    errorOut.innerHTML = `
<div class="error-msg"> 
<h2>There was a problem with retrieving data.</h2>
<p><a href="index.html">Go back to homescreen</a></p>`))
.finally(() => {
    document.querySelector("main").style.backgroundColor = "transparent";
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("#spinner").remove()
});

function listPosts(posts) {
    console.log(posts);
    pageTitle.innerHTML = `${posts.title.rendered} | WOODZ`
    outTitle.innerHTML = `${posts.title.rendered}`;
        out.innerHTML += `
        <div>${posts.content.rendered}</div>`
    };


    // -------------------------------------------

