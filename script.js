// theme toggle srt
let lightToggle = document.getElementById("lightToggle");
let toggleBall = document.getElementById("toggleBall");
let toggleCount = 1;
let body = document.querySelector("body");
let pag1Body = document.querySelector(".pag1-body");
let nextPagBtn = document.getElementById("nextPagBtn");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page3Main = document.getElementById("page3Main");
let roundInfo2 = document.getElementById("roundInfo2");
let roundInfo1 = document.getElementById("roundInfo1");
let winnerDisplayMessage = document.getElementById("winnerDisplayMessage");

lightToggle.addEventListener("click", function () {

    toggleCount++;

    if (toggleCount % 2 == 0) {
        toggleBall.style.transition = "all 0.5s"
        toggleBall.style.marginLeft = "25px";
        lightToggle.style.backgroundColor = "#2980B9";
        lightToggle.style.borderColor = "#2980B9";
        body.style.backgroundColor = "#222222";
        body.style.transition = "all 0.3s"
        body.style.color = "white";
        pag1Body.style.backgroundColor = "#333333";
        page2.style.backgroundColor = "#333333";
        page3.style.backgroundColor = "#333333";
        page3Main.style.backgroundColor = "#333333";
    }
    else {
        toggleBall.style.transition = "all 0.5s"
        toggleBall.style.marginLeft = "1px";
        lightToggle.style.backgroundColor = "#CCCCCC";
        lightToggle.style.borderColor = "#CCCCCC";
        body.style.backgroundColor = "#F5F5F5";
        body.style.transition = "all 0.3s"
        body.style.color = "black";
        pag1Body.style.backgroundColor = "#ffffff";
        page2.style.backgroundColor = "#ffffff";
        page3.style.backgroundColor = "#ffffff";
        page3Main.style.backgroundColor = "#ffffff";
    }
});

lightToggle.addEventListener("mouseenter", function () {
    let message = document.querySelector(".message");
    message.style.display = "block";
});

lightToggle.addEventListener("mouseleave", function () {
    let message = document.querySelector(".message");
    message.style.display = "none";
});
// theme toggle end

// change page - hide 1st and show 2nd

nextPagBtn.addEventListener("click", function () {
    pag1Body.style.display = "none";
    page2.style.display = "block";
})

// change active class in page 2nd
let bestOf3 = document.getElementById("bestOf3");
let bestOf5 = document.getElementById("bestOf5");
let detail = document.getElementById("detail");
let gameSet = 1;
let srtGame = document.getElementById("srtGame");

bestOf3.addEventListener("click", function () {
    bestOf3.classList.add("active");
    bestOf5.classList.remove("active");
    detail.innerText = "3";
    roundInfo2.innerText = '3';
    gameSet = 1;
});

bestOf5.addEventListener("click", function () {
    bestOf5.classList.add("active");
    bestOf3.classList.remove("active");
    detail.innerText = "5";
    roundInfo2.innerText = '5';
    gameSet = 2;
});


srtGame.addEventListener("click", function () {
    let gameSrt = document.getElementById("gameSrtSound");
    gameSrt.volume = 1;
    gameSrt.play()
    page2.style.display = "none";
    page3.style.display = "block";
    page3Main.style.display = "block";
});

// back to menu 
let backToMenu = document.getElementById("backToMenu");
backToMenu.addEventListener("click", function () {
    pag1Body.style.display = "block";
    page3.style.display = "none";
    page3Main.style.display = "none";
    roundInfo1.innerText = 0;
    yourChoiceIcon.innerHTML = `<span class="fs-5">?</span>`;
    computerChoice.innerHTML = `<span class="fs-5">?</span>`;
    scoreYour.innerText = "0";
    scoreComputer.innerText = "0";
    restartBtn.style.display = "none";
    count = 0;
    roundInfo1.innerText = 0;
    winnerDisplayMessage.style.display = "none";
    winnerDisplayMessage.innerText = "";
    for (let i = 0; i < options.length; i++) {
        options[i].style.cursor = "pointer";
        options[i].style.pointerEvents = "auto";
    }
});

// users options to select between - rock, paper, scissors;
let paperIcon = `<span class="fs-3">✋</span>`;
let rockIcon = `<span class="fs-3">✊</span>`;
let scissorsIcon = `<span class="fs-3">✌️</span>`;
let yourChoiceIcon = document.getElementById("yourChoiceIcon");
let computerChoice = document.getElementById("computerChoice");
let restartBtn = document.getElementById("restartBtn");
let winnerDisplay = document.getElementById("winnerDisplay");
let optionsArray = [paperIcon, rockIcon, scissorsIcon];
let lastRandomOption = -1;
let count = 0;
let winnerRock = `<span class="fs-3">✊</span>`;
let winnerPaper = `<span class="fs-3">✋</span>`;
let winnerScissors = `<span class="fs-3">✌️</span>`;
let scoreYour = document.getElementById("scoreYour");
let options = document.querySelectorAll(".options");
let scoreComputer = document.getElementById("scoreComputer");

