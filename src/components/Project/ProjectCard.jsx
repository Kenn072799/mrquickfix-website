import React from "react";

const ProjectCard = ({ projectdata }) => {
  const { thumbnail, name, category, date } = projectdata;

  return (
    <div className="group relative m-2 w-[380px] overflow-hidden md:w-[300px]">
      <img src={thumbnail} alt={name} className="h-auto w-full" />
      <div className="absolute inset-x-0 bottom-0 transform bg-black/30 p-4 text-white backdrop-blur-sm transition-transform duration-500 md:translate-y-full md:group-hover:translate-y-0">
        <h3 className="font-outfit md:text-lg font-semibold">{name}</h3>
        <p className="font-roboto text-xs md:text-sm">Category: {category.join(", ")}</p>
        <p className="font-roboto text-xs md:text-sm">Date: {date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
