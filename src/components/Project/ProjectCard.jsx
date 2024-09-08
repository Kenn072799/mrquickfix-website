import React, { useEffect, useState } from "react";

const ProjectCard = ({ projectdata }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/SampleData/ProjectData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const project = jsonData.find((item) => item.id === projectdata.id);
        setData(project);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, [projectdata.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="group relative m-2 w-[380px] overflow-hidden md:w-[300px]">
      <img src={data.thumbnail} alt={data.name} className="h-auto w-full" />
      <div className="absolute inset-x-0 bottom-0 md:translate-y-full transform bg-black/30 p-4 text-white backdrop-blur-sm transition-transform duration-500 md:group-hover:translate-y-0">
        <h3 className="font-outfit text-lg font-semibold">{data.name}</h3>
        <p className="font-roboto text-sm">
          Category: {data.category.join(", ")}
        </p>
        <p className="font-roboto text-sm">Date: {data.date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
