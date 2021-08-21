import React from 'react';

function AcButton({ classList, value, onAcClick }) {


    return (
        <button className={classList} onClick={() => onAcClick(value)}>{value}</button>
    )
}

export default AcButton;