const urlPosts = 	"https://momis.world/exam1/wp-json/wp/v2/posts/62";
const outTitle = document.querySelector(".titleHeader");
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
.catch((error) => (out.innerHTML = "A wild error appeared!" + error))
.finally(() => document.querySelector(".loader").remove());

// -------------------------------------------

function listPosts(posts) {
    console.log(posts);
    outTitle.innerHTML = `${posts.title.rendered}`;
        out.innerHTML += `
        <div>${posts.content.rendered}</div>`
    };
