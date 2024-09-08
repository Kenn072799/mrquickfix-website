import React from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";

const Contact = () => {
  return (
    <div className="h-screen py-24">
      <MainContainer>
        <header className="flex flex-col items-center justify-center text-center">
          <Title>Contact us</Title>
          <SubTitle>Get In Touch With Us</SubTitle>
        </header>
      </MainContainer>
    </div>
  );
};

export default Contact;
