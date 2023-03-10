const powerLevel = document.getElementById("powerLevel");
const trainButton = document.getElementById("trainButton");
const VegetacenterImage = document.getElementById("VegetacenterImage");
const resetButton = document.getElementById("resetButton");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button18 = document.getElementById("button18");



var multiplier = 1;

let currentPowerLevel = 0;

let button11 = false;
let button12 = false;
let button13 = false;
let button14 = false;
let button15 = false;
let button16 = false;
let button17 = false;
let FriezaFight = false;
let FatBuuFight = false;
let BeerusFight = false;
let JirenFight = false;

let backgroundImage = 1;

if (localStorage.getItem("powerLevel")) {
  currentPowerLevel = parseInt(localStorage.getItem("powerLevel"));
  powerLevel.innerHTML = currentPowerLevel;
}

trainButton.addEventListener("click", function() {
  currentPowerLevel += multiplier;
  powerLevel.innerHTML = currentPowerLevel;
  localStorage.setItem("powerLevel", currentPowerLevel);

});


function challengeFrieza() {
    if (currentPowerLevel >= 2500) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/b5/5b/0a/b55b0a86983d46d4dde3a5e1dd4f2a62.png)";
        document.body.style.backgroundSize = "cover";
        document.body.innerHTML =
            "<div id='score' style='font-size: 36px; color: white; text-align: center; position: absolute; top: 0; width: 100%;'>Score: <span id='player-score' style='font-size: 36px; color: white;'>0</span> - <span id='computer-score' style='font-size: 36px; color: white;'>0</span></div>" +
            "<div id='gameOver' style='display: none;'>" +
            "<p style='color: white; font-size: 24px;' id='resultText'></p>" +
            "</div>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<p style='color: white; font-size: 24px;'>Let's play Rock, Paper, Scissors!</p>" +
            "<div style='display: flex; justify-content: space-between; width: 50%;'>" +
            "<img src='https://media.discordapp.net/attachments/1067525557824266400/1073412678778884106/image_3.png' style='width: 500px; height: 500px;'>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<button id='rock' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Rock</button>" +
            "<button id='paper' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Paper</button>" +
            "<button id='scissors' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Scissors</button>" +
            "<p id='result' style='color: white; font-size: 20px;'></p>" +
            "</div>" +
            "<img src='https://media.discordapp.net/attachments/1067525557824266400/1073410224842612858/dezdby1-2bffa88d-9bcb-4b23-b28c-b76c29ed9d8a.png?width=572&height=572' style='width: 500px; height: 500px;'>" +
            "<button id='goBackBtn' style='display: block; margin: 20px auto; width: 250px; height: 50px; margin-top: 20px; background-color: #0f0f23; color: white; border-radius: 10px; box-shadow: 0px 0px 10px black; cursor: pointer;   font-size: 20px; align-items: center;'>Leave Fight.</button>" +
            "</div>" +
            "</div>";

        var goBackBtn = document.getElementById("goBackBtn");
        goBackBtn.removeEventListener("click", goBack);
        goBackBtn.addEventListener("click", function () {
            location.reload();
        });

        function goBack() {
            document.body.innerHTML = "";
            document.body.innerHTML = oldHTML;
        }

        var playerScoreSpan = document.getElementById("player-score");
        var computerScoreSpan = document.getElementById("computer-score");
        var resultP = document.getElementById("result");
        var rockBtn = document.getElementById("rock");
        var paperBtn = document.getElementById("paper");
        var scissorsBtn = document.getElementById("scissors");
        var playerScore = 0;
        var computerScore = 0;

        function getComputerChoice() {
            var choices = ['rock', 'paper', 'scissors'];
            var randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function win(playerChoice, computerChoice) {
            playerScore++;
            playerScoreSpan.innerHTML = playerScore;
            resultP.innerHTML = "You win! " + playerChoice + " beats " + computerChoice + ".";
            checkForWin();
        }

        function lose(playerChoice, computerChoice) {
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            resultP.innerHTML = "You lose! " + computerChoice + " beats " + playerChoice + ".";
            checkForWin();
        }

        function checkForWin() {
            if (playerScore === 3) {
                resultP.innerHTML = "You beat Frieza! Congrats!";
                disableButtons();
                localStorage.setItem("FriezaFight", true);
            } else if (computerScore === 3) {
                resultP.innerHTML = "Frieza has beaten you. Better luck next time.";
                disableButtons();
            }
        }


        function disableButtons() {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        rockBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                resultP.innerHTML = "It's a draw!";
            } else if (computerChoice === "paper") {
                lose("rock", "paper");
            } else {
                win("rock", "scissors");
            }
        });

        paperBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                win("paper", "rock");
            } else if (computerChoice === "paper") {
                resultP.innerHTML = "It's a draw!";
            } else {
                lose("paper", "scissors");
            }
        });

        scissorsBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                lose("scissors", "rock");
            } else if (computerChoice === "paper") {
                win("scissors", "paper");
            } else {
                resultP.innerHTML = "It's a draw!";
            }
        });

    } else {
        alert("To challenge Frieza get your powerlevel to 2,500!");
    }
}

