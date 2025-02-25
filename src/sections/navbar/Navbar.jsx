// import React from "react";
// import Logo from "../../images/logo.png";
// import NavDataLinks from "./navData";
// import { useModalContext } from "../../context/modal-context-proj";
// import { IoIosColorPalette } from "react-icons/io";

// import "./navbar.css";

// const Navbar = () => {
// 	const { ShowModalHandler } = useModalContext();

// 	return (
// 		<nav id="navbar">
// 			<div className="container nav__container">
// 				<a href="index.html" className="nav__logo">
// 					<img src={Logo} alt="LOGO" />
// 				</a>

// 				<ul className="nav__menu">
// 					{NavDataLinks.map((dataItem) => {
// 						return (
// 							<li key={dataItem.id}>
// 								<a href={dataItem.link} className="nav__menu_anchor">
// 									{dataItem.title}
// 								</a>
// 							</li>
// 						);
// 					})}
// 				</ul>

// 				<button id="theme__icon" onClick={ShowModalHandler}>
// 					<IoIosColorPalette />
// 				</button>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import NavDataLinks from "./navData";
import { useModalContext } from "../../context/modal-context-proj";
import { IoIosColorPalette } from "react-icons/io";

import "./navbar.css";

const Navbar = () => {
	const { ShowModalHandler } = useModalContext();
	const [activeLink, setActiveLink] = useState(window.location.hash || "#");

	// Update active link when the user clicks a menu item
	const handleActiveLink = (link) => {
		setActiveLink(link);
	};

	// Listen for hash changes (if using hash routing)
	useEffect(() => {
		const handleHashChange = () => {
			setActiveLink(window.location.hash);
		};
		window.addEventListener("hashchange", handleHashChange);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<nav id="navbar">
			<div className="container nav__container">
				<a href="index.html" className="nav__logo">
					<img src={Logo} alt="LOGO" />
				</a>

				<ul className="nav__menu">
					{NavDataLinks.map((dataItem) => (
						<li
							key={dataItem.id}
							className={`nav__menu_item ${
								activeLink === dataItem.link ? "active-link" : ""
							}`}
						>
							<a
								href={dataItem.link}
								className="nav__menu_anchor"
								onClick={() => handleActiveLink(dataItem.link)}
							>
								{dataItem.title}
							</a>
						</li>
					))}
				</ul>

				<button id="theme__icon" onClick={ShowModalHandler}>
					<IoIosColorPalette />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
