import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import userReducer from './userReducer'
import activeIncomeReducer from './activeIncomeReducer'
import usersIncomesReducer from './usersIncomesReducer'
import usersExpensesReducer from './usersExpensesReducer'
import usersBalanceReducer from './usersBalanceReducer'
import activeExpenseReducer from './activeExpenseReducer'

const appReducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    user: userReducer,
    activeIncome: activeIncomeReducer,
    usersIncomes: usersIncomesReducer,
    usersExpenses: usersExpensesReducer,
    usersBalance: usersBalanceReducer,
    activeExpense: activeExpenseReducer
});

export default appReducers