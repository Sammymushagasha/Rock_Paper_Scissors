let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#scoreBoard")
const scoreAfterRound = document.createElement("p");
scoreAfterRound.classList.add("scores");
scoreAfterRound.style.color = "grey";

const updatedScore = document.createElement("p");
updatedScore.classList.add("scores");
updatedScore.style.color = "grey";

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    const indices = Math.floor(Math.random() * 3)
    return options[indices]
}

function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()

        console.log("Your choice: " + humanChoice + "\nComputer's choice: " + computerChoice)
        if((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") ||
            (humanChoice == "scissors" && computerChoice == "scissors")){
                scoreAfterRound.textContent = "You Tied";
                container.appendChild(scoreAfterRound);
                console.log("You Tied")
        }

        else if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "scissors" && computerChoice == "paper")){
                    scoreAfterRound.textContent = "You Win";
                    container.appendChild(scoreAfterRound);
                    console.log("You Win");
                    humanScore += 1
                }
        else{
            scoreAfterRound.textContent = "You Lost";
            container.appendChild(scoreAfterRound);
            console.log("You Lost")
            computerScore += 1
        }

        updatedScore.textContent = "-----\nScoreboard\n-----\nYou: " + humanScore + " Comptuter: " + computerScore;
        container.appendChild(updatedScore);
        console.log("-----\nScoreboard\n-----\nYou: " + humanScore + " Comptuter: " + computerScore);

        if (humanScore === 5 || computerScore === 5) {
            btn.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }

}

const btn = document.querySelector("#rock");
btn.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
})

const btn2 = document.querySelector("#paper");
btn2.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
})

const btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
})


