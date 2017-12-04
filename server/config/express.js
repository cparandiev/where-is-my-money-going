const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(express.static('public'))
  app.use(cookieParser())
  app.use(bodyParser.json())  
  
}
