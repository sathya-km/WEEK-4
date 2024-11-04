

            



document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (!description || isNaN(amount)) return;

    addExpense(description, amount);
    updateTotal();
    e.target.reset();
});

let expenses = [];

function addExpense(description, amount) {
    expenses.push({ description, amount });
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

function updateTotal() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}






































































































































