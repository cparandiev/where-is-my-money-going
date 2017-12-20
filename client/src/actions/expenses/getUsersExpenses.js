import axios from 'axios'

const getUsersExpenses = (userId, from, to) => {
    return {
        type: 'FETCH_USERS_EXPENSES',
        payload: axios.get(`/users/${userId}/expenses`,{
            params:{
                from,
                to
            }
        })
    }
};

export default getUsersExpenses