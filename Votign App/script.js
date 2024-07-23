let votes = {
  option1: 0,
  option2: 0,
};

function vote(option) {
  votes[option]++;
  updateVotes();
}

function updateVotes() {
  document.getElementById("votes1").innerText = votes.option1;
  document.getElementById("votes2").innerText = votes.option2;
}
