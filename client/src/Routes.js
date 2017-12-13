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

const Routes = () => (
    <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/test' component={IncomesList}/>

        <Route path='/incomes/add' component={AddIncomePage}/>
        <Route path='/incomes/:incomeId' component={IncomeDetails}/>
        <Route path='/profile' component={userIsAuthenticated(ProfilePage)}/>

        <AuthenticationPage path='/users'>
            <Route path='/users/login' component={userIsNotAuthenticated(LoginPage)}/>
            <Route path='/users/register' component={RegisterForm}/>    
        </AuthenticationPage>
    </Switch>
)

export default Routes