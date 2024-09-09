import React, { useEffect, useState, lazy, Suspense } from "react";
import MainLogo from "../../assets/Mr.QuickFixLogo.png";
import {
  FaPhone,
  FaFacebookF,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

// Lazy load
const FooterProjectCard = lazy(() => import("./FooterProjectCard"));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/SampleData/ProjectData.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        // Validate and sort data
        const validatedData = jsonData
          .filter((item) => item && item.id && item.thumbnail && item.date)
          .map((item) => ({
            id: item.id,
            thumbnail: item.thumbnail,
            date: item.date,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);

        setData(validatedData);
      } catch (error) {
        console.error("Error loading JSON:", error);
        setError("Failed to load projects.");
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="relative bg-secondary-950 pt-24">
      <div className="mx-auto max-w-[1540px] px-4 pb-16">
        <nav className="grid gap-x-5 sm:grid-cols-2 md:gap-x-1 lg:grid-cols-4">
          <div>
            <h1 className="pb-8 font-outfit uppercase text-white md:text-lg">
              About Us
            </h1>
            <img
              src={MainLogo}
              className="w-[200px] md:w-[230px]"
              alt="Company Logo"
            />
            <div>
              <p className="text-pretty py-8 font-roboto text-sm text-secondary-500 md:text-base">
                At Mr. Quick Fix, we understand the importance of a
                well-maintained home.
                <button className="pl-1 font-medium text-secondary-500/50 duration-300 hover:text-secondary-400">
                  Read more.
                </button>
              </p>
            </div>
          </div>
          <div>
            <h1 className="pb-8 font-outfit uppercase text-white md:text-lg">
              Navigation
            </h1>
            <ul className="grid grid-cols-2 font-roboto text-sm text-secondary-500 md:gap-y-4 md:text-base">
              <li className="py-1 duration-300 hover:text-secondary-400">
                Home
              </li>
              <li className="py-1 duration-300 hover:text-secondary-400">
                About us
              </li>
              <li className="py-1 duration-300 hover:text-secondary-400">
                Services
              </li>
              <li className="py-1 duration-300 hover:text-secondary-400">
                Projects
              </li>
              <li className="py-1 duration-300 hover:text-secondary-400">
                Testimonials
              </li>
              <li className="py-1 duration-300 hover:text-secondary-400">
                Contact us
              </li>
            </ul>
          </div>
          <div className="text-sm md:text-base">
            <h1 className="mt-8 pb-8 font-outfit uppercase text-white md:mt-0 md:text-lg">
              Contact Information
            </h1>
            <div className="flex items-center">
              <FaPhone size={20} className="group mr-4 text-secondary-500" />
              <div className="flex flex-col text-secondary-500">
                <div className="py-2">
                  <a
                    href="tel:+63286328381"
                    className="underline-offset-4 duration-300 hover:text-secondary-400 hover:underline"
                  >
                    (02) 8632-8381
                  </a>
                </div>
                <div className="py-2">
                  <a
                    href="tel:+639988481846"
                    className="underline-offset-4 duration-300 hover:text-secondary-400 hover:underline"
                  >
                    0998-848-1846
                  </a>
                </div>
                <div className="py-2">
                  <a
                    href="tel:+639988443164"
                    className="underline-offset-4 duration-300 hover:text-secondary-400 hover:underline"
                  >
                    0998-844-3164
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center py-2 font-roboto text-secondary-500">
              <FaEnvelope size={20} className="mr-4 text-secondary-500" />
              <a
                href="mailto:mrquickfix@miescor.ph"
                className="underline-offset-4 duration-300 hover:text-secondary-400 hover:underline"
              >
                mrquickfix@miescor.ph
              </a>
            </div>
            <div className="flex items-center py-2 font-roboto text-secondary-500">
              <FaFacebookF size={20} className="mr-4 text-secondary-500" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/MLIMrQuickFix"
                className="underline-offset-4 hover:text-secondary-400 hover:underline"
              >
                facebook.com/MLIMrQuickFix
              </a>
            </div>
            <div className="flex items-center text-pretty">
              <FaLocationDot size={20} className="text-secondary-500" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?ll=14.581424,121.06399&z=16&t=m&hl=en&gl=PH&mapclient=embed&cid=3075302866630795290"
                className="my-1 mt-2 pl-4 font-roboto text-secondary-500 duration-300 hover:text-secondary-400 hover:underline"
              >
                Meralco Industrial Engineering Services Corporation
                <br />
                5th Floor, Renaissance Tower 1000
                <br />
                Meralco Avenue, Ortigas Center Pasig City, Philippines 1600
              </a>
            </div>
          </div>
          <div>
            <h1 className="mt-8 pb-8 font-outfit uppercase text-white md:mt-0 md:text-lg">
              Explore Recent Projects
            </h1>
            <div className="flex">
              <Suspense fallback={<p>Loading projects...</p>}>
                {data.length > 0 ? (
                  data.map((project) => (
                    <FooterProjectCard key={project.id} projectdata={project} />
                  ))
                ) : (
                  <p>No projects available.</p>
                )}
              </Suspense>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-secondary-900/50 py-4">
        <div className="mx-auto max-w-[1540px] px-4 text-center text-xs text-secondary-300 md:text-sm">
          Copyright &copy; {currentYear}. Meralco Industrial Engineering
          Services Corporation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
