const Income = require('mongoose').model('Income')

const Constants = require('../utilities/constants')
const extractFrom = require('../utilities/extractFrom')

module.exports = {
    addPost: (req, res) => {
        let reqIncome = req.body
        //TODO Add validations!

        Income.create({
            userId: req.user.id,
            incomeGroup: reqIncome.incomeGroup,
            created: reqIncome.created,
            value: reqIncome.value,
            currency: reqIncome.currency,
            description: reqIncome.description
        }).then(income => {
            // Successfully added income
            if (req.files) {
                let photo = req.files.photo
                let photoFormat = photo.mimetype.split('/')[1];
                photo.mv(`client/build/images/${income.id}.${photoFormat}`, function (err) {
                    if (err) {
                        console.log(err)
                        return
                    }
                    income.photoPath = `/images/${income.id}.${photoFormat}`
                    income.save().catch(err => console.log(err))
                });
            }
            let resData = {
                hasErrors: false,
                message: Constants.SuccessfullyAddedMessage
            }

            res.setHeader('Content-Type', 'application/json');
            res.send(resData);
            res.end()
        })
    },

    getByUserID: (req, res) => {
        let userId = req.params.userID
        //TODO Add validations!

        Income.find({
            'userId': userId
        }).then(incomes => {
            let resData = incomes.map((income, index) => {
                return extractFrom(income)('id', 'value', 'description', 'photoPath', 'currency', 'incomeGroup');
            })

            res.setHeader('Content-Type', 'application/json');
            res.send(resData);
            res.end()
        })
    },

    getByID: (req, res) => {
        let incomeID = req.params.id

        Income.findById(incomeID)
            .then(income => {
                let resData = extractFrom(income)('id', 'userId', 'value', 'description', 'photoPath', 'currency', 'incomeGroup');

                res.setHeader('Content-Type', 'application/json');
                res.send(resData);
                res.end()
            })
    },

    deleteByID: (req, res) => {
        let incomeID = req.params.id

        Income.findByIdAndRemove(incomeID)
            .then(income => {
                // Successfully deleted income
                let resData = {
                    hasErrors: false,
                    message: Constants.SuccessfullyDeletedMessage
                }

                res.setHeader('Content-Type', 'application/json');
                res.send(resData);
                res.end()
            })
    },

    updateByID: (req, res) => {
        let incomeID = req.params.id
        let reqIncome = req.body

        let newIncome = {
            incomeGroup: reqIncome.incomeGroup,
            created: reqIncome.created,
            value: reqIncome.value,
            currency: reqIncome.currency,
            description: reqIncome.description,
            photoPath: reqIncome.photoPath
        }

        Income.findByIdAndUpdate(incomeID, newIncome)
            .then(income => {
                // Successfully updated income
                let resData = {
                    hasErrors: false,
                    message: Constants.SuccessfullyUpdatedMessage
                }

                res.setHeader('Content-Type', 'application/json');
                res.send(resData);
                res.end()
            })
    }
}