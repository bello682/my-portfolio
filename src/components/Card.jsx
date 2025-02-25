import React from "react";
import "./card.css";

// this where the card in the about page is been built from.

const Card = ({ children, className, onClick }) => {
	return (
		<article className={`card ${className}`} onClick={onClick}>
			{children}
		</article>
	);
};

export default Card;
