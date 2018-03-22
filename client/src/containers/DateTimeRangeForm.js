import React from 'react';
import {Field, reduxForm} from 'redux-form'

import renderDateTimePicker from '../components/common/renderDateTimePicker'

const DateTimeRangeForm = (props) => {
    const {handleSubmit} = props

    return (
        <div>
            <form className="form-horizontal">
                <div className="row">
                        <div className='form-group'>
                            <label htmlFor="fromDate" className='was-2'>From:</label>
                            <Field name="fromDate" showTime={false} component={renderDateTimePicker}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="toDate" className='was-2'>To:</label>
                            <Field name="toDate" showTime={false} component={renderDateTimePicker}/>
                        </div>
                    
                </div>
                <div
                    className="form-group "
                    style={{
                    marginTop: '40px'
                }}>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        style={{
                        borderRadius: "35px",
                        fontSize: "25px"
                    }}
                        className="btn btn-primary btn-lg btn-block login-button was-2 yellow-crusta">Display</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'dateTimeRangeSubmit' // a unique identifier for this form
})(DateTimeRangeForm)