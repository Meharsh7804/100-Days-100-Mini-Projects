document.getElementById("addItem").addEventListener("click", () => {
  const itemsContainer = document.getElementById("items");
  const itemTemplate = `
        <div class="item">
            <input type="text" class="item-description" placeholder="Description">
            <input type="number" class="item-quantity" placeholder="Quantity">
            <input type="number" class="item-price" placeholder="Price">
            <button class="remove-item" onclick="removeItem(this)">Remove</button>
        </div>
    `;
  itemsContainer.insertAdjacentHTML("beforeend", itemTemplate);
});

document.getElementById("items").addEventListener("input", updateTotal);

function removeItem(button) {
  button.parentElement.remove();
  updateTotal();
}

function updateTotal() {
  let total = 0;
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const quantity = item.querySelector(".item-quantity").value;
    const price = item.querySelector(".item-price").value;
    total += quantity * price || 0;
  });
  document.getElementById("totalAmount").innerText = total.toFixed(2);
}

document.getElementById("downloadPDF").addEventListener("click", () => {
  const invoice = document.getElementById("invoice");
  html2pdf().from(invoice).save("invoice.pdf");
});
