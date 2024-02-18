const computerChoiceDisply = document.getElementById('computer-choice')
const userChoiceDisply = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisply.innerHTML = userChoice;
}))

