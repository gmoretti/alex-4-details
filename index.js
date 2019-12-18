document
  .getElementById("draw")
  .addEventListener("click", startDrawKill.bind(this, false));
document.getElementById("lidl").addEventListener("click", startFollowLidl);
document.getElementById("catamole").addEventListener("click", startCatamole);

let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", event => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
function startCatamole() {
  alert("Not yet");
}

function startFollowLidl() {
  startDrawKill(true);
}
function startDrawKill(lidl = false) {
  if (!lidl) {
    document.getElementById("kill-board").style.display = "initial";
  }
  const img = document.createElement("img");

  img.src = "img/alex.gif";
  img.style.height = "70px";
  img.style.width = "70px";
  img.style.position = "absolute";
  img.className = lidl ? img.className + " lidl" : img.className + " rifle";

  const maxI = lidl ? 60 : window.innerWidth / 70 + 1;
  const maxY = lidl ? 60 : window.innerHeight / 70 + 1;
  for (let i = 0; i < maxI; ++i) {
    for (let j = 0; j < maxY; ++j) {
      const cloneImg = img.cloneNode();
      cloneImg.style.left = i * 70 + "px";
      cloneImg.style.top = j * 70 + "px";

      if (lidl) {
        setInterval(() => {
          cloneImg.style.left = mouseX;
          cloneImg.style.top = mouseY;
        }, (i * j + j) * 20);
      }
      cloneImg.addEventListener("click", event => {
        if (!lidl && !event.target.src.endsWith("img/explode.gif")) {
          event.target.src = "img/explode.gif";
          document.getElementById("counter").textContent =
            Number(document.getElementById("counter").textContent.trim()) + 1;

          setTimeout(
            element => {
              element.style.display = "none";
            },
            1000,
            event.target
          );
        }
      });
      document.body.appendChild(cloneImg);
    }
  }
}
