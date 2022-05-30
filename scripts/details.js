const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {
    window.location = "disc.html";
}

// console.log(id-1);

const urlPosts = `https://momis.world/exam1/wp-json/wp/v2/posts/${Number(id)-1}`
const outTitle = document.querySelector(".titleHeader");
const errorOut = document.querySelector("main");
const pageTitle = document.querySelector("title");
const out = document.querySelector("#post");
let data = "";

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
    // console.log(posts);
    pageTitle.innerHTML = `${posts.title.rendered} | WOODZ`;
    outTitle.innerHTML = `${posts.title.rendered}`;
    out.innerHTML += `
    <div class="detailsImg" >${posts.content.rendered}</div>`;
    };


    // LIGHTBOX
    const viewImg = document.querySelector(".lightbox");
    
    setTimeout(() => {
        const photos = document.querySelector("figure > img");
        photos.addEventListener("click", e => {
            viewImg.classList.add("active");
            viewImg.style.display = "flex";
            const img = document.createElement("img");
            img.src = photos.src;
            const exit = document.createElement("div");
            exit.id = "exit";
            const exitBtn = document.createElement("img");
            exitBtn.src = "media/back-icon.png";
            exitBtn.alt = ``;
            const exitTxt = document.createElement("p");
            exitTxt.innerHTML = "EXIT";
            while(viewImg.firstChild) {
                viewImg.removeChild(viewImg.firstChild);
                
            }
            exit.appendChild(exitBtn);
            exit.appendChild(exitTxt);
            viewImg.appendChild(img);
            viewImg.appendChild(exit);
            viewImg.classList.add("fadeIn");
            viewImg.classList.remove("fadeOut");
            document.querySelector("body").classList.add("lock-bg");
    })


    viewImg.addEventListener("click", e => {
        if (e.target !== document.querySelector("#exit > img") && e.target !== document.querySelector("#exit > p") && e.target !== document.querySelector("#exit")) return;
        setTimeout(() => {
        viewImg.classList.remove("active");
        viewImg.style.display = "none";
         }, 100)
         viewImg.classList.add("fadeOut");
         viewImg.classList.remove("fadeIn");
         document.querySelector("body").classList.remove("lock-bg");
    });
}, 1500);