import {toast} from 'react-toastify';

function userReducer(state = null, action) {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESFULLY':
            toast('Successfully login!', {className: 'green-toast', autoClose: 300000})
            var newState = Object.assign({}, state);

            newState.id = action.payload.id
            newState.username = action.payload.username
            newState.roles = action.payload.roles
            
            return newState
        case 'LOGIN_USER_FAILED':
            toast('Wrong username or password!', { className: 'red-toast', autoClose: 300000})
        
            return state;
        default:
            return state;
    }
}

export default userReducer