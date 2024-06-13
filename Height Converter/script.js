function convertHeight() {
  const feet = parseInt(document.getElementById("feet").value);
  const inches = parseInt(document.getElementById("inches").value);

  if (isNaN(feet) || isNaN(inches)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  const totalInches = feet * 12 + inches;
  const centimeters = totalInches * 2.54;

  document.getElementById(
    "result"
  ).textContent = `${feet} feet ${inches} inches is equal to ${centimeters.toFixed(
    2
  )} cm.`;
}
