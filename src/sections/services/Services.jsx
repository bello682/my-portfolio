import Card from "../../components/Card";
import ServicesDataLink from "./serviceData";
import "./services.css";

import React from "react";

const Services = () => {
	return (
		<section id="services-id-routing">
			<h2>My Services</h2>
			<p>I will give you te best in all the services below</p>
			<div className="container services__container">
				{ServicesDataLink.map((ServiceItem) => {
					return (
						<Card key={ServiceItem.id} className="service light">
							<div className="service__icon">{ServiceItem.icon}</div>
							<div className="service_details">
								<h4>{ServiceItem.title}</h4>
								<p>{ServiceItem.description}</p>
							</div>
						</Card>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
