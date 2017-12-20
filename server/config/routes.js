const controllers = require('../controllers')
const auth = require('../utilities/auth')

module.exports = (app) => {
  // users controller
  app.post('/users/register', controllers.users.registerPost)
  app.post('/users/login', controllers.users.loginPost)
  
  // incomes controller
  app.post('/incomes', controllers.incomes.addPost)
  app.get('/incomes/:id', controllers.incomes.getByID)
  app.delete('/incomes/:id', controllers.incomes.deleteByID)
  app.put('/incomes/:id', controllers.incomes.updateByID)
  app.get('/users/:userID/incomes', controllers.incomes.getByUserID)

  // expenses controller
  app.post('/expenses', controllers.expenses.addPost)
  app.get('/users/:userID/expenses', controllers.expenses.getByUserID)
  app.delete('/expenses/:id', controllers.expenses.deleteByID)
  app.get('/expenses/:id', controllers.expenses.getByID)

  // balance controller
  app.get('/users/:userID/balance', controllers.balances.getByUserID)

  app.all('*', (req, res) => {
    res.redirect('/')
    res.end()
  })
}
