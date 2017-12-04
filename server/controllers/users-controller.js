const User = require('mongoose').model('User')

const encryption = require('../utilities/encryption')
const extractFrom = require('../utilities/extractFrom')

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

                let resData = extractFrom(req.user)('id', 'username', 'roles');

                res.setHeader('Content-Type', 'application/json');
                res.send(resData);
                res.end()
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

                    let resData = extractFrom(req.user)('id', 'username', 'roles');
    
                    res.setHeader('Content-Type', 'application/json');
                    res.send(resData);
                    res.end()
                })
            })
    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')
    }
}