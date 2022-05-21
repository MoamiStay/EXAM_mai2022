let counter = 50;
current = 0;
let urlPosts = `https://momis.world/exam1/wp-json/wp/v2/posts?per_page=${counter}`;
let urlImg = `https://momis.world/exam1/wp-json/wp/v2/media?per_page=${counter}`;
const out = document.querySelector("#posts");
const loadBtn = document.querySelector("#load-more");
const loader = document.querySelector("#loadButton");
let albumTitles = [];
let covers = [];
let data = "";
let dataImg = "";

//To get Title
let allPosts;
fetch(urlPosts)
.then((response) => response.json())
.then((parsedData) => {
    allPosts = parsedData;
    data = allPosts;
    return data;
})
.catch((error) => (out.innerHTML = "First place!" + error))


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
.catch((error) => (out.innerHTML = "Second place!" + error))
.finally(() => {document.querySelector("#spinner").remove()})


//////////////////////////////////


setTimeout(function() {
getTitles(data);
listCovers(dataImg);
}, 2000)



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
function getTitles(data) {
    albumTitles = [];
    for(title of data) {
        // console.log(title.categories[0]);
        // console.log(title);
        if(title.categories[0] === 3) {
        albumTitles.push(title.title);
    }}     return albumTitles;
};



setTimeout(() => {
    for(post of covers) {
        if(current <= 9) {
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${covers[current].id}">
               <img src="${covers[current].guid.rendered}" alt="${covers[current].alt_text}">
               <h3>${albumTitles[current].rendered}</h3>
           </a>
          </div>`
          current ++;
        //   console.log(current);
      } }
      loadBtn.classList.toggle("hidden");
      return current;
    }, 2100);



function plus() {
    return counter = counter + 30;
}

function getTitles2() {
    listCovers(dataImg);
    getTitles(data);
}

function loadMore() {
    for(post of covers) {
        // console.log(covers);
        // console.log(current);
        if(current >= covers.length) {break}
        if(current <= counter) {
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${covers[current].id}">
               <img src="${covers[current].guid.rendered}" alt="${covers[current].alt_text}">
               <h3>${albumTitles[current].rendered}</h3>
           </a>
          </div>`
          current ++;
      }
      loader.classList.add("hidden");
    }};

    
loadBtn.addEventListener("click", plus);
loadBtn.addEventListener("click", getTitles2);
loadBtn.addEventListener("click", loadMore);