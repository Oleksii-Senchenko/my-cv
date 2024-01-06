import React from "react";
import css from "./SideSection.module.css";
import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";
import tech from "../../tech.json";
import soft from "../../tech.json";
import language from "../../language.json";
const SideSection = () => {
  return (
    <div className={css.main}>
      <Contacts title={"Contacts"} />
      <Skills list={tech}  title={"Tech Skills"}/>
      <Skills list={soft} title={"Soft Skills"} />
      <Skills list={language}  title={"Languages"}/>
    </div>
  );
};

export default SideSection;
