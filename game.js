function selectCharacter(name) {
  document.getElementById("selected-character").innerHTML = "You have selected " + name + "!";
}
function selectCharacter(character) {
  // Show the confirmation button
  document.getElementById("confirmation-button").style.display = "block";

  // Display the selected character name
  document.getElementById("selected-character").innerHTML = "Selected Character: " + character;
}

function cancelSelection() {
  // Hide the confirmation button
  document.getElementById("confirmation-button").style.display = "none";

  // Clear the selected character name
  document.getElementById("selected-character").innerHTML = "";
}

function hideConfirmation() {
  document.getElementById("confirmation-button").style.display = "none";
}

function startGame() {
  // Remove all elements from the HTML body
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

 // Create a new canvas element for the game screen
var canvas = document.createElement("canvas");
canvas.id = "game-canvas";
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "https://cdn.discordapp.com/attachments/1067525557824266400/1069078026509373492/desktop-wallpaper-dbz-sky-background-dragon-ball-landscape.png";
canvas.style.backgroundImage = "url('" + img.src + "')";
canvas.style.backgroundSize = canvas.width + "px " + canvas.height + "px";
canvas.style.backgroundPosition = "center";

var x = canvas.width / 2;
var y = canvas.height / 2;
var vx = 0;
var vy = 0;


  // Checks if background image loaded
  img.onload = function(){
    console.log("Image loaded successfully");
    ctx.drawImage(img, 0, 0);
}

  
  // Set circle radius
  var radius = 50;

  // Listen for key presses
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      vx = 5;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      vx = -5;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      vy = -5;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      vy = 5;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft") {
      vx = 0;
    } else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "Down" || e.key == "ArrowDown") {
      vy = 0;
    }
  }


  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create an image object
    var img = new Image();
    img.src = "https://cdn.discordapp.com/attachments/1067525557824266400/1069074784937316392/dcbr9p9-9c926e24-3fc6-4f0c-8fff-ee08a32a7edb.png";

    // Draw image
    ctx.drawImage(img, x, y, 100, 100);

    // Check if the image is going past the canvas boundaries
    if (x + 100 > canvas.width) {
      x = canvas.width - 100;
    } else if (x < 0) {
      x = 0;
    }

    if (y + 100 > canvas.height) {
      y = canvas.height - 100;
    } else if (y < 0) {
      y = 0;
    }

    // Update position
    x += vx;
    y += vy;
  }

  animate();
}
