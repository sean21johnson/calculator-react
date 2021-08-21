import React from 'react';

function EqualButton({ classList, value, onEquationClick }) {

	return (
		<button className={classList} onClick={() => onEquationClick(value)}>
			{value}
		</button>
	);
}

export default EqualButton;