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
          Work Experience
        </p>
        <p>
          Thanks to my university, I had an opportunity to obtain a position in
          Germany. In the position of mechanical engineer, I was working at a
          chemical factory NETZSCH. My team was involved in building industrial
          machines. I helped the senior engineer. I on this job have learned to
          collaborate in teams, take responsibility, and improved my english
          skills.
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
