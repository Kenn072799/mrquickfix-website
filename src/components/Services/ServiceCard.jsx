import React, { useEffect, useState } from "react";

const ServiceCard = ({ servicedata }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/SampleData/ServicesData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const service = jsonData.find((item) => item.id === servicedata.id);
        setData(service);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, [servicedata.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-2 relative group cursor-default">
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-[350px]" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-xl font-roboto text-white font-medium text-center">
            {data.title}
          </div>
        </div>
        <div className="absolute inset-0 bg-primary-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ease-in-out transition-opacity duration-300">
          <div className="text-white text-center px-4 font-medium">
            {data.description}
          </div>
          <div className="absolute bottom-3 font-extralight flex items-center justify-center">
            <p className="text-sm text-white pr-1">
              Interested in this service?
            </p>
            <button className=" text-white text-sm hover:underline">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
