import switcherIcon from "../../assets/iconoir_half-moon.svg";
import switcherIconDark from "../../assets/moon-dark.svg";
import s from "./ThemeSwitcher.module.scss";


const ThemeSwitcher = ({theme, toggleTheme}) => {

   return (
      <div className={s.body}>
         <fieldset className={theme === 'light' ? s.switcher : `${s.switcher} ${s.switcherDark}`}>
            <legend className={s.switcherLegend}>Схема</legend>
            <input
               className={'light' === theme ? `${s.switcherRadio} ${s.switcherRadioLight}` : `${s.switcherRadio}`}
               type="radio"
               name="color-scheme"
               value="light"
               aria-label="Світла"
               onClick={toggleTheme}
               defaultChecked

            />
            <input
               className={'dark' === theme ? `${s.switcherRadio} ${s.switcherRadioDark}` : `${s.switcherRadio}`}
               type="radio"
               name="color-scheme"
               value="dark"
               aria-label="Темна"
               onClick={toggleTheme}
            />
         </fieldset>
         <div className={s.switcherIcon}>
            <img src={'light' === theme ? switcherIcon : switcherIconDark} alt="" />
         </div>
      </div>
   );
};
export default ThemeSwitcher;
