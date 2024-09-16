import React, { useState, useEffect } from "react";
import Button from "../button";
import MainContainer from "../Container/MainContainer";
import PopupContactCard from "../Contact/ContactCard/PopupContactCard";
import BackgroundCarousel from "./BackgroundCarousel";

// AOS library
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="home"
      className="relative flex h-screen w-full items-center justify-center"
    >
      <BackgroundCarousel />
      <MainContainer className="fixed h-[50vh]">
        <header className="font-outfit uppercase text-white">
          <h1
            className="text-center text-4xl font-semibold uppercase text-white md:text-6xl lg:text-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Leave the Repairs to Us
          </h1>
          <h2
            className="pt-1 text-center font-outfit text-lg text-white md:text-xl lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Professional Care for Your Home
          </h2>
          <h3
            className="text-center font-outfit text-xs font-light text-white md:text-base lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            When it comes to home repairs, you deserve a service that is both
            reliable and professional.
          </h3>
        </header>
        <section className="mt-10 text-center">
          <Button
            onClick={openModal}
            variant="outline"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact us for free consultation
          </Button>
        </section>
      </MainContainer>
      <PopupContactCard isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Hero;