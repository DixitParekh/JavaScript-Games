let userScore = 0
let compScore = 0
let ties = 0

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')
const userPara = document.querySelector('#user-choice')
const compPara = document.querySelector('#computer-choice')
const tiePara = document.querySelector('#ties')



const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random()*options.length)
    return options[randomIndex];
}

const drow = () =>{
    console.log('game was drow')
    ties++;
    tiePara.innerText = ties;
    msg.innerText = "Draw"
    msg.style.backgroundColor = "Orange"

}

const showWinner = (userWin ,userChoice, comchoice) => {
    if(userWin){
        console.log('user Won')
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${comchoice}.`
        msg.style.backgroundColor = "green"
   }else{
        console.log('computer won')
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You lose ${comchoice} beats your ${userChoice}.`
        msg.style.backgroundColor = "red"
   }
}
const playGame = (userChoice) => {
    console.log("Userchoice is", userChoice)
    const comchoice = genComputerChoice();
    console.log("ComputerChoice is", comchoice)

    if(userChoice === comchoice){
        drow()
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comchoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = comchoice === "scissor" ? false : true;
        } else {
            userWin = comchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comchoice)
    }

}

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute('id')
        // console.log("Userchoice is", userChoice)
        playGame(userChoice);
    })
})