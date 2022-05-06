function computerPlay(){
    let selection = Math.floor(Math.random() * 3);
    if(selection === 1)
        return "rock";
    else if (selection === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        roundOutcome.textContent = "You Win, Rock beats Scissors";
        return 1;
    }
    
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        roundOutcome.textContent = "You Win, Paper beats Rock";
        return 1;
    }
    
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        roundOutcome.textContent = "You Win, Scissors beats Paper";
        return 1;
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        roundOutcome.textContent = "You Lose, Paper beats Rock";
        return 0;
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        roundOutcome.textContent = "You Lose, Scissors beats Paper";
        return 0;
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        roundOutcome.textContent = "You Lose, Rock beats Scissors";
        return 0;
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        roundOutcome.textContent = "Tie!";
        return 2;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            let playerSelection = button.id;
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);

            if (result === 1)
                playerScore += 1;
            else if(result === 0)
                computerScore += 1;
            //else (tie) nothing happens
                
            if (playerScore === 5){
                score.textContent = "Player Wins!";
                playerScore = 0; computerScore = 0;
            }
            else if (computerScore === 5){
                score.textContent = "Computer Wins!";
                playerScore = 0; computerScore = 0;
            }
            else
                score.textContent = "Current Score is: Player - " + playerScore + " Computer - " + computerScore;
        });
    });
}

const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');

const roundOutcome = document.createElement('p')
const score = document.createElement('p')
results.appendChild(roundOutcome);
results.appendChild(score);

container.appendChild(results);

game();