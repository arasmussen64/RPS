usrChoice = ""

var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var usrOutput = document.getElementById("p1")
var cpuOutput = document.getElementById("p2")
var outcome = document.getElementById("p3")

options = ["rock", "paper", "scissors"]

rock.addEventListener("click", function(){
    usrChoice = "rock"
    newFunction();
});
  
  paper.addEventListener("click", function(){
    usrChoice = "paper"
    newFunction();
});

  scissors.addEventListener("click", function(){
    usrChoice = "scissors"
    newFunction()
    
});

cpuChoice = ""
newFunction = () => {
    usrOutput.innerHTML = usrChoice;
    
    let cpuChoice = options[Math.floor(Math.random() * 3)]
    cpuOutput.innerHTML = cpuChoice

    if (cpuChoice === usrChoice) {
        outcome.innerHTML = "Tie"
      } else if (cpuChoice == "scissors" && usrChoice == "rock") {
        outcome.innerHTML = "You win"
    
    } else if (cpuChoice == "scissors" && usrChoice == "paper") {
        outcome.innerHTML = "You lose"
 
    } else if (cpuChoice == "rock" && usrChoice == "paper") {
        outcome.innerHTML = "You win"

    } else if (cpuChoice == "rock" && usrChoice == "scissors") {
        outcome.innerHTML = "You lose"

    } else if (cpuChoice == "paper" && usrChoice == "scissors") {
        outcome.innerHTML = "You win"

    } else if (cpuChoice == "paper" && usrChoice == "rock") {
        outcome.innerHTML = "You lose"

    } 

    else {
        outcome.innerHTML = "Who knows?"
      }
      
}
  


// let cpuChoice = options[Math.floor(Math.random() * 3)]

// cpuOutput.innerHTML = cpuChoice











cl = (data) => {
    console.log(data)
  }

// function cpuChoice(){
// cpuChoice = Math.floor(Math.random() * 3)
// options = ["rock", "paper", "scissors"]
//  return computerChoice = options[cpuChoice]

// }


//

//document.getElementById("p1").innerHTML = "New text!";
//make usr_choice a function and have event listeners inside that fctn