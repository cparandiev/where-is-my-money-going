import axios from 'axios'

const getUsersIncomes = (userId, from, to) => {
    return {
        type: 'FETCH_USERS_INCOMES',
        payload: axios.get(`/users/${userId}/incomes`,{
            params:{
                from,
                to
            }
        })
    }
};

export default getUsersIncomes