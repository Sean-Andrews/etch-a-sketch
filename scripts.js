let board = document.getElementById("game-area");


function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        board.appendChild(row);
    }
}

createGrid(16);