// set the elment by selecting navbar specifically with query selector. 
const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

//console.log(navbarEl.offsetHeight);
//console.log(bottomContainerEl.offsetTop);

//addEventListener has been added as we scroll that's when the changes will happen
window.addEventListener("scroll", () => {
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)// to calculate the to which part of the content navbar will change
    {
        navbarEl.classList.add("active");//when navbar touch the bottom of the image ,the color of the navbar will change. 
    }else{
        navbarEl.classList.remove("active");
        }   // otherwise if we go up there won't be any chenges in navbar
});
