import React from "react";
import Card from "./../../components/Card";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

const FAQ = ({ FaqProps }) => {
	const [showAnwser, setShowAnwser] = useState(false);
	return (
		<Card
			className="faq"
			onClick={() => {
				setShowAnwser((prev) => !prev);
			}}
		>
			<div>
				<h5 className="faq__question">{FaqProps.question}</h5>
				<button className="faq__icon">
					{showAnwser ? <FaMinus /> : <FaPlus />}
				</button>
			</div>
			{showAnwser && <p className="faq__answer">{FaqProps.answer}</p>}
		</Card>
	);
};

export default FAQ;
