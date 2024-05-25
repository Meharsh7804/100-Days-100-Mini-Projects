document
  .getElementById("travelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;

    // Validate all inputs
    var inputs = document.querySelectorAll(
      "#travelForm input[required], #travelForm select[required]"
    );
    inputs.forEach(function (input) {
      if (!input.value) {
        isValid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ddd";
      }
    });

    if (isValid) {
      document.getElementById("successMessage").style.display = "block";
      setTimeout(function () {
        document.getElementById("successMessage").style.display = "none";
      }, 5000);
      document.getElementById("travelForm").reset();
    }
  });
