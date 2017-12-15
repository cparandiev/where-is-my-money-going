import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import AuthenticationPage from './components/AuthenticationPage'
import LoginPage from './containers/LoginUser/LoginPage'
import RegisterForm from './components/RegisterUser/RegisterForm'
import userIsAuthenticated from './utils/common/userIsAuthenticated'
import userIsNotAuthenticated from './utils/common/userIsNotAuthenticated'
import ProfilePage from './components/ProfilePage'
import AddIncomePage from './containers/AddIncomePage'
import IncomeDetails from './components/IncomeDetails'
import IncomesList from './components/IncomesList'
import AddExpensePage from './containers/AddExpensePage'
import ExpensesList from './components/ExpensesList'
import BalancePage from './containers/BalancePage'

const Routes = () => (
    <Switch>
        <Route path='/home' component={HomePage}/>

        <Route exact path='/incomes' component={userIsAuthenticated(IncomesList)}/>
        <Route exact path='/incomes/add' component={userIsAuthenticated(AddIncomePage)}/>
        <Route path='/incomes/:incomeId' component={userIsAuthenticated(IncomeDetails)}/>

        <Route exact path='/profile' component={userIsAuthenticated(ProfilePage)}/>

        <Route exact path='/expenses' component={userIsAuthenticated(ExpensesList)}/>
        <Route exact path='/expenses/add' component={userIsAuthenticated(AddExpensePage)}/>
        
        <Route exact path='/balance' component={userIsAuthenticated(BalancePage)}/>

        <AuthenticationPage path='/users'>
            <Route path='/users/login' component={userIsNotAuthenticated(LoginPage)}/>
            <Route path='/users/register' component={userIsNotAuthenticated(RegisterForm)}/>
        </AuthenticationPage>
    </Switch>
)

export default Routes