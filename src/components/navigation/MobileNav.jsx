import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineX, HiMenu } from "react-icons/hi";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`fixed left-0 top-0 z-50 h-full w-1/2 border-r border-primary-500 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 transform" : "-translate-x-full transform"
        }`}
      >
        <div className="mt-20 flex flex-col items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            About us
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="project"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="testimonial"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent py-6 hover:border-primary-500 hover:text-secondary-950"
            }
            onClick={toggleMenu}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
