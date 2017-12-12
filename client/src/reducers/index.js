import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import userReducer from './userReducer'
import activeIncomeReducer from './activeIncomeReducer'

const appReducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    user: userReducer,
    activeIncome: activeIncomeReducer
});

export default appReducers