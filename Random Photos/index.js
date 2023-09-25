//declaring the element 
const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

//adding functionality for the result after each click
btnEl.addEventListener("click", () => {
    imageNum = 10; // 10 more images wil load after each click
    addNewImages(); // calling the function
});

//creating a new function for images
function addNewImages(){
    for (let index = 0; index <imageNum; index++) {
        const newImageEl = document.createElement("img")// created element for the images  inside the function
    newImageEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000 )}`; // added the source of the images to get 10 random pictures

    imageContainerEl.appendChild(newImageEl); // adding img element for 10 images every time
    }
}