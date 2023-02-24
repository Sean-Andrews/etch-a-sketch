let board = document.getElementById("game-area");
let square = [];
let mouseMove = false;

createGrid(16);

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
}


for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('mousedown', mouseClickListener);
    square[i].addEventListener('mousemove', mouseMoveListener);
    square[i].addEventListener('mouseup', mouseUpListener);
}    

function mouseClickListener() {
    this.style.backgroundColor = 'black';
    mouseMove = true;
}

function mouseMoveListener() {
    if (mouseMove === true) {
        this.style.backgroundColor = 'black'
    }
}

function mouseUpListener() {
    mouseMove = false;
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