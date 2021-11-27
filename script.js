let container = document.querySelector('.container');
function makeGrid(numTiles) {
    let totalBoxes = numTiles * numTiles; //# of boxes in grid
    let areaOfBoxes = 160000 / totalBoxes; //160000 from 400x400 container
    let boxDimension = Math.sqrt(areaOfBoxes);
    let boxFlexBasis = 1 / numTiles * 100;
    for(i = 0; i < totalBoxes; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.height = boxDimension;
        gridBox.style.width = boxDimension;
        gridBox.style.backgroundColor = '#8aefff';
        gridBox.style.flexBasis = `${boxFlexBasis}%`;
        gridBox.style.opacity = '0';
        container.appendChild(gridBox);
    }
    let box = document.querySelectorAll('.grid-box')
    box.forEach(boxListen => boxListen.addEventListener('mouseover', () => {
        let colorChoice = document.querySelector('#color');
        let modeChoice = document.querySelector('#mode');
        if(!erase) {
            if(colorChoice.value == 'random'){
                let colorR = Math.floor(Math.random() * 256);
                let colorG = Math.floor(Math.random() * 256);
                let colorB = Math.floor(Math.random() * 256);
                boxListen.style.opacity = '1.0';
                boxListen.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
            } else {
                boxListen.style.backgroundColor = `${colorChoice.value}`;
                if(modeChoice.value == 'soft') {
                    if(boxListen.style.opacity < 1) {
                        let currentOpacity = boxListen.style.opacity;
                        currentOpacity = Number.parseFloat(currentOpacity);
                        currentOpacity += 0.2;
                        boxListen.style.opacity = currentOpacity;
                    }
                } else if(modeChoice.value == 'hard') {
                    boxListen.style.opacity = '1.0';
                }
            }
    } else if(erase) {
        boxListen.style.opacity = "0";
    }
    }));
}

let eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', eraser);
let erase = false;

function eraser() {
    erase = !erase;
    if(erase) {
        eraserButton.style.border = '1px solid black';
        eraserButton.style.color = 'green';
    } else {
        eraserButton.style.border = '1px solid transparent';
        eraserButton.style.color = 'red';
    }
}


let clearButton = document.querySelector('.reset');
clearButton.addEventListener('click', reset);

function reset() {
    let gridBox = document.querySelectorAll('.container div');
    gridBox.forEach(removeBox => removeBox.remove());
    makeGrid(newGridSize());
}

function newGridSize() {
    let newSize = 0;
    do {
        newSize = prompt("Enter the number tiles you want per side (Max 100)");
        newSize = Math.round(newSize);
    } while(newSize <= 0 || newSize > 100)
    return newSize;
}

makeGrid(16);