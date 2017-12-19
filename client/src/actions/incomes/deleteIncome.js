import axios from 'axios'

const deleteIncome = (incomeId) => {
    return {
        type: 'DELETE_INCOME',
        payload: axios.delete(`/incomes/${incomeId}`),
        meta:{incomeId}
    }
};

export default deleteIncome