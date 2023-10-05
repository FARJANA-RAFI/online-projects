const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");// if we don't write anything and still press the add button, this message will pop-up.
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);//after adding each task, it will create li element and tasks will be stored in innerHtml.

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);//cross icon each added task. 
    }
    inputbox.value = ''; // once one task is added textbar will be empty again.
    saveData();// after adding taks, they will be saved in the localstorage.
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");//to check or uncheck if the clicked element is li
        saveData();
    }    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//to delete the rask if the clicked element is span
        saveData();
    }
}, false);

//tasks will be saved as data in the localstorage(to save data in the browser).
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//whenever the app is opened it will show tha data as it was or previously saved.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();