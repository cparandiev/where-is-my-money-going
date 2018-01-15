import {toast} from 'react-toastify';

function userReducer(state = null, action) {
    switch (action.type) {
        case 'REGISTER_USER_FULFILLED':
            toast('Successfully register!', {className: 'green-toast', autoClose: 3000})
            var newState = Object.assign({}, state);

            newState.id = action.payload.data.id
            newState.username = action.payload.data.username
            newState.roles = action.payload.data.roles
            
            return newState
        case 'LOGIN_USER_SUCCESSFULLY':
            toast('Successfully login!', {className: 'green-toast', autoClose: 3000})
            var newState = Object.assign({}, state);

            newState.id = action.payload.id
            newState.username = action.payload.username
            newState.roles = action.payload.roles
            
            return newState
        case 'LOGIN_USER_FAILED':
            toast('Wrong username or password!', { className: 'red-toast', autoClose: 3000})
        
            return state;
        case 'LOGOUT_USER':
            toast('Successfully logout!', {className: 'green-toast', autoClose: 3000})
        
            return null;
        default:
            return state;
    }
}

export default userReducer