import React from 'react';
import {Field, reduxForm} from 'redux-form'

import renderFullRowField from './common/renderFullRowField'
import renderTextArea from './common/renderTextArea'
import ImageUpload from '../containers/common/ImageUpload'
import DropDownSelect from './common/DropDownSelect'
import RenderDateTimePicker from './common/renderDateTimePicker'

const IncomesPage = (props) => {
    const {error, handleSubmit} = props
    const gropus = ["Work", "Sales", "Rents"]
    const currency = ["BGN", "USD", "EUR"]

    return (
        <div className="main-center-2">
            <form className="form-horizontal">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='form-group'>
                            <label htmlFor="dropDownSelect" className='was'>Income group:</label>
                            <Field name="dropDownSelect" component="select" className="form-control">
                                {gropus.map(DropDownSelect)}
                            </Field>
                        </div>
                        <Field
                            name="username"
                            type="number"
                            component={renderFullRowField}
                            label="Value:"/>
                        <div className='form-group'>
                            <label htmlFor="dropDownSelect2" className='was'>Currency:</label>
                            <Field name="dropDownSelect2" component="select" className="form-control">
                                {currency.map(DropDownSelect)}
                            </Field>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="date" className='was'>Date:</label>
                            <Field
                                name="username"
                                type="date"
                                component={RenderDateTimePicker}
                                label="Username:"/>
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                    <div className="col-lg-6">
                        <Field name="password" component={renderTextArea} label="Description:"/> {error && <strong>{error}</strong>}
                        <ImageUpload/>
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
                        backgroundColor: "#0c7162",
                        fontSize: "25px"
                    }}
                        className="btn btn-primary btn-lg btn-block login-button was">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'addIncomeSubmit' // a unique identifier for this form
})(IncomesPage)