function challengeFatBuu() {
    if (currentPowerLevel >= 250000) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = "url(https://images8.alphacoders.com/677/677260.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.innerHTML =
            "<div id='score' style='font-size: 36px; color: white; text-align: center; position: absolute; top: 0; width: 100%;'>Score: <span id='player-score' style='font-size: 36px; color: white;'>0</span> - <span id='computer-score' style='font-size: 36px; color: white;'>0</span></div>" +
            "<div id='gameOver' style='display: none;'>" +
            "<p style='color: white; font-size: 24px;' id='resultText'></p>" +
            "</div>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<p style='color: white; font-size: 24px;'>Let's play Rock, Paper, Scissors!</p>" +
            "<div style='display: flex; justify-content: space-between; width: 50%;'>" +
            "<img src='https://images-ext-1.discordapp.net/external/nK-2XnWJj9p9oFC_DtWfMCVE_RcLKFyU7fcWYSNDreI/%3Fitok%3Dg60Rdp95/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2018-11/N8Txh6E.png' style='width: 500px; height: 500px;'>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<button id='rock' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Rock</button>" +
            "<button id='paper' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Paper</button>" +
            "<button id='scissors' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Scissors</button>" +
            "<p id='result' style='color: white; font-size: 20px;'></p>" +
            "</div>" +
            "<img src='https://images-ext-1.discordapp.net/external/MidZpdlmS1yZmPJWlhzYtxVUQTcdps6xeEBVcRxoFzU/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGNxdWo3bi0wYjgyZDUwZi01NDMwLTRmMDMtYmUxZC1kOTgxOTU5ZDc1NmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XGi6qs8QN2Zv9gmDFxAA6UZR_GeEOU-V6jYoOAremUc/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcquj7n-0b82d50f-5430-4f03-be1d-d981959d756c.png?width=609&height=609' style='width: 500px; height: 500px;'>" +
            "<button id='goBackBtn' style='display: block; margin: 20px auto; width: 250px; height: 50px; margin-top: 20px; background-color: #0f0f23; color: white; border-radius: 10px; box-shadow: 0px 0px 10px black; cursor: pointer;   font-size: 20px; align-items: center;'>Leave Fight.</button>" +
            "</div>" +
            "</div>";

        var goBackBtn = document.getElementById("goBackBtn");
        goBackBtn.removeEventListener("click", goBack);
        goBackBtn.addEventListener("click", function () {
            location.reload();
        });

        function goBack() {
            document.body.innerHTML = "";
            document.body.innerHTML = oldHTML;
        }

        var playerScoreSpan = document.getElementById("player-score");
        var computerScoreSpan = document.getElementById("computer-score");
        var resultP = document.getElementById("result");
        var rockBtn = document.getElementById("rock");
        var paperBtn = document.getElementById("paper");
        var scissorsBtn = document.getElementById("scissors");
        var playerScore = 0;
        var computerScore = 0;

        function getComputerChoice() {
            var choices = ['rock', 'paper', 'scissors'];
            var randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function win(playerChoice, computerChoice) {
            playerScore++;
            playerScoreSpan.innerHTML = playerScore;
            resultP.innerHTML = "You win! " + playerChoice + " beats " + computerChoice + ".";
            checkForWin();
        }

        function lose(playerChoice, computerChoice) {
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            resultP.innerHTML = "You lose! " + computerChoice + " beats " + playerChoice + ".";
            checkForWin();
        }

        function checkForWin() {
            if (playerScore === 3) {
                resultP.innerHTML = "You beat Fat Buu! Congrats!";
                disableButtons();
                localStorage.setItem("FatBuuFight", true);
            } else if (computerScore === 3) {
                resultP.innerHTML = "Fat Buu has beaten you. Better luck next time.";
                disableButtons();
            }
        }


        function disableButtons() {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        rockBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                resultP.innerHTML = "It's a draw!";
            } else if (computerChoice === "paper") {
                lose("rock", "paper");
            } else {
                win("rock", "scissors");
            }
        });

        paperBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                win("paper", "rock");
            } else if (computerChoice === "paper") {
                resultP.innerHTML = "It's a draw!";
            } else {
                lose("paper", "scissors");
            }
        });

        scissorsBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                lose("scissors", "rock");
            } else if (computerChoice === "paper") {
                win("scissors", "paper");
            } else {
                resultP.innerHTML = "It's a draw!";
            }
        });

    } else {
        alert("To challenge Fat Buu get your powerlevel to 250,000!");
    }
}


