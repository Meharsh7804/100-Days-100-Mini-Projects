function rollDice() {
  const dice = document.getElementById("dice");
  const message = document.getElementById("message");
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomFace = diceFaces[Math.floor(Math.random() * diceFaces.length)];

  // Animate the dice roll
  anime({
    targets: "#dice",
    rotate: {
      value: 360,
      duration: 1000,
      easing: "easeInOutQuad",
    },
    scale: [
      { value: 1.5, duration: 500, easing: "easeInOutQuad" },
      { value: 1, duration: 500, easing: "easeInOutQuad" },
    ],
    complete: function () {
      dice.innerHTML = randomFace;
      displayMessage(randomFace);
    },
  });
}

function displayMessage(face) {
  const message = document.getElementById("message");
  let text;
  switch (face) {
    case "⚀":
      text = "You rolled a one! Try again.";
      break;
    case "⚁":
      text = "You rolled a two! Could be better.";
      break;
    case "⚂":
      text = "You rolled a three! Average roll.";
      break;
    case "⚃":
      text = "You rolled a four! Nice!";
      break;
    case "⚄":
      text = "You rolled a five! Great roll!";
      break;
    case "⚅":
      text = "You rolled a six! Excellent!";
      break;
    default:
      text = "Roll the dice!";
      break;
  }
  message.innerHTML = text;
}
