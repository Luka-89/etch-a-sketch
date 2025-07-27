let sizeInput = document.querySelector("#size");
let size = sizeInput.value;
let sketchZone = document.querySelector("#sketch-zone");
let resizeButton = document.querySelector("#size-btn");

let mouseDown = false;
document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

for(let i = 0; i < size; i++) {
    let gridRow = document.createElement("div");
    for(let j = 0; j < size; j++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        gridRow.appendChild(tile);
        tile.addEventListener("mouseover", changeColor);
    }
    sketchZone.appendChild(gridRow);
}

function changeColor(e) {
    if(!mouseDown) return;
    e.target.style.backgroundColor = "var(--jet-light)";
}