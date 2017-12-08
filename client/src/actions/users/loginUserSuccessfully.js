const loginUserSuccessfully = (userData) => {
    return {
        type: 'LOGIN_USER_SUCCESSFULLY',
        payload: userData
    }
};

export default loginUserSuccessfully