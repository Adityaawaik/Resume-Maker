import React, { useEffect, useState } from "react";

const EducationInformation = () => {
  const [educations, setEducations] = useState(() => {
    const savedEducation = localStorage.getItem("educationStore");
    return savedEducation !== null
      ? JSON.parse(savedEducation)
      : [
          {
            id: crypto.randomUUID(),
            degree: "",
            university: "",
            universityStartDate: "",
            universtiyEndDate: "",
          },
        ];
  });

  const handelMoreEducation = () => {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        degree: "",
        university: "",
        universityStartDate: "",
        universtiyEndDate: "",
      },
    ]);
  };

  const deleteEducation = (id) => {
    const educationDeleted = educations.filter(
      (education) => education.id !== id
    );
    setEducations(educationDeleted);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEducations((prev) =>
      prev.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("educationStore", JSON.stringify(educations));
  }, [educations]);

  return (
    <>
      <h2 className="education-heading">Education</h2>

      {educations.map((education, index) => (
        <div key={education.id} className="education-content">
          <div className="degree-university-container">
            <div className="degree-container">
              <label htmlFor={`user-degree-name-${index}`}>Degree</label>
              <br />
              <input
                type="text"
                name="degree"
                id={`user-degree-name-${index}`}
                className="degree-name"
                placeholder="Degree Name"
                onChange={(e) => handleChange(education.id, e)}
                value={education.degree}
              />
            </div>

            <div className="university-container">
              <label htmlFor={`user-university-name-${index}`}>
                University
              </label>
              <br />
              <input
                type="text"
                name="university"
                id={`user-university-name-${index}`}
                className="university-name"
                placeholder="University Name"
                onChange={(e) => handleChange(education.id, e)}
                value={education.university}
              />
            </div>
          </div>

          <div className="uni-start-date-end-date-container">
            <div className="uni-start-date-container">
              <label htmlFor={`user-start-date-${index}`}>From</label>
              <br />
              <input
                type="date"
                name="universityStartDate"
                id={`user-start-date-${index}`}
                className="start-date"
                onChange={(e) => handleChange(education.id, e)}
                value={education.universityStartDate}
              />
            </div>

            <div className="uni-end-date-container">
              <label htmlFor={`user-end-date-${index}`}>To</label>
              <br />
              <input
                type="date"
                name="universtiyEndDate"
                id={`user-end-date-${index}`}
                className="end-date"
                onChange={(e) => handleChange(education.id, e)}
                value={education.universtiyEndDate}
              />
            </div>
          </div>

          <div className="education-handler">
            <button
              onClick={handelMoreEducation}
              className="add-education education-btn"
            >
              Add
            </button>
            {educations.length > 1 && (
              <button
                onClick={() => deleteEducation(education.id)}
                className="delete-education education-btn"
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

export default EducationInformation;
