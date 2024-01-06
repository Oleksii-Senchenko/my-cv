import React from "react";
import css from './Header.module.css'
const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Hi Recruiter!</h1>
    </header>
  );
};

export default Header;
