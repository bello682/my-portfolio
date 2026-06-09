import { Card } from "./../../components/Card";

export const Testimonial = ({ TestimonialProps }) => {
  return (
    <Card className="light">
      <p>{TestimonialProps.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={TestimonialProps.Avatar} alt="Testimonial ClientImage" />
        </div>
        <div className="testimonial__client-details">
          <h6>{TestimonialProps.name}</h6>
          {TestimonialProps.profession && (
            <a
              href={TestimonialProps.profession}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-700 px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all duration-200 self-start border border-sky-100"
            >
              Verify Profile
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