function challengeBeerus() {
    if (currentPowerLevel >= 25000000) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = "url(https://i0.wp.com/i.imgur.com/CCUXgRa.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.innerHTML =
            "<div id='score'>Score: <span id='player-score'>0</span> - <span id='computer-score'>0</span></div>" +
            "<div id='gameOver' style='display: none;'>" +
            "<p style='color: white; font-size: 24px;' id='resultText'></p>" +
            "</div>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<p style='color: white; font-size: 24px;'>Let's play Rock, Paper, Scissors!</p>" +
            "<div style='display: flex; justify-content: space-between; width: 50%;'>" +
            "<img src='https://media.discordapp.net/attachments/1067525557824266400/1072662765627519128/image_1.png' style='width: 500px; height: 500px;'>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<button id='rock' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Rock</button>" +
            "<button id='paper' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Paper</button>" +
            "<button id='scissors' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Scissors</button>" +
            "<p id='result' style='color: white; font-size: 20px;'></p>" +
            "</div>" +
            "<img src='https://media.discordapp.net/attachments/1067525557824266400/1071837156596789248/UgteUdL.png' style='width: 500px; height: 500px;'>" +
            "<button id='goBackBtn' style='display: block; margin: 20px auto; width: 250px; height: 50px; margin-top: 20px; background-color: #0f0f23; color: white; border-radius: 10px; box-shadow: 0px 0px 10px black; cursor: pointer;   font-size: 20px; align-items: center;'>Leave Fight.</button>" +
            "</div>" +
            "</div>";

        var goBackBtn = document.getElementById("goBackBtn");
        goBackBtn.removeEventListener("click", goBack);
        goBackBtn.addEventListener("click", function () {
            location.reload();
        });

        function goBack() {
            document.body.innerHTML = "";
            document.body.innerHTML = oldHTML;
        }

        var playerScoreSpan = document.getElementById("player-score");
        var computerScoreSpan = document.getElementById("computer-score");
        var resultP = document.getElementById("result");
        var rockBtn = document.getElementById("rock");
        var paperBtn = document.getElementById("paper");
        var scissorsBtn = document.getElementById("scissors");
        var playerScore = 0;
        var computerScore = 0;

        function getComputerChoice() {
            var choices = ['rock', 'paper', 'scissors'];
            var randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function win(playerChoice, computerChoice) {
            playerScore++;
            playerScoreSpan.innerHTML = playerScore;
            resultP.innerHTML = "You win! " + playerChoice + " beats " + computerChoice + ".";
            checkForWin();
        }

        function lose(playerChoice, computerChoice) {
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            resultP.innerHTML = "You lose! " + computerChoice + " beats " + playerChoice + ".";
            checkForWin();
        }

        function checkForWin() {
            if (playerScore === 3) {
                resultP.innerHTML = "You beat Beerus! Congrats!";
                disableButtons();
                localStorage.setItem("BeerusFight", true);
            } else if (computerScore === 3) {
                resultP.innerHTML = "Beerus has beaten you. Better luck next time.";
                disableButtons();
            }
        }


        function disableButtons() {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        rockBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                resultP.innerHTML = "It's a draw!";
            } else if (computerChoice === "paper") {
                lose("rock", "paper");
            } else {
                win("rock", "scissors");
            }
        });

        paperBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                win("paper", "rock");
            } else if (computerChoice === "paper") {
                resultP.innerHTML = "It's a draw!";
            } else {
                lose("paper", "scissors");
            }
        });

        scissorsBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                lose("scissors", "rock");
            } else if (computerChoice === "paper") {
                win("scissors", "paper");
            } else {
                resultP.innerHTML = "It's a draw!";
            }
        });

    } else {
        alert("To challenge Lord Beerus get your powerlevel to 25,000,000!");
    }
}

