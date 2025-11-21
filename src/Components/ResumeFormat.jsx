import React from "react";
import PersonalInformation from "./ResumeInformation/PersonalInformation";
import EducationInformation from "./ResumeInformation/EducationInformation";
import ProjectInformation from "./ResumeInformation/ProjectInformation";
import WorkExperienceInformation from "./ResumeInformation/WorkExperienceInformation";

const ResumeFormat = () => {
  return (
    <>
      <PersonalInformation />
      <WorkExperienceInformation />
      <ProjectInformation />
      <EducationInformation />
    </>
  );
};

export default ResumeFormat;
