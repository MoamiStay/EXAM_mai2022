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
document.querySelector("#loadButton2").addEventListener("click", loadMore2);


// LOAD OLDEST
function filteringOld() {
out.innerHTML = `
<div><p>&nbsp;</p></div>
<img src="media/loaderi.gif" id="spinner" alt="loader" />
<div><p>&nbsp;</p></div>
`;
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



// LOAD MORE OLDER
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



// RELOAD MOST RECENT
function filteringNew() {
    // window.location.reload();
document.querySelector("#filter > button").innerHTML = `MOST RECENT <i class="fa fa-solid fa-caret-down"></i>`;
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
    // getTitles(data);
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

}