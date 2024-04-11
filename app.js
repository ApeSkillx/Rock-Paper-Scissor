let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice= () =>{
    const options=["rock","paper","scissor"];
    //randomly select array index 
    //math.floor-remove decimal
    //math.random generates b/w 0and1 so to generate for 0,1,2 idx we do *3
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if (userChoice===compChoice){
    drawGame();

    }else{
        let userWin=true;
       
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        //user clicked rock, comp has 2 opt paper or scissor.
        //if comp chooses paper , user looses i.e. false
        //if comp chooses scissor, user wins i.e. true.
        else if (userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        //user has scissor
        showWinner(userWin);
    }
}
;

const drawGame=()=>{
    console.log("Draw");
    
    msg.innerText="Draw Game!";
    msg.style.backgroundColor="blue";

};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose");
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});