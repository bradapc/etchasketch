let container = document.querySelector('.container');
function makeGrid(numTiles) {
    let totalBoxes = numTiles * numTiles; //# of boxes in grid
    let areaOfBoxes = 160000 / totalBoxes; //160000 from 400x400 container
    let boxDimension = Math.sqrt(areaOfBoxes);
    let boxFlexBasis = 1 / numTiles * 100;
    console.log(boxFlexBasis);
    for(i = 0; i < totalBoxes; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.height = boxDimension;
        gridBox.style.width = boxDimension;
        gridBox.style.backgroundColor = 'grey';
        gridBox.style.flexBasis = `${boxFlexBasis}%`;
        container.appendChild(gridBox);
    }
    let box = document.querySelectorAll('.grid-box')
    box.forEach(boxListen => boxListen.addEventListener('mouseover', () => {
        let colorChoice = document.querySelector('#color');
        if(colorChoice.value == 'random'){
            let colorR = Math.floor(Math.random() * 256);
            let colorG = Math.floor(Math.random() * 256);
            let colorB = Math.floor(Math.random() * 256);
            boxListen.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
        } else {
            boxListen.style.backgroundColor = `${colorChoice.value}`;
        }
    }));
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