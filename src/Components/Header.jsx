import React from "react";
import resumeImage from "../Images/resume .png";

const Header = () => {
  return (
    <>
      <header>
        <div className="app-heading">
          <div className="app-heading-content">
            <img className="resume-logo" src={resumeImage} alt="resume-logo" />
            <h1 className="heading">Resume Maker</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
