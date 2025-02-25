import React from "react";
import AboutImage from "../../images/Tayo image passport.jpg";
import CV from "../../images/CV.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import AboutDataLink from "./aboutData";
import "./about.css";

const About = () => {
	return (
		<section id="about-id-routing">
			<div className="container about__container">
				<div className="about__left">
					<div className="about_portrait">
						<img src={AboutImage} alt="About Profile" />
					</div>
				</div>
				<div className="about__right">
					<h2>About Me</h2>
					<div className="about__cards">
						{AboutDataLink.map((aboutItem) => {
							return (
								<Card key={aboutItem.id} className="about__card">
									<span className="about__card-icon">{aboutItem.icon}</span>
									<h5>{aboutItem.title}</h5>
									<small>{aboutItem.description}</small>
								</Card>
							);
						})}
					</div>
					<p>
						Building projects my clients love, have always been my passion.
						Building in the web development industry for over 3 years and
						serving more than 70 happy clients worldwide, i'm always moltivated
						to do more!
					</p>
					<p>
						Hi, my name is Bello Adetayo Olamiji from Nigeria. I'm a frontend
						developer. My top priority is to get your business online the right
						way, giving you the industry standard designs and all the
						functionality you need to operate smoothly online.Get in touch today
						with the details of your project let's get started! Check out my
						resume below!
					</p>
					<a href={CV} download className="btn primary">
						Download CV <HiDownload />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
