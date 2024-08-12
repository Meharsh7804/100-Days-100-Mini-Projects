const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("gradientPreview");
const cssCode = document.getElementById("cssCode");
const copyButton = document.getElementById("copyButton");

function updateGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  preview.style.background = gradient;
  cssCode.value = `background: ${gradient};`;
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
direction.addEventListener("input", updateGradient);

copyButton.addEventListener("click", () => {
  cssCode.select();
  document.execCommand("copy");
  alert("CSS code copied to clipboard!");
});

// Initialize with default values
updateGradient();
