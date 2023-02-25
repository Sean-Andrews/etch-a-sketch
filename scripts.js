let board = document.getElementById('game-area');
let sizeBtn = document.getElementById('game-size');
let clearBtn = document.getElementById('clear-btn');
let square = [];
let mouseMove = false;

sizeBtn.addEventListener('click', newSize);
clearBtn.addEventListener('click', eraseGrid);


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
    this.style.backgroundColor = 'black';
    mouseMove = true;
}

function mouseMoveListener() {
    if (mouseMove === true) {
        this.style.backgroundColor = 'black';
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