let sizeInput = document.querySelector("#size");
let size = sizeInput.value;
let sketchZone = document.querySelector("#sketch-zone");
let resizeButton = document.querySelector("#size-btn");
resizeButton.addEventListener("click", render);

let mouseDown = false;
document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

document.body.addEventListener("keydown", renderKeydown);

render();

function changeColor(e) {
    if (!mouseDown) return;
    e.target.style.backgroundColor = "var(--jet-light)";
    e.target.style.opacity = parseFloat(getComputedStyle(e.target).opacity) + 0.25;
}

function changeColorRandom(e) {
    if (!mouseDown) return;
    e.target.style.backgroundColor = `rgb(  ${Math.floor(Math.random() * 255)}, 
                                            ${Math.floor(Math.random() * 255)}, 
                                            ${Math.floor(Math.random() * 255)}
                                        )`;
    e.target.style.opacity = parseFloat(getComputedStyle(e.target).opacity) + 0.1;
}

function render() {
    sketchZone.innerHTML = "";
    let sketchZoneSize = 700;
    let tileSize = Math.floor(sketchZoneSize / parseInt(sizeInput.value));

    sketchZoneSize = tileSize * parseInt(sizeInput.value);
    sketchZone.style.width = sketchZoneSize + "px";
    sketchZone.style.height = sketchZoneSize + "px";

    for (let i = 0; i < parseInt(sizeInput.value); i++) {
        let gridRow = document.createElement("div");
        for (let j = 0; j < parseInt(sizeInput.value); j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.height = tileSize + "px";
            tile.style.width = tileSize + "px";
            gridRow.appendChild(tile);
            tile.addEventListener("mouseover", changeColor);
        }
        sketchZone.appendChild(gridRow);
    }
}

function renderKeydown(e) {
    if(e.key === "Enter") render();
}