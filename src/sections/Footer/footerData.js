import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

export const FooterDatalinks = [
	{ id: 1, link: "#header", title: "Home" },
	{ id: 2, link: "#about-id-routing", title: "About" },
	{ id: 3, link: "#services-id-routing", title: "Services" },
	{ id: 4, link: "#portfolio-id-routing", title: "Portfolio" },
	{ id: 5, link: "#contact-id-routing", title: "Contact" },
];

export const FooterSocialsDataLinks = [
	{ id: 1, link: "https://instagram.com", icon: <AiOutlineInstagram /> },
	{ id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
	{
		id: 3,
		link: "https://www.linkedin.com/in/bello-adetayo-olamiji-436375221/",
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		link: "https://github.com/bello682?tab=repositories",
		icon: <AiFillGithub />,
	},
];
