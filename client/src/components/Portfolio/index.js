import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "weathered-vibes",
      description: "frontend project",
      link: "https://sepidehayani.github.io/WeatheredVibes/",
      repo: "https://github.com/SepidehAyani/WeatheredVibes",
    },
    {
      name: "travel-bug",
      description: "full-stack project",
      link: "https://travelbug-project.herokuapp.com/",
      repo: "https://github.com/Metelak/Travel-bug",
    },
    {
      name: "Ritual",
      description: "MERN SPA",
      link: "https://ritual-app-01.herokuapp.com/",
      repo: "https://github.com/Metelak/Ritual",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