function challengeJiren() {
    if (currentPowerLevel >= 25000000000) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = "url(https://images-ext-1.discordapp.net/external/Ho1N8qVdg8LD28N8nd7ki9p-DVFTsfjVMEhYyyn6mzc/https/videogamemods.com/xenoverse/wp-content/uploads/sites/3/cmdm/250208/1536250899_vlcsnap-2018-09-05-16h40m30s183-1600x900.png?width=1083&height=609)";
        document.body.style.backgroundSize = "cover";
        document.body.innerHTML =
            "<div id='score'>Score: <span id='player-score'>0</span> - <span id='computer-score'>0</span></div>" +
            "<div id='gameOver' style='display: none;'>" +
            "<p style='color: white; font-size: 24px;' id='resultText'></p>" +
            "</div>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<p style='color: white; font-size: 24px;'>Let's play Rock, Paper, Scissors!</p>" +
            "<div style='display: flex; justify-content: space-between; width: 50%;'>" +
            "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c208d33-9bf9-4217-8941-f9ceac3c8824/df6qzhr-8778c440-31f0-4d0b-a8ba-fbc2f22bbec8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjMjA4ZDMzLTliZjktNDIxNy04OTQxLWY5Y2VhYzNjODgyNFwvZGY2cXpoci04Nzc4YzQ0MC0zMWYwLTRkMGItYThiYS1mYmMyZjIyYmJlYzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C_pJOiJVjePrz07EcsXmijxthyrtPPmiLAEYVA7sJEw' style='width: 500px; height: 500px;'>" +
            "<div style='display: flex; flex-direction: column; align-items: center;'>" +
            "<button id='rock' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Rock</button>" +
            "<button id='paper' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Paper</button>" +
            "<button id='scissors' style='background-color: white; font-size: 20px; padding: 10px 20px;'>Scissors</button>" +
            "<p id='result' style='color: white; font-size: 20px;'></p>" +
            "</div>" +
            "<img src='https://media.discordapp.net/attachments/1067525557824266400/1072681010275287080/image_2.png' style='width: 500px; height: 500px;'>" +
            "<button id='goBackBtn' style='display: block; margin: 20px auto; width: 250px; height: 50px; margin-top: 20px; background-color: #0f0f23; color: white; border-radius: 10px; box-shadow: 0px 0px 10px black; cursor: pointer;   font-size: 20px; text-align: center;'>Leave Fight.</button>" +
            "</div>" +
            "</div>";


        var goBackBtn = document.getElementById("goBackBtn");
        goBackBtn.removeEventListener("click", goBack);
        goBackBtn.addEventListener("click", function () {
            location.reload();
        });

        function goBack() {
            document.body.innerHTML = "";
            document.body.innerHTML = oldHTML;
        }

        var playerScoreSpan = document.getElementById("player-score");
        var computerScoreSpan = document.getElementById("computer-score");
        var resultP = document.getElementById("result");
        var rockBtn = document.getElementById("rock");
        var paperBtn = document.getElementById("paper");
        var scissorsBtn = document.getElementById("scissors");
        var playerScore = 0;
        var computerScore = 0;

        function getComputerChoice() {
            var choices = ['rock', 'paper', 'scissors'];
            var randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function win(playerChoice, computerChoice) {
            playerScore++;
            playerScoreSpan.innerHTML = playerScore;
            resultP.innerHTML = "You win! " + playerChoice + " beats " + computerChoice + ".";
            checkForWin();
        }

        function lose(playerChoice, computerChoice) {
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            resultP.innerHTML = "You lose! " + computerChoice + " beats " + playerChoice + ".";
            checkForWin();
        }

        function checkForWin() {
            if (playerScore === 3) {
                resultP.innerHTML = "You beat Jiren! Congrats!";
                disableButtons();
                localStorage.setItem("JirenFight", true);
            } else if (computerScore === 3) {
                resultP.innerHTML = "Jiren has beaten you. Better luck next time.";
                disableButtons();
            }
        }


        function disableButtons() {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }

        rockBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                resultP.innerHTML = "It's a draw!";
            } else if (computerChoice === "paper") {
                lose("rock", "paper");
            } else {
                win("rock", "scissors");
            }
        });

        paperBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                win("paper", "rock");
            } else if (computerChoice === "paper") {
                resultP.innerHTML = "It's a draw!";
            } else {
                lose("paper", "scissors");
            }
        });

        scissorsBtn.addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                lose("scissors", "rock");
            } else if (computerChoice === "paper") {
                win("scissors", "paper");
            } else {
                resultP.innerHTML = "It's a draw!";
            }
        });
    } else {
        alert("To challenge Jiren get your powerlevel to 25,000,000,000!");
    }
}


