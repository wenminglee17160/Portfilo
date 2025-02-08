"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "1TG Dashboard",
    description: "Project Details",
    image: "/1touchdash1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://app.1touchglobal.ai/dashboard",
    technologyStack: {
      frontend: "Next.js,Tailwind CSS",
      backend: "Node.js",
      database: "MongoDB",
      Api: "GraphQL",
    },
  },
  {
    id: 2,
    title: "1TG Admin",
    description: "Project Details",
    image: "/admintg.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://1touchglobal-admin-ui.vercel.app/",
    technologyStack: {
      frontend: "Next.js,Material Ui",
      backend: "Node.js",
      database: "MongoDB",
      Api: "GraphQL",
    },
  },
  {
    id: 3,
    title: "Ommniverse",
    description: "Project Details",
    image: "/Ommniverse.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ommniverse.ai/",
    technologyStack: {
      frontend: "Next.js,Tailwind CSS,React js",
      backend: "Node.js",
      database: "MongoDB",
      other: "GraphQL",
    },
  },
  {
    id: 4,
    title: "Shekel Traders",
    description: "Project Details",
    image: "/skehel.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.shekeltrader.com/",
    technologyStack: {
      frontend: "Next.js, Tailwind CSS"
    },
  },
  {
    id: 5,
    title: "Score11 Admin",
    description: "Project Details",
    image: "/score11.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://admin.score11.io/",
    technologyStack: {
      frontend: "Next.js, Tailwind CSS",
      backend: "Node.js",
      database: "MongoDB",
      Api: "GraphQL",
    },
  },
  {
    id: 6,
    title: "Worktual",
    description: "Project Details",
    image: "/worktual.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://worktual.co.uk/",
    technologyStack: {
      frontend: "React js,Tailwind CSS,Bootstrap",
      backend: "Node.js",
      database: "Sql",
      Api: "Rest api"
    },
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
     <section id="project" className="bg-custom-gradient -scroll-mt-20">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440  290">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>

      </svg>
      <h2 data-aos="fade-up" className="text-center text-5xl font-bold font-poppins text-[#fff] mt-0 mb-8 md:mb-2">
        Latest work
      </h2>
      <div data-aos="fade-up" className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8  md:gap-12 mx-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            technologyStack={project.technologyStack}
          />
        ))}
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>

      </svg>
    </section>
  );
};

export default ProjectsSection;
