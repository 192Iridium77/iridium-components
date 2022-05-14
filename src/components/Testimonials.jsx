import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default function Testimonials({ heading, testimonials = [] }) {
  const Testimonial = ({ name, text, title }) => (
    <div className="p-4">
      <div className="text-center mt-4 font-bold">{name}</div>
      <div className="text-center text-xs tracking-wide uppercase mt-1">
        {title}
      </div>
      <div className="text-center mt-4">"{text}"</div>
    </div>
  );

  return (
    <div className="container mb-8">
      <div className="anchor" id="testimonials" />
      <h3>{heading || "Testimonials"}</h3>
      <div className="mobile">
        <Swiper className="mySwiper" pagination>
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="pb-12">
                <Testimonial {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="desktop">
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div className="w-4/12">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
