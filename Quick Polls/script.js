document.addEventListener("DOMContentLoaded", function () {
  const pollForm = document.getElementById("poll-form");
  const yesCount = document.getElementById("yes-count");
  const noCount = document.getElementById("no-count");
  let yesVotes = 0;
  let noVotes = 0;

  pollForm.addEventListener("submit", function (e) {
    // It will help to prevent the submission of
    // form, so that following code can execute
    e.preventDefault();
    const formData = new FormData(pollForm);
    const userVote = formData.get("vote");

    if (userVote === "yes") {
      yesVotes++;
    } else if (userVote === "no") {
      noVotes++;
    }
    updateResults();
  });

  function updateResults() {
    yesCount.textContent = yesVotes;
    noCount.textContent = noVotes;
  }
});
