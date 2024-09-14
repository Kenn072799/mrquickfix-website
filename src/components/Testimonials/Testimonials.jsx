import React, { lazy, Suspense } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import useTestimonials from "../hooks/useTestimonials";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination, Autoplay, A11y } from "swiper/modules";

// Lazy load
const TestimonialCard = lazy(() => import("./TestimonialCard"));

const Testimonials = () => {
  const { data, error, loading } = useTestimonials(10);

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="testimonial" className="bg-secondary-100 py-24">
      <MainContainer>
        <header className="flex flex-col items-center justify-center text-center">
          <Title>What our clients say</Title>
          <SubTitle>Hear Directly from Those We've Served</SubTitle>
        </header>
        <section className="flex justify-center">
          <Suspense fallback={<p>Loading testimonials...</p>}>
            {data.length > 0 ? (
              <Swiper
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={50}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                className="mx-auto py-6"
              >
                {data.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard testimonialdata={testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No testimonials available.</p>
            )}
          </Suspense>
        </section>
      </MainContainer>
    </div>
  );
};

export default Testimonials;
