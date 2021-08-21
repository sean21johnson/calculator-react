import React from 'react';

function DecimalButton({ classList, onDecimalClick, value }) {


	return (
		<button className={classList} onClick={() => onDecimalClick(value)}>
			{value}
		</button>
	);
}

export default DecimalButton;