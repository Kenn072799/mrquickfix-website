import React from "react";
import MainLayout from "../Layout/MainLayout";
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
      <MainLayout>
        <Hero />
        <section className="relative bg-white">
          <About />
          <Services />
          <DividerContact />
          <Project />
          <Testimonials />
          <Contact />
        </section>
      </MainLayout>
    </>
  );
};

export default HomePage;
