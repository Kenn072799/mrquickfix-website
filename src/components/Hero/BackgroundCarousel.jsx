import React, { useState, useEffect } from "react";
import Background1 from "../../assets/BGBathroomRenovation.jpg";
import Background2 from "../../assets/Background2.png";
import Background3 from "../../assets/Background.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const backgrounds = [Background1, Background2, Background3];

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="fixed inset-0 -z-10 bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-300 ease-in-out"
        style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={prevSlide}
          className="fixed left-5 top-1/2 hidden -translate-y-1/2 transform rounded bg-secondary-800/50 p-2 py-5 text-xl text-white hover:bg-secondary-800/90 md:block"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="fixed right-5 top-1/2 hidden -translate-y-1/2 transform rounded bg-secondary-800/50 p-2 py-5 text-xl text-white hover:bg-secondary-800/90 md:block"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default BackgroundCarousel;
