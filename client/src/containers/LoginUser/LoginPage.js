import React, {Component} from 'react'
import {connect} from 'react-redux';

import LoginSubmitForm from '../../components/LoginUser/LoginSubmitForm'
import loginUser from '../../actions/users/loginUser'

export class LoginPage extends Component {

    handleSubmit(data) {
        console.log('Submission received!', data);
        this.props.dispatch(loginUser(data)); // clear form
    }

    render() {
        return (
            <div>
                <LoginSubmitForm
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}/>
            </div>
        )
    }
}

export default connect()(LoginPage);
