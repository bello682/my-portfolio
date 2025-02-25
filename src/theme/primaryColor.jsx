import React from "react";
import { useThemeContext } from "../context/theme-context-Api";

const PrimaryColor = ({ classNamePropsThemePrimary }) => {
	const { themeHandler } = useThemeContext();
	return (
		<button
			className={classNamePropsThemePrimary}
			onClick={() => {
				return themeHandler(classNamePropsThemePrimary);
			}}
		></button>
	);
};

export default PrimaryColor;
