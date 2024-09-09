import React from "react";
import { FaXmark, FaPhone, FaFacebookF, FaEnvelope } from "react-icons/fa6";

const PopupContactCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 -z-30 bg-black/20"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-[450px] rounded-xl bg-white p-6">
        <button
          className="absolute right-2 top-2 rounded-full p-2 text-secondary-500 hover:bg-secondary-500/30 md:text-xl"
          onClick={onClose}
        >
          <FaXmark />
        </button>
        <div className="font-outfit md:mt-3">
          <h1 className="text-2xl font-bold">CONTACT US</h1>

          {/* Email */}
          <div className="mt-4">
            <a
              className="flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50"
              href="mailto:mrquickfix@miescor.ph"
            >
              <FaEnvelope className="mr-4 text-sm md:text-base" />
              <span className="flex-1 text-center text-xs md:text-base">
                mrquickfix@miescor.ph
              </span>
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="mt-2 flex flex-col">
            <a
              href="tel:+6328-632-8381"
              className="flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50"
            >
              <FaPhone className="mr-4 text-sm md:text-base" />
              <span className="flex-1 text-center text-xs md:text-base">
                (02) 8632-8381
              </span>
            </a>
            <a
              href="tel:0998-848-1846"
              className="mt-2 flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50"
            >
              <FaPhone className="mr-4 text-sm md:text-base" />
              <span className="flex-1 text-center text-xs md:text-base">
                0998-848-1846
              </span>
            </a>
            <a
              href="tel:0998-844-3164"
              className="mt-2 flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50"
            >
              <FaPhone className="mr-4 text-sm md:text-base" />
              <span className="flex-1 text-center text-xs md:text-base">
                0998-844-3164
              </span>
            </a>
          </div>

          {/* Facebook */}
          <div className="mt-2 flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50">
            <FaFacebookF className="mr-4 text-sm md:text-base" />
            <span className="flex-1 text-center text-xs md:text-base">
              <a href="https://facebook.com/MLIMrQuickFix">
                facebook.com/MLIMrQuickFix
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupContactCard;
