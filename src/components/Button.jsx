import React from "react";

export const Button = ({ label, handleClick, type, className }) => {
  return (
    <div className={className}>
      <button>{label}</button>
    </div>
  );
};
