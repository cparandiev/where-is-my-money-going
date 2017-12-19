import React from 'react'
import {Field, reduxForm} from 'redux-form'

import renderField from '../common/renderField'

const LoginSubmitForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <div className="main-login main-center">
            <form className="form-horizontal">
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
                <div
                    className="form-group "
                    style={{
                    marginTop: '40px'
                    }}>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg btn-block login-button yellow-crusta">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'loginSubmit' // a unique identifier for this form
})(LoginSubmitForm)