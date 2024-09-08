import React, { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialCard = ({ testimonialdata }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/SampleData/TestimonialData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const testimonial = jsonData.find(
          (item) => item.id === testimonialdata.id,
        );
        setData(testimonial);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, [testimonialdata.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="relative">
      <BiSolidQuoteLeft className="absolute bottom-0 right-0 top-[-25%] m-4 scale-x-[-1] text-[100px] text-primary-500 md:top-[-35%] md:text-[150px]" />
      <BiSolidQuoteLeft className="absolute bottom-0 left-0 top-[75%] m-4 text-[100px] text-primary-500 md:top-[65%] md:text-[150px]" />
      <div className="my-12 min-h-[300px] lg:max-w-[600px] cursor-default rounded-md bg-white/90 backdrop-blur-sm">
        <div className="flex border-b">
          <img
            src={testimonialdata.image}
            alt={testimonialdata.name}
            className="m-4 max-w-[100px] border-4 border-primary-500"
          />
          <div className="py-4">
            <h1 className="font-outfit text-xl font-bold">
              {testimonialdata.name}
            </h1>
            <h3 className="font-roboto text-sm font-light text-secondary-500">
              {testimonialdata.date}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center text-pretty p-4">
          <p>{testimonialdata.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;