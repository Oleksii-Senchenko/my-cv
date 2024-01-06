import React from "react";
import Line from "../Line/Line";
import css from "./Skills.module.css";
const Skills = ({ title, list }) => {
  return (
    <div className={css.main}>
      <h2 className={css.title}>{title}</h2>
      <Line />
      <ul className={css.list}>
        {list.map((item, index) => (
          <li className={css.item} key={`${item.item}_${index}`}>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
