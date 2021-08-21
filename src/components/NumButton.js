import React from "react";

function NumButton({ value, classList, onNumClick }) {
	return (
		<button className={classList} onClick={() => onNumClick(value)}>
			{value}
		</button>
	);
}

export default NumButton;
