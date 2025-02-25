// in the section we used (SWIPER) for our slides.
// import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Testimonial from "./Testimonial";
import TestimonialsDataLink from "./testimonialDatas";
import "./testimonials.css";

const Testimonials = () => {
	// const [testimonialState, setTestimonialState] = useState();
	return (
		<section id="testimonials">
			<h2>What My Clients Say</h2>
			<p>These are unbiased testimonials from some of my clients</p>
			<div className="container">
				<Swiper
					// slidesPerView={3}  The SlidePerView is 3 by default from the swiper website because of the large screen size, we need to make it responsive for (phones and tablets) we will change it to (1 for moblie) and then fix a breakPoint for both large screens and tablets
					slidesPerView={1}
					breakpoints={{
						// 601 means max-width of any screen size from 601px that is tablets should display a view of just 2 slides
						601: { slidesPerView: 2 },
						// 1025 means max-width of any screen size from 1025px that is large screens should display a view of just 3 slides
						1025: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					// to control the second of auto scroll or autoplay
					// autoplay={{ delay: 1000 }}
					autoplay={true}
					className="mySwiper"
				>
					{TestimonialsDataLink.map((Testimonialitem) => {
						return (
							<SwiperSlide key={Testimonialitem.id} className="SwiperSlide">
								<Testimonial TestimonialProps={Testimonialitem} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
