import React, { Fragment } from "react";
import { useModalContext } from "../context/modal-context-proj";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./modal.css";

const Modal = ({ classnameProps, children }) => {
	const { showModal, CloseModalHandler } = useModalContext();
	return (
		<Fragment>
			{showModal &&
				ReactDOM.createPortal(
					<>
						<section id="backdrop" onClick={CloseModalHandler}></section>
						<Card className={classnameProps}>{children}</Card>
					</>,
					document.querySelector("#overlays")
				)}
		</Fragment>
	);
};

export default Modal;
