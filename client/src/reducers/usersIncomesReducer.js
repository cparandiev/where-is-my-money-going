import {toast} from 'react-toastify'
const initalState = {data: [], redirectToPage: null}

function usersIncomesReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS_INCOMES_PENDING':
            return state
        case 'FETCH_USERS_INCOMES_FULFILLED':
            return {data: action.payload.data, redirectToPage: null}
        case 'FETCH_USERS_INCOMES_REJECTED':
            return state

        case 'ADD_INCOME_PENDING':
            toast('Successfully added income!', {className: 'green-toast', autoClose: 3000})
            return state
        case 'ADD_INCOME_FULFILLED':
            return {data: [...state.data], redirectToPage: '/incomes'}
        case 'ADD_INCOME_REJECTED':
            return state
        
        case 'DELETE_INCOME_PENDING':
            return state
        case 'DELETE_INCOME_FULFILLED':
            toast('Successfully deleted income!', {className: 'green-toast', autoClose: 3000})
            return {data: state.data.filter(income => income.id !== action.meta.incomeId), redirectToPage: null}
        case 'DELETE_INCOME_REJECTED':
            return state
            
        default:
            return state
    }
}

export default usersIncomesReducer