import '../scss/style.scss';
import { showRoundResult } from './result';
import { score } from './result'
 
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
let playerScore = 0;
let computerScore = 0;
let round = 0;

function play(event) {

    const playerChoice = event.target.id;
    const choiceStack = ['paper', 'rock', 'scissors'];
    const playerChoiceIndex = choiceStack.indexOf(playerChoice);
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choiceStack[randomNum];

    if (round === 0) {
        result.style.display = 'none';
    }

    round++;

    const results = [
        ['t', 'c', 'u'],
        ['u', 't', 'c'],
        ['c', 'u', 't'],
    ];

    let playerResult = results[randomNum][playerChoiceIndex];

    const resultMap = {
        't': "Tie",
        'u': "You've WON!",
        'c': "You've LOST!"
    };

    let roundResult = resultMap[playerResult];

    const winnerMap = {
        't': 0,
        'u': 1,
        'c': 0
    }

    const loserMap = {
        't': 0,
        'u': 0,
        'c': 1
    }

    playerScore += winnerMap[playerResult]
    computerScore += loserMap[playerResult]


    showRoundResult(round, playerChoice, computerChoice, roundResult)

    if (round === 3) {
        showWinner(playerScore, computerScore);
        round = 0;
    }
}

function showWinner(playerScore, computerScore) {
    result.style.display = 'block';
    if (playerScore > computerScore) {
        result.innerHTML = `<p>You win!</p>`
    } else if (playerScore < computerScore) {
        result.innerHTML = `<p>Computer win!</p>`
    } else if (playerScore === computerScore) {
        result.innerHTML = `<p>It's a Draw!</p>`
    }
}

choices.forEach(choice => choice.addEventListener('click', play))

restart.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    result.innerHTML = '';
    score.innerHTML = '';
}