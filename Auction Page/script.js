function placeBid(event) {
  const increment = parseFloat(prompt("Enter the increment value:"));
  if (isNaN(increment) || increment <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }
  const bidElement = event.target.previousElementSibling;
  const currentBid = parseFloat(
    bidElement.textContent.replace("Current Bid: $", "")
  );
  const newBid = currentBid + increment;
  bidElement.textContent = `Current Bid: $${newBid.toFixed(2)}`;
  alert("Successfully Bid!");
}

const Buttons = document.querySelectorAll(".art-card button");
Buttons.forEach((button) => {
  button.addEventListener("click", placeBid);
});
