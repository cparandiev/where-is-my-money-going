import React from 'react'
import {Field, reduxForm} from 'redux-form'
import submit from '../../utils/LoginUser/submit'
import renderField from '../../components/common/renderField'
import LoginSubmitBtn from '../../containers/LoginUser/LoginSubmitBtn'

const LoginSubmitForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <div className="main-login main-center">
            <form onSubmit={handleSubmit} className="form-horizontal">
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    placeholder='Enter your username'
                    label="Username:"/>
                <Field
                    name="password"
                    type="password"
                    placeholder='Enter your password'
                    component={renderField}
                    label="Password:"/> {error && <strong>{error}</strong>}
                <div className="form-group " style={{marginTop: '40px'}}>
                    <LoginSubmitBtn/>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'loginSubmit', // a unique identifier for this form
    onSubmit: submit // submit function must be passed to onSubmit
})(LoginSubmitForm)