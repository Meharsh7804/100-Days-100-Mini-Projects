const canvas = document.getElementById("neonCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const now = Date.now();
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(255, 0, 0, 1)"); // Red
  gradient.addColorStop(0.25, "rgba(255, 255, 0, 1)"); // Yellow
  gradient.addColorStop(0.5, "rgba(0, 255, 0, 1)"); // Green
  gradient.addColorStop(0.75, "rgba(0, 0, 255, 1)"); // Blue

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 3;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "rgba(255, 255, 255, 1)";

  ctx.beginPath();
  points.forEach((point, index) => {
    if (now - point.time < 300) {
      ctx.lineTo(point.x, point.y);
    } else {
      points.splice(index, 1);
    }
  });
  ctx.stroke();

  requestAnimationFrame(draw);
}

document.addEventListener("mousemove", (e) => {
  points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
});

document.addEventListener("mouseleave", () => {
  points.length = 0;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

draw();
