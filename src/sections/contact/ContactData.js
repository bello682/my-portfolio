import { HiOutlineMail } from "react-icons/hi";
import { RiMessageLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const ContactDataLink = [
	{
		id: 1,
		icon: <HiOutlineMail />,
		Link: "mailto:belloadetayo14@gmail.com",
	},

	{
		id: 2,
		icon: <RiMessageLine />,
		Link: "https://www.messenger.com/t/adetayo.olamiji",
	},

	{
		id: 3,
		icon: <FaWhatsapp />,
		Link: "https://wa.me/+2348083948842",
	},
];

// Alternative whatsapp Link is
// https://api.whatsapp.com/send/?phone=%+2348083948842

export default ContactDataLink;
