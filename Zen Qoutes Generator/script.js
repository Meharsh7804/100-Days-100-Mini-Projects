const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Simplicity is the ultimate sophistication.",
  "The best way to predict the future is to create it.",
  "To seek is to suffer. To seek nothing is bliss.",
  "The mind is everything. What you think you become.",
  "Act with kindness, but do not expect gratitude.",
  "When you realize nothing is lacking, the whole world belongs to you.",
  "Silence is a source of great strength.",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", function () {
  document.getElementById("quote-text").innerText = getRandomQuote();
});
