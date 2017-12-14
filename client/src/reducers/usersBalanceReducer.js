const initalState = []

function usersBalanceReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS_BALANCE_PENDING':
            return state
        case 'FETCH_USERS_BALANCE_FULFILLED':
            return action.payload.data
        case 'FETCH_USERS_BALANCE_REJECTED':
            return state


        default:
            return state
    }
}

export default usersBalanceReducer