import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import AuthenticationPage from './components/AuthenticationPage'
import LoginForm from './components/LoginUser/LoginForm'
import RegisterForm from './components/RegisterUser/RegisterForm'

const Routes = () => (
    <Switch>
        <Route path='/home' component={HomePage}/>
        <AuthenticationPage path='/users'>
            <Route path='/users/login' component={LoginForm}/>    
            <Route path='/users/register' component={RegisterForm}/>    
        </AuthenticationPage>
    </Switch>
)

export default Routes