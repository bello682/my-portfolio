// import React from "react";
import Card from "./../../components/Card";

const Testimonial = ({ TestimonialProps }) => {
	return (
		<Card className="light">
			<p>{TestimonialProps.quote}</p>
			<div className="testimonial__client">
				<div className="testimonial__client-avatar">
					<img src={TestimonialProps.Avatar} alt="Testimonial ClientImage" />
				</div>
				<div className="testimonial__client-details">
					<h6>{TestimonialProps.name}</h6>
					<small>{TestimonialProps.profession}</small>
				</div>
			</div>
		</Card>
	);
};

export default Testimonial;
