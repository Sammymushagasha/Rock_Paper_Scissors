let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    const indices = Math.floor(Math.random() * 3)
    return options[indices]
}

function getHumanChoice(){
    let humanChoice = prompt("Enter either rock, paper, or scissor:")
    return humanChoice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    console.log("Your choice: " + humanChoice + "\nComputer's choice: " + computerChoice)
    if((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") ||
        (humanChoice == "scissors" && computerChoice == "scissors")){
            console.log("You Tied")
    }

    else if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper")){
                console.log("You Win");
                humanScore += 1
            }
    else{
        console.log("You Lost")
        computerScore += 1
    }

    console.log("-----\nScoreboard\n-----\nYou: " + humanScore + " Comptuter: " + computerScore);

}

function playGame(){
    let count = 0
    while(count < 5){
        const getHumanSelection = getHumanChoice();
        const getComputerSelection = getComputerChoice();
        playRound(getHumanSelection, getComputerSelection);
        count++;
    }

    console.log("------------\nFinal Score\n------------\nYou: " + humanScore + " Computer: " + computerScore)
}

playGame();
