let board = document.getElementById('game-area');
let sizeBtn = document.getElementById('game-size');
let clearBtn = document.getElementById('clear-btn');
let shadeBtn = document.getElementById('shade-btn');
let square = [];
let mouseMove = false;
let shadeProp = false;


sizeBtn.addEventListener('click', newSize);
clearBtn.addEventListener('click', eraseGrid);
shadeBtn.addEventListener('click', addShade);

createGrid(16);

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

function deleteGrid() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}


function addEventListeners() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('mousedown', mouseClickListener);
        square[i].addEventListener('mousemove', mouseMoveListener);
        square[i].addEventListener('mouseup', mouseUpListener);
    }  
}  

function mouseClickListener() {
    if (shadeProp === false) {
        this.style.backgroundColor = 'black';
    } else if (shadeProp === true) {
        if (!this.style.backgroundColor) {
            this.style.backgroundColor = 'rgb(196, 196, 196)'
        } else if (this.style.backgroundColor) {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = shadeColor(currentColor, 10);
        }
    }
    mouseMove = true;
}

function shadeColor(color, percent) {
    let colorValues = color.slice(4, -1).split(', ');
    let r = +colorValues[0] - (+colorValues[0] / percent);
    let g = +colorValues[1] - (+colorValues[1] / percent);
    let b = +colorValues[2] - (+colorValues[2] / percent);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

function mouseMoveListener() {
    if (shadeProp === false && mouseMove === true) {
        this.style.backgroundColor = 'black';
    } else if (shadeProp === true && mouseMove === true) {
        if (!this.style.backgroundColor) {
            this.style.backgroundColor = 'rgb(196, 196, 196)'
        } else if (this.style.backgroundColor) {
            let currentColor = this.style.backgroundColor;
            this.style.backgroundColor = shadeColor(currentColor, 10);
        }
    }
}

function mouseUpListener() {
    mouseMove = false;
}

function eraseGrid() {
    let gridSquares = document.getElementsByClassName("box");
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = '#ddd';
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



// square.forEach(function (box) {
//     if (mouseMove === false) {
//         box.addEventListener('click', () => {
//             box.style.backgroundColor = 'black';
//             box.addEventListener('mousemove', () => {
//                 box.style.backgroundColor = 'black';
//             })
//         })
//     }
// })

// function changeColor(box) {
//     console.log(mouseMove);
//     if (mouseMove === true) {
//         box.addEventListener('mousemove', () => {
//             box.style.backgroundColor = 'black';
//         })
//     } else if (mouseMove === false) {
//         box.addEventListener('click', () => {
//             box.style.backgroundColor = 'black';
//             mouseMove = true;
//             console.log(mouseMove);
//         })
//     }
    // box.addEventListener('click', () => {
    //     box.style.backgroundColor = 'black';
    //     mouseMove = true;
    //     console.log(mouseMove);
    // })
    // box.addEventListener('mousemove', () => {
    //     if (mouseMove = false) {
    //         console.log(mouseMove);
    //     }
    // })
//}