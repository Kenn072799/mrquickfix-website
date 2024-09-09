import React, { useEffect, useState } from "react";

const FooterProjectCard = ({ projectdata }) => {
  const { thumbnail, name } = projectdata;
  return (
    <div className="mr-2 w-[70px] overflow-hidden md:w-[80px]">
      <img src={thumbnail} alt={name} className="h-auto w-full" />
    </div>
  );
};

export default FooterProjectCard;
