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
        console.log("You Win, Rock beats Scissors");
        return 1;
    }
    
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("You Win, Paper beats Rock");
        return 1;
    }
    
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("You Win, Scissors beats Paper");
        return 1;
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        console.log("You Lose, Paper beats Rock");
        return 0;
    }

    if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        console.log("You Lose, Scissors beats Paper");
        return 0;
    }

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        console.log("You Lose, Rock beats Scissors");
        return 0;
    }

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
        console.log("Tie!");
        return 2;
    }
}


game();

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Pick: Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result === 1)
            playerScore += 1;
        else if(result === 0)
            computerScore += 1;
    }
    console.log("Final score is: Player = " + playerScore + " and Computer = " + computerScore);
}