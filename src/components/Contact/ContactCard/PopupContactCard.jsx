import React, { useState } from "react";
import { FaXmark, FaPhone, FaFacebookF, FaEnvelope } from "react-icons/fa6";
import { validateForm } from "../../hooks/validateForm";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupContactCard = ({ isOpen, onClose }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [formValues, setFormValues] = useState({
    clientFirstName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
    jobNotificationRead: false,
    jobStatus: "inquiry",
    createdBy: "Client",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleShowContact = () => {
    setShowContactInfo(true);
  };

  const handleShowForm = () => {
    setShowContactInfo(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const onChangeRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else if (!recaptchaToken) {
      alert("Please complete the ReCAPTCHA");
    } else {
      setLoading(true);

      try {
        const response = await fetch("https://mrquickfix-dashboard-v2-1.onrender.com/api/job-orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formValues, recaptchaToken }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        toast.success("Form submitted successfully!");
        setInterval(() => onClose(), 3000);

        setFormValues({
          clientFirstName: "",
          clientLastName: "",
          clientEmail: "",
          clientPhone: "",
          clientMessage: "",
          jobStatus: "inquiry",
          createdBy: "Client",
        });
        setRecaptchaToken(null);
      } catch (error) {
        console.error("Error submitting data:", error);
        toast.error("There was an error submitting the form.");
      } finally {
        setLoading(false);
      }
    }
  };

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

        {!showContactInfo ? (
          <div className="font-roboto md:mt-3">
            <h1 className="text-2xl font-bold">
              Send us inquiry, fill in the form
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <div className="mt-2">
                  <input
                    type="text"
                    name="clientFirstName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-secondary-500 px-4 py-2 outline-none"
                    value={formValues.clientFirstName}
                    onChange={handleInputChange}
                  />
                  {formErrors.clientFirstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.clientFirstName}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="clientLastName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-secondary-500 px-4 py-2 outline-none"
                    value={formValues.clientLastName}
                    onChange={handleInputChange}
                  />
                  {formErrors.clientLastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.clientLastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="email"
                  name="clientEmail"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-secondary-500 px-4 py-2 outline-none"
                  value={formValues.clientEmail}
                  onChange={handleInputChange}
                />
                {formErrors.clientEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.clientEmail}
                  </p>
                )}
              </div>
              <div className="mt-2">
                <input
                  type="tel"
                  name="clientPhone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={11}
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-secondary-500 px-4 py-2 outline-none"
                  value={formValues.clientPhone}
                  onChange={handleInputChange}
                />
                {formErrors.clientPhone && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.clientPhone}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <textarea
                  name="clientMessage"
                  placeholder="Tell us about your needs"
                  className="w-full rounded-md border border-secondary-500 px-4 py-2 outline-none"
                  value={formValues.clientMessage}
                  onChange={handleInputChange}
                />
                {formErrors.clientMessage && (
                  <p className="text-sm text-red-500">
                    {formErrors.clientMessage}
                  </p>
                )}
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                <div className="mt-2">
                  {/* ReCAPTCHA */}
                  <ReCAPTCHA
                    sitekey="6Le72koqAAAAAL9C3tv4Fy838XSGZiNkXAImeJ7T"
                    onChange={onChangeRecaptcha}
                  />
                </div>
              </div>
            </form>

            <div className="mt-5 text-sm">
              <p>
                You may also contact us
                <span
                  className="ml-1 cursor-pointer text-blue-500 underline"
                  onClick={handleShowContact}
                >
                  here
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-3 font-outfit">
            <h1 className="text-2xl font-bold">Contact us</h1>

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

            <div className="mt-2 flex flex-col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/MLIMrQuickFix"
                className="flex items-center rounded-md border px-4 py-2 hover:bg-secondary-50"
              >
                <FaFacebookF className="mr-4 text-sm md:text-base" />
                <span className="flex-1 text-center text-xs md:text-base">
                  facebook.com/mrquickfix
                </span>
              </a>
            </div>

            <div className="mt-5 text-sm">
              <p>
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={handleShowForm}
                >
                  Back to form
                </span>
              </p>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </section>
  );
};

export default PopupContactCard;
