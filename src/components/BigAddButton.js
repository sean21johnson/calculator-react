import React from "react";

function BigAddButton({ classList, onNumClick, value }) {
	return (
		<button className={classList} onClick={() => onNumClick("+")}>
			{value}
		</button>
	);
}

export default BigAddButton;
