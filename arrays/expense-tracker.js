const account = {
  name: 'Chris Thomas',
  expenses: [],
  income: [],
  addExpenses: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount
    })
    this.income.forEach(function (income) {
      totalIncome += income.amount
    })
    return `${this.name} has a balance of $${totalIncome - totalExpenses}.  $${totalIncome} in income.  $${totalExpenses} in expenses.`
  } 
}

// Expenses -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Chris Thomas has $1250 in expenses.

// 1. add income arrary to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Chris Thomas has a balance of $10.  $100 in Income.  $90 in expenses.

account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('Job1', 3000)
account.addIncome('Job2', 250)
console.log(account.getAccountSummary())
// console.log(account)

