const mongoose = require('mongoose')
const models = require('../data/models')

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

        models.User.seedAdminUser()
    })

    db.on('error', err => console.log(`Database error: ${err}`))
}