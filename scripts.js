let board = document.getElementById('game-area');
let sizeBtn = document.getElementById('game-size');
let clearBtn = document.getElementById('clear-btn');
let shadeBtn = document.getElementById('shade-btn');
let crazyBtn = document.getElementById('crazy-btn');
let square = [];
let mouseMove = false;
let shadeProp = false;
let crazyProp = false;


sizeBtn.addEventListener('click', newSize);
clearBtn.addEventListener('click', eraseGrid);
shadeBtn.addEventListener('click', addShade);
crazyBtn.addEventListener('click', addCrazy);

createGrid(16);

// Functions for basic grid setup, resizing, and deletion

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            let box = document.createElement('div');
            square.push(box);
            box.classList.add('box');
            row.appendChild(box);
        }
        board.appendChild(row);
    }
    addEventListeners(); 
}

function newSize() {
    deleteGrid();
    let pixelSize = prompt("Pick a number between 1 and 100.")
    if (+pixelSize > 100) {
        alert("That number was too high");
        newSize();
    } else if (+pixelSize < 1) {
        alert("That number was too low");
        newSize();
    }
    createGrid(+pixelSize);
}

function deleteGrid() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function eraseGrid() {
    let gridSquares = document.getElementsByClassName("box");
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = '#ddd';
    }
}

// Button functionality

function addEventListeners() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('mousedown', mouseClickListener);
        square[i].addEventListener('mouseenter', mouseEnterListener);
        square[i].addEventListener('mouseup', mouseUpListener);
    }  
}  

function mouseClickListener() {
    if (shadeProp === false && crazyProp === false) {
        this.style.backgroundColor = 'black';
    } else if (shadeProp === true && crazyProp === false) {
        if (!this.style.backgroundColor) {
            this.style.backgroundColor = 'rgb(196, 196, 196)'
        } else if (this.style.backgroundColor) {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = shadeColor(currentColor, 10);
        }
    } else if (crazyProp === true) {
        this.style.backgroundColor = crazyColor();
    }
    mouseMove = true;
}

function mouseEnterListener() {
    if (shadeProp === false && mouseMove === true && crazyProp === false) {
        this.style.backgroundColor = 'black';
    } else if (shadeProp === true && mouseMove === true && crazyProp === false) {
        if (!this.style.backgroundColor) {
            this.style.backgroundColor = 'rgb(196, 196, 196)'
        } else if (this.style.backgroundColor) {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = shadeColor(currentColor, 10);
        }
    } else if (crazyProp === true && mouseMove === true) {
        this.style.backgroundColor = crazyColor();
    }
}

function mouseUpListener() {
    mouseMove = false;
}

// Different mode functionality

function crazyColor() {
    let r = Math. floor((Math. random() * 255) + 1);
    let g = Math. floor((Math. random() * 255) + 1);
    let b = Math. floor((Math. random() * 255) + 1);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

function shadeColor(color, percent) {
    let colorValues = color.slice(4, -1).split(', ');
    let r = +colorValues[0] - (+colorValues[0] / percent);
    let g = +colorValues[1] - (+colorValues[1] / percent);
    let b = +colorValues[2] - (+colorValues[2] / percent);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}





// Boolean functions to change modes

function addCrazy() {
    if (crazyProp === false) {
        crazyProp = true;
        crazyBtn.classList.add('btn-on')
    } else if (crazyProp === true) {
        crazyProp = false;
        crazyBtn.classList.remove('btn-on');
    }
}

function addShade() {
    if (shadeProp === false) {
        shadeProp = true;
        shadeBtn.classList.add('btn-on')
    } else if (shadeProp === true) {
        shadeProp = false;
        shadeBtn.classList.remove('btn-on');
    }
}

