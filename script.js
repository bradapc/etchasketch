let container = document.querySelector('.container');
for(i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridBox.style.height = '25px';
    gridBox.style.width = '25px';
    gridBox.style.backgroundColor = 'grey';
    gridBox.style.flex = "0 0 6.25%";
    container.appendChild(gridBox);
}

let box = document.querySelectorAll('.grid-box')
box.forEach(boxListen => boxListen.addEventListener('mouseover', () => {
    boxListen.style.backgroundColor = "red";
}));