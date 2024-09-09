import React, { useState } from "react";
import Button from "./button";
import MainContainer from "./Container/MainContainer";
import Background1 from "../assets/BGBathroomRenovation.jpg";
import PopupContactCard from "./Contact/ContactCard/PopupContactCard";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-fixed bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <MainContainer className="fixed h-[50vh]">
        <header className="font-outfit uppercase text-white">
          <h1 className="text-center text-4xl font-semibold uppercase text-white md:text-6xl lg:text-7xl">
            Leave the Repairs to Us
          </h1>
          <h2 className="pt-1 text-center font-outfit text-lg text-white md:text-xl lg:text-2xl">
            Professional Care for Your Home
          </h2>
          <h3 className="text-center font-outfit text-xs font-light text-white md:text-base lg:text-lg">
            When it comes to home repairs, you deserve a service that is both
            reliable and professional.
          </h3>
        </header>
        <section className="mt-10 text-center">
          <Button onClick={openModal} variant="outline">
            Contact us for free consultation
          </Button>
        </section>
      </MainContainer>
      <PopupContactCard isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Hero;
