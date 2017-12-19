import axios from 'axios'

const selectExpense = (expense) => {
    return {
        type: 'FETCH_EXPENSE',
        payload: axios.get(`/expenses/${expense}`)
    }
};

export default selectExpense