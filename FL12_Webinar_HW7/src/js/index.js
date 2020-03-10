import '../scss/style.scss';

// alert(require('./play'));

// const root = document.createElement('div');
// root.innerHTML = `
// `
// document.body.appendChild(root);

const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const scoreBoard = {
    player: 0,
    computer: 0
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

function play(event) {
    // show results on button click ?
    const playerChoice = event.target.id;
    const choiceStack = ['paper', 'rock', 'scissors'];
    const playerChoiceIndex = choiceStack.indexOf(playerChoice);
    // const computerChoice = getComputerChoice();
    
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choiceStack[randomNum];

    round++;
 if (round === 3) {
     showWinner ();
     restartGame();
 }

    /* log the each choices on the console */
    console.log(`Round: ${round} : Your choice is ${playerChoice}, 
    the computer's choice is ${computerChoice}.`);

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
            console.log(resultMap[playerResult]);  

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

        
        console.log(`you: ${playerScore}`)
        console.log(`comp: ${computerScore}`)
        
        // showWinner();

 // console.log(winnerMap[playerResult])
        
        // const winner = winnerMap[playerResult]++;
        // console.log(winner)

    //  const winner = getWinner (playerChoice, computerChoice)
}

function showWinner(playerScore, computerScore) {
    // result.style.display = 'block';
            if (playerScore > computerScore) {
                result.innerHTML = `<p>You win!</p>`
            } else if (playerScore < computerScore) { 
                result.innerHTML = `<p>Computer win!</p>` 
            } else {
                result.innerHTML = `<p>It's a Draw!</p>` 
            }
            
        }

// function getWinner (playerChoice, computerChoice) {

// }
// function getComputerChoice() {
//     const 
// }

choices.forEach(choice => choice.addEventListener('click', play))

restart.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    // result.style.display = 'none';
}