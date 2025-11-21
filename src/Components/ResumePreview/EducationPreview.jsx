import React, { useEffect, useState } from "react";

const EducationPreview = () => {
  const [educationInfo, setEducationInfo] = useState(null);

  useEffect(() => {
    const savedEducationInfo = JSON.parse(
      localStorage.getItem("educationStore")
    );
    setEducationInfo(savedEducationInfo);
  }, []);

  return (
    <>
      <h2 className="user-education-heading">Education</h2>
      {educationInfo?.map((education) => (
        <div key={education.id} className="user-education-content">
          <h2 className="education-degree">{education?.degree}</h2>
          <h3 className="education-university">{education.university}</h3>
          <p className="education-period">
            {education.universityStartDate} - {education.universtiyEndDate}
          </p>
        </div>
      ))}
    </>
  );
};

export default EducationPreview;
