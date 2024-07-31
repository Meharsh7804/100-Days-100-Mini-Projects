document.getElementById("generate").addEventListener("click", () => {
  const fileInput = document.getElementById("upload");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please upload an image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const asciiArt = convertToAscii(imageData);
      document.getElementById("ascii-art").textContent = asciiArt;
      document.getElementById("download").style.display = "inline-block";
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById("download").addEventListener("click", () => {
  const asciiArt = document.getElementById("ascii-art").textContent;
  const blob = new Blob([asciiArt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ascii-art.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

function convertToAscii(imageData) {
  const chars = "@%#*+=-:. ";
  const { data, width, height } = imageData;
  let ascii = "";

  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 5) {
      const offset = (y * width + x) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const avg = (r + g + b) / 3;
      const charIndex = Math.floor((avg / 255) * (chars.length - 1));
      ascii += chars[charIndex];
    }
    ascii += "\n";
  }

  return ascii;
}
