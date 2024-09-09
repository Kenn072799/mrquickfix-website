import React from "react";
import TopNav from "../components/navigation/TopNav";
import MainNav from "../components/navigation/MainNav";
import TopLine from "../components/navigation/TopLine";
import Footer from "../components/Footer/Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <TopLine />
      <TopNav />
      <MainNav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
