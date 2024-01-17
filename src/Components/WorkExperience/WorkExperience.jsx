import React from "react";
import css from "../MainSection/MainSection.module.css";

const WorkExperience = () => {
  return (
    <section className={css.section}>
      <h2 className={css.sectionTitle}>Work Experience</h2>
      <p className={css.chapter}></p>
      <div>
        <p>
          2021
          <br />
          NETZSCH, mechanical engineer, Bobingen, Germany
        </p>
        <p>
        In the position of mechanical engineer, I worked at a chemical factory
NETZSCH. Building industrial machines. Helped the senior engineer.
Learned to collaborate in teams, take responsibility.
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
