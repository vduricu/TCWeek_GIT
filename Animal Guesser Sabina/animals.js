const animals = ["Capybara", "Bear", "Panda", "Koala", "Dog" ];
const answer = animals[Math.floor(Math.random()*10000 % animals.length)];

function initGame() {
    let hint = answer[0];
    document.getElementById("UserGuesses").innerHTML =  `Your hint is ${hint}`;
}

initGame()
    
function GetGuess () {
   let UserInput= document.getElementById("UserInput").value;
   document.getElementById("UserGuesses").innerHTML += `<br> ${document.getElementById("UserInput").value}`;
   if (UserInput != answer){
        document.getElementById("MyScore").innerHTML="Try again";
    }
    else{
        document.getElementById("MyScore").innerHTML="Correct";
    }
}






document.getElementById("SubmitData").addEventListener("click", GetGuess);

function getHint() {
    let anotherHint=animals[Math.floor(Math.random()*10000 % animals.length)];
    let newHint= answer[anotherHint];

    document.getElementById(UserGuesses).innerHTML += `<br> Your new hint is ${newHint}`;



}

document.getElementById("AskHint").addEventListener("click", getHint);

function newGame () {
    document.location.reload();
}

document.getElementById("NewGame").addEventListener("click", newGame)


