import React from "react";
import clsx from "clsx";

const Button = ({ variant = "primary", size = "md", children, ...props }) => {
  const variantStyle = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    outline: "bg-primary-500 text-white hover:bg-primary-600 border border-white",
    flex: "bg-primary-500 text-white hover:bg-primary-600 flex items-center justify-center"
  };

  const sizeStyle = {
    sm: "px-4 py-2",
    md: "px-6 py-4",
  };

  const baseStyle = "transition-all";

  return (
    <button
      className={clsx(variantStyle[variant], sizeStyle[size], baseStyle)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
