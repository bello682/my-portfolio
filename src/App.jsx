import React, { useRef, useEffect } from "react";
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
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context-Api";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
