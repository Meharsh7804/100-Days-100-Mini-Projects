// script.js
document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text-input");
  const fontSelector = document.getElementById("font-selector");
  const previewText = document.getElementById("preview-text");

  // Function to update the preview
  function updatePreview() {
    previewText.textContent = textInput.value || "Your text will appear here.";
    previewText.style.fontFamily = fontSelector.value;
  }

  // Add event listeners
  textInput.addEventListener("input", updatePreview);
  fontSelector.addEventListener("change", updatePreview);
});
