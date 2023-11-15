const ratingsEl = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");


let selectedRating = "";
// e means event. targeted the event. 
// to get the text when we clicked either over emoji or the text.
// added the class to each element. so when an emoji is clicked it will have a background.
ratingsEl.forEach((ratingEl) => {ratingEl.addEventListener("click", (event) => {
            removeActive();
            selectedRating = event.target.innerText || event.target.parentNode.innerText;
            event.target.classList.add("active");
            event.target.parentNode.classList.add("active");
            
    });
});

// added event to the button. after selecting the rating when the button is pressed, it shows another document which gets the selected rating from the variable "selectedRating" as what is selected.
// targeted the container div with its element and inside back tag wrote down the html text.
btnEl.addEventListener("click", () =>{
    if(selectedRating !== ""){
        containerEl.innerHTML = 
        `<strong>Thank you!</strong>
        <br>
        <br>
        <strong> Feedback: ${selectedRating}</strong>
        <p> We'll use your feedback to improve our customer support.</p>`
        
    }
})

// to remove active class(background) for other emojies when an emoji is clicked.
function removeActive(){
    ratingsEl.forEach((ratingsEl) => {ratingsEl.classList.remove("active");
    });
}