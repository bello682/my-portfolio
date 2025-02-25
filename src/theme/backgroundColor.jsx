import React from "react";
import { useThemeContext } from "../context/theme-context-Api";

const BackgroundColor = ({ classNamePropsThemeBackground }) => {
	const { themeHandler } = useThemeContext();
	return (
		<button
			className={classNamePropsThemeBackground}
			onClick={() => {
				return themeHandler(classNamePropsThemeBackground);
			}}
		></button>
	);
};

export default BackgroundColor;
