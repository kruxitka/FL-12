import '../scss/main.scss';
import { handleResultValidation } from './handleResultValidation';

const statusDisplay = document.querySelector('.game-status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
 console.log(currentPlayer)
statusDisplay.innerHTML = currentPlayerTurn;

function handleCellPlayed(clickedCell, clickedCellIndex) {
    console.log(currentPlayer)
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
 currentPlayer = currentPlayer === "X" ? "O" : "X";
 statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('cell-index')
    );
    console.log(clickedCellIndex)
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

function handleNewGame() {

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);
document.querySelector('.new-game').addEventListener('click', handleNewGame);

export { gameActive, statusDisplay, gameState, handlePlayerChange, winningMessage, drawMessage };