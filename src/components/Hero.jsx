import React from "react";
import Button from "./button";
import MainContainer from "./Container/MainContainer";
import Background1 from "../assets/BGBathroomRenovation.jpg";

const Hero = () => {
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
          <h1 className="text-center text-7xl font-semibold">
            Leave the Repairs to Us
          </h1>
          <h2 className="text-center text-3xl">
            Professional Care for Your Home
          </h2>
          <h3 className="text-center">
            When it comes to home repairs, you deserve a service that is both
            reliable and professional.
          </h3>
        </header>
        <section className="mt-10 text-center">
          <Button variant="outline">Contact us for free consultation</Button>
        </section>
      </MainContainer>
    </div>
  );
};

export default Hero;
