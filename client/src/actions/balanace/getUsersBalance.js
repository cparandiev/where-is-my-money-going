import axios from 'axios'

const getUsersBalance = (userId, from, to) => {
    return {
        type: 'FETCH_USERS_BALANCE',
        payload: axios.get(`/users/${userId}/balance`,{
            params:{
                from,
                to
            }
        })
    }
};

export default getUsersBalance