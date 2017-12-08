const loginUserFailed = (erros) => {

    return {
        type: 'LOGIN_USER_FAILED',
        payload: erros
    }
};

export default loginUserFailed