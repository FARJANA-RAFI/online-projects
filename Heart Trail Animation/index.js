const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
        const xPos = event.offsetX;   //the icon will move across x axis 
        const yPos = event.offsetY; //the icon will move across y axis
        const spanEl = document.createElement("span"); // each time with the movement of mouse span will be created .
        spanEl.style.left = xPos + "px";
        spanEl.style.top = yPos + "px";

        const size = Math.random() * 100; // at different point on the window the size of the icon will change.

        spanEl.style.width = size + "px";
        spanEl.style.height = size + "px";
        
        bodyEl.appendChild(spanEl);
        setTimeout(() => {
            spanEl.remove();
        }, 3000);// after 3s the icon will vanish

});
