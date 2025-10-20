let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const computerScorePara=document.querySelector('#comp-score');

const computerChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = () => {
 
    msg.innerText = "It's a Draw! 🤝";
    msg.style.backgroundColor = '#95a5a6'; 
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 🎉 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = '#2ecc71'; 
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose! 😢 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = '#e74c3c'; 
    }
}

const playGame=(userChoice)=>{
    const compChoice=computerChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false:true;
        } else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;
        } else if(userChoice==='scissors'){
            userWin=compChoice==='rock'?false:true;
        }
        else{
            userWin=compChoice==='rock'? false:true;
        }
         showWinner(userWin,userChoice,compChoice);
    }
   
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});