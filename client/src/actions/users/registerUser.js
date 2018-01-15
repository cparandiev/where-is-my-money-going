import axios from 'axios'

const registerUser = (userData) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`/users/register`,{
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: userData.password
        })
    }
};

export default registerUser