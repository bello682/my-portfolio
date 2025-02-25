// import React from "react";
// import Navbar from "./sections/navbar/Navbar";
// import Header from "./sections/header/Header";
// import About from "./sections/about/About";
// import Services from "./sections/services/Services";
// import Portfolio from "./sections/portfolio/Portfolio";
// import Testimonials from "./sections/testimonials/Testimonials";
// import Faqs from "./sections/FAQs/Faqs";
// import Contact from "./sections/contact/Contact";
// import Footer from "./sections/Footer/Footer";
// import FloatingNav from "./sections/floating-nav/FloatingNav";
// import Theme from "./theme/Theme";
// import { useThemeContext } from "./context/theme-context-Api";
// import { useRef, useState, useEffeect } from "react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// const App = () => {
// 	const mainRef = useRef();
// 	const { themeState } = useThemeContext();
// 	console.log(mainRef.current.getBoundingClientRect());
// 	return (
// 		<main
// 			className={`${themeState.primary} ${themeState.background}`}
// 			ref={mainRef}
// 		>
// 			<Navbar />
// 			<Header />
// 			<About />
// 			<Services />
// 			<Portfolio />
// 			<Testimonials />
// 			<Faqs />
// 			<Contact />
// 			<Footer />
// 			<Theme />
// 			<FloatingNav />
// 		</main>
// 	);
// };

// export default App;

import React, { useRef, useState, useEffect } from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import Faqs from "./sections/FAQs/Faqs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/Footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
// import Modal from "./components/Modal";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context-Api";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const mainRef = useRef();
	const { themeState } = useThemeContext();

	useEffect(() => {
		console.log(mainRef.current.getBoundingClientRect());
	}, []); // Empty dependency array for componentDidMount behavior

	return (
		<main
			className={`${themeState.primary} ${themeState.background}`}
			ref={mainRef}
		>
			{/* <Routes>
				<Route path="/" element={<Header />} />
				<Route path="/About" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/faqs" element={<Faqs />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="*" element={<h1>Page Not Found</h1>} />{" "}
			</Routes> */}

			<Navbar />
			<Header />
			<About />
			<Services />
			<Portfolio />
			<Testimonials />
			<Faqs />
			<Contact />
			<Footer />
			<Theme />
			<FloatingNav />
		</main>
	);
};

export default App;
