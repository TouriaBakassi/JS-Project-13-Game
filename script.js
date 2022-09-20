
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let chance;
  let nombreTrouve; // To determine if the guessed number correspond to the random nomber
  let entier;
  let message;
  
  let userguess = document.querySelector("input");
  let button = document.querySelector("button");
  let buttonRest = document.querySelector("#restart-area > button");
  let resultat = document.getElementById("resultat");
  /**
   * init
   * Initialize the values:
   * chance => number of chance of the user before game over to 3
   * nombreTrouve => false
   * entier => the random number
   *
   * init the result text to empty
   * init the color of the text to black
   *
   */
  function init() {
    chance = 3;
    nombreTrouve = false;
    entier = randomNumber(1, 10);
    resultat.textContent = "";
    resultat.style.color = "black";
    console.log(entier);
  }
  
  /**
   * displayRestartView
   * display the Restart block
   * hide the game block
   */
  function displayRestartView() {
    document.querySelector("#restart-area").style.display = "block";
    document.querySelector("#game-area").style.display = "none";
  }
  /**
   * displayGameView
   * reset the values with init function
   * display the game block
   * hide the restart block
   */
  function displayGameView() {
    init();
    document.querySelector("#restart-area").style.display = "none";
    document.querySelector("#game-area").style.display = "block";
  }
  
  init(); //call to the init function, when the js file is loaded for the first time
  
  function guessNumber() {
    let number = Number(userguess.value);
    console.log(number);
    if (number > entier) {
      message = `${number} is high , enter a lower number`;
      chance--;
    } else if (number === entier) {
      message = "you got it right";
      nombreTrouve = true;
    } else {
      message = `${number} is low , enter a higher number`;
      chance--;
    }
  
    if (chance === 0 && nombreTrouve === false) {
      message = "Vous avez echoué";
      resultat.style.color = "red";
      displayRestartView();
    }
  
    if (nombreTrouve === true) {
      message = "Bien Joué";
      resultat.style.color = "green";
      displayRestartView();
    }
    resultat.textContent = message;
    userguess.value = "";
  }
  
  button.addEventListener("click", guessNumber);
  buttonRest.addEventListener("click", displayGameView);