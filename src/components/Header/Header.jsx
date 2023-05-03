import { useState } from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import CustomSelect from "../Select/CustomSelect";
import { Link } from "react-router-dom";

const Header = ({ setSelected, theme, toggleTheme }) => {
   return (
      <header className={s.header}>
         <Link to={'/'} className={s.headerLogo}>
            <img src={logo} alt="logo" />
         </Link>
         <div className={s.headerControls}>
            <CustomSelect
            theme={theme}
               onSelected={setSelected}
               name="sans-serif"
               value="Inter sans-serif"
               title="Sans Serif"
            />
            <div className={s.divider}></div>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
         </div>
      </header>
   );
};
export default Header;
