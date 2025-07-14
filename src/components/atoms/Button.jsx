import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
