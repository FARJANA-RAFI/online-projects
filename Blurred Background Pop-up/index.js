// declaring all element which  are required
const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

//this function is for first to blur the backgroung while the "click to join" button is clicked, meanwhile to appear the pop-up content in the middle.
btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");//blur
    popupContainerEl.classList.remove("active");//pop-up

});

// when the close-icon will be clicked two things will happen, first pop-up will be closed simultaneously the background will be clear again as default
closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");//blurness gone
    popupContainerEl.classList.add("active");//pop-up closed
});