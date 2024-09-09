import React, { useEffect, useState, lazy, Suspense } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import { PiArrowRightLight } from "react-icons/pi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import Button from "../button";

// Lazy load
const TestimonialCard = lazy(() => import("./TestimonialCard"));

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/SampleData/TestimonialData.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        // Validate data structure
        const validatedData = jsonData
          .filter(
            (item) =>
              item &&
              item.id &&
              item.name &&
              item.image &&
              item.feedback &&
              item.date,
          )
          .map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            feedback: item.feedback,
            date: item.date,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

        setData(validatedData);
      } catch (error) {
        console.error("Error loading JSON:", error);
        setError("Failed to load testimonials.");
      }
    };

    fetchData();
  }, []);

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
