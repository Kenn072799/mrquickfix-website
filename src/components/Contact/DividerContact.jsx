import React from "react";
import BackgroundDivider from "../../assets/DividerIMG.jpg";
import MainContainer from "../Container/MainContainer";
import Button from "../button";

const DividerContact = () => {
  return (
    <div className="relative">
      <div
        className="-z-10 bg-cover bg-center bg-no-repeat py-[120px]"
        style={{ backgroundImage: `url(${BackgroundDivider})` }}
      >
        <div className="absolute inset-0 bg-secondary-500 opacity-50"></div>
        <MainContainer className="relative">
          <h1 className="text-center font-outfit text-3xl font-semibold text-white md:text-5xl">
            Ready to transform your vision into reality?
          </h1>
          <p className="text-center text-white md:text-lg">
            Reach out to us for a free consultation.
          </p>
          <div className="flex justify-center py-2">
            <Button variant="outline" size="sm">
              Contact us now
            </Button>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default DividerContact;
