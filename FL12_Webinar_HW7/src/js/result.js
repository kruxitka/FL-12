const score = document.getElementById('score');

function showRoundResult(round, playerChoice, computerChoice, roundResult) {
    score.innerHTML = `Round ${round}: ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} vs. ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}, ${roundResult}`
}

export { showRoundResult };
 export { score };