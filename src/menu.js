import React from "react";
import SeafoodItem from "./seafood-item";

const Menu = ({ seafoodItems }) => {
	const seafood = seafoodItems.map(food => {
		return <SeafoodItem food={food} key={food.name} />;
	});

	return (
		<div className="Menu container mb-5">
			<a name="menu" />
			<h1>Sea Food</h1>
			{seafood}
		</div>
	);
};

export default Menu;
