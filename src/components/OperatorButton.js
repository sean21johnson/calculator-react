import React from 'react';

function OperatorButton({ classList, value, onOperatorClick }) {


    return (
        <button className={classList} onClick={() => onOperatorClick(value)}>{value}</button>
    )
}

export default OperatorButton;