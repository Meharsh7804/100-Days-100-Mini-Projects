document.getElementById("textInput").addEventListener("input", function () {
  const text = this.value;

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const sentenceCount = text.trim()
    ? text.split(/[.!?]+\s/).filter(Boolean).length
    : 0;

  document.getElementById("wordCount").innerText = wordCount;
  document.getElementById("charCount").innerText = charCount;
  document.getElementById("sentenceCount").innerText = sentenceCount;
});
