document.getElementById("format-btn").addEventListener("click", function () {
  const jsonInput = document.getElementById("json-input").value;
  let formattedJson;

  try {
    const jsonObject = JSON.parse(jsonInput);
    formattedJson = JSON.stringify(jsonObject, null, 4);
  } catch (error) {
    formattedJson = "Invalid JSON data: " + error.message;
  }

  document.getElementById("formatted-json").textContent = formattedJson;
});
