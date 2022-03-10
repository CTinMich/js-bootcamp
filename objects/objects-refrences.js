let myAccount = {
  name:'Chris Thomas',
  expenses: 0,
  income: 0
}

let addIncome = function (account, amount) {
  account.income = account.income + amount
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income.  $${myAccount.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))