import React from "react";
import { FooterDatalinks, FooterSocialsDataLinks } from "./footerData";
import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<ul className="nav__menu">
					{FooterDatalinks.map((footerItemLink) => {
						return (
							<li key={footerItemLink.id}>
								<a href={footerItemLink.link}>{footerItemLink.title}</a>
							</li>
						);
					})}
				</ul>
				<div className="footer__socials">
					{FooterSocialsDataLinks.map((footerItemSocial) => {
						return (
							<a
								key={footerItemSocial.id}
								href={footerItemSocial.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{footerItemSocial.icon}
							</a>
						);
					})}
				</div>
			</div>
			<div className="footer__copyright">
				<small>2024 TY'sCODE &copy; All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
