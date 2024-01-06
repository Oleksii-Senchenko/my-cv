import React from "react";
import css from "./Contacts.module.css";
import face from "../../images/photo_2024-01-05_18-24-08.jpg";
import Line from "../Line/Line";
import Title from "../Title/Title";
import icons from "../../images/icons/icons.svg";
const Contacts = ({ title }) => {
  return (
    <div className={css.main}>
      <img className={css.face} src={face} alt="Face of best trainee)" />
      <Title title={"Contacts"} />
      <Line />
      <ul className={css.contactList}>
        <li className={css.contactItem}>
        <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-phone"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="+38 093 0166 231"
            target="_blank"
            rel="noopener noreferrer"
          >
            +38 093 0166 231
          </a>
         
        </li>
        <li className={css.contactItem}>
           <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-mail4"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="alex.sench7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            alex.sench7@gmail.com
          </a>
         
        </li>
        <li className={css.contactItem}>
           <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-telegram"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="https://t.me/maverick359"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
         
        </li>
        <li className={css.contactItem}>
           <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-linkedin"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="https://www.linkedin.com/in/oleksii-senchenko-601759292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
         
        </li>
       
        <li className={css.contactItem}>
           <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-github"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="https://github.com/Oleksii-Senchenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
         
        </li>
        <li className={css.contactItem}>
           <svg className={css.icon} width="24px" height="24px">
            <use href={icons + "#icon-location"}></use>
          </svg>
          <a
            className={css.contactLink}
            href="https://maps.app.goo.gl/SS22q381PVdThNAm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinnytsia, Ukraine
          </a>
         
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
