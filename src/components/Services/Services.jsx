import React, { useEffect, useState, Suspense } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import Subtitle from "../Title/SubTitle";

// Lazy load
const ServiceCard = React.lazy(() => import("./ServiceCard"));

const Services = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/SampleData/ServicesData.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        // Validate data structure
        const validatedData = jsonData
          .filter(
            (item) =>
              item && item.id && item.title && item.image && item.description,
          )
          .map((item) => ({
            id: item.id,
            title: item.title,
            image: item.image,
            description: item.description,
          }));

        setData(validatedData);
      } catch (error) {
        console.error("Error loading JSON:", error);
        setError("Failed to load services.");
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div id="service" className="py-24">
      <MainContainer>
        <header className="flex flex-col items-center">
          <Title>We Offer High-Quality Services</Title>
          <Subtitle>Services You Can Count On Fast and Reliable</Subtitle>
        </header>
        <section className="flex flex-wrap items-center justify-center">
          <Suspense fallback={<p>Loading services...</p>}>
            {data.length > 0 ? (
              data.map((service) => (
                <ServiceCard key={service.id} servicedata={service} />
              ))
            ) : (
              <p>No services available.</p>
            )}
          </Suspense>
        </section>
      </MainContainer>
    </div>
  );
};

export default Services;
