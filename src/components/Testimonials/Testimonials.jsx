import React, { useEffect, useState } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import TestimonialCard from "./TestimonialCard";
import { PiArrowRightLight } from "react-icons/pi";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import Button from "../button";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/SampleData/TestimonialData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const sortedData = jsonData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setData(sortedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="bg-secondary-100 py-24">
      <MainContainer>
        <header className="flex flex-col items-center justify-center text-center">
          <Title>What our clients say</Title>
          <SubTitle>Hear Directly from Those We've Served</SubTitle>
        </header>
        <section className="flex justify-center">
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              // When window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
            }}
            className="py-6 mx-auto "
          >
            {data.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonialdata={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="flex justify-center pt-4">
          <Button variant="flex">
            View more testimonials
            <PiArrowRightLight className="ml-2 text-xl" />
          </Button>
        </div>
      </MainContainer>
    </div>
  );
};

export default Testimonials;
