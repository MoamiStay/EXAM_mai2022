const urlPosts = "https://momis.world/exam1/wp-json/wp/v2/posts";
const urlImg = "https://momis.world/exam1/wp-json/wp/v2/media";
const out = document.querySelector("#posts");
let albumTitles = [""];
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
    getTitles(data);
    allPosts = data;
})
.then((data) => {
    listPosts(data);
    allPosts = data;
})
.catch((error) => (out.innerHTML = "A wild error appeared!" + error))
// .finally(() => document.querySelector(".loader").remove());


let allCovers;
fetch(urlImg)
.then((response) => response.json())
.then((parsedData) => {
    listCovers(parsedData);
    allPosts = parsedData;
})
.catch((error) => (out.innerHTML = "A wild error appeared!" + error))
// .finally(() => document.querySelector(".loader").remove());


// -------------------------------------------

function getTitles(titles) {
    for(title of titles) {
        albumTitles.push(title.title);
    }
    return albumTitles;
}

function listCovers(posts) {
    out.innerHTML = "";
    counter = 0;
    // console.log(posts);
    for(post of posts) {
        // console.log(post);
        counter ++;
        out.innerHTML += `
        <div>
        <img src="${post.guid.rendered}" alt="${post.alt_text}">
        <h3>${albumTitles[counter].rendered}</h3>
        </div>`
    }
};

