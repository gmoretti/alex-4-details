

const img = document.createElement('img');

img.src = "img/alex.gif"
img.style.height = "70px";
img.style.width = "70px";
img.style.position = "absolute";
img.className = img.className + " rifle"
for(let i = 0; i < (window.innerWidth / 70 + 1); ++i) {
    for(let j = 0; j < (window.innerHeight / 70 + 1); ++j) {
        const cloneImg = img.cloneNode();
        cloneImg.style.left = (i * 70) + "px"
        cloneImg.style.top = (j * 70) + "px";
        cloneImg.addEventListener('click', (event) => {
            if(!event.target.src.endsWith("img/explode.gif")) {
                event.target.src = "img/explode.gif";
                document.getElementById("counter").textContent = Number(document.getElementById("counter").textContent.trim()) + 1;
                
                setTimeout( (element) => {
                    console.dir(element)
                    element.style.display = "none";
                }, 3000, event.target)
            }
        })
        document.body.appendChild(cloneImg);
    }
}