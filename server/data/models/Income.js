const mongoose = require('mongoose')

let incomeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    incomeGroup: {
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

let Income = mongoose.model('Income', incomeSchema)

module.exports = Income