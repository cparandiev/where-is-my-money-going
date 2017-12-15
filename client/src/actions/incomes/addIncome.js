import axios from 'axios'

const addIncome = (incomeData) => {
    var formData = new FormData()

    for (var name in incomeData) {
        if (name === "photo") {
            formData.append(name, incomeData[name][0])
        } else {
            formData.append(name, incomeData[name])
        }
    }

    return {
        type: 'ADD_INCOME',
        payload: axios.post('/incomes', formData)
    }
}

export default addIncome