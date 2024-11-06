import React from "react";
import { type Project } from "@/types/contactInfo";

type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <div className="p-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold mb-4">Projects</h2>
    {projects.map((project, idx) => (
      <div key={idx} className="mb-4">
        <h3 className="font-medium text-lg">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
        <p className="text-sm text-gray-500">
          Technologies: {project.technologies.join(", ")}
        </p>
        <a href={project.link} className="text-blue-500">
          View Project
        </a>
      </div>
    ))}
  </div>
);

export default Projects;
