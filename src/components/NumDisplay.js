import React from 'react';

function numDisplay({ currentDisplay }) {


    return (
        <div className="row bigrow">
            <span className="number_display">{currentDisplay}</span>
        </div>
    )
}

export default numDisplay;