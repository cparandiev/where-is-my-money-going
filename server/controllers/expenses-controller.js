const Expense = require('mongoose').model('Expense')

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
                        movePhoto(photo, expense.id, 'client/build/images', photoFormat)
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
        let userId = req.params.userID
        //TODO Add validations!

        Expense.find({
            'userId': userId
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