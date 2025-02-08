import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black bg-custom-text font-poppins font-medium"
    : "text-black bg-white font-poppins font-medium";
  return (
    <button
      className={`${buttonStyles} rounded-xl hover:bg-custom-text border-1 border-white-transparent px-6 py-2 text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
