const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const fileUpload = require('express-fileupload');
const path = require('path')

const distPath = path.join(__dirname, '../../client/build');

module.exports = (app) => {
  
  app.use(express.static(distPath))

  app.use(cookieParser())
  
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: false,
    saveUninitialized: false
  }))
  
  app.use(passport.initialize())
  app.use(passport.session())
  
  app.use(fileUpload())

  console.log('Express ready!')
}
