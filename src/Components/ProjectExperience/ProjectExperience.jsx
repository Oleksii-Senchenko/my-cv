import React from 'react';
import css from '../MainSection/MainSection.module.css';

const ProjectExperience = () => {
  return (
    <section className={css.section}>
      <h2 className={css.sectionTitle}>Project Experience</h2>
      <p className={css.chapter}></p>
      <div>
        <div>
          <ul className={css.list}>
            <li>
              <a
                className={css.link}
                href="https://oleksii-senchenko.github.io/goit-markup-hw-08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebStudio,
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="https://github.com/Oleksii-Senchenko/goit-markup-hw-08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project link
              </a>
            </li>
          </ul>
          <p className={css.skill}>HTML- SASS - JS</p>
          <p className={css.about}>
            This project is my last homework, here I used all my knowledge from
            the HTML/CSS course
          </p>
        </div>
        <div>
          <ul className={css.list}>
            <li>
              <a
                className={css.link}
                href="https://kolba228.github.io/bookshelf/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bookshelf,
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="https://github.com/Oleksii-Senchenko/bookshelf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project link
              </a>
            </li>
          </ul>
          <p className={css.skill}>HTML- SASS - JS</p>
          <p className={css.about}>
            IIn this project I took the position of a developer, my tasks
            included writing a header and logic for it
          </p>
        </div>
        <div>
          <ul className={css.list}>
            <li>
              <a
                className={css.link}
                href="https://ivanfendrykov.github.io/your_happy_pet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Your happy pet,
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="https://github.com/Oleksii-Senchenko/your_happy_pet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project link,
              </a>
            </li>
            <li>
              <a
                className={css.link}
                href="https://github.com/Oleksii-Senchenko/your_happy_pet_rest_api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server link,
              </a>
            </li>
          </ul>
          <p className={css.skill}>JS, React, react-router, redux, Node.js</p>
          <p className={css.about}>
            In this project, I was responsible for the "Add a pet" form and all
            of the backend logic for it
            <br /> Also, I writed the back-end for the “Notices” section
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
