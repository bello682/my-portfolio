import React, { useState } from "react";
import Projects from "./Projects";
import PortfolioData from "./portfolioData";
import "./portfolio.css";

const Portfolio = () => {
  const [projectsU] = useState(PortfolioData);

  return (
    <section id="portfolio-id-routing">
      <h2>Recent Project</h2>
      <p>
        Checkout some of the projects i recently worked on for my clients, use
        the buttons to toggle the different categories.
      </p>

      <div className="container portfolio__container">
        <Projects projectProps={projectsU} />
      </div>
    </section>
  );
};

export default Portfolio;
