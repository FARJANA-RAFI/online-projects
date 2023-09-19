// Our main task in this project is to make appear the video trailer pop up in the middle and close down it by clicking the close-icon
// queryselector for specify the selector that will match the function for specific work
//declaring the element with which  i will work
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


//addEventListener for as we click the button the video will pop-up
btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");

});
// when we will click the closing icon the video will be closed
closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause(); //  we can pause the video. 
    videoEl.currentTime = 0; // when we will colse the video on the run, it will start from the beginning if want to wactch again. 

});