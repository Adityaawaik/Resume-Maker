import React, { useEffect, useState } from "react";

const ProjectInformation = () => {
  const [projects, setProjects] = useState(() => {
    const savedProject = localStorage.getItem("projectStore");
    return savedProject !== null
      ? JSON.parse(savedProject)
      : [
          {
            id: crypto.randomUUID(),
            projectName: "",
            projectLink: "",
            technologyUsed: "",
            projectDescription: "",
          },
        ];
  });

  const handleMoreProject = () => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        projectName: "",
        projectLink: "",
        technologyUsed: "",
        projectDescription: "",
      },
    ]);
  };

  const deleteProject = (id) => {
    const projectDeleted = projects.filter((project) => project.id !== id);
    setProjects(projectDeleted);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("projectStore", JSON.stringify(projects));
  }, [projects]);

  return (
    <>
      <h2 className="project-heading">Projects</h2>
      {projects.map((project, index) => (
        <div key={project.id} className="project-content">
          <div className="project-name-link-container">
            <div className="project-name-container">
              <label htmlFor={`user-project-name-${index}`}>Project Name</label>
              <br />
              <input
                type="text"
                name="projectName"
                id={`user-project-name-${index}`}
                className="project-name"
                placeholder="Name of the Project"
                onChange={(e) => handleChange(project.id, e)}
                value={project.projectName}
              />
            </div>
            <div className="project-link-container">
              <label htmlFor={`user-project-link-${index}`}>Project Link</label>
              <br />
              <input
                type="text"
                name="projectLink"
                id={`user-project-link-${index}`}
                className="project-link"
                placeholder="Link for the Project"
                onChange={(e) => handleChange(project.id, e)}
                value={project.projectLink}
              />
            </div>
          </div>

          <div className="technologies-container">
            <label htmlFor={`user-technology-used-${index}`}>
              Technology Used{" "}
            </label>
            <br />
            <input
              type="text"
              name="technologyUsed"
              id={`user-technology-used-${index}`}
              className="technology-used"
              placeholder="HTML , CSS , Javascript"
              onChange={(e) => handleChange(project.id, e)}
              value={project.technologyUsed}
            />
          </div>

          <div className="description-container">
            <label htmlFor={`user-description-container-${index}`}>
              Project Description
            </label>
            <br />
            <textarea
              type="text"
              name="projectDescription"
              id={`user-description-container-${index}`}
              className="user-description"
              placeholder="Your project description"
              onChange={(e) => handleChange(project.id, e)}
              value={project.projectDescription}
            />
          </div>

          <div className="project-handler">
            <button
              onClick={handleMoreProject}
              className="add-project project-btn"
            >
              Add
            </button>

            {projects.length > 1 && (
              <button
                onClick={() => deleteProject(project.id)}
                className="delete-project project-btn"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectInformation;
