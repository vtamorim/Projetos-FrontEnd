const x_ = document.getElementById("x_")
const o_ = document.getElementById("o_")
let your_turn = true; // true para o jogador humano (X), false para o bot (O)
const cells = document.querySelectorAll(".cell");
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!your_turn || cell.hasChildNodes()) return;

        // Jogada do jogador humano (X)
        const mark = document.createElement("div");
        mark.innerHTML = ' <img src="x.png" alt="X icon" id="x_">';
        mark.classList.add("x-mark");
        cell.appendChild(mark);

        if (checkWin("x-mark")) {
            setTimeout(() => {
              alert("Você venceu!");
                resetGame();
                return;
            }, 500);
        
        }

        your_turn = false;

        // Chama a jogada do bot após um pequeno atraso
        setTimeout(() => {
            botMove();
            if (checkWin("o-mark")) {
                setTimeout(() => {
                      alert("O bot venceu!");
                resetGame();                    
                }, 500);
            
            }
        }, 500);
    });
});

function botMove() {
    const emptyCells = Array.from(cells).filter(cell => !cell.hasChildNodes());
    if (emptyCells.length === 0) return;

    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const mark = document.createElement("div");
    mark.innerHTML = '<img src="o.png" alt="O icon" id="o_">';
    mark.classList.add("o-mark");
    randomCell.appendChild(mark);

    your_turn = true;
}

function checkWin(markClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].firstChild && cells[index].firstChild.classList.contains(markClass);
        });
    });
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = ""; // Remove todas as marcas
    });
    your_turn = true; // Reinicia o turno para o jogador humano
}




