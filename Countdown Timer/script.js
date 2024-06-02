let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerText = "00:00:00";
      alert("Time's up!");
      return;
    }

    totalSeconds--;

    const displayHours = String(Math.floor(totalSeconds / 3600)).padStart(
      2,
      "0"
    );
    const displayMinutes = String(
      Math.floor((totalSeconds % 3600) / 60)
    ).padStart(2, "0");
    const displaySeconds = String(totalSeconds % 60).padStart(2, "0");

    document.getElementById(
      "timer"
    ).innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  }, 1000);
}
