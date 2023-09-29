//declaring element
const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");
// to save the changes in the localstorage.
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if(inputEl.checked){
        bodyEl.style.background = "black" //true
    }else{
        bodyEl.style.background = "white" //false
    }
}
// adding addevent listener to trigger the function updateBody()
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

// to set the changes in localstorage
function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked)
    );
}