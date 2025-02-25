import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context-proj";
import { ThemeProvider } from "./context/theme-context-Api";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
	// <React.StrictMode>
	<ThemeProvider>
		<ModalProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ModalProvider>
	</ThemeProvider>
	// </React.StrictMode>
);
