const initalState = []

function usersExpensesReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS_EXPENSES_PENDING':
            return state
        case 'FETCH_USERS_EXPENSES_FULFILLED':
            return action.payload.data
        case 'FETCH_USERS_EXPENSES_REJECTED':
            return state

        case 'DELETE_EXPENSE_PENDING':
            return state
        case 'DELETE_EXPENSE_FULFILLED':
            return state.filter(expense => expense.id !== action.meta.expenseId)
        case 'DELETE_EXPENSE_REJECTED':
            return state
        
        case 'ADD_EXPENSE_PENDING':
            return state
        case 'ADD_EXPENSE_FULFILLED':
            return [...state, action.payload.data]
        case 'ADD_EXPENSE_REJECTED':
            return state

        default:
            return state
    }
}

export default usersExpensesReducer