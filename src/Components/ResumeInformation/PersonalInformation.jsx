import React, { useEffect, useState } from "react";

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    const savedPersonInfo = localStorage.getItem("personInformation");
    return savedPersonInfo !== null
      ? JSON.parse(savedPersonInfo)
      : {
          personName: "",
          personJobTitle: "",
          personProfessionSummary: "",
          personEmailAddress: "",
          personPhoneNumber: "",
          personLinkedInLink: "",
          personGithubLink: "",
          personSkills: "",
        };
  });

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("personInformation", JSON.stringify(personalInfo));
  }, [personalInfo]);

  return (
    <>
      <div className="user-personal-information-content">
        <h2 className="personal-information-heading">Person Information</h2>

        <div className="user-name-container">
          <label htmlFor="user-name">Full Name</label>
          <br />
          <input
            type="text"
            name="personName"
            className="applicant-name"
            id="user-name"
            placeholder="Full Name"
            onChange={handleChange}
            value={personalInfo.personName}
          />
        </div>

        <div className="user-name-job-title">
          <label htmlFor="user-job-title">Title</label>
          <br />
          <input
            type="text"
            name="personJobTitle"
            id="user-job-title"
            className="user-job-position"
            placeholder="Frontend Developer"
            onChange={handleChange}
            value={personalInfo.personJobTitle}
          />
        </div>

        <div className="user-profession-summary">
          <label htmlFor="profession-summary">Profession Summary</label>
          <br />
          <textarea
            name="personProfessionSummary"
            className="job-profession-summary"
            id="profession-summary"
            placeholder="Your professional Summary here ...."
            onChange={handleChange}
            value={personalInfo.personProfessionSummary}
          ></textarea>
        </div>

        <div className="email-phone-container">
          <div className="email-container">
            <label htmlFor="user-email">Email </label>
            <br />
            <input
              type="email"
              name="personEmailAddress"
              id="user-email"
              className="user-email-address"
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={personalInfo.personEmailAddress}
            />
          </div>

          <div className="phone-container">
            <label htmlFor="user-phone">Phone</label>
            <br />
            <input
              type="text"
              name="personPhoneNumber"
              id="user-phone"
              className="user-phone-number"
              placeholder="+91 9876543210"
              onChange={handleChange}
              value={personalInfo.personPhoneNumber}
            />
          </div>
        </div>

        <div className="linkedIn-github-container">
          <div className="linkedIn-container">
            <label htmlFor="user-linkedIn">LinkedIn</label>
            <br />
            <input
              type="text"
              name="personLinkedInLink"
              id="user-linkedIn"
              className="user-linkedIn-link"
              placeholder="linkedIn.com/myprofile"
              onChange={handleChange}
              value={personalInfo.personLinkedInLink}
            />
          </div>

          <div className="github-container">
            <label htmlFor="user-github">Github</label>
            <br />
            <input
              type="text"
              name="personGithubLink"
              id="user-github"
              className="user-github-link"
              placeholder="github.com/myprofile"
              onChange={handleChange}
              value={personalInfo.personGithubLink}
            />
          </div>
        </div>

        <h2 className="personal-skills-heading">Skills</h2>

        <div className="user-skills">
          <input
            type="text"
            name="personSkills"
            id="skills"
            className="skills"
            placeholder="HTML , CSS , JS "
            onChange={handleChange}
            value={personalInfo.personSkills}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
