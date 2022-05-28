// SHOW FILTER OPTIONS
filter.addEventListener("click", showfilter);
function showfilter() {
    document.querySelector("#filter-dropdown").classList.toggle("hidden");
}


// FILTER FUNCTION
const oldest = document.querySelector("#oldest-option");
const newest = document.querySelector("#newest-option");
oldest.addEventListener("click", filteringOld);
newest.addEventListener("click", filteringNew);

function filteringOld() {
counter = 3;
document.querySelector("#filter > button").innerHTML = `OLDEST <i class="fa fa-solid fa-caret-down"></i>`;
document.querySelector("#load-more").style.display = "none";
document.querySelector("#loadButton2").classList.toggle("hidden");

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
            if (post.caption.rendered.indexOf("gallery") === -1) { 
            covers.push(post);}
        }
            return covers;
        };

setTimeout(() => {
    covers = covers.reverse();
    out.innerHTML = "";
    for(post of covers) {
        // console.log(post);
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
           </a>
          </div>`
       }
      loadBtn.classList.toggle("hidden");
    }, 1100);
}


// LOAD MORE FILTER
function loadMore2() {
counter = counter-1;
if(counter === 2) {document.querySelector("#loadButton2").style.display = "none";}
console.log(counter);
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
            if (post.caption.rendered.indexOf("gallery") === -1) { 
            covers.push(post);}
        }
            return covers;
        };

setTimeout(() => {
    covers = covers.reverse();
    for(post of covers) {
        // console.log(post);
          out.innerHTML += `
          <div>
           <a href="discdetail.html?id=${post.id}">
               <img src="${post.guid.rendered}" alt="${post.alt_text}">
           </a>
          </div>`
       }
      loadBtn.classList.toggle("hidden");
    }, 1100);

    return counter;

}


document.querySelector("#loadButton2").addEventListener("click", loadMore2);

function filteringNew() {
    window.location.reload();
}