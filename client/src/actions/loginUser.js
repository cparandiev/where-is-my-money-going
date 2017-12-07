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
            dispatch({
                type: 'LOGIN_USER_SUCCESFULLY',
                payload: body
            })
        })
        .catch((err) => {
            dispatch({
                type: 'LOGIN_USER_FAILED',
                payload: err
            })
        })
    }
};

export default loginUser