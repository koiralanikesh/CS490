function computer_choice() {
    const choices = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum == "0") return "r";
    if (randomNum == "1") return "p";
    else return "s";
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "s") return "Scissors";
    else return "Paper";
}


function win(userChoice, computerChoice) {
    document.querySelector(".results>p").innerHTML = " You chose: " + convertToWord(userChoice) + ". Computer chose: " + convertToWord(computerChoice) + ". You Win! Let's try again.";

}

function lose(userChoice, computerChoice) {
    document.querySelector(".results>p").innerHTML = " You chose: " + convertToWord(userChoice) + ". Computer chose: " + convertToWord(computerChoice) + ". You lose! Try Again.";
}

function draw(userChoice, computerChoice) {
    document.querySelector(".results>p").innerHTML = " You chose: " + convertToWord(userChoice) + ". Computer chose: " + convertToWord(computerChoice) + ". It is a draw! Play Again.";
}

function rule(userChoice) {
    const computerChoice = computer_choice();
    if (userChoice + computerChoice == "rs") {
        win(userChoice, computerChoice);
    } else if (userChoice + computerChoice == "pr") {
        win(userChoice, computerChoice);
    } else if (userChoice + computerChoice == "sp") {
        win(userChoice, computerChoice);
    } else if (userChoice + computerChoice == "rp") {
        lose(userChoice, computerChoice);
    } else if (userChoice + computerChoice == "ps") {
        lose(userChoice, computerChoice);
    } else if (userChoice + computerChoice == "sr") {
        lose(userChoice, computerChoice);
    } else {
        draw(userChoice, computerChoice);
    }
}

function main() {
    document.getElementById("rock").addEventListener("click", function () {
        rule("r");
    })
    document.getElementById("paper").addEventListener("click", function () {
        rule("p");
    })
    document.getElementById("scissors").addEventListener("click", function () {
        rule("s");
    })
}

main();