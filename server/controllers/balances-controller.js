const Expense = require('mongoose').model('Expense')
const Income = require('mongoose').model('Income')

const extractFrom = require('../utilities/extractFrom')
const getItemsByDate = require('../utilities/getItemsByDate')
const addDays = require('../utilities/addDays')
const sendSuccessfulResponse = require('../utilities/sendSuccessfulResponse')
const sendSuccessfulResponseWithData = require('../utilities/sendSuccessfulResponseWithData')

module.exports = {
    getByUserID: (req, res) => {
        //TODO Add validations!

        let from = req.query.from == null ?
            new Date(-8640000000000000) :
            new Date(req.query.from)

        let to = req.query.to == null ?
            new Date(8640000000000000) :
            new Date(req.query.to)

        let userId = req.params.userID

        const incomes = Income.find({
            'userId': userId,
            'created': {
                '$gte': from,
                '$lte': to
            }
        })

        const expenses =  Expense.find({
            'userId': userId,
            'created': {
                '$gte': from,
                '$lte': to
            }
        })
        
        Promise.all([incomes, expenses]).then(values => {
            let balance = Object.create(null)
            for (var i = from; i <= to; i = addDays(i, 1)) {
                let dayIncomes = getItemsByDate(values[0], i, 'created')
                let dayExpenses = getItemsByDate(values[1], i, 'created')
                
                balance[i.setHours(0, 0, 0, 0)] = {
                    income: dayIncomes.reduce((a, b) => a + b.value, 0),
                    expense: dayExpenses.reduce((a, b) => a + b.value, 0)
                }
            }

            sendSuccessfulResponseWithData(res, balance)
        })

        // Income.find({
        //     'userId': userId,
        //     "created": {
        //         "$gte": from,
        //         "$lte": to
        //     }
        // }).then(incomes => {
        //     let resData = incomes.map((income, index) => {
        //         return extractFrom(income)('id', 'value', 'description', 'currency', 'incomeGroup', 'created');
        //     })

        //     let incomesValue = Object.create(null)

        //     //TODO To calculate with the coefficient for the currency
        //     for (var i = from; i <= to; i = addDays(i, 1)) {
        //         let dayIncomes = getItemsByDate(incomes, i, 'created')
        //         //resData2[i.setHours(0, 0, 0, 0)] = dayIncomes.map(income => income.value)
        //         incomesValue[i.setHours(0, 0, 0, 0)] = dayIncomes.reduce((a, b) => a + b.value, 0)
        //     }

        //     return new Promise((resolve) => {
        //         resolve(incomesValue)
        //     })
        //     sendSuccessfulResponseWithData(res, incomesValue)
        // }).then(incomesValue => {
        //     Expense.find({
        //         'userId': userId
        //     }.then((expenses) =>{

        //         return new Promise({incomesValue, expenses})
        //     })
        // })
    }
}