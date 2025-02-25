import React from "react";
import ContactDataLink from "./ContactData";
import "./contact.css";

const Contact = () => {
	return (
		<section id="contact-id-routing">
			<h2>Get In Touch</h2>
			<p>Shoot me a message via any of the links below!</p>
			<div className="container contact__container">
				{ContactDataLink.map((contactItem) => {
					return (
						<a
							href={contactItem.Link}
							key={contactItem.id}
							target="_blank"
							rel="noopener noreferrer"
						>
							{contactItem.icon}
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Contact;