button1.addEventListener("click", function () {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= 10000 && kiBlastLevel >= 0 && kamehamehaLevel >= 0 && spiritBombLevel >= 0) {
        VegetacenterImage.style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/sAtdhOg-SWYQdXqtIS25Jgwf4Sr2ZmmnZc9HBNIFa3M/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRjMnBkNy01ZTkzY2VlNC05ZWJmLTRiODItODE5MS1lZjI2YjYwYjBkZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.44WjYNWHH7ukgRXO5s1JtIzjZAUDb2ezVjUAMeK6VNI/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddc2pd7-5e93cee4-9ebf-4b82-8191-ef26b60b0df1.png?width=586&height=586')";
        multiplier = 5;
    } else {

        var reason = "";
        if (currentPowerLevel < 10000) {
            reason = "Your current power level is not high enough. ";
        }
        if (kiBlastLevel < 1) {
            reason += "You need to upgrade your ki blast. ";
        }
        if (kamehamehaLevel < 1) {
            reason += "You need to upgrade your kamehameha. ";
        }
        if (spiritBombLevel < 1) {
            reason += "You need to upgrade your spirit bomb. ";
        }
        alert(reason);
    }
});


  button2.addEventListener("click", function() {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= 500 && kiBlastLevel >= 1 && kamehamehaLevel >= 0 && spiritBombLevel >= 0) {
      centerImage.style.backgroundImage = "url('https://images-ext-1.discordapp.net/external/iQ0SgKTmW7bOSBNZsm5zg5DKkopbykcqvpDNmc0tMMo/%3Fitok%3DTWkPQqpY/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2021-05/lOju6wl.png?width=470&height=470')";
      multiplier = 50;
    } else {

        var reason = "";
        if (currentPowerLevel < 500) {
            reason = "Your current power level is not high enough. ";
        }
        if (kiBlastLevel < 2) {
            reason += "You need to upgrade your ki blast. ";
        }
        if (kamehamehaLevel < 1) {
            reason += "You need to upgrade your kamehameha. ";
        }
        if (spiritBombLevel < 1) {
            reason += "You need to upgrade your spirit bomb. ";
        }
        alert(reason);
    }
  });  

  button3.addEventListener("click", function() {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    var FriezaFight = JSON.parse(localStorage.getItem("FriezaFight")) || false;
    if (currentPowerLevel >= 5000 && kiBlastLevel >= 2 && kamehamehaLevel >= 1 && spiritBombLevel >= 0) {
        centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071190774068297768/RLHhO3g.png?width=470&height=470')";
        multiplier = 500;
    } else {

          var reason = "";
        if (currentPowerLevel < 5000) {
              reason = "Your current power level is not high enough. ";
          }
          if (kiBlastLevel < 3) {
              reason += "You need to upgrade your ki blast. ";
          }
          if (kamehamehaLevel < 2) {
              reason += "You need to upgrade your kamehameha. ";
          }
          if (spiritBombLevel < 1) {
              reason += "You need to upgrade your spirit bomb. ";
          }
          if (!FriezaFight) {
            reason += "You need to defeat Frieza! ";
            }
          alert(reason);
      }
  });  
    
    button4.addEventListener("click", function() {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= 50000 && kiBlastLevel >= 3 && kamehamehaLevel >= 2 && spiritBombLevel >= 1) {
         centerImage.style.backgroundImage = "url('https://gamepress.gg/dblegends/sites/dblegends/files/2019-10/3YDgjhf.png')";
         multiplier = 5000;
    } else {

            var reason = "";
        if (currentPowerLevel < 50000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 3) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 2) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 2) {
                reason += "You need to upgrade your spirit bomb. ";
            }
        alert(reason);
        }
    });
    
    button5.addEventListener("click", function() {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    var FatBuuFight = JSON.parse(localStorage.getItem("FatBuuFight")) || false;

    if (currentPowerLevel >= 500000 && kiBlastLevel >= 4 && kamehamehaLevel >= 3 && spiritBombLevel >= 2) {
         centerImage.style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/Ipib-8vRJbyphGVMi2BD0Bh3qa_a3nQU8qjRY78GByY/%3Fitok%3DXn7yY7Hj/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2021-04/AIUVUDX.png?width=470&height=470')";
         multiplier = 10000;
    } else {

            var reason = "";
        if (currentPowerLevel < 500000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 3) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 3) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 3) {
                reason += "You need to upgrade your spirit bomb. ";
        }
        if (!FatBuuFight) {
            reason += "You need to defeat Fat Buu! ";
        }
        alert(reason);
        }
    });

    button6.addEventListener("click", function() {
      var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
      var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
      var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;

      if (currentPowerLevel >= 5000000 && kiBlastLevel >= 5 && kamehamehaLevel >= 4 && spiritBombLevel >= 3) {
          centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469246376312882/spssjggokuredfighter.png')";
          multiplier = 50000000000;
      } else {

            var reason = "";
          if (currentPowerLevel < 5000000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 4) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 3) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 3) {
                reason += "You need to upgrade your spirit bomb. ";
            }
          alert(reason);
        }
    });

    button7.addEventListener("click", function () {
        var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
        var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
        var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
        var BeerusFight = JSON.parse(localStorage.getItem("BeerusFight")) || false;
        if (currentPowerLevel >= 50000000 && kiBlastLevel >= 5 && kamehamehaLevel >= 5 && spiritBombLevel >= 4 && BeerusFight) {
            centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469344044883988/Q4AVP3W.png')";
            multiplier = 1000000;
        } else {
            var reason = "";
            if (currentPowerLevel < 50000000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 5) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 4) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 3) {
                reason += "You need to upgrade your spirit bomb. ";
            }
            if (!BeerusFight) {
                reason += "You need to defeat Beerus! ";
            }
            alert(reason);
        }
    });
    



      
    button8.addEventListener("click", function() {
      var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
      var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
      var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
      if (currentPowerLevel >= 500000000 && kiBlastLevel >= 5 && kamehamehaLevel >= 5 && spiritBombLevel >= 5) {
          centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469740641497139/FN8-dsqX0AIdlG0.png?width=440&height=586')";
          multiplier = 10000000;
      } else {

            var reason = "";
          if (currentPowerLevel < 500000000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 5) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 5) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 3) {
                reason += "You need to upgrade your spirit bomb. ";
            }
          alert(reason);
        }
    });

