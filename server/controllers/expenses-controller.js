const Expense = require('mongoose').model('Expense')
const path = require('path')

const distPath = path.join(__dirname, '../../client/build/images/');
const Constants = require('../utilities/constants')
const extractFrom = require('../utilities/extractFrom')
const movePhoto = require('../utilities/movePhoto')
const sendSuccessfulResponse = require('../utilities/sendSuccessfulResponse')
const sendSuccessfulResponseWithData = require('../utilities/sendSuccessfulResponseWithData')

const createExpense = (expenseData, userId) => {
    return {
        userId: userId,
        expenseGroup: expenseData.expenseGroup,
        created: expenseData.created,
        value: expenseData.value,
        currency: expenseData.currency,
        description: expenseData.description
    }
}

module.exports = {
    addPost: (req, res) => {
        //TODO Add validations!
        let newExpense = createExpense(req.body, req.user.id)

        Expense.create(newExpense).then(expense => {
                const resData = extractFrom(expense)('id', 'value', 'description', 'currency', 'expenseGroup', 'created');
                sendSuccessfulResponseWithData(res, resData)

                if (req.files && req.files.photo) {
                    let photo = req.files.photo
                    let photoFormat = photo.mimetype.split('/')[1]

                    //TODO to expose newPhotoDir from constans
                    return new Promise((resolve) => {
                        movePhoto(photo, expense.id, distPath, photoFormat)
                            .then(() => resolve({expense, photoFormat }))
                    })
                }
            }).then(({ expense, photoFormat }) => {
                expense.photoPath = `/images/${expense.id}.${photoFormat}`
                return expense.save()
            })
            .catch(err => console.log(err))
    },
    getByUserID: (req, res) => {
        //TODO Add validations!

        let from = req.query.from == null ?
            new Date(-8640000000000000) :
            new Date(req.query.from)

        let to = req.query.to == null ?
            new Date(8640000000000000) :
            new Date(req.query.to)
        let userId = req.params.userID

        Expense.find({
            'userId': userId,
            'created': {
                '$gte': from,
                '$lte': to
            }
        }).then(expenses => {
            let resData = expenses.map((expense, index) => {
                return extractFrom(expense)('id', 'value', 'description', 'currency', 'expenseGroup', 'created');
            })

            sendSuccessfulResponseWithData(res, resData)
        })
    },
    getByID: (req, res) => {
        let expenseId = req.params.id

        Expense.findById(expenseId)
            .then(expense => {
                let resData = extractFrom(expense)('id', 'userId', 'value', 'description', 'photoPath', 'currency', 'expenseGroup', 'created');

                sendSuccessfulResponseWithData(res, resData)
            })
    },
    deleteByID: (req, res) => {
        let expenseID = req.params.id

        Expense.findByIdAndRemove(expenseID)
            .then(expense => {
                // Successfully deleted expense
                sendSuccessfulResponse(res, Constants.SuccessfullyDeletedMessage)
            })
    },
}