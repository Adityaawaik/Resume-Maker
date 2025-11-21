import React from "react";
import PersonInformationPreview from "./ResumePreview/PersonInformationPreview";
import WorkExperiencePreview from "./ResumePreview/WorkExperiencePreview";
import ProjectPreview from "./ResumePreview/ProjectPreview";
import EducationPreview from "./ResumePreview/EducationPreview";

const Preview = () => {
  return (
    <>
      <PersonInformationPreview />
      <WorkExperiencePreview />
      <ProjectPreview />
      <EducationPreview />
    </>
  );
};

export default Preview;
