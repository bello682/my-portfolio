import { useState } from "react";
import React from "react";
import CategoriesButtons from "./CategoriesButtons";
import "./portfolioCategories.css";
// import Portfolio from "./Portfolio";

const ProjectsCategories = ({ CategoriesProps, onFilterProject }) => {
	// console.log(CategoriesProps);

	const [activeCategory, setActiveCategory] = useState("all");

	// activeCat is an (argument passed in ).
	const changeCategoryHandler = (activeCat) => {
		setActiveCategory(activeCat);
		onFilterProject(activeCat);
	};

	return (
		<div className="portfolio__categories">
			{CategoriesProps.map((categoriesItem) => {
				return (
					<CategoriesButtons
						key={categoriesItem}
						categoryNewProps={categoriesItem}
						onChangeCategory={() => {
							changeCategoryHandler(categoriesItem);
						}}
						classNamedPortfolioProps={`btn cat__btn ${
							activeCategory === categoriesItem ? "primary" : "white"
						}`}
					/>
				);
			})}
		</div>
	);
};

export default ProjectsCategories;
