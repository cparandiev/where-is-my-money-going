import React, {Component} from 'react'

import RegisterSubmitForm from '../../containers/RegisterUser/RegisterSubmitForm'
import registerUser from '../../actions/users/registerUser'


class RegisterForm extends Component{
    handleSubmit(data) {
        this.props.dispatch(registerUser(data));
    }
    
    render(){
        return(
            <div>
                <RegisterSubmitForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

export default RegisterForm;
