document.getElementById("unitType").addEventListener("change", function () {
  document.querySelectorAll(".converter-section").forEach((section) => {
    section.style.display = "none";
  });

  const selectedUnit = this.value + "Converter";
  document.getElementById(selectedUnit).style.display = "block";
});

function convertLength() {
  const input = parseFloat(document.getElementById("lengthInput").value);
  const from = document.getElementById("lengthFrom").value;
  const to = document.getElementById("lengthTo").value;
  let result;

  if (from === to) {
    result = input;
  } else {
    // Convert input to meters first
    let meters;
    switch (from) {
      case "meters":
        meters = input;
        break;
      case "kilometers":
        meters = input * 1000;
        break;
      case "feet":
        meters = input * 0.3048;
        break;
      case "miles":
        meters = input * 1609.34;
        break;
    }

    // Convert meters to the target unit
    switch (to) {
      case "meters":
        result = meters;
        break;
      case "kilometers":
        result = meters / 1000;
        break;
      case "feet":
        result = meters / 0.3048;
        break;
      case "miles":
        result = meters / 1609.34;
        break;
    }
  }

  document.getElementById("lengthResult").innerText = `Result: ${result} ${to}`;
}

function convertWeight() {
  const input = parseFloat(document.getElementById("weightInput").value);
  const from = document.getElementById("weightFrom").value;
  const to = document.getElementById("weightTo").value;
  let result;

  if (from === to) {
    result = input;
  } else {
    // Convert input to grams first
    let grams;
    switch (from) {
      case "grams":
        grams = input;
        break;
      case "kilograms":
        grams = input * 1000;
        break;
      case "pounds":
        grams = input * 453.592;
        break;
      case "ounces":
        grams = input * 28.3495;
        break;
    }

    // Convert grams to the target unit
    switch (to) {
      case "grams":
        result = grams;
        break;
      case "kilograms":
        result = grams / 1000;
        break;
      case "pounds":
        result = grams / 453.592;
        break;
      case "ounces":
        result = grams / 28.3495;
        break;
    }
  }

  document.getElementById("weightResult").innerText = `Result: ${result} ${to}`;
}

function convertTemperature() {
  const input = parseFloat(document.getElementById("temperatureInput").value);
  const from = document.getElementById("temperatureFrom").value;
  const to = document.getElementById("temperatureTo").value;
  let result;

  if (from === to) {
    result = input;
  } else {
    switch (from) {
      case "celsius":
        if (to === "fahrenheit") {
          result = (input * 9) / 5 + 32;
        } else if (to === "kelvin") {
          result = input + 273.15;
        }
        break;
      case "fahrenheit":
        if (to === "celsius") {
          result = ((input - 32) * 5) / 9;
        } else if (to === "kelvin") {
          result = ((input - 32) * 5) / 9 + 273.15;
        }
        break;
      case "kelvin":
        if (to === "celsius") {
          result = input - 273.15;
        } else if (to === "fahrenheit") {
          result = ((input - 273.15) * 9) / 5 + 32;
        }
        break;
    }
  }

  document.getElementById(
    "temperatureResult"
  ).innerText = `Result: ${result} ${to}`;
}
