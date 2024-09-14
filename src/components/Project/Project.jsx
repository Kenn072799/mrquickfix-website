import React, { lazy, Suspense } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import Button from "../button";
import { PiArrowRightLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import useProjects from "../hooks/useProjects";

// Lazy load
const ProjectCard = lazy(() => import("./ProjectCard"));

const Project = () => {
  const { data, error, loading } = useProjects({ limit: 6 });

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

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
          <NavLink to="/Project">
            <Button variant="flex" onClick={handleScrollToTop}>
              View more projects <PiArrowRightLight className="ml-2 text-xl" />
            </Button>
          </NavLink>
        </div>
      </MainContainer>
    </div>
  );
};

export default Project;
