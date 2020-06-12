usrChoice = ""

var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var usrOutput = document.getElementById("p1")
var cpuOutput = document.getElementById("p2")
var outcome = document.getElementById("p3")
var win = document.getElementById("pWin")
var lose = document.getElementById("pLose")
var average = document.getElementById("pAverage")


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
totalWins = 0
totalLoses = 0
cpuChoice = ""
totalAverage = 0
newFunction = () => {
    usrOutput.innerHTML = usrChoice;
    
    let cpuChoice = options[Math.floor(Math.random() * 3)]
    cpuOutput.innerHTML = cpuChoice

    if (cpuChoice === usrChoice) {
        outcome.innerHTML = "It's a tie, rematch!"
      } else if (cpuChoice == "scissors" && usrChoice == "rock" || cpuChoice == "rock" && usrChoice == "paper" || cpuChoice == "paper" && usrChoice == "scissors") {
        outcome.innerHTML = "You absolutely win!"
        totalWins ++
        win.innerHTML = totalWins
        totalAverage = totalWins / (totalLoses + totalWins)
        average.innerHTML = totalAverage
     } 
    else {
        outcome.innerHTML = "You lose"
         totalLoses ++
        lose.innerHTML = totalLoses
        totalAverage = totalWins / (totalLoses + totalWins)
        average.innerHTML = totalAverage
      }
      
}
  


 //it's working





cl = (data) => {
    console.log(data)
  }

