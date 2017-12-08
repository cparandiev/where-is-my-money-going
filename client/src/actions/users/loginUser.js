import loginUserSuccessfully from './loginUserSuccessfully'
import loginUserFailed from './loginUserFailed'

const loginUser = (userData) => {
    return dispatch => {
        fetch('/users/login', {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            return response.json()
        })
        .then((body) => {
            dispatch(loginUserSuccessfully(body))
        })
        .catch((errors) => {
            dispatch(loginUserFailed(errors))
        })
    }
};

export default loginUser