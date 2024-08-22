document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const summary = document.getElementById("summary");
  const form = document.getElementById("questionnaireForm");
  const progressBar = document.getElementById("progress");
  const modal = document.getElementById("confirmationModal");
  const closeModal = document.querySelector(".close");
  const confirmSubmit = document.getElementById("confirmSubmit");
  const cancelSubmit = document.getElementById("cancelSubmit");
  let currentStep = 0;

  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (validateForm()) {
        currentStep++;
        if (currentStep === steps.length - 1) {
          showSummary();
        }
        showStep(currentStep);
        updateProgressBar();
      }
    });
  });

  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep--;
      showStep(currentStep);
      updateProgressBar();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmSubmit.addEventListener("click", () => {
    modal.style.display = "none";
    form.submit();
  });

  cancelSubmit.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function showStep(step) {
    steps.forEach((stepDiv, index) => {
      stepDiv.classList.toggle("active", index === step);
    });
  }

  function updateProgressBar() {
    const progress = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";
  }

  function showSummary() {
    summary.innerHTML = `
      <p>Name: ${document.getElementById("name").value}</p>
      <p>Email: ${document.getElementById("email").value}</p>
      <p>Age: ${document.getElementById("age").value}</p>
    `;
  }

  function validateForm() {
    // Add form validation logic here
    return true;
  }
});
