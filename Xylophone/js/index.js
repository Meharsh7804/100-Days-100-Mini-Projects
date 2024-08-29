/* Detecting Button Press */

for (var i = 0; i < document.querySelectorAll(".xylo").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

/* Detecting Keyboard Press */

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

/* Function for playing sound */

function makeSound(key) {
  switch (key) {
    case "B":
    case "b":
      var note1 = new Audio("sounds/note1.wav");
      note1.play();
      break;
    case "M":
    case "m":
      var note2 = new Audio("sounds/note2.wav");
      note2.play();
      break;
    case "X":
    case "x":
      var note3 = new Audio("sounds/note3.wav");
      note3.play();
      break;
    case "K":
    case "k":
      var note4 = new Audio("sounds/note4.wav");
      note4.play();
      break;
    case "S":
    case "s":
      var note5 = new Audio("sounds/note5.wav");
      note5.play();
      break;
    case "O":
    case "o":
      var note6 = new Audio("sounds/note6.wav");
      note6.play();
      break;
    case "W":
    case "w":
      var note7 = new Audio("sounds/note7.wav");
      note7.play();
      break;
    default:
      console.log(key);
  }
}

/* Animation of Button */

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
