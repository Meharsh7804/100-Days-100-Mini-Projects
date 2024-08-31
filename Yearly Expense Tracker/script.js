let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
updateExpenseTable();

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid name and amount.");
    return;
  }

  const expense = {
    name: name,
    amount: amount,
    category: category,
    id: Date.now(),
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  updateExpenseTable();
  clearInputs();
}

function updateExpenseTable() {
  const expenseBody = document.getElementById("expenseBody");
  const totalAmount = document.getElementById("totalAmount");
  expenseBody.innerHTML = "";
  let total = 0;

  expenses.forEach((expense) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td><button onclick="removeExpense(${
              expense.id
            })">Remove</button></td>
        `;

    expenseBody.appendChild(row);
    total += expense.amount;
  });

  totalAmount.textContent = total.toFixed(2);
}

function removeExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  updateExpenseTable();
}

function clearInputs() {
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
