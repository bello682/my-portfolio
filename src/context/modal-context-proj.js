import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);

	const ShowModalHandler = () => {
		setShowModal(true);
	};

	const CloseModalHandler = () => {
		setShowModal(false);
	};
	return (
		<ModalContext.Provider
			value={{ showModal, ShowModalHandler, CloseModalHandler }}
		>
			{children}
		</ModalContext.Provider>
	);
};

// We create the custom Hook to consume the modal context   anywhere in our app

export const useModalContext = () => {
	return useContext(ModalContext);
};
