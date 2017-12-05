import React from 'react';
import {Field, reduxForm} from 'redux-form';

const SimpleForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <div>
                    <Field name="username" component="input" type="text" placeholder="username"/>
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field name="password" component="input" type="password" placeholder="password"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm);
