import React, { useEffect, useState } from "react";
import emailLogo from "../../Images/email.png";
import phoneLogo from "../../Images/phonelogo.png";
import linkedInLogo from "../../Images/linkedin.png";
import githubLogo from "../../Images/github.png";

const PersonInformationPreview = () => {
  const [personInfromation, setPersonInfromation] = useState(null);

  useEffect(() => {
    const savedPersonInformation = JSON.parse(
      localStorage.getItem("personInformation")
    );
    setPersonInfromation(savedPersonInformation);
  }, []);

  return (
    <>
      <h1 className="user-name">{personInfromation?.personName}</h1>
      <h2 className="user-job-title">{personInfromation?.personJobTitle}</h2>
      <p className="user-profession-summary">
        {personInfromation?.personProfessionSummary}
      </p>
      <hr />

      <div className="user-connection-ways">
        <div className="user-email-address-container">
          <img src={emailLogo} className="email-logo" alt="email-logo" />
          <p className="email-address">
            {personInfromation?.personEmailAddress}
          </p>
        </div>

        <div className="user-phone-number-container">
          <img
            src={phoneLogo}
            className="phone-number-logo"
            alt="phone-number-logo"
          />
          <p className="phone-number">{personInfromation?.personPhoneNumber}</p>
        </div>

        <div className="user-linedIn-container">
          <img
            src={linkedInLogo}
            alt="linkedIn-logo"
            className="linkedIn-logo"
          />

          <a
            className="linkedIn-address-link"
            href={personInfromation?.personLinkedInLink}
          >
            {personInfromation?.personLinkedInLink}
          </a>
        </div>

        <div className="user-github-container">
          <img src={githubLogo} className="github-logo" alt="github-logo" />
          <a
            className="github-link-address"
            href={personInfromation?.personGithubLink}
          >
            {personInfromation?.personGithubLink}
          </a>
        </div>
      </div>
      <h2 className="user-skill-heading">Skills</h2>
      <p className="user-skills">{personInfromation?.personSkills}</p>
    </>
  );
};

export default PersonInformationPreview;
