import axios from 'axios'

const deleteExpense = (expenseId) => {
    return {
        type: 'DELETE_EXPENSE',
        payload: axios.delete(`/expenses/${expenseId}`),
        meta:{expenseId}
    }
};

export default deleteExpense