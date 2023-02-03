const powerLevel = document.getElementById("powerLevel");
const trainButton = document.getElementById("trainButton");
const centerImage = document.getElementById("centerImage");
const resetButton = document.getElementById("resetButton");

let currentPowerLevel = 0;

if (localStorage.getItem("powerLevel")) {
  currentPowerLevel = parseInt(localStorage.getItem("powerLevel"));
  powerLevel.innerHTML = currentPowerLevel;
}

trainButton.addEventListener("click", function() {
  currentPowerLevel++;
  powerLevel.innerHTML = currentPowerLevel;
  localStorage.setItem("powerLevel", currentPowerLevel);

  if (currentPowerLevel === 50) {
    centerImage.style.backgroundImage = "url(https://media.discordapp.net/attachments/1067525557824266400/1070874128212574248/dcvkxa5-bd3f20cd-adc8-4888-8866-242ca64687c8.png?width=609&height=609)";
  } else if (currentPowerLevel === 100) {
    centerImage.style.backgroundImage = "url(https://media.discordapp.net/attachments/1067525557824266400/1070872800132337764/ExwEzM4XEAg6ptW_0.png?width=609&height=609)";
  } else if (currentPowerLevel === 150) {
    centerImage.style.backgroundImage = "url(https://media.discordapp.net/attachments/1067525557824266400/1070872889974333521/7vwt5Gn.png?width=470&height=470)";
  }
});

resetButton.addEventListener("click", function() {
  currentPowerLevel = 0;
  powerLevel.innerHTML = currentPowerLevel;
  localStorage.setItem("powerLevel", currentPowerLevel);
  centerImage.style.backgroundImage = "https://media.discordapp.net/attachments/1067525557824266400/1070871816010219560/depesc9-ec92d5b4-67a9-4b99-9215-b40b32e171bf.png?width=813&height=610";
});

