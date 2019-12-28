const maxRandomCoeff = 8;
const maxUserAttempts = 3;
let gainedPrize = 0;
let firstRoundPrize = 100;
let prizeReducer = 2;
const numberRandom = Math.round(Math.random() * maxRandomCoeff);

const startGame = confirm('Do you want to play a game?');
if (startGame === false) {
    alert('You did not become a billionaire, but can.');
} else if (startGame === true) {
    const numberRandom = Math.round(Math.random() * maxRandomCoeff);
    console.log(numberRandom);
    gainedPrize = 0;
    let guessed = false;
    let userAttempt = 1;
    let enterNumber;
    let prize = firstRoundPrize;
    while (userAttempt <= maxUserAttempts && !guessed) {
        enterNumber = parseInt(prompt(`
    Choose a roulette pocket number from 0 to 8
    Attempts left: ${maxUserAttempts - userAttempt + 1}
    Total prize: $${gainedPrize}
    Possible prize on current attempt: $${prize}
    `));
        if (enterNumber === numberRandom) {
            guessed = true;
        }
        userAttempt++;
        prize = firstRoundPrize / prizeReducer;
    }
    if (enterNumber !== numberRandom) {
        confirm(`
            Thank you for your participation. Your prize is: ${gainedPrize}
            Do you want to play again ?
            `)
        gainedPrize = 0;
    } else {
        gainedPrize = prize;
        const continueGame = confirm(`
        Congratulation, you won!   
        Your prize is: $${prize}. Do you want to continue? 
        `);
        if (continueGame === true) {
            confirm(`
            Thank you for your participation. Your prize is: ${gainedPrize}
            Do you want to play again ?
            `)
        }
    }
}
