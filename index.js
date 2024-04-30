
function playGame() {

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let strings = ['Rock', 'Paper','Scissors'];
    let randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

let computerChoice = getComputerChoice();
console.log("Computer's Choice:", computerChoice);


function getHumanChoice() {
    return prompt("Enter your choice");
}
let humanChoice = getHumanChoice();
console.log("Human's Choice:", humanChoice);



function playRound(humanChoice, computerChoice) {

    
    let result;
    
    let humanSelection = humanChoice.toLowerCase();
    let computerSelection = computerChoice.toLowerCase();

    if (humanSelection === computerSelection) {
        result = "Its a tie";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") 
    ) {
        result = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        result = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++
    }

    console.log(result);
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

let humanSelection = humanChoice;
let computerSelection = computerChoice;

playRound(humanSelection,computerSelection);


};

playGame();
playGame();
playGame();
playGame();
playGame();