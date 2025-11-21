import React, { useEffect, useState } from "react";

const WorkExperiencePreview = () => {
  const [workExperienceInfo, setWorkExperienceInfo] = useState(null);

  useEffect(() => {
    const savedWorkExpInfo = JSON.parse(localStorage.getItem("expStore"));
    setWorkExperienceInfo(savedWorkExpInfo);
  }, []);

  return (
    <>
      <h2 className="user-work-exp-heading">Work Experience</h2>

      {workExperienceInfo?.map((exp) => (
        <div key={exp.id} className="user-work-exp-content">
          <h2 className="job-position">{exp.jobPosition}</h2>
          <h3 className="job-company">{exp.jobCompany}</h3>

          <div className="user-job-duration-city-container">
            <div className="user-job-duration-container">
              <p className="job-duration">
                {exp.jobStartDate} - {exp.jobEndDate}{" "}
              </p>
            </div>

            <div className="user-job-city-container">
              <p className="job-city">{exp.jobCity}</p>
            </div>
          </div>

          <p className="job-accomplishment">{exp.jobAccomplishment}</p>
        </div>
      ))}
    </>
  );
};

export default WorkExperiencePreview;
