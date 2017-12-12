
const initalState = {
    id: null,
    userId: null,
    value: null,
    description: '',
    currency: '',
    created: '',
    incomeGroup: '',
    photoPath: '',
}

function activeIncomeReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_INCOME_PENDING':
            return state
        case 'FETCH_INCOME_FULFILLED':
            return action.payload.data
        case 'FETCH_INCOME_REJECTED':
            return state
        default:
            return state
    }
}

export default activeIncomeReducer