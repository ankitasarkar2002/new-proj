let user_score=0;
let comp_score=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");


const showWinner=(userWin)=>{
if (userWin){
    user_score++;
    userScorePara.innerText=user_score;
    console.log("you win ");
    msg.innerText="You Win";
    msg.style.backgroundColor="green";
}
else{comp_score++;
    compScorePara.innerText=comp_score;
        console.log("you lose");
        msg.innerText="You Loose";
        msg.style.backgroundColor="red";
    }
};


const drawGame=()=>{

    console.log("Draw Game");
    msg.innerTextr="its a Draw";
    msg.style.backgroundColor="aquamarine";
};



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};



const playGame=(userChoice)=>{
    console.log("user choice=" ,userChoice );

    const compChoice=genCompChoice();
    console.log("comp choice=" ,compChoice);

if(userChoice===compChoice){
        drawGame();
 } else{
    let userWin = true;
    if(userChoice==='rock'){
        // sec,paper
        userWin=compChoice==='paper'?false:true;
    }else if(userChoice==='paper') {
        //rock.sec
        userWin=compChoice==='scissors'?false:true;
    }else{
        userWin=compChoice==='rock'?false:true;
    }

    showWinner(userWin);

    }
};




// USER CHOICE
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice,"choice was clicked");
        playGame(userChoice);
    });
});


