
const initalState = {
    id: null,
    userId: null,
    value: null,
    description: '',
    currency: '',
    created: '',
    expenseGroup: '',
    photoPath: ''
}

function activeExpenseReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_EXPENSE_PENDING':
            return state
        case 'FETCH_EXPENSE_FULFILLED':
            return action.payload.data
        case 'FETCH_EXPENSE_REJECTED':
            return state
        default:
            return state
    }
}

export default activeExpenseReducer