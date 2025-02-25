import React from "react";
import Modal from "./../components/Modal";
import { PrimaryColorsData, BackgroundColorsData } from "./themeData";
import PrimaryColor from "./primaryColor";
import BackgroundColor from "./backgroundColor";

import "./theme.css";

const Theme = () => {
	return (
		<Modal classnameProps="theme__modal">
			<h3>Customize Your Theme</h3>
			<small>Change the primary and background color to your preference.</small>
			<div className="theme__primary-wrapper">
				<h5>Primary Color</h5>
				<div className="theme__primary-colors">
					{PrimaryColorsData.map((pColorItem) => {
						return (
							<PrimaryColor
								key={pColorItem.classNameLink}
								classNamePropsThemePrimary={pColorItem.classNameLink}
							/>
						);
					})}
				</div>
			</div>

			<div className="theme__background-wrapper">
				<h5>Background Color</h5>
				<div className="theme__background-colors">
					{BackgroundColorsData.map((bColorItem) => {
						return (
							<BackgroundColor
								key={bColorItem.classNameLinkB}
								classNamePropsThemeBackground={bColorItem.classNameLinkB}
							/>
						);
					})}
				</div>
			</div>
		</Modal>
	);
};

export default Theme;
