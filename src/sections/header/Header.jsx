import React from "react";
import HeaderImage from "../../images/Tayo image passport.jpg";
import HeaderDataLink from "./headerData";

import "./header.css";

const Header = () => {
	return (
		<header id="header">
			<div className="container hearder__container">
				<div className="header__profile">
					<img src={HeaderImage} alt="Profile View" />
				</div>
				<h3>Bello Adetayo Olamiji</h3>
				<p>
					You are a click away from building your dream website or web app. Send
					me the details of your project for modern, mobile responsive, highly
					performant website today!{" "}
				</p>
				<div className="header_call_to_action">
					<a href="#contact-id-routing" className="btn primary">
						Let's Talk
					</a>
					<a href="#portfolio-id-routing" className="btn light">
						My Work
					</a>
				</div>
				<div className="header__socials">
					{HeaderDataLink.map((headerItem) => {
						return (
							<a
								key={headerItem.id}
								href={headerItem.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{headerItem.icon}
							</a>
						);
					})}
				</div>
			</div>
		</header>
	);
};

export default Header;
