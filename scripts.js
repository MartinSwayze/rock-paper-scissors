const choice = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let computerMove;
let playerMove;

function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

function getPlayerChoice(){
    let playerMove = prompt("Choose your move! 'rock, paper, scissors': ")
    if(playerMove != "rock" && playerMove != "paper" && playerMove != "scissors"){
        console.log("Wrong input! Try Again!")
        getPlayerChoice();
    }

    return playerMove.toLowerCase();
}

/*function playRound(computerMove, playerMove){
    computerMove = choice[getComputerChoice()];
    playerMove = getPlayerChoice();

    console.log("Computer move is: ", computerMove);

    if (computerMove === playerMove){
        console.log("Draw");
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "rock" && playerMove === "scissors"){
        console.log("Computer Wins! Rock beats Scissors");
        computerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "paper" && playerMove === "rock"){
        console.log("Computer Wins! Paper beats Rock");
        computerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "scissors" && playerMove === "paper"){
        console.log("Computer Wins! Scissors beats Paper");
        computerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "scissors" && playerMove === "rock"){
        console.log("Player Wins! Rock beats Scissors");
        playerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "rock" && playerMove === "paper"){
        console.log("Player Wins! Paper beats Rock");
        playerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
    else if (computerMove === "paper" && playerMove === "scissors"){
        console.log("Player Wins! Scissors beats Paper");
        playerScore++;
        console.log("Computer Score: ", computerScore);
        console.log("Player Score: ", playerScore);
    }
}*/


function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    function playRound(computerMove, playerMove){
        computerMove = choice[getComputerChoice()];
        playerMove = getPlayerChoice();

        console.log("Computer move is: ", computerMove);

        if (computerMove === playerMove){
            console.log("Draw");
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "rock" && playerMove === "scissors"){
            console.log("Computer Wins! Rock beats Scissors");
            computerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "paper" && playerMove === "rock"){
            console.log("Computer Wins! Paper beats Rock");
            computerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "scissors" && playerMove === "paper"){
            console.log("Computer Wins! Scissors beats Paper");
            computerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "scissors" && playerMove === "rock"){
            console.log("Player Wins! Rock beats Scissors");
            playerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "rock" && playerMove === "paper"){
            console.log("Player Wins! Paper beats Rock");
            playerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }
        else if (computerMove === "paper" && playerMove === "scissors"){
            console.log("Player Wins! Scissors beats Paper");
            playerScore++;
            console.log("Computer Score: ", computerScore);
            console.log("Player Score: ", playerScore);
        }

    }

    for(let i = 1; i <= 5; i++){
        console.log("ROUND ", i);
        playRound(computerMove, playerMove);
    }

    if(computerScore > playerScore){console.log("COMPUTER won this game")}
    else if (computerScore < playerScore){console.log("PLAYER won this game")}
    else{console.log("Game result is DRAW")}
}

playGame();
