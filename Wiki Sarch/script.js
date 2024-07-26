document.getElementById("searchBtn").addEventListener("click", function () {
  let query = document.getElementById("searchInput").value;
  searchWikipedia(query);
});

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let query = document.getElementById("searchInput").value;
      searchWikipedia(query);
    }
  });

function searchWikipedia(query) {
  if (!query.trim()) return;

  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`;
  const loadingDiv = document.getElementById("loading");
  const resultsDiv = document.getElementById("results");

  loadingDiv.classList.remove("hidden");
  resultsDiv.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loadingDiv.classList.add("hidden");
      displayResults(data.query.search);
    })
    .catch((error) => {
      loadingDiv.classList.add("hidden");
      console.error("Error fetching data:", error);
    });
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  results.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    const title = document.createElement("h3");
    title.innerHTML = `<a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">${result.title}</a>`;

    const snippet = document.createElement("p");
    snippet.innerHTML = result.snippet + "...";

    resultItem.appendChild(title);
    resultItem.appendChild(snippet);
    resultsDiv.appendChild(resultItem);
  });
}
