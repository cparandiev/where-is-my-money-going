import React from 'react'
import {Field, reduxForm} from 'redux-form'
import submit from '../../utils/RegisterUser/submit'
import renderField from '../../components/common/renderField'
import RegisterSubmitBtn from './RegisterSubmitBtn'

const RegisterSubmitForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <div className="main-login main-center">
            <form className="form-horizontal">
                <Field
                    name="firstName"
                    type="text"
                    component={renderField}
                    placeholder='Enter your First Name'
                    label="Your First Name:"/>
                <Field
                    name="lastName"
                    type="text"
                    component={renderField}
                    placeholder='Enter your Last Name'
                    label="Your Last Name:"/>
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    placeholder='Enter your Username'
                    label="Username:"/>
                <Field
                    name="password"
                    type="password"
                    placeholder='Enter your password'
                    component={renderField}
                    label="Password:"/>
                <Field
                    name="confirmPassword"
                    type="password"
                    placeholder='Confirm your password'
                    component={renderField}
                    label="Confirm Password:"/> {error && <strong>{error}</strong>}
                <div className="form-group " style={{marginTop: '40px'}}>
                    <RegisterSubmitBtn onclick={handleSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'registerSubmit' // a unique identifier for this form
})(RegisterSubmitForm)