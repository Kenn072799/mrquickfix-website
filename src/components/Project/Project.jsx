import React, { useEffect, useState } from "react";
import MainContainer from "../Container/MainContainer";
import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import ProjectCard from "./ProjectCard";
import Button from "../button";
import { PiArrowRightLight } from "react-icons/pi";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/SampleData/ProjectData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const sortedData = jsonData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setData(sortedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="py-24">
      <MainContainer>
        <header className="flex flex-col items-center justify-center text-center">
          <Title>Our Recent Projects</Title>
          <SubTitle>Explore Our Latest Work and Achievements</SubTitle>
        </header>
        <section className="flex flex-wrap items-center justify-center">
          {data.map((project) => (
            <ProjectCard key={project.id} projectdata={project} />
          ))}
        </section>
        <div className="mx-auto flex w-full justify-center py-10">
          <Button variant="flex">
            View more projects <PiArrowRightLight className="ml-2 text-xl" />
          </Button>
        </div>
      </MainContainer>
    </div>
  );
};

export default Project;
