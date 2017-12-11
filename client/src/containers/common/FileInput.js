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
        <div>
            <label htmlFor={input.name}>
                Choose File from your Computer
                <input {...input} type={type}/>
            </label>
        </div>
    )
}

export default field_file