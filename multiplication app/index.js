//generating random numbers ranged from 1 to 10 
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//declaring varibles for question, input, form, score
const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

//for generating score based on the input whether its correct or incorrect and the score gonna change dynamically
let score = JSON.parse (localStorage.getItem("score"));

if(!score){
    score = 0;
}
scoreEl.innerText = `score : ${score}`

//to get the question randomly
questionEl.innerText = `what is ${num1} multiply by ${num2}?`;

//how the answer will be count
const correctAns = num1 * num2;

//in order to store the answers into local sotrage
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }

    });

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
};