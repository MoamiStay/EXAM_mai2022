const display = document.querySelector("#gallery");
const viewImg = document.querySelector(".lightbox");
let urlPosts = "https://momis.world/exam1/wp-json/wp/v2/media?per_page=20";

let allPosts;
fetch(urlPosts)
.then((response) => response.json())
.then((parsedData) => {displayImg(parsedData); allPosts = parsedData})
.catch((error) => (display.innerHTML = "Somethings wrong" + error))
.finally(() => {  document.querySelector("#spinner").remove(); 
document.querySelector("main").style.backgroundColor = "transparent";
document.querySelector("header").style.backgroundColor = "transparent";
})

function displayImg(data) {
    // console.log(data);
    for(img of data) {
        if(img.caption.rendered.indexOf("gallery") !== -1) {
            // console.log(img.source_url);
            display.innerHTML += `
            <div>
            <img class="gallery-img" src="${img.guid.rendered}" alt="" />
            </div>
            `
        }
    }

    const photos = document.querySelectorAll(".gallery-img");

    photos.forEach(photos => {
        photos.addEventListener("click", e => {
            viewImg.classList.add("active");
            viewImg.style.display = "flex";
            const img = document.createElement("img");
            img.src = photos.src;
            while (viewImg.firstChild) {
                viewImg.removeChild(viewImg.firstChild)
            }
            viewImg.appendChild(img);
    })
    })   

    viewImg.addEventListener("click", e => {
        if (e.target !== e.currentTarget) return;
        viewImg.classList.remove("active");
        viewImg.style.display = "none";
    });
};