// Best Of 3 or 5 
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {

        let maxRounds = gameSet == 1 ? 3 : 5;

        let randomOption;
        do {
            randomOption = Math.floor(Math.random() * optionsArray.length);
        } while (randomOption === lastRandomOption);

        lastRandomOption = randomOption; // Update last choice
        computerChoice.innerHTML = optionsArray[randomOption];


        let userChoice = {
            "rock": "✊",
            "paper": "✋",
            "scissors": "✌️"
        }

        for (let key in userChoice) {
            if (options[i].classList.contains(key)) {
                yourChoiceIcon.innerHTML = `<span class="fs-3">${userChoice[key]}</span>`;
                break;
            }
        }

        roundInfo1.innerText = count + 1;
        count++;

        if (yourChoiceIcon.innerHTML == winnerRock && computerChoice.innerHTML == winnerRock) {
            winnerDisplay.innerText = "It's a tie! Both chose Rock.";
            if (count > 0) count--;
            roundInfo1.innerText = count;
        }
        else if (yourChoiceIcon.innerHTML == winnerRock && computerChoice.innerHTML == winnerPaper) {
            winnerDisplay.innerText = "You lose! Paper covers Rock.";
            scoreComputer.innerText = parseInt(scoreComputer.innerText) + 1;
        }
        else if (yourChoiceIcon.innerHTML == winnerRock && computerChoice.innerHTML == winnerScissors) {
            winnerDisplay.innerText = "You win! Rock crushes Scissors.";
            scoreYour.innerText = parseInt(scoreYour.innerText) + 1;
        }
        else if (yourChoiceIcon.innerHTML == winnerPaper && computerChoice.innerHTML == winnerPaper) {
            winnerDisplay.innerText = "It's a tie! Both chose Paper.";
            if (count > 0) count--;
            roundInfo1.innerText = count;
        }
        else if (yourChoiceIcon.innerHTML == winnerPaper && computerChoice.innerHTML == winnerScissors) {
            winnerDisplay.innerText = "You lose! Scissors cut Paper.";
            scoreComputer.innerText = parseInt(scoreComputer.innerText) + 1;
        }
        else if (yourChoiceIcon.innerHTML == winnerPaper && computerChoice.innerHTML == winnerRock) {
            winnerDisplay.innerText = "You win! Paper covers Rock.";
            scoreYour.innerText = parseInt(scoreYour.innerText) + 1;
        }
        else if (yourChoiceIcon.innerHTML == winnerScissors && computerChoice.innerHTML == winnerScissors) {
            winnerDisplay.innerText = "It's a tie! Both chose Scissors.";
            if (count > 0) count--;
            roundInfo1.innerText = count;
        }
        else if (yourChoiceIcon.innerHTML == winnerScissors && computerChoice.innerHTML == winnerRock) {
            winnerDisplay.innerText = "You lose! Rock crushes Scissors.";
            scoreComputer.innerText = parseInt(scoreComputer.innerText) + 1;
        }
        else if (yourChoiceIcon.innerHTML == winnerScissors && computerChoice.innerHTML == winnerPaper) {
            winnerDisplay.innerText = "You win! Scissors cut Paper.";
            scoreYour.innerText = parseInt(scoreYour.innerText) + 1;
        }

        if (count == maxRounds) {
            restartBtn.style.display = "block";
            count = 0;
            for (let i = 0; i < options.length; i++) {
                options[i].style.cursor = "default";
                options[i].style.pointerEvents = "none";
            }

            if (scoreYour.innerText > scoreComputer.innerText) {
                winnerDisplayMessage.style.display = "block";
                winnerDisplayMessage.innerHTML = '<span class="fs-4 mt-4 text-success">You win this round 🎉</span>';
                let sound = document.getElementById("gameWin");
                sound.volume = 1;
                sound.play();
            }
            else {
                winnerDisplayMessage.style.display = "block";
                winnerDisplayMessage.innerHTML = '<span class="fs-4 mt-4 text-danger">You loose this round 😢</span>';
                let lose = document.getElementById("gameLose");
                lose.volume = 1;
                lose.play();
            };
        };
    });
};

// restart thee game
restartBtn.addEventListener("click", function () {
    roundInfo1.innerText = 0;
    yourChoiceIcon.innerHTML = `<span class="fs-5">?</span>`;
    computerChoice.innerHTML = `<span class="fs-5">?</span>`;
    scoreYour.innerText = "0";
    scoreComputer.innerText = "0";
    restartBtn.style.display = "none";
    count = 0;
    roundInfo1.innerText = 0;
    winnerDisplayMessage.style.display = "none";
    winnerDisplayMessage.innerText = "";
    for (let i = 0; i < options.length; i++) {
        options[i].style.cursor = "pointer";
        options[i].style.pointerEvents = "auto";
    }
});

// possibilities
/*
Rock -
Rock vs Rock = Tie
Rock vs Paper = Paper
Rock vs Scissors = Rock

Paper
Paper vs Paper - Tie
Paper vs Rock - Paper
Paper vs Scissors - Scissors

Scissor
Scissor vs Scissor - Tie
Scissor vs Rock - Rock
Scissor vs Paper - Paper

*/

// winning patterns - match
// score update
// Change display - who is winning
// rounds ✅
// best of 5 