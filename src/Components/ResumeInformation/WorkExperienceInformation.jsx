import React, { useEffect, useState } from "react";

const WorkExperienceInformation = () => {
  const [experience, setExperience] = useState(() => {
    const savedExp = localStorage.getItem("expStore");
    return savedExp !== null
      ? JSON.parse(savedExp)
      : [
          {
            id: crypto.randomUUID(),
            jobPosition: "",
            jobCompany: "",
            jobStartDate: "",
            jobEndDate: "",
            jobCity: "",
            jobAccomplishment: "",
          },
        ];
  });

  const handleMoreExp = () => {
    setExperience([
      ...experience,
      {
        id: crypto.randomUUID(),
        jobPosition: "",
        jobCompany: "",
        jobStartDate: "",
        jobEndDate: "",
        jobCity: "",
        jobAccomplishment: "",
      },
    ]);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    );
  };

  const deleteExp = (id) => {
    const expDeleted = experience.filter((exp) => exp.id !== id);
    setExperience(expDeleted);
  };

  useEffect(() => {
    localStorage.setItem("expStore", JSON.stringify(experience));
  }, [experience]);

  return (
    <>
      <h2 className="work-exp-heading">Work Experience</h2>

      {experience.map((exp, index) => (
        <div key={exp.id} className="user-work-experience">
          <div className="position-company-container">
            <div className="work-position-container">
              <label htmlFor={`user-work-position-${index}`}>
                Work Position
              </label>
              <br />
              <input
                type="text"
                name="jobPosition"
                id={`user-work-position-${index}`}
                className="work-position-input"
                placeholder="Software Engineer"
                onChange={(e) => handleChange(exp.id, e)}
                value={exp.jobPosition}
              />
            </div>

            <div className="work-company-container">
              <label htmlFor={`user-work-company-${index}`}>Work Company</label>
              <br />
              <input
                type="text"
                name="jobCompany"
                id={`user-work-company-${index}`}
                className="user-work-company-input"
                placeholder="Apple"
                onChange={(e) => handleChange(exp.id, e)}
                value={exp.jobCompany}
              />
            </div>
          </div>

          <div className="job-period-work-city-container">
            <div className="job-period-container">
              <div className="job-start-container">
                <label htmlFor={`job-start-date-${index}`}>From</label>
                <br />
                <input
                  type="text"
                  name="jobStartDate"
                  id={`job-start-date-${index}`}
                  className="user-job-start-date"
                  placeholder="11/24"
                  onChange={(e) => handleChange(exp.id, e)}
                  value={exp.jobStartDate}
                />
              </div>

              <div className="job-end-container">
                <label htmlFor={`job-end-date-${index}`}>To</label>
                <br />
                <input
                  type="text"
                  name="jobEndDate"
                  id={`job-end-date-${index}`}
                  className="user-job-end-date"
                  placeholder="Present"
                  onChange={(e) => handleChange(exp.id, e)}
                  value={exp.jobEndDate}
                />
              </div>
            </div>

            <div className="work-city-container">
              <label htmlFor={`work-ctiy-${index}`}>Work City</label>
              <input
                type="text"
                name="jobCity"
                id={`work-ctiy-${index}`}
                className="user-work-city"
                placeholder="California , USA"
                onChange={(e) => handleChange(exp.id, e)}
                value={exp.jobCity}
              />
            </div>
          </div>

          <div className="accomplishment-container">
            <label htmlFor={`accomplishment-${index}`}>Accomplishment</label>
            <br />
            <textarea
              name="jobAccomplishment"
              id={`accomplishment-${index}`}
              className="user-accomplishment"
              placeholder="Your work accomplishment here ...."
              onChange={(e) => handleChange(exp.id, e)}
              value={exp.jobAccomplishment}
            ></textarea>
          </div>

          <div className="experience-handler">
            <button onClick={handleMoreExp} className="add-experience exp-btn">
              Add
            </button>
            {experience.length > 1 && (
              <button
                onClick={() => deleteExp(exp.id)}
                className="delete-experience exp-btn"
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

export default WorkExperienceInformation;
