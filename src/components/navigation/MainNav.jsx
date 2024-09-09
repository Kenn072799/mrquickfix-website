import React from "react";
import MainContainer from "../Container/MainContainer";
import MainLogo from "../../assets/Mr.QuickFixLogo.png";
import MobileNav from "./MobileNav";
import { NavLink, Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="sticky top-1 z-10 bg-white shadow-sm">
      <MainContainer className="flex flex-col lg:flex-row lg:items-center">
        <header className="py-4 lg:py-0">
          <Link to="/">
            <img
              src={MainLogo}
              alt="Mr. QuickFix Logo"
              className="flex w-[180px] py-1 md:py-0 lg:w-[250px]"
            />
          </Link>
        </header>
        <ul className="hidden w-full flex-wrap justify-center font-roboto text-lg text-secondary-600 md:flex lg:justify-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>About us</li>
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="project"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to="testimonial"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>Testimonials</li>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <li>Contact us</li>
          </NavLink>
        </ul>
        <MobileNav />
      </MainContainer>
    </nav>
  );
};

export default MainNav;
