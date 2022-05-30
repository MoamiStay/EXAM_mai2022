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
    
    // show gallery images
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
    

        // LIGHTBOX
        const photos = document.querySelectorAll(".gallery-img");
    
        photos.forEach(photos => {
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
    };
    