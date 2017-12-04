const controllers = require('../controllers')
const auth = require('../utilities/auth')

module.exports = (app) => {
  app.post('/users/register', controllers.users.registerPost)
  app.post('/users/login', controllers.users.loginPost)
  
  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
