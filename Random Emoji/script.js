const btn = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const emoji = [];


// to get the emoji from API. each time the site will be loaded and call back the function.
// requested for the api stored
async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=05865ab71201702a2add4aa1f9c2c35d3e1829f3")

    data = await response.json();
    
    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiImg: data[i].character,
            emojiCode: data[i].unicodeName,
        });
        
    }
}
getEmoji();


// when the btn is clicked added functionalities for it.
//  Each time it is clicked will get the random number which is from 0 to 1500 inside emoji variable.
btn.addEventListener("click", ()=> {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNumber].emojiImg;
    emojiName.innerText = emoji[randomNumber].emojiCode;
});