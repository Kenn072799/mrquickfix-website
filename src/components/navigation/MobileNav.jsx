import React, { useState } from "react";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import useScrollToPage from "../hooks/useScrollToPage";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToPage = useScrollToPage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="block p-4 text-secondary-600 md:hidden"
      >
        {isOpen ? (
          <HiOutlineX aria-hidden="true" size={27} />
        ) : (
          <HiMenu aria-hidden="true" size={27} />
        )}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed -left-[1px] top-0 z-50 h-full w-1/2 border-r border-primary-500 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 transform" : "-translate-x-full transform"
        }`}
      >
        <div className="mt-20 flex flex-col items-center justify-center">
          <div
            onClick={() => {
              scrollToPage("home");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            Home
          </div>
          <div
            onClick={() => {
              scrollToPage("about");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            About Us
          </div>
          <div
            onClick={() => {
              scrollToPage("service");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            Services
          </div>
          <div
            onClick={() => {
              scrollToPage("project");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            Projects
          </div>
          <div
            onClick={() => {
              scrollToPage("testimonial");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            Testimonials
          </div>
          <div
            onClick={() => {
              scrollToPage("contact");
              toggleMenu();
            }}
            className="cursor-pointer px-4 py-6 hover:text-secondary-950"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
