let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessButton").addEventListener("click", function () {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("hint").textContent =
      "Please enter a valid number between 1 and 100.";
  } else {
    let difference = Math.abs(userGuess - randomNumber);

    if (difference === 0) {
      document.getElementById(
        "hint"
      ).textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (difference <= 2) {
      document.getElementById("hint").textContent = "Just there!";
    } else if (difference <= 5) {
      document.getElementById("hint").textContent =
        userGuess > randomNumber ? "A little too high!" : "A little too low!";
    } else if (difference <= 10) {
      document.getElementById("hint").textContent =
        userGuess > randomNumber ? "Too high!" : "Too low!";
    } else if (difference <= 20) {
      document.getElementById("hint").textContent =
        userGuess > randomNumber ? "Quite high!" : "Quite low!";
    } else {
      document.getElementById("hint").textContent =
        userGuess > randomNumber ? "Way too high!" : "Way too low!";
    }
  }

  document.getElementById(
    "attempts"
  ).textContent = `Number of attempts: ${attempts}`;
});
