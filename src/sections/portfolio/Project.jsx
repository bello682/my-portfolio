import React from "react";
import Card from "./../../components/Card";

const Project = ({ projectNewProps }) => {
	return (
		<Card className="portfolio__project">
			<div className="portfolio__project-image">
				<img src={projectNewProps.image} alt="PROJECT PORTFOLIO" />
				<h4>{projectNewProps.title}</h4>
				<p>{projectNewProps.description}</p>

				<div className="portfolio_project-call_to_action">
					<a
						href={projectNewProps.demo}
						className="btn sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						Demo
					</a>

					<a
						href={projectNewProps.github}
						className="btn sm primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
				</div>
			</div>
		</Card>
	);
};

export default Project;
