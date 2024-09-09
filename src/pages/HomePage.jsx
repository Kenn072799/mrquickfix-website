import React from "react";
import Hero from "../components/Hero";
import About from "../components/about";
import Services from "../components/Services/Services";
import DividerContact from "../components/Contact/DividerContact";
import Project from "../components/Project/Project";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="relative bg-white">
        <About />
        <Services />
        <DividerContact />
        <Project />
        <Testimonials />
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
