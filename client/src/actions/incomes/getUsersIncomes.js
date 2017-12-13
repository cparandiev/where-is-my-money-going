import axios from 'axios'

const getUsersIncomes = (userId) => {
    return {
        type: 'FETCH_USERS_INCOMES',
        payload: axios.get(`/users/${userId}/incomes`)
    }
};

export default getUsersIncomes