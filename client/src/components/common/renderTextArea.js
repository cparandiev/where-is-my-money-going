import React from 'react'

const renderTextArea = ({
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
        <label className="cols-sm-2 control-label was-2">{label}</label>
        <div className="cols-sm-12">
            <div className="input-group">
                <textarea {...input} className="form-control" rows="9" />{touched && error && <span>{error}</span>}
            </div>
        </div>
    </div>
)

export default renderTextArea