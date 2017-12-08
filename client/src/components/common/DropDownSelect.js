import React from 'react';

function DropDownSelect(option) {
    return (
        <option key={option} value={option}>{option}</option>
    );
}

export default DropDownSelect;