import React from "react";

const SeafoodItem = ({ food }) => {
	const { name, price } = food;

	return (
		<div className="card">
			<dl>
				<dt className="SeafoodItem">{name}</dt>
				<dd className="seafoodPrice">{price}</dd>
			</dl>
		</div>
	);
};

export default SeafoodItem;
