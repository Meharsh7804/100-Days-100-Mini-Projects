const typingText = document.querySelector(".typing-text");
const text = "This text is being typed out...";

let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

window.onload = () => {
  typeText();
};

const bouncingText = document.querySelector(".bouncing-text");
const bounceText = bouncingText.textContent;
bouncingText.innerHTML = bounceText
  .split("")
  .map((letter) => `<span>${letter}</span>`)
  .join("");
