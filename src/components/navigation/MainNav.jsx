import React from "react";
import MainContainer from "../Container/MainContainer";
import MainLogo from "../../assets/Mr.QuickFixLogo.png";

const MainNav = () => {
  return (
    <nav className="sticky top-1 z-10 bg-white shadow-sm">
      <MainContainer className="flex items-center">
        <header>
          <img src={MainLogo} alt="Mr. QuickFix Logo" className="w-[250px]" />
        </header>
        <ul className="hidden w-full justify-end font-roboto text-lg text-secondary-600 md:flex">
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            Home
          </li>
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            About us
          </li>
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            Services
          </li>
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            Projects
          </li>
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            Testimonials
          </li>
          <li className="border-b-[3px] border-transparent px-4 py-6 hover:border-primary-500 hover:text-secondary-950">
            Contact us
          </li>
        </ul>
      </MainContainer>
    </nav>
  );
};

export default MainNav;
