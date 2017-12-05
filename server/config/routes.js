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

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}