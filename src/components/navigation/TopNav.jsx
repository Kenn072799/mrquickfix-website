import React from "react";
import MainContainer from "../Container/MainContainer";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className="bg-secondary-50 pb-2 pt-3 font-roboto">
      <MainContainer className="flex items-center">
        <section className="flex w-full text-secondary-900">
          <p className="text-sm">Powered by</p>
          <a
            target="_blank"
            href="https://www.miescor.ph/home"
            className="ml-1 text-sm font-semibold underline-offset-4 hover:underline"
          >
            MIESCOR LOGISTIC, INC.
          </a>
        </section>
        <section className="flex w-full justify-end gap-5">
          <a href="mailto:mrquickfix@miescor.ph">
            <span className="group relative z-20">
              <FaEnvelope className="text-lg text-primary-500" />
              <span className="absolute hidden rounded-full bg-secondary-950/90 px-4 py-2 text-xs text-white group-hover:block">
                mrquickfix@miescor.ph
              </span>
            </span>
          </a>
          <a href="https://www.facebook.com/MLIMrQuickFix">
            <span className="group relative z-20">
              <FaFacebookF className="text-lg text-primary-500" />
              <span className="absolute hidden rounded-full bg-secondary-950/90 px-4 py-2 text-xs text-white group-hover:block">
                facebook.com/MLIMrQuickFix
              </span>
            </span>
          </a>
        </section>
      </MainContainer>
    </div>
  );
};

export default TopNav;