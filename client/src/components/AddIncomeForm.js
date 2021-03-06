import React from 'react';
import {Field, reduxForm} from 'redux-form'

import renderFullRowField from './common/renderFullRowField'
import renderTextArea from './common/renderTextArea'
import DropDownSelect from './common/DropDownSelect'
import renderDateTimePicker from './common/renderDateTimePicker'
import FileInput from '../containers/common/FileInput'

const AddIncomeForm = (props) => {
    const {error, handleSubmit} = props
    const gropus = ["Other", "Work", "Sales", "Rents"]
    const currency = ["BGN", "USD", "EUR"]

    return (
        <div className="main-center-2">
            <form className="form-horizontal x-form">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='form-group'>
                            <label htmlFor="incomeGroup" className='was-2'>Income group:</label>
                            <Field name="incomeGroup" component="select" className="form-control">
                                {gropus.map(DropDownSelect)}
                            </Field>
                        </div>

                        <Field
                            name="value"
                            type="number"
                            component={renderFullRowField}
                            label="Value:"/>

                        <div className='form-group'>
                            <label htmlFor="currency" className='was-2'>Currency:</label>
                            <Field name="currency" component="select" className="form-control">
                                {currency.map(DropDownSelect)}
                            </Field>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="created" className='was-2'>Date:</label>
                            <Field name="created" showTime={false} component={renderDateTimePicker}/>
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                    <div className="col-lg-6">
                        <Field name="description" component={renderTextArea} label="Description:"/> {error && <strong>{error}</strong>}
                        <Field type="file" name="photo" component={FileInput}/>
                        {/* <Field name="photo" component={ImageUpload}/> {error && <strong>{error}</strong>}
                        <ImageUpload/> */}
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
                        className="btn btn-primary btn-lg btn-block login-button was-2 yellow-crusta">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'addIncomeSubmit' // a unique identifier for this form
})(AddIncomeForm)