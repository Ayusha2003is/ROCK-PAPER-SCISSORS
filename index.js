document.getElementById('Rock').addEventListener('click', function () {
    checkResults('Rock');
});
document.getElementById('Paper').addEventListener('click', function () {
    checkResults('Paper');
});
document.getElementById('Scissors').addEventListener('click', function () {
    checkResults('Scissors');
});

function checkResults(buttonClicked) {
    let ComputerClicked = Math.floor(Math.random() * 3) + 1; // Generate a new value each time

    if (buttonClicked === 'Rock' && ComputerClicked === 1) {
        document.getElementById("result").innerHTML = "Computer picked Rock and so did you, so it's a draw.";
    } else if (buttonClicked === 'Rock' && ComputerClicked === 2) {
        document.getElementById("result").innerHTML = "Computer picked Paper and you picked Rock, so Computer wins :)";
    } else if (buttonClicked === 'Rock' && ComputerClicked === 3) {
        document.getElementById("result").innerHTML = "Computer picked Scissors and you picked Rock, so you win :)";
    } else if (buttonClicked === 'Paper' && ComputerClicked === 1) {
        document.getElementById("result").innerHTML = "Computer picked Rock and you picked Paper, so you win :)";
    } else if (buttonClicked === 'Paper' && ComputerClicked === 2) {
        document.getElementById("result").innerHTML = "Computer picked Paper and you picked Paper, so it's a draw.";
    } else if (buttonClicked === 'Paper' && ComputerClicked === 3) {
        document.getElementById("result").innerHTML = "Computer picked Scissors and you picked Paper, so Computer wins :)";
    } else if (buttonClicked === 'Scissors' && ComputerClicked === 1) {
        document.getElementById("result").innerHTML = "Computer picked Rock and you picked Scissors, so Computer wins :)";
    } else if (buttonClicked === 'Scissors' && ComputerClicked === 2) {
        document.getElementById("result").innerHTML = "Computer picked Paper and you picked Scissors, so you win :)";
    } else if (buttonClicked === 'Scissors' && ComputerClicked === 3) {
        document.getElementById("result").innerHTML = "Computer picked Scissors and you picked Scissors, so it's a draw.";
    }
}
