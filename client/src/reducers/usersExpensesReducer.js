import {toast} from 'react-toastify'
const initalState = {data: [], redirectToPage: null}

function usersExpensesReducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS_EXPENSES_PENDING':
            return state
        case 'FETCH_USERS_EXPENSES_FULFILLED':
            return {data: action.payload.data, redirectToPage: null}
        case 'FETCH_USERS_EXPENSES_REJECTED':
            return state

        case 'DELETE_EXPENSE_PENDING':
            return state
        case 'DELETE_EXPENSE_FULFILLED':
            toast('Successfully deleted expense!', {className: 'green-toast', autoClose: 3000})
            return {data: state.data.filter(expense => expense.id !== action.meta.expenseId), redirectToPage: null}
        case 'DELETE_EXPENSE_REJECTED':
            return state
        
        case 'ADD_EXPENSE_PENDING':
            return state
        case 'ADD_EXPENSE_FULFILLED':
            toast('Successfully added expense!', {className: 'green-toast', autoClose: 3000})
            return {data: [...state.data, action.payload.data], redirectToPage: '/expenses'}
        case 'ADD_EXPENSE_REJECTED':
            return state

        default:
            return state
    }
}

export default usersExpensesReducer