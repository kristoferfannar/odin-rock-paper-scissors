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
    console.log(`computer chose ${answer}...`);
    return answer;
}


function playOneRound(playerChoice, computerChoice) {
    if ( (playerChoice === ROCK && computerChoice === PAPER) || (playerChoice === PAPER && computerChoice === SCISSORS) || (playerChoice === SCISSORS && computerChoice === ROCK) ) {
        return -1;
    } else if ( (playerChoice === ROCK && computerChoice === SCISSORS) || (playerChoice === PAPER && computerChoice === ROCK) || (playerChoice === SCISSORS && computerChoice === PAPER) ) {
        return 1;
    } else {
        return "draw!";
    }
}


function gameOneRound() {
    let playerChoice = prompt("Your choice:").toLowerCase();
    let computerChoice = getComputerChoice();

    if (playerChoice != ROCK && playerChoice != PAPER && playerChoice != SCISSORS) {
        alert("input should be either: 'rock', 'paper' or 'scissors'!");
        return;
    }

    let outcome = playOneRound(playerChoice, computerChoice);

    if (outcome === -1) {
        console.log(`computer wins! ${computerChoice} beats ${playerChoice}`);
    } else if (outcome === 1) {
        console.log(`player wins! ${playerChoice} beats ${computerChoice}`);
    } else {
        console.log("DRAW!");
    }
    
    return outcome;
}

function play() {
    let wins = 0;
    let losses = 0;
    let totalGames = 5;

    for (let i = 0; i < totalGames; i++) {
        console.log(`GAME ${i + 1}!`)

        let outcome = gameOneRound();
        if (outcome === 1) {
            wins++;
        } else if (outcome === -1) {
            losses++;
        }

        console.log(`Player has one ${wins} out of ${totalGames} games`);
    }
    
    if (wins > losses) {
        console.log("Player wins the tournament!");
    } else if (losses > wins) {
        console.log("Computer wins the tournament!");
    } else {
        console.log("Tournament results in a draw!");
    }

    console.log("thanks for playing!");
}