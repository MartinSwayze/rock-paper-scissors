const choice = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");

const scoreboardDiv = document.createElement('div');
const body = document.body;

const infoScoreboard = document.createElement('p');
const playerScoreboard = document.createElement('h3');
const computerScoreboard = document.createElement('h3');

const winMessage = document.createElement("h2");

let computerMove;
let playerMove;

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerMove = button.id;
      playRound(computerMove, playerMove);
    });
  });

function getComputerChoice(){
    return(Math.floor(Math.random() * 3));
}

function playRound(computerMove, playerMove){
    computerMove = choice[getComputerChoice()];

    function updateScoreboard(playerScore, computerScore, info){
        infoScoreboard.textContent = info;
        computerScoreboard.textContent = `Computer score: ${computerScore}`;
        playerScoreboard.textContent = `Player score: ${playerScore}`;
    }

    if (playerMove == "reset"){
        playerScore = 0;
        computerScore = 0;
        updateScoreboard(playerScore, computerScore, `Game Restarted!`);
    }
    else if (computerMove === playerMove){
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}`);
    }
    else if (computerMove === "rock" && playerMove === "scissors"){
        computerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Rock beats Scissors`);
    }
    else if (computerMove === "paper" && playerMove === "rock"){
        computerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Paper beats Rock`);
    }
    else if (computerMove === "scissors" && playerMove === "paper"){
        computerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Scissors beats Paper`);
    }
    else if (computerMove === "scissors" && playerMove === "rock"){
        playerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Rock beats Scissors`);
    }
    else if (computerMove === "rock" && playerMove === "paper"){
        playerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Paper beats Rock`);
    }
    else if (computerMove === "paper" && playerMove === "scissors"){
        playerScore++;
        updateScoreboard(playerScore, computerScore, `computer: ${computerMove} VS player: ${playerMove}. Scissors beats Paper`);
    }

    checkWin(playerScore, computerScore);
}

function checkWin(playerScore, computerScore){
    if(playerScore === 5){
        winMessage.textContent = "Player WIN!";
        scoreboardDiv.appendChild(winMessage);
    }
    else if (computerScore === 5){
        winMessage.textContent = "Computer WIN!";
        scoreboardDiv.appendChild(winMessage);
    }
}

infoScoreboard.id = "infoScoreboard";
infoScoreboard.style.color = "blue";
infoScoreboard.style.fontStyle = "italic";

playerScoreboard.textContent = "Player score: " + playerScore;
playerScoreboard.id = "playerScoreboard";

computerScoreboard.textContent = "Computer score: " + computerScore;
computerScoreboard.id = "computerScoreboard";

scoreboardDiv.id = "scoreboardDiv";
scoreboardDiv.style.marginTop = "15px";
scoreboardDiv.style.padding = "5px";
scoreboardDiv.style.border = "3px solid black"

scoreboardDiv.appendChild(infoScoreboard);
scoreboardDiv.appendChild(playerScoreboard);
scoreboardDiv.appendChild(computerScoreboard);
body.appendChild(scoreboardDiv);


/*function getPlayerChoice(){
    let playerMove = prompt("Choose your move! 'rock, paper, scissors': ")
    playerMove = playerMove.toLowerCase();
    if(playerMove != "rock" && playerMove != "paper" && playerMove != "scissors"){
        console.log("Wrong input! Try Again!")
        getPlayerChoice();
    }
    return playerMove;
}*/


/*function playGame(){
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
}*/
