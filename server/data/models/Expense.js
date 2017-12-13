const mongoose = require('mongoose')

let expenseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    expenseGroup: {
        type: String,
        default: 'Other' 
    },
    created: { 
        type: Date, 
        default: Date.now 
    },
    value: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'BGN'
    },
    description: String,
    photoPath: String
})

let Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense