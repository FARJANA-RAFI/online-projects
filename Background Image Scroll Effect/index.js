//declaring the elecment 
const bgImageEl = document.getElementById("bg-image");

// as we will scroll down ,the background will zoom out. triggered the addeventListener 
window.addEventListener("scroll", () =>{
    updateImage()
});

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900 // for blurness effect
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset/ 12 + "%" // zoom-out background-image
}

