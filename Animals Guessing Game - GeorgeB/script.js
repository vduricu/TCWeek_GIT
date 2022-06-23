const animals = ["Wolf", "Dog", "Cat", "Tiger", "Lion", "Panther", "Parrot", "Giraffe", "Dolphin", "Capybara"];
const answer = animals[Math.floor(Math.random() * 100000 % animals.length)];
let guesses = 0;

function initGame() {
    let hint = answer[0];
    document.getElementById("UserGuesses").innerHTML = `Your hint is: ${hint}`;
}

initGame();

function getGuess() {
    let inputGuess = document.getElementById("UserInput").value;
    document.getElementById("UserGuesses").innerHTML += `<br> ${document.getElementById("UserInput").value}`;

    guesses++;

    document.getElementById("myScore").innerHTML = guesses;

    if (inputGuess !== answer) {
        document.getElementById("myScore").innerHTML += `<br> ${inputGuess} is not the answer. Please try again!`;
    }
    else {
        document.getElementById("myScore").innerHTML += `<br> ${inputGuess} is the correct answer. Well Done!`;
    }
}

document.getElementById("SubmitData").addEventListener("click", getGuess);

function getHint() {
    let hintIndex = Math.floor(Math.random() * 100000 % animals.length);
    let newHint = answer[hintIndex];

    document.getElementById("UserGuesses").innerHTML += `<br> Your new hint is: ${newHint}`;
}

document.getElementById("AskHint").addEventListener("click", getHint);

function startNewGame() {
    document.location.reload();
}

document.getElementById("NewGame").addEventListener("click", startNewGame);