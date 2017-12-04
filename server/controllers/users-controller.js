const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')

module.exports = {
    registerPost: (req, res) => {
        let reqUser = req.body
        // Add validations!

        let salt = encryption.generateSalt()
        let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

        User.create({
            username: reqUser.username,
            firstName: reqUser.firstName,
            lastName: reqUser.lastName,
            salt: salt,
            hashedPass: hashedPassword
        }).then(user => {
            req.logIn(user, (err, user) => {
                if (err) { // passport error
                    console.log(err)
                }

                res.redirect('/')
            })
        })
    },
    loginPost: (req, res) => {
        let reqUser = req.body
        User.findOne({
                username: reqUser.username
            }).then(user => {
                if (!user) { // unexisting username
                    console.log('Invalid user data')
                    return
                }

                if (!user.authenticate(reqUser.password)) { // invalid password
                    console.log('Invalid user data')
                    return
                }

                req.logIn(user, (err, user) => { 
                    if (err) {  // passport error
                        console.log(err)
                    }

                    res.redirect('/')
                })
            })
    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')
    }
}