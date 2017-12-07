import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import userReducer from './userReducer'

const appReducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    user: userReducer
});

export default appReducers