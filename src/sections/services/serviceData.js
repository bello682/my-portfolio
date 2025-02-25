import { FaWordpress } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const ServicesDataLink = [
	{
		id: 1,
		icon: <RiReactjsLine />,
		title: "Frontend Developer",
		description:
			"Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktops",
	},

	{
		id: 2,
		icon: <FaServer />,
		title: "Backend Developer",
		description:
			"The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.",
	},

	{
		id: 3,
		icon: <FaWordpress />,
		title: "WordPress Developer",
		description:
			"If you are looking for a profissional WordPress Developer you at the right place, also i can convert your static website to WordPress for better use and editing",
	},

	{
		id: 4,
		icon: <AiFillAppstore />,
		title: "App Developement",
		description:
			"Unlike other developers in the market, i will build an app that runs on both Ios and Android devices without any extra cost to you.",
	},
];

export default ServicesDataLink;
