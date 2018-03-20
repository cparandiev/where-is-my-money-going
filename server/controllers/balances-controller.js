const Expense = require('mongoose').model('Expense')
const Income = require('mongoose').model('Income')
const Rx = require('rxjs/Rx')
const axios = require('axios')

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

        /*const incomes = Income.find({
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
        })*/

        const fetchUserIncomes = Income.find({
            'userId': userId,
            'created': {
                '$gte': from,
                '$lte': to
            }
        })

        const fetchUserExpenses =  Expense.find({
            'userId': userId,
            'created': {
                '$gte': from,
                '$lte': to
            }
        })

        const fetchCurrencyRates = axios.get('http://data.fixer.io/api/latest?access_key=a690d368624180fc163fe6e34a78fe62&base=EUR&symbols=USD,%20BGN');

        var userExpenses = Rx.Observable.fromPromise(fetchUserExpenses)
        var userIncomes = Rx.Observable.fromPromise(fetchUserIncomes)
        var currencyRatesBaseOnEuro = Rx.Observable.fromPromise(fetchCurrencyRates)
        var currencyRatesResult = Object.create(null)

        var userExpensesAndIncomes = Rx.Observable
            .forkJoin(userExpenses, userIncomes, currencyRatesBaseOnEuro)
            .flatMap(([userExpenses, userIncomes, currencyRates]) => {
                let temp = currencyRates.data;
                currencyRatesResult.EUR = 1;
                currencyRatesResult.USD = temp.rates.USD;
                currencyRatesResult.BGN = temp.rates.BGN;


                return Rx.Observable.from(userExpenses.concat(userIncomes))
            })
            .map(el => {
                return {
                    created: el.created, 
                    type: el.expenseGroup ? 'expense' : 'income',
                    value: el.value / currencyRatesResult[el.currency],
                }
            })
            .startWith(Object.create(null))
            .reduce((acc, el) => {
                let key = el.created.setHours(0, 0, 0, 0)

                let sybKey = el.type                
                let otherSubKey = el.type === 'expense' ? 'income' : 'expense'

                acc[key] = acc[key] ? acc[key] : Object.create(null)

                acc[key][sybKey] = acc[key][sybKey] ? acc[key][sybKey] + el.value : el.value
                
                acc[key][otherSubKey] = acc[key][otherSubKey] ? acc[key][otherSubKey] : 0
                        
                return Object.assign(Object.create(null), acc)
            })
            .subscribe(balance => sendSuccessfulResponseWithData(res, balance))
    }
}