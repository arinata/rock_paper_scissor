const rock = document.querySelector('#ROCK');
const scissor = document.querySelector('#SCISSOR');
const paper = document.querySelector('#PAPER');
const replay = document.querySelector('#playAgain');

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber<4)
    {
        return ("ROCK");
    }
    else if (randomNumber<8)
    {
        return ("PAPER");
    }
    else{
        return ("SCISSOR");
    }
}

function singleGame(userSelection, computerSelection){
    if(userSelection.toUpperCase()==computerSelection.toUpperCase())
    {
        return("DRAW");
    }
    else if(userSelection.toUpperCase()=="ROCK"){
        if(computerSelection.toUpperCase()=="SCISSOR"){
            return("WIN");
        }
        else if(computerSelection.toUpperCase()=="PAPER"){
            return("LOSE");
        }
    }
    else if(userSelection.toUpperCase()=="SCISSOR"){
        if(computerSelection.toUpperCase()=="PAPER"){
            return("WIN");
        }
        else if(computerSelection.toUpperCase()=="ROCK"){
            return("LOSE");
        }
    }
    else if(userSelection.toUpperCase()=="PAPER"){
        if(computerSelection.toUpperCase()=="ROCK"){
            return("WIN");
        }
        else if(computerSelection.toUpperCase()=="SCISSOR"){
            return("LOSE");
        }
    }
    else{
        return("wrong")
    }
}

function updateScore(result){
    if(result == "WIN"){playerScore++;}
    else if(result == "LOSE"){computerScore++;}
    else{}
}

function updateImages(playerChoice,computerChoice){
    switch(playerChoice){
        case "ROCK":
            document.getElementById("playerImages").src = "./images/rock.png";
        break;
        case "PAPER":
            document.getElementById("playerImages").src = "./images/paper.png";
        break;
        case "SCISSOR":
            document.getElementById("playerImages").src = "./images/scissor.png";
        break;
    }
    switch(computerChoice){
        case "ROCK":
            document.getElementById("computerImages").src = "./images/rock.png";
        break;
        case "PAPER":
            document.getElementById("computerImages").src = "./images/paper.png";
        break;
        case "SCISSOR":
            document.getElementById("computerImages").src = "./images/scissor.png";
        break;
    }
}

function playGame(userInput){
    if((playerScore!=5)&&(computerScore!=5)){
        let a=computerPlay();
        updateImages(userInput,a);
        updateScore(singleGame(userInput,a));
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("announcement").textContent = userInput + " " + singleGame(userInput,a) + " vs " + a;
        document.getElementById("result").textContent = "";
    }
    if(playerScore==5){
        document.getElementById("result").textContent = "YOU WIN!!!";
        document.getElementById("playAgain").style.display = "inline";
    }
    else if(computerScore==5){
        document.getElementById("result").textContent = "YOU LOSE!!!";
        document.getElementById("playAgain").style.display = "inline";
    }
}

rock.addEventListener('click', function (e) {
    playGame("ROCK");
});

scissor.addEventListener('click', function (e) {
    playGame("SCISSOR");
});

paper.addEventListener('click', function (e) {
    playGame("PAPER");
});

replay.addEventListener('click', function(e){
    document.getElementById("playAgain").style.display = "none";
    playerScore=0;
    computerScore=0;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerImages").src = "./images/rock.png";
    document.getElementById("computerImages").src = "./images/rock.png";
    document.getElementById("announcement").textContent = "THE ONE WHO SCORES 5 POINTS WILL WIN";
    document.getElementById("result").textContent = "GOOD LUCK!!!";
})