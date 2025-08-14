function openTictactoeModal() {
    var modal = document.getElementById("tictactoe-modal");
    modal.style.display = "block";
    var gameContainer = document.getElementById("tictactoe-game");
    gameContainer.innerHTML = ''; // Clear any existing content
    // Load the Tic-Tac-Toe game into the modal container
    var gameHtml = '<div id="board" class="board">...</div>'; // Replace with your game HTML
    gameContainer.innerHTML = gameHtml;
    // Initialize the game logic
    initGame();
    // Add event listener to the close button
    var closeButton = document.querySelector(".close");
    closeButton.onclick = function() {
        modal.style.display = "none";
        var gameContainer = document.getElementById("tictactoe-game");
        gameContainer.innerHTML = '';
    };
}

function initGame() {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        // ... rest of the game logic ...
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
    status.textContent = `It's ${currentPlayer}'s turn`;
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("tictactoe-modal")) {
    document.getElementById("tictactoe-modal").style.display = "none";
  }
}

// Add your Tic-Tac-Toe game logic here
document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        checkResult();
    };

    const checkResult = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = gameState[winCondition[0]];
            const b = gameState[winCondition[1]];
            const c = gameState[winCondition[2]];

            if (a === '' || b === '' || c === '') {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            status.textContent = `${currentPlayer} has won!`;
            gameActive = false;
            return;
        }

        let roundDraw = !gameState.includes('');
        if (roundDraw) {
            status.textContent = 'Game is a draw!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `It's ${currentPlayer}'s turn`;
    };

    const resetGame = () => {
        currentPlayer = 'X';
        gameActive = true;
        gameState = ['', '', '', '', '', '', '', '', ''];
        status.textContent = `It's ${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = '');
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
    status.textContent = `It's ${currentPlayer}'s turn`;
});