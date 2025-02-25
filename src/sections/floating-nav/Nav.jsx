import React from "react";

const Nav = ({ className, floatingPropsItem }) => {
	// this (className) props is coming from and representing the currentClassName
	return (
		<li className={className}>
			<a href={floatingPropsItem.link}>{floatingPropsItem.icon}</a>
		</li>
	);
};

export default Nav;
