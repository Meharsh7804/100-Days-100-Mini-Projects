// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Mock data
  const data = {
    totalUsers: 1500,
    newSignups: 75,
    activeUsers: 430,
    usersChartData: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Users",
          data: [1200, 1250, 1300, 1400, 1450, 1500],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
  };

  // Populate cards
  document.getElementById("total-users").textContent = data.totalUsers;
  document.getElementById("new-signups").textContent = data.newSignups;
  document.getElementById("active-users").textContent = data.activeUsers;

  // Create chart
  const ctx = document.getElementById("usersChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: data.usersChartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
