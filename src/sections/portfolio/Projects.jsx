import React from "react";
import Project from "./Project";

const Projects = ({ projectProps }) => {
	return (
		<div className="portfolio__projects">
			{projectProps.map((projectItem) => {
				return <Project key={projectItem.id} projectNewProps={projectItem} />;
			})}
		</div>
	);
};

export default Projects;
