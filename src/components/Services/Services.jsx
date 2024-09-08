import React, { useEffect, useState } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import Subtitle from "../Title/SubTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/SampleData/ServicesData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="py-24">
      <MainContainer>
        <header className="flex flex-col items-center">
          <Title>We Offer High-Quality Services</Title>
          <Subtitle>Services You Can Count On Fast and Reliable</Subtitle>
        </header>
        <section className="flex flex-wrap items-center justify-center">
          {data.map((service) => (
            <ServiceCard key={service.id} servicedata={service} />
          ))}
        </section>
      </MainContainer>
    </div>
  );
};

export default Services;
