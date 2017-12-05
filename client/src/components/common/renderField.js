import React from 'react'

const renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: {
        touched,
        error
    }
}) => (
    <div className='form-group'>
        <label className="cols-sm-2 control-label">{label}</label>
        <div className="cols-sm-10">
            <div className="input-group">
                <input {...input} placeholder={placeholder} type={type} className="form-control"/> {touched && error && <span>{error}</span>}
            </div>
        </div>
    </div>
)

export default renderField