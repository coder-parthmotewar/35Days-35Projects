const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expenseList");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const li = document.createElement("li");
        li.innerHTML = `
            ${expense.title} - ₹${expense.amount}
            <button onclick="deleteExpense(${index})">X</button>
        `;
        expenseList.appendChild(li);
    });

    totalEl.innerText = total;
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
    if (titleInput.value === "" || amountInput.value === "") return;

    expenses.push({
        title: titleInput.value,
        amount: Number(amountInput.value)
    });

    titleInput.value = "";
    amountInput.value = "";
    renderExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

renderExpenses();
