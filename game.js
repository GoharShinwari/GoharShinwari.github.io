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
    canvas.style.backgroundColor = "black";
  
    // Add the canvas to the HTML body
    document.body.appendChild(canvas);
  }
  