button9.addEventListener("click", function () {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= 5000000000 && kiBlastLevel >= 5 && kamehamehaLevel >= 5 && spiritBombLevel >= 5) {
        centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469968903917679/5aHUyRX.png?width=586&height=586')";
        multiplier = 100000000;
    } else {

        var reason = "";
        if (currentPowerLevel < 5000000000) {
            reason = "Your current power level is not high enough. ";
        }
        if (kiBlastLevel < 5) {
            reason += "You need to upgrade your ki blast. ";
        }
        if (kamehamehaLevel < 5) {
            reason += "You need to upgrade your kamehameha. ";
        }
        if (spiritBombLevel < 4) {
            reason += "You need to upgrade your spirit bomb. ";
        }
        alert(reason);
    }
});

    button10.addEventListener("click", function () {
        var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
        var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
        var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
        var reason = "";
        var JirenFight = JSON.parse(localStorage.getItem("JirenFight")) || false;

        if (currentPowerLevel >= 50000000000 && kiBlastLevel >= 5 && kamehamehaLevel >= 5 && spiritBombLevel >= 5 && JirenFight == true) {
            centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071470047991693322/l1wQqq2.png?width=586&height=586')";
            multiplier = 1000000000;
        } else {

            var reason = "";
            if (currentPowerLevel < 50000000000) {
                reason = "Your current power level is not high enough. ";
            }
            if (kiBlastLevel < 5) {
                reason += "You need to upgrade your ki blast. ";
            }
            if (kamehamehaLevel < 5) {
                reason += "You need to upgrade your kamehameha. ";
            }
            if (spiritBombLevel < 5) {
                reason += "You need to upgrade your spirit bomb. ";
            }
            if (!JirenFight) {
                reason += "You need to defeat Jiren! ";
            }
            alert(reason);
        }
    });


  
  document.getElementById("button11").addEventListener("click", function() {
      if (currentPowerLevel >= 100) {
      button11 = true;
      button12 = false;
      button13 = false;
      button14 = false;
      button15 = false;
      button16 = false;
    }
    else {
      alert("Your power level is not high enough train at Kame Island!");
      }
  });
  
  document.getElementById("button12").addEventListener("click", function() {
    if (currentPowerLevel >= 10000) {
      button12 = true;
      button11 = false;
      button13 = false;
      button14 = false;
      button15 = false;
      button16 = false;
    }   
     else {
      alert("Your power level is not high enough train at Korrin's Tower!");
      }
  });
  
  document.getElementById("button13").addEventListener("click", function() {
    if (currentPowerLevel >= 100000) {
      button13 = true;
      button11 = false;
      button12 = false;
      button14 = false;
      button15 = false;
      button16 = false;
    }
    else {
      alert("Your power level is not high enough train at The Lookout!");
      }
  });
  
  document.getElementById("button14").addEventListener("click", function() {
    if (currentPowerLevel >= 1000000) {
      button14 = true;
      button11 = false;
      button12 = false;
      button13 = false;
      button15 = false;
      button16 = false;
    }
    else {
      alert("Your power level is not high enough train at The Hyperbolic Time Chamber!");
      }
  });
  
  document.getElementById("button15").addEventListener("click", function() {
    if (currentPowerLevel >= 10000000) {
      button15 = true;
      button11 = false;
      button12 = false;
      button13 = false;
      button14 = false;
      button16 = false;
    }
    else {
      alert("Your power level is not high enough train at King Kai's Planet!");
      }
  });
  
  document.getElementById("button16").addEventListener("click", function() {
    if (currentPowerLevel >= 100000000) {
      button16 = true;
      button11 = false;
      button12 = false;
      button13 = false;
      button14 = false;
      button15 = false;
    }
    else {
      alert("Your power level is not high enough train at Beerus' Planet!");
      }
  });

  document.getElementById("button17").addEventListener("click", function() {
    if (currentPowerLevel >= 1000000000) {
      button16 = false;
      button11 = false;
      button12 = false;
      button13 = false;
      button14 = false;
      button15 = false;
      button17 = true;
    }
    else {
      alert("Your power level is not high enough train at the Tournament of Power!");
      }
  });
  
  setInterval(() => {
    if (button11) {
      currentPowerLevel += 5;
    }
    if (button12) {
      currentPowerLevel += 100;
    }
    if (button13) {
      currentPowerLevel += 1000;
    }
    if (button14) {
      currentPowerLevel += 10000;
    }
    if (button15) {
      currentPowerLevel += 100000;
    }
    if (button16) {
      currentPowerLevel += 1000000; 
    }
    if (button17) {
      currentPowerLevel += 10000000;
    }
    document.getElementById("powerLevel").innerHTML = currentPowerLevel;
  }, 1000);

  document.getElementById("button11").addEventListener("click", function() {
      if (currentPowerLevel >= 100) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071585507022217277/1135882.png?width=880&height=587')";
  });
  document.getElementById("button12").addEventListener("click", function() {
    if (currentPowerLevel >= 10000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071585642116567100/3iit6tfl2vq61.png?width=1043&height=586')";
  });
  document.getElementById("button13").addEventListener("click", function() {
    if (currentPowerLevel >= 100000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071585709682597948/512.png')";
  });
  document.getElementById("button14").addEventListener("click", function() {
    if (currentPowerLevel >= 1000000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071585856005079040/9w75jzayzmo41.png?width=1043&height=586')";
  });
  document.getElementById("button15").addEventListener("click", function() {
    if (currentPowerLevel >= 10000000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071586316124426350/cxr1jbqa5ej51.png?width=1043&height=586')";
  });
  document.getElementById("button16").addEventListener("click", function() {
    if (currentPowerLevel >= 100000000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071586382079869009/ddreo4j-413f9a26-fdf8-40c0-b159-b9ab0f024d95.png?width=886&height=586')";
  });
  document.getElementById("button17").addEventListener("click", function() {
    if (currentPowerLevel >= 1000000000) 
    document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071586492784320592/stage_of_tournament_power_final_by_tadeodb_dc52cey-fullview.png  ')";
  });

const upgradeBtn = document.getElementById("upgradeBtn");
const kiBlastBtn = document.getElementById("kiBlastBtn");
const kamehamehaBtn = document.getElementById("kamehamehaBtn");
const spiritBombBtn = document.getElementById("spiritBombBtn");
const upgradeModal = document.getElementById("upgradeModal");
const closeBtn = document.getElementsByClassName("close1")[0];


resetButton.addEventListener("click", function () {
    currentPowerLevel = 0;
    powerLevel.innerHTML = currentPowerLevel;
    localStorage.setItem("powerLevel", currentPowerLevel);
    button11 = false;
    button12 = false;
    button13 = false;
    button14 = false;
    button15 = false;
    button16 = false;
    button17 = false;
    centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071579223191457802/D8OiWCt.png?width=586&height=586')";

        localStorage.setItem("kiBlastLevel", 0);
   
        localStorage.setItem("kamehamehaLevel", 0);
    
        localStorage.setItem("spiritBombLevel", 0);

    BeerusFight = false;
    JirenFight = false;
    FatBuuFight = false;
    FriezaFight = false;


    location.reload();

});


if (localStorage.getItem("kiBlastLevel") === null) {
    localStorage.setItem("kiBlastLevel", 0);
}
if (localStorage.getItem("kamehamehaLevel") === null) {
    localStorage.setItem("kamehamehaLevel", 0);
}
if (localStorage.getItem("spiritBombLevel") === null) {
    localStorage.setItem("spiritBombLevel", 0);
}

kiBlastBtn.innerHTML = `Ki Blast (${localStorage.getItem("kiBlastLevel")}/5)`;
kamehamehaBtn.innerHTML = `Kamehameha (${localStorage.getItem("kamehamehaLevel")}/5)`;
spiritBombBtn.innerHTML = `Spirit Bomb (${localStorage.getItem("spiritBombLevel")}/5)`;

upgradeBtn.addEventListener("click", function () {
    upgradeModal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    upgradeModal.style.display = "none";
});



kiBlastBtn.addEventListener("click", function () {
    var currentLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var powerLevels = [250, 2500, 25000, 250000, 2500000];
    var requiredPowerLevel = powerLevels[currentLevel];
    if (currentPowerLevel >= requiredPowerLevel && currentLevel < 5) {
        localStorage.setItem("kiBlastLevel", currentLevel + 1);
        kiBlastBtn.innerHTML = `Ki Blast (${currentLevel + 1}/5)`;
    } else if (currentLevel >= 5) {
        alert("Ki Blast is already at maximum level");
    } else {
        alert(`Not enough power level to upgrade Ki Blast. Required power level: ${requiredPowerLevel}`);
    }
});


kamehamehaBtn.addEventListener("click", function () {
    var currentLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var powerLevels = [2500, 25000, 250000, 2500000, 25000000];
    var requiredPowerLevel1 = powerLevels[currentLevel];
    if (currentPowerLevel >= requiredPowerLevel1 && currentLevel < 5) {
        localStorage.setItem("kamehamehaLevel", currentLevel + 1);
        kamehamehaBtn.innerHTML = `Kamehameha (${currentLevel + 1}/5)`;
    } else if (currentLevel >= 5) {
        alert("Kamehameha is already at maximum level");
    } else {
        alert(`Not enough power level to upgrade Kamehameha. Required power level: ${requiredPowerLevel1}`);
    }
});


spiritBombBtn.addEventListener("click", function () {
    var currentLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    var powerLevels = [25000, 250000, 2500000, 25000000, 250000000];
    var requiredPowerLevel2 = powerLevels[currentLevel];
    if (currentPowerLevel >= requiredPowerLevel2 && currentLevel < 5) {
        localStorage.setItem("spiritBombLevel", currentLevel + 1);
        kamehamehaBtn.innerHTML = `Spirit Bomb (${currentLevel + 1}/5)`;
    } else if (currentLevel >= 5) {
        alert("Spirit Bomb is already at maximum level");
    } else {
        alert(`Not enough power level to upgrade Spirit Bomb. Required power level: ${requiredPowerLevel2}`);
    }
});


function createNewScreen() {
    oldHTML = document.body.innerHTML;
    document.body.innerHTML = "";
    document.body.innerHTML = "<h1 style='text-align: center; color: white; background-color: #008080; padding: 20px;'>Boss Selection</h1>" +
        "<button id='goBackBtn' style='display: block; margin: 0 auto; width: 250px; height: 50px; margin-top: 20px; background-color: #0f0f23; color: white; border-radius: 10px; box-shadow: 0px 0px 10px black; cursor: pointer; font-size: 20px;'>Go back</button>" +
        "<div style='display: flex; justify-content: center; align-items: center; flex-wrap: wrap;'>" +
        "<div id='divFrieza' style='margin: 20px; text-align: center;'>" +
        "<img id='imgFrieza' style='center: block; width: 250px; height: 250px; margin-bottom: 20px;' src='https://media.discordapp.net/attachments/1067525557824266400/1073410524672434236/LSGUz1u.png' alt='Frieza'>" +
        "<p style='text-align: center; color: white;'>Challenge Frieza! (2,500 Powerlevel Required)</p>" +
        "</div>" +
        "<div id='divFatBuu' style='margin: 20px; text-align: center;'>" +
        "<img id='imgFatBuu' style='center: block; width: 250px; height: 250px; margin-bottom: 20px;' src='https://media.discordapp.net/attachments/1067525557824266400/1073413781704691762/XQtli5W.png' alt='FatBuu'>" +
        "<p style='text-align: center; color: white;'>Challenge Fat Buu! (250,000 Powerlevel Required)</p>" +
        "</div>" +
        "<div id='divBeerus' style='margin: 20px; text-align: center;'>" +
        "<img id='imgBeerus' style='center: block; width: 250px; height: 250px; margin-bottom: 20px;' src='https://media.discordapp.net/attachments/1067525557824266400/1072310350562721792/O1FlHVi_1.png?width=472&height=207' alt='Beerus'>" +
        "<p style='text-align: center; color: white;'>Challenge Lord Beerus! (25,000,000 Powerlevel Required)</p>" +
        "</div>" +
        "<div id='divJiren' style='margin: 20px; text-align: center;'>" +
        "<img id='imgJiren' style='center: block; width: 250px; height: 250px; margin-bottom: 20px;' src='https://media.discordapp.net/attachments/1067525557824266400/1072310553831293019/l4IMSEd_1.png?width=521&height=202' alt='Jiren'>" +
        "<p style='text-align: center; color: white;'>Challenge Jiren (25,000,000,000 Powerlevel Required)</p>" +
        "</div>" +
        "</div>";
    document.body.style.backgroundImage = "url(http://oyster.ignimgs.com/wordpress/stg.ign.com/2017/05/DBS90StarsCollide.jpg)";
    document.body.style.backgroundSize = "cover";

    var goBackBtn = document.getElementById("goBackBtn");
    goBackBtn.removeEventListener("click", goBack);
    goBackBtn.addEventListener("click", function () {
        location.reload();
    });

    document.querySelectorAll("img")[0].style.boxShadow = "0px 0px 10px purple";
    document.querySelectorAll("img")[1].style.boxShadow = "0px 0px 10px pink";
    document.querySelectorAll("img")[2].style.boxShadow = "0px 0px 10px purple";
    document.querySelectorAll("img")[3].style.boxShadow = "0px 0px 10px red";
    document.querySelectorAll("img").forEach(img => {
        img.style.borderRadius = "10px";
        img.style.cursor = "pointer";
    });
    document.getElementById("imgFatBuu").addEventListener("click", challengeFatBuu);
    document.getElementById("imgFrieza").addEventListener("click", challengeFrieza);
    document.getElementById("imgBeerus").addEventListener("click", challengeBeerus);
    document.getElementById("imgJiren").addEventListener("click", challengeJiren);
}


document.querySelectorAll("div")[1].firstChild.style.boxShadow = "0px 0px 10px purple";
document.querySelectorAll("img")[0].lastChild.style.boxShadow = "0px 0px 10px red";



function goBack() {
    document.body.innerHTML = "";
    document.body.innerHTML = oldHTML;
}
