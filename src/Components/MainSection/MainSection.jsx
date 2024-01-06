import React from "react";
import css from "./MainSection.module.css";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import ProjectExperience from "../ProjectExperience/ProjectExperience";
import Summary from "../Summary/Summary";

const MainSection = () => {
  return (
    <div className={css.main}>
      <h1 className={css.name}>Oleksii Senchenko</h1>
      <p className={css.position}>Junior FrontEnd developer</p>
      <Summary/>
      <ProjectExperience/>
      <WorkExperience />

      <Education />
    </div>
  );
};

export default MainSection;
