//1. declaring the elements of what we are gonna bring changes
const containerEl = document.querySelector(".container");

//1.will create 30 color container
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);//

}
//1.this is for selecting all color container to get the changes
const colorContainerEls = document.querySelectorAll(".color-container");

// 3.to generate colors
generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) =>
    {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    
    });
}

//2. to create random color code matches with color
function randomColor(){
    const chars ="0123456789abcdef"// we are gonna change color code within this charaacters
    const colorCodeLength = 6;//rgb color code length
    let colorCode ="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
        }
        return colorCode;
}
