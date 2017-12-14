const users = require('./users-controller')
const incomes = require('./incomes-controller')
const expenses = require('./expenses-controller')
const balances = require('./balances-controller')

module.exports = {
  users: users,
  incomes: incomes,
  expenses: expenses,
  balances: balances
}
