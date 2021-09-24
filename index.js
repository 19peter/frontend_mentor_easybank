const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");


let key = false;
hamburger.addEventListener("click", () => {
 
    if (!key) {
        hamburger.style.display = "none";
        menu.style.display = "block";
        closeIcon.style.display = "block";
        key = true;
    } 
})

closeIcon.addEventListener("click", () => {
    if (key) {
            hamburger.style.display = "block";
            menu.style.display = "none";
            closeIcon.style.display = "none";
            key = false;
        }
    })
