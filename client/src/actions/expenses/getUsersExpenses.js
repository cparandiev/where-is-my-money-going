import axios from 'axios'

const getUsersExpenses = (userId) => {
    return {
        type: 'FETCH_USERS_EXPENSES',
        payload: axios.get(`/users/${userId}/expenses`)
    }
};

export default getUsersExpenses