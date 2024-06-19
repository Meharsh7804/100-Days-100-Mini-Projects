document.getElementById("new-quote").addEventListener("click", getNewQuote);

// Display a loading message
function displayLoading() {
  document.getElementById("quote").textContent =
    "Fetching an inspiring quote...";
  document.getElementById("author").textContent = "";
}

// Hide loading message (not explicitly needed but can be used for future enhancements)
function hideLoading() {
  // This function can be expanded to hide a loading spinner or message
}

function getNewQuote() {
  displayLoading();
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data.content, data.author);
    })
    .catch((error) => {
      console.log("Error fetching quote:", error);
      // Fallback to local quotes on error
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const [quoteText, author] = quotes[randomIndex].split(" - ");
      displayQuote(quoteText, author);
    });
}

function displayQuote(quote, author) {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = `"${quote}"`;
  authorElement.textContent = `- ${author}`;
  fadeIn(quoteElement);
  fadeIn(authorElement);
}

// Fade-in animation
function fadeIn(element) {
  element.style.opacity = 0;
  let last = +new Date();
  let tick = function () {
    element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };
  tick();
}
