import React, { useEffect, useState } from "react";

const ProjectPreview = () => {
  const [projectInformation, setProjectInformation] = useState(null);
  useEffect(() => {
    const savedProjectInfo = JSON.parse(localStorage.getItem("projectStore"));
    setProjectInformation(savedProjectInfo);
  }, []);

  return (
    <>
      <h2 className="user-project-heading">Projects</h2>

      {projectInformation?.map((project) => (
        <div key={project.id} className="user-project-content">
          <h2 className="user-project-name">{project.projectName}</h2>
          <p className="user-project-link">
            Link : <a href={project?.projectLink}>{project?.projectLink}</a>
          </p>
          <p className="user-tech-used">
            <span>Language Used : </span>
            {project?.technologyUsed}
          </p>
          <p className="user-project-description">
            <span>Description : </span>
            {project?.projectDescription}
          </p>
        </div>
      ))}
    </>
  );
};

export default ProjectPreview;
