//declaring element where the dynamic change is needed
const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter")

//adding a function or method for which an action will occure
textareaEl.addEventListener("keyup", ()=>{
    updateCounter() //will update the counter(total as well as remaining)
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length // to count total character
    remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length; // to count remaining character
}

