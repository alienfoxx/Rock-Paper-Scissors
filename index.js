
const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const choice = options [Math.floor(Math.random() * options.length)];
    return choice;
}
function checkWinner(){
    if( computerSelection ==  playerSelection){
        return "tie";
    }else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "rock"){
        return "Player";
    }else{
        return "Computer";
    }
}
function playRound(playerSelection , computerSelection){
const result = checkWinner(playerSelection, computerSelection)
if ( result == "tie"){
    return "its a tie";
}else if ( result == "Player"){
    return `you win ${playerSelection} beats ${computerSelection}`;
}else{
    return `Computure win ${computerSelection} beats ${playerSelection}`;
}
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
function getPlayerChoice(){
    let validatedInput =false;
    while (validatedInput == false){
        const choice = prompt("rock , paper or sxissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput =true;
            return choiceInLower;
        }
    }
}
function game (){
   for(let i = 0; i < 5 ; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
   } 
}

game()


