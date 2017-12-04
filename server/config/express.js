const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app) => {
  app.use(express.static('public'))

  app.use(cookieParser())

  app.use(bodyParser.json())

  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }))
  
  app.use(passport.initialize())
  app.use(passport.session())
  
  console.log('Express ready!')
}
