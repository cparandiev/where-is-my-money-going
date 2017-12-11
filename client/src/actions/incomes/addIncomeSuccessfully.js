const addIncomeSuccessfully = (incomeData) => {
    return {
        type: 'ADD_INCOME_SUCCESSFULLY',
        payload: incomeData
    }
};

export default addIncomeSuccessfully