import React, { useState } from "react";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import PortfolioData from "./portfolioData";
import "./portfolio.css";
import PortfolioDataLink from "./portfolioData";

const Portfolio = () => {
	const [projectsU, setProjectU] = useState(PortfolioData);

	const categoriesAll = PortfolioDataLink.map((item) => {
		return item.category;
	});

	// To set or target a unique ITEM we us the "set".
	// const UniqueCategories = new Set(categoriesAll);
	const UniqueCategories = ["all", ...new Set(categoriesAll)];

	// category is the (argument that was passed)
	const filterProjectHandler = (category) => {
		if (category === "all") {
			setProjectU(PortfolioDataLink);
			return;
		}
		const filterProjects = PortfolioDataLink.filter(
			(ProjectItems) => ProjectItems.category === category
		);
		setProjectU(filterProjects);
	};

	return (
		<section id="portfolio-id-routing">
			<h2>Recent Project</h2>
			<p>
				Checkout some of the projects i recently worked on for my clients, use
				the buttons to toggle the different categories.
			</p>

			<div className="container portfolio__container">
				<ProjectsCategories
					CategoriesProps={UniqueCategories}
					onFilterProject={filterProjectHandler}
				/>
				<Projects projectProps={projectsU} />
			</div>
		</section>
	);
};

export default Portfolio;
