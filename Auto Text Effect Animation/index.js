// declaring the elements
const containerEl = document.querySelector(".container");
// texts to dispplay
const careers = ["Full-stack Developer", "You Tuber", "Instructor", "FreeLancer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

//text will appear character by character in 200s time interval. 
function updateText() {
    characterIndex++;
containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`; //slice method returns the text content of the element icluding all relavant properties.
//after one career array element another element(string) will appear.
if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0;
}

//for non-stop text display 
if(careerIndex === careers.length){
    careerIndex = 0;
}

setTimeout(updateText, 200);
}

//${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"}