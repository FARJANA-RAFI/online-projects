//adding functionality to the website
//declaring element
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content")

tabs.addEventListener("click", (event) => {
    const id = event.target.dataset.id;//to identify which btn is clicked
    if(id){
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
        articles.forEach((article) => {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);// through id each btn shows its article. 
        element.classList.add("live");
    }
});