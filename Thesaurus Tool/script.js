document.getElementById("searchButton").addEventListener("click", function () {
  const word = document.getElementById("wordInput").value.trim();
  if (word) {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");
    // Fetch synonyms
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data) => displayResults(data, "synonymsList", "Synonyms"))
      .catch((error) => handleError(error));
    // Fetch antonyms
    fetch(`https://api.datamuse.com/words?rel_ant=${word}`)
      .then((response) => response.json())
      .then((data) => displayResults(data, "antonymsList", "Antonyms"))
      .catch((error) => handleError(error));
    // Simulated fetch for definitions (consider using another API for actual definitions)
    // This is a placeholder and does not actually fetch definitions
    const definitions = [{ word: word, text: "Definition not available" }]; // Placeholder response
    displayResults(definitions, "definitionsList", "Definitions");
  } else {
    alert("Please enter a word");
  }
});

function displayResults(data, listId, sectionTitle) {
  document.getElementById("loading").classList.add("hidden");
  const list = document.getElementById(listId);
  list.innerHTML = ""; // Clear previous results
  if (data.length > 0) {
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.word || item.text; // Use 'text' for definitions, 'word' otherwise
      list.appendChild(listItem);
    });
  } else {
    list.innerHTML = `<li>No ${sectionTitle.toLowerCase()} found.</li>`;
  }
  document.getElementById("results").classList.remove("hidden");
}

function handleError(error) {
  document.getElementById("loading").classList.add("hidden");
  console.error("Error fetching data:", error);
  alert("Failed to fetch data. Please try again.");
}
