import addIncomeSuccessfully from './addIncomeSuccessfully'
import addIncomeFailed from './addIncomeFailed'

const addIncome = (incomeData) => {
    return dispatch => {
        var formData = new FormData()

        console.log(incomeData)
        
        for (var name in incomeData) {
            if(name === "photo"){
                formData.append(name, incomeData[name][0])
            }
            else{
                formData.append(name, incomeData[name])
            }
        }

        fetch('/incomes', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => {
            return response.json()
        }).then((body) => {
            dispatch(addIncomeSuccessfully(body))
        }).catch((errors) => {
            dispatch(addIncomeFailed(errors))
        })
    }
};

export default addIncome