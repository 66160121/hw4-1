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
        li.innerHTML = `${exp.date} - ${exp.title} (${exp.category}): ${exp.amount} บาท ` +
            `<span class='edit-btn' onclick='editExpense(${exp.id})'>[แก้ไข]</span>` +
            `<span class='delete-btn' onclick='deleteExpense(${exp.id})'>[ลบ]</span>`;
        list.appendChild(li);
    });
}

function editExpense(id) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let expense = expenses.find(exp => exp.id === id);
    if (expense) {
        document.getElementById('title').value = expense.title;
        document.getElementById('amount').value = expense.amount;
        document.getElementById('category').value = expense.category;
        document.getElementById('date').value = expense.date;
        deleteExpense(id);
    }
}

function deleteExpense(id) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

document.addEventListener('DOMContentLoaded', displayExpenses);
