const powerLevel = document.getElementById("powerLevel");
const trainButton = document.getElementById("trainButton");
const centerImage = document.getElementById("centerImage");
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

var multiplier = 1;




let currentPowerLevel = 0;

if (localStorage.getItem("powerLevel")) {
  currentPowerLevel = parseInt(localStorage.getItem("powerLevel"));
  powerLevel.innerHTML = currentPowerLevel;
}

trainButton.addEventListener("click", function() {
  currentPowerLevel += multiplier;
  powerLevel.innerHTML = currentPowerLevel;
  localStorage.setItem("powerLevel", currentPowerLevel);

});

resetButton.addEventListener("click", function() {
  currentPowerLevel = 0;
  powerLevel.innerHTML = currentPowerLevel;
  localStorage.setItem("powerLevel", currentPowerLevel);
  centerImage.style.backgroundImage = "https://media.discordapp.net/attachments/1067525557824266400/1070871816010219560/depesc9-ec92d5b4-67a9-4b99-9215-b40b32e171bf.png?width=813&height=610";
}); 



button1.addEventListener("click", function() {
  if (currentPowerLevel >= 150) {
    centerImage.style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/C37HM8WiJ-FmY67LW9TR-TjxFAKCgHw2M5oBxKhyQxM/https/gamepress.gg/dblegends/sites/dblegends/files/2022-02/i5IPZPe.png?width=609&height=609')";
    multiplier = 2;
  } else {
    alert("Your power level is not high enough to transform into KaioKen Goku");
    currentPowerLevel
  }
});


button2.addEventListener("click", function() {
if (currentPowerLevel >= 500) {
    centerImage.style.backgroundImage = "url('https://images-ext-1.discordapp.net/external/iQ0SgKTmW7bOSBNZsm5zg5DKkopbykcqvpDNmc0tMMo/%3Fitok%3DTWkPQqpY/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2021-05/lOju6wl.png?width=470&height=470')";
    multiplier = 50;
} else {
alert("Your power level is not high enough to transform into SSJ Goku");
}
});

button3.addEventListener("click", function() {
if (currentPowerLevel >= 5000) {
    centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071190774068297768/RLHhO3g.png?width=470&height=470')";
    multiplier = 500;
} else {
alert("Your power level is not high enough to transform into SSJ2 Goku");
}
});

button4.addEventListener("click", function() {
if (currentPowerLevel >= 50000) {
    centerImage.style.backgroundImage = "url('https://gamepress.gg/dblegends/sites/dblegends/files/2019-10/3YDgjhf.png')";
    multiplier = 5000;
} else {
alert("Your power level is not high enough to transform into SSJ3 Goku");
}
});

button5.addEventListener("click", function() {
if (currentPowerLevel >= 500000) {
    centerImage.style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/Ipib-8vRJbyphGVMi2BD0Bh3qa_a3nQU8qjRY78GByY/%3Fitok%3DXn7yY7Hj/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2021-04/AIUVUDX.png?width=470&height=470')";
    multiplier = 10000;
} else {
alert("Your power level is not high enough to transform into SSJ4 Goku");
}
});

button6.addEventListener("click", function() {
  if (currentPowerLevel >= 5000000) {
      centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469246376312882/spssjggokuredfighter.png')";
      multiplier = 100000;
  } else {
  alert("Your power level is not high enough to transform into SSG Goku");
  }
  });

button7.addEventListener("click", function() {
  if (currentPowerLevel >= 50000000) {
      centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469344044883988/Q4AVP3W.png')";
      multiplier = 1000000;
  } else {
  alert("Your power level is not high enough to transform into SSB Goku");
  }
  });
  
  button8.addEventListener("click", function() {
  if (currentPowerLevel >= 500000000) {
      centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469740641497139/FN8-dsqX0AIdlG0.png?width=440&height=586')";
      multiplier = 10000000;
  } else {
  alert("Your power level is not high enough to transform into SSB KK Goku");
  }
  });

  button9.addEventListener("click", function() {
  if (currentPowerLevel >= 5000000000) {
      centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071469968903917679/5aHUyRX.png?width=586&height=586')";
      multiplier = 100000000;
  } else {
  alert("Your power level is not high enough to transform into UI Goku");
  }
  });

  button10.addEventListener("click", function() {
  if (currentPowerLevel >= 50000000000) {
      centerImage.style.backgroundImage = "url('https://media.discordapp.net/attachments/1067525557824266400/1071470047991693322/l1wQqq2.png?width=586&height=586')";
      multiplier = 1000000000;
  } else {
  alert("Your power level is not high enough to transform into MUI Goku");
  }
  });
