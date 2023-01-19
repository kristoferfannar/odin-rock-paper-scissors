const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let number = Math.floor( Math.random() * 3 );
    let answer;
    switch (number) {
        case 0:
            answer = ROCK;
            break;
        case 1:
            answer = PAPER;
            break;
        case 2: 
            answer = SCISSORS;
            break;
    }
    return answer;
}


function playOneRound(playerChoice, computerChoice) {
    if ( (playerChoice === ROCK && computerChoice === PAPER) || (playerChoice === PAPER && computerChoice === SCISSORS) || (playerChoice === SCISSORS && computerChoice === ROCK) ) {
        return -1;
    } else if ( (playerChoice === ROCK && computerChoice === SCISSORS) || (playerChoice === PAPER && computerChoice === ROCK) || (playerChoice === SCISSORS && computerChoice === PAPER) ) {
        return 1;
    } else {
        return 0;
    }
}

function displayRound(playerChoice, computerChoice, outcome) {
    const result = document.querySelector("#result");

    if (outcome === -1) {
        result.textContent = `computer wins! ${computerChoice} beats ${playerChoice}`;
    } else if (outcome === 1) {
        result.textContent = `player wins! ${playerChoice} beats ${computerChoice}`;
    } else {
        result.textContent = "DRAW!";
    }
}


function gameOneRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let outcome = playOneRound(playerChoice, computerChoice);
    
    if (wins < 5 && losses < 5) {
        displayRound(playerChoice, computerChoice, outcome);
        updateScore(outcome);
        displayScore();
    }

    if (wins >= 5 || losses >= 5) {
        displayWinner()
    }

    return outcome;
}

function displayScore() {
    const score = document.querySelector("#score");
    score.textContent = `${wins} wins - ${losses} losses - ${draws} draws`;
}

function updateScore(outcome) {
    if (outcome === 1) {
        wins++;
    } else if (outcome === -1) {
        losses++;
    } else {
        draws++;
    }
}

function displayWinner() {
    const winner = document.querySelector("#results");

    if (wins > losses) {
        winner.textContent = "Player wins the tournament!";
    } else if (losses > wins) {
        winner.textContent = "Computer wins the tournament!";
    } else {
        winner.textContent = "Tournament results in a draw!";
    }
}
            
        
        
let wins = 0;
let losses = 0;
let draws = 0; // I have to declare these here, not inside a function, because I can only declare them once.

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', () => {gameOneRound(button.id)} ) );
// buttons.forEach(button => button.addEventListener('click', playOneRound(button.id)));