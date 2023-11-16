const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");

const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");



// to fetch data from the api based on the word
// first we fetch the api and then convert it to readable data through jason method.
// when we fetch data we need to use await to for it to execute fully and then to execute next line of code.
// display block means the content wil be showed
// in the if-else condition, if the word is something that is meaningless the this will happen otherwise mentioned thing will happen.
async function fetchAPI(word){

    try {
        
        infoTextEl.style.display = "block";
        meaningContainerEl.style.display = "none";

        infoTextEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if(result.title){
        meaningContainerEl.style.display = "block";
        infoTextEl.style.display = "none";
        titleEl.innerText = word;
        meaningEl.innerText = "N/A";
        audioEl.style.display = "none";

        }else{

        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        audioEl.style.display = "inline-flex";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        }

    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `An error happened and try again later.`
    }
        
}

// targeted the input to add event as to write word and press enter key,
// then call back the function to get the result.
inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    };
});