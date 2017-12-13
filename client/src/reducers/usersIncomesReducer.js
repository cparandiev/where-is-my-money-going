
const initalState = []

function usersIncomesReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS_INCOMES_PENDING':
            return state
        case 'FETCH_USERS_INCOMES_FULFILLED':
            return action.payload.data
        case 'FETCH_USERS_INCOMES_REJECTED':
            return state
        default:
            return state
    }
}

export default usersIncomesReducer