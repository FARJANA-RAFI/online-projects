//we are gonna create button for each array element.
//element declaration
const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

// this function generates buttons 
kits.forEach((kit) => {
    const btnEl = document.createElement("button");// creating button element
    btnEl.classList.add("btn"); // adding css styling through class
    btnEl.innerText = kit; // adding button name
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)" // adding image source
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3" // adding audio source.
    containerEl.appendChild(audioEl); // adding audio for for each kit
    btnEl.addEventListener("click", () => {
        audioEl.play(); // audio will play as we click the button
    });

    window.addEventListener("keydown", (event)=>{
        if(event.key === kit.slice(0,1)){              // slice method for addressing array element
            audioEl.play();
            btnEl.style.transform = "scale(.9)"; // adding animation; buttons scale will change if we press key
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            },100)
        } 
    });
});