//declaring element
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");
//
let currentImg = 1;

let timeout;

//for next btn. 
nextEl.addEventListener("click", ()=>{
    currentImg++;// current image number will increase
    clearTimeout(timeout);
    updateImg();
});
// for prev btn.
prevEl.addEventListener("click", ()=>{
    currentImg--;// current image number will decrease
    clearTimeout(timeout);
    updateImg();
});

updateImg();
//generating a function to slide next or back for images. after reaching last image, it will start from the first image automatically. the opposite will happen fot the prv btn. when it's the first image already, and if the prev btn is pressed then it will slide back from the last image.
function updateImg(){
        if (currentImg > imgsEl.length){
            currentImg = 1;
        }else if(currentImg < 1){
            currentImg = imgsEl.length;
        }
        imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
        timeout = setTimeout(() =>{
            currentImg++;
            updateImg();
        }, 3000)
}
