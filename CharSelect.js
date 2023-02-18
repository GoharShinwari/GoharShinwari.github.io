const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

let gokuBeat = false;
let vegetaBeat = false;

button1.addEventListener("click", function () {
    window.location.href = "Goku.html";
});

button2.addEventListener("click", function () {
    if (gokuBeat) {
        location.href = "Vegeta.html";
    } else {
        alert("You haven't beat Goku yet!");
    }
});

button3.addEventListener("click", function () {
    if (vegetaBeat) {
        location.href = "Vegeta.html";
    } else {
        alert("You haven't beat Vegeta yet!");
    }
});

button4.addEventListener("click", function () {
    if (vegetaBeat) {
        location.href = "Vegeta.html";
    } else {
        alert("You haven't beat Vegeta yet!");
    }
});

function goBack() {
    window.history.back();
}

button5.addEventListener("click", function () {
    window.history.back();
});