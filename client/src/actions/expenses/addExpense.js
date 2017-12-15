import axios from 'axios'

const addExpense = (expenseData) => {
    var formData = new FormData()

    for (var name in expenseData) {
        if (name === "photo") {
            formData.append(name, expenseData[name][0])
        } else {
            formData.append(name, expenseData[name])
        }
    }

    return {
        type: 'ADD_EXPENSE',
        payload: axios.post('/expenses', formData)
    }
}

export default addExpense