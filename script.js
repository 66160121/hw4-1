document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let expense = {
        id: Date.now(),
        title: document.getElementById('title').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        date: document.getElementById('date').value,
    };
    saveExpense(expense);
});

function saveExpense(expense) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function displayExpenses() {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let list = document.getElementById('expenseList');
    list.innerHTML = '';
    expenses.forEach(exp => {
        let li = document.createElement('li');
        li.innerHTML = `${exp.date} - ${exp.title} (${exp.category}): ${exp.amount} บาท`;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayExpenses);
