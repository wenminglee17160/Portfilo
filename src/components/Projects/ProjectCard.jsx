import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologyStack }) => {
  return (
    <div data-aos="zoom-in">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-125"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Overlay for hover */}
        <div className="overlay items-center justify-center gap-5 absolute top-0 left-0 w-full h-full bg-[rgba(153,38,240,0.75)] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-100 transition-all duration-500">
          <span className="text-white text-xl font-normal opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            {title}
          </span>
          <div className="relative group">
            <Link
              href={previewUrl}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Adds security
              className="h-8 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            >
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white transition-all" />
            </Link>
            {/* Tooltip */}
            {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45">
              </div>
            </div> */}
          </div>

        </div>
      </div>



      {/* Project Description */}
      <div className="text-white border-0 border-white-transparent rounded-b-xl hover:bg-custom-text   mt-0 bg-[rgba(255,255,255,0.8)] py-6 px-4">
        {/* <h5 className="text-left text-xl font-medium font-poppins text-black mt-0 mb-8 md:mb-2">
          {title}
        </h5> */}
        <p className="text-left text-base font-semibold underline underline-offset-4 font-poppins text-black mt-0 mb-8 md:mb-2">{description}</p>
        {technologyStack && (
          <div className="text-left  font-poppins mt-0 mb-8 md:mb-2">
            <p className="font-medium text-black text-base">Frontend: <span className="text-[#161616] text-sm font-medium">{technologyStack.frontend}</span></p>
            {technologyStack.backend && <p className="font-medium text-black text-base">Backend:<span className="text-[#161616] text-sm font-medium">{technologyStack.backend}</span> </p>}
            {technologyStack.database && <p className="font-medium text-black text-base">Database: <span className="text-[#161616] text-sm font-medium">{technologyStack.database}</span></p>}
            {technologyStack.Api && <p className="font-medium text-black text-base">API: <span className="text-[#161616] text-sm font-medium">{technologyStack.Api}</span></p>}
            {technologyStack.other && <p className="font-medium text-black text-base">Other: <span className="text-[#161616] text-sm font-medium">{technologyStack.other}</span> </p>}
          </div>
        )}
      </div>
    </div>

  );
};

export default ProjectCard;
