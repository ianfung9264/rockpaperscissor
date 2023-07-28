function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}

let pWIN = 0;
let cWIN = 0;


function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (
     (playerSelection==="rock" && computerSelection === "scissor") ||
     (playerSelection==="paper" && computerSelection === "rock") ||
     (playerSelection==="scissor" && computerSelection === "paper")
     ) {
         pWIN++;
        return `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}! Player wins!`;
     }

    if (
        (playerSelection==="paper" && computerSelection === "scissor") ||
        (playerSelection==="scissor" && computerSelection === "rock")  ||
        (playerSelection==="rock" && computerSelection === "paper")
    ){
        cWIN++;
        return `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}! Computer wins!`;
    }

    if (
        playerSelection === computerSelection
    ){
        return `both players select ${capitalizeFirstLetter(playerSelection)}! It is a tie`;
    }
}

function playgame(){
    for(let i = 0; i<5; i++){
        const playerchoice = prompt('Enter your choice');
        const computerchoice= getComputerChoice();
        const result = play(playerchoice, computerchoice);
        console.log(result);
}
    console.log(`Final Result: Player: ${pWIN}, Computer: ${cWIN}`)

}

function capitalizeFirstLetter(str){
    return str = str.charAt(0).toUpperCase() + str.slice(1)
 }
 
//  function game(prompt())
//  {
//     play(prompt(),getComputerChoice())

//  }

