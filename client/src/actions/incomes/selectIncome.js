import axios from 'axios'

const selectIncome = (incomeId) => {
    return {
        type: 'FETCH_INCOME',
        payload: axios.get(`/incomes/${incomeId}`)
    }
};

export default selectIncome