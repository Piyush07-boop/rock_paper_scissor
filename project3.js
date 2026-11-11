let userScore = 0;
let compScore = 0;

// Accessing all the choices
const choices = document.querySelectorAll(".choice");
//accessing msg
const msg = document.querySelector("#msg");
//accessing score board
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//for genertaing compChoice we will make new function
const GenCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    //rock, paper, scissor
    //for generating random number we will use math.floor which will remove decimals
    const RandIdx =Math.floor(Math.random() * 3);
    //final chocie
    return options[RandIdx];
}

//computer random choice nbbbbbbbb
const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);

    // Generate computer choice
    const compChoice = GenCompChoice();
    console.log("Computer Choice:", compChoice);


    if(userChoice === compChoice)
    {
        //draw
        DrawGame();
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
    }
    else
    {
        let UserWin = true;
        if(userChoice === "rock")
        {
            //scissors, paper
            UserWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock, scissors
            UserWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            //rock, paper
            UserWin = compChoice === "rock" ? false : true;
        }
        showWinner(UserWin, userChoice, compChoice);
    }
};

const showWinner = (UserWin, userChoice, compChoice) => {
    if(UserWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        userScorePara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const DrawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "pink";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Option was clicked:", userChoice);
        playGame(userChoice);
    });
});

