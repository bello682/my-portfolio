import React from "react";
import FaqsDataLink from "./FaqsData";
import FAQ from "./ProFAQ";
import "./faqs.css";

const Faqs = () => {
	return (
		<section id="faqs">
			<h2>Frequently Ask Questions</h2>
			<p>
				Here are some questions i usually get. Click to toggle the answer, and
				if you still have some more questions, shoot me a message from the
				contact section!{" "}
			</p>

			<div className="container faqs__container">
				{FaqsDataLink.map((faqItem) => {
					return <FAQ key={faqItem.id} FaqProps={faqItem} />;
				})}
			</div>
		</section>
	);
};

export default Faqs;
