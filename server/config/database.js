const mongoose = require('mongoose')
const User = require('../data/models/User')

mongoose.Promise = global.Promise

module.exports = (settings) => {
    mongoose.connect(settings.db)
    const db = mongoose.connection

    db.once('open', err => {
        if (err) {
            throw err
            return
        }

        console.log('MongoDB ready!')

        User.seedAdminUser()
    })

    db.on('error', err => console.log(`Database error: ${err}`))
}