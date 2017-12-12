import React from 'react'

const field_file = ({
    input,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => {
    delete input.value

    return (
        <div className='form-group'>
            <label htmlFor={input.name} className='control-label was-2'>
                Select a photo from your device:
            </label>
            <div className="input-group">
                <input className="form-control" {...input} type={type}/>
            </div>
        </div>
    )
}

export default field_file
