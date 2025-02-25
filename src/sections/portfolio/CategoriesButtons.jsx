import React from "react";

const CategoriesButtons = ({
	categoryNewProps,
	classNamedPortfolioProps,
	onChangeCategory,
}) => {
	return (
		<button
			className={classNamedPortfolioProps}
			onClick={() => {
				onChangeCategory(categoryNewProps);
			}}
		>
			{categoryNewProps}
		</button>
	);
};

export default CategoriesButtons;

// console.log(onchangeCategory);
