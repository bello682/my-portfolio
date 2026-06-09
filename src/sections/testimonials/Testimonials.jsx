// in the section we used (SWIPER) for our slides.
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
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>
      <div className="container">
        <Swiper
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
