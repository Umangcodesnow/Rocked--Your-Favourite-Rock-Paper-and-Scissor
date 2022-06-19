const compChoiceDisplay = document.getElementById("computerchoice")
const userChoiceDisplay = document.getElementById("userchoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerchoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}) )


function generateComputerChoice() {
    const randomNumber =Math.floor( Math.random() * 3) + 1


if (randomNumber === 1) {
    computerchoice = "Scissors"
}
if (randomNumber === 2) {
    computerchoice = "Rock"
}
if(randomNumber === 3){
    computerchoice = "Paper"
}
compChoiceDisplay.innerHTML= computerchoice
}


function getResult() {
    if (computerchoice === userChoice) {
        result = "It's a draw Man!"
    }

    if (computerchoice === "Rock" && userChoice === "paper") {
        result = "Where's the party bro,You won !"
    }
    if (computerchoice  === "Rock" && userChoice === "ccissors") {
        result = "I'm sorry Man but you just lost !"
    }
    if (computerchoice === "Paper" && userChoice === "scissors" ) {
        result = "You won, where's the party?"
    }
    if (computerchoice === "Paper" && userChoice === "rock" ) {
        result = "You lost bro,unbelievable lets give it a try once again"
    }
    if (computerchoice === "Scissors" && userChoice === "rock" ) {
        result = "You won, where's the party?"
    }
    if (computerchoice === "Scissors" && userChoice === "paper" ) {
        result = "You lost bro,unbelievable lets give it a try once again"
    }
     resultDisplay.innerHTML = result
}



































