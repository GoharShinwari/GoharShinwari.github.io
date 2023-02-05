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

let button11 = false;
let button12 = false;
let button13 = false;
let button14 = false;
let button15 = false;
let button16 = false;
let button17 = false;

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




button1.addEventListener("click", function() {
  var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
  var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
  var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
  if (currentPowerLevel >= 150 && kiBlastLevel >= 1 && kamehamehaLevel >= 1 && spiritBombLevel >= 1) {
  centerImage.style.backgroundImage = "url('https://images-ext-2.discordapp.net/external/C37HM8WiJ-FmY67LW9TR-TjxFAKCgHw2M5oBxKhyQxM/https/gamepress.gg/dblegends/sites/dblegends/files/2022-02/i5IPZPe.png?width=609&height=609')";
  multiplier = 5;
  } else {
  alert("Your power level and/or upgrades are not high enough to transform into KaioKen Goku");
  }
  });


  button2.addEventListener("click", function() {
    var kiBlastLevel = parseInt(localStorage.getItem("kiBlastLevel")) || 0;
    var kamehamehaLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    var spiritBombLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= 500 && kiBlastLevel >= 2 && kamehamehaLevel >= 2 && spiritBombLevel >= 1) {
      centerImage.style.backgroundImage = "url('https://images-ext-1.discordapp.net/external/iQ0SgKTmW7bOSBNZsm5zg5DKkopbykcqvpDNmc0tMMo/%3Fitok%3DTWkPQqpY/https/gamepress.gg/dblegends/sites/dblegends/files/styles/522x522/public/2021-05/lOju6wl.png?width=470&height=470')";
      multiplier = 50;
  } else {
    alert("Your power level and/or upgrades are not high enough to transform into SSJ Goku");
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
  
  document.getElementById("button11").addEventListener("click", function() {
    if (currentPowerLevel >= 1000) {
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
      currentPowerLevel += 10;
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
    if (currentPowerLevel >= 1000) 
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
const closeBtn = document.getElementsByClassName("close")[0];


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

        localStorage.setItem("kiBlastLevel", 1);
   
        localStorage.setItem("kamehamehaLevel", 1);
    
        localStorage.setItem("spiritBombLevel", 1);

});


if (localStorage.getItem("kiBlastLevel") === null) {
    localStorage.setItem("kiBlastLevel", 1);
}
if (localStorage.getItem("kamehamehaLevel") === null) {
    localStorage.setItem("kamehamehaLevel", 1);
}
if (localStorage.getItem("spiritBombLevel") === null) {
    localStorage.setItem("spiritBombLevel", 1);
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
    if (currentPowerLevel >= (1000 * (currentLevel + 1)) && currentLevel < 5) {
        localStorage.setItem("kiBlastLevel", currentLevel + 1);
        kiBlastBtn.innerHTML = `Ki Blast (${currentLevel + 1}/5)`;
  } else if (currentLevel >= 5) {
    alert("Ki Blast is already at maximum level");
} else {
    alert("Not enough power level to upgrade Ki Blast");
}
});

kamehamehaBtn.addEventListener("click", function () {
    var currentLevel = parseInt(localStorage.getItem("kamehamehaLevel")) || 0;
    if (currentPowerLevel >= (1000 * (currentLevel + 1)) && currentLevel < 5) {
        localStorage.setItem("kamehamehaLevel", currentLevel + 1);
        kamehamehaBtn.innerHTML = `Kamehameha(${ currentLevel + 1} /5)`;
} else if (currentLevel >= 5) {
    alert("Kamehameha is already at maximum level");
} else {
    alert("Not enough power level to upgrade Kamehameha");
}
});

spiritBombBtn.addEventListener("click", function () {
    var currentLevel = parseInt(localStorage.getItem("spiritBombLevel")) || 0;
    if (currentPowerLevel >= (1000 * (currentLevel + 1)) && currentLevel < 5) {
        localStorage.setItem("spiritBombLevel", currentLevel + 1);
        spiritBombBtn.innerHTML = `Spirit Bomb(${ currentLevel + 1} /5)`;
} else if (currentLevel >= 5) {
    alert("Spirit Bomb is already at maximum level");
} else {
    alert("Not enough power level to upgrade Spirit Bomb");
}
});