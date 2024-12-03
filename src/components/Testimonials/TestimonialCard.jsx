import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const getInitials = (fullName) => {
  const names = fullName.split(" ");
  const firstNameInitial = names[0]?.charAt(0).toUpperCase();
  const lastNameInitial =
    names.length > 1 ? names[1]?.charAt(0).toUpperCase() : "";
  return firstNameInitial + lastNameInitial;
};

const TestimonialCard = ({ testimonialdata }) => {
  const { createdAt, feedbackMessage, jobID } = testimonialdata;

  const fullName =
    jobID?.clientFirstName && jobID?.clientLastName
      ? `${jobID.clientFirstName} ${jobID.clientLastName}`
      : "Unknown User";

  const initials = getInitials(fullName);

  return (
    <div className="relative">
      <BiSolidQuoteLeft className="absolute bottom-0 right-0 top-[-25%] m-4 scale-x-[-1] text-[100px] text-primary-500 md:top-[-30%] md:text-[130px]" />
      <BiSolidQuoteLeft className="absolute bottom-0 left-0 top-[75%] m-4 text-[100px] text-primary-500 md:top-[70%] md:text-[130px]" />

      <div className="my-24 min-h-[300px] cursor-default rounded-md bg-white/90 backdrop-blur-sm lg:max-w-[600px]">
        <div className="flex border-b">
          <div className="m-4 flex h-[100px] w-[100px] items-center justify-center bg-primary-500 text-5xl font-bold text-white">
            {initials}
          </div>
          <div className="py-4 pl-4">
            <h1 className="font-outfit text-lg font-bold md:text-xl">
              {jobID?.clientFirstName} {jobID?.clientLastName}
            </h1>
            <h3 className="font-roboto text-xs font-light text-secondary-500 md:text-sm">
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>
        </div>

        {/* Feedback Message */}
        <div className="flex items-center justify-center p-4 text-center text-sm md:text-base">
          <p>{feedbackMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
