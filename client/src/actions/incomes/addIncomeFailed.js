const addIncomeFailed = (erros) => {
    return {
        type: 'ADD_INCOME_FAILED',
        payload: erros
    }
};

export default addIncomeFailed