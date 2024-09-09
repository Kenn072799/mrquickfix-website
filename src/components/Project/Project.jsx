import React, { lazy, Suspense, useEffect, useState } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import Button from "../button";
import { PiArrowRightLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

// Lazy load
const ProjectCard = lazy(() => import("./ProjectCard"));

const Project = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/SampleData/ProjectData.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        // Validate data structure
        const validatedData = jsonData
          .filter(
            (item) =>
              item &&
              item.id &&
              item.date &&
              item.thumbnail &&
              item.name &&
              item.category,
          )
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);

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
    <div id="project" className="py-24">
      <MainContainer>
        <header className="flex flex-col items-center justify-center text-center">
          <Title>Our Recent Projects</Title>
          <SubTitle>Explore Our Latest Work and Achievements</SubTitle>
        </header>

        <Suspense fallback={<p>Loading projects...</p>}>
          <section className="flex flex-wrap items-center justify-center">
            {data.length > 0 ? (
              data.map((project) => (
                <ProjectCard key={project.id} projectdata={project} />
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </section>
        </Suspense>

        <div className="mx-auto flex w-full justify-center py-10">
          <NavLink
            to="/Project"
            className={({ isActive }) =>
              isActive
                ? "border-b-[3px] border-primary-500 px-4 py-6 text-secondary-950"
                : "hover:border-primary-500 hover:text-secondary-950"
            }
          >
            <Button variant="flex">
              View more projects <PiArrowRightLight className="ml-2 text-xl" />
            </Button>
          </NavLink>
        </div>
      </MainContainer>
    </div>
  );
};

export default Project;
