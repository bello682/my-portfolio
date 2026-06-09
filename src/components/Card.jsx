import React from "react";
import "./card.css";

export const Card = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between h-full select-none">
      {/* Elegant Quotation Watermark */}
      <div className="absolute top-4 right-6 text-sky-100 pointer-events-none">
        <svg width="40" height="32" viewBox="0 0 45 36" fill="currentColor">
          <path d="M13.5 0C8.1 6.3 3.6 13.5 0 21.6V36H18V18H9C10.8 12.6 13.5 7.2 17.1 1.8L13.5 0ZM40.5 0C35.1 6.3 30.6 13.5 27 21.6V36H45V18H36C37.8 12.6 40.5 7.2 44.1 1.8L40.5 0Z" />
        </svg>
      </div>

      <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6 z-10">
        “{testimonial.quote}”
      </p>

      <div className="flex items-center gap-4 border-t border-gray-50 pt-4 mt-auto">
        <img
          className="w-12 h-12 rounded-full object-cover border-2 border-sky-500 shadow-sm"
          src={testimonial.Avatar}
          alt={`${testimonial.name} Avatar`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";
          }}
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-gray-800 leading-tight">
            {testimonial.name}
          </h4>
          <span className="text-xs text-sky-600 font-medium mb-1.5">
            {testimonial.project}
          </span>
          {testimonial.profession && (
            <a
              href={testimonial.profession}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-700 px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all duration-200 self-start border border-sky-100"
            >
              Verify Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
