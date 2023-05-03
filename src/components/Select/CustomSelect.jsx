import React from "react";
import useOutsideClick from "./hooks/useOutsideClick";
import s from "./CustomSelect.module.scss";

const CustomSelect = ({ onSelected, value, title, theme }) => {
   const options = [
      { value: "sans-serif", label: "Sans Serif" },
      { value: "serif", label: "Serif" },
      { value: "monospace", label: "Mono" },
   ];
   const [isOpen, setOpen] = React.useState(false);
   const [selected, setSelected] = React.useState(value);
   const selectRef = React.useRef(null);
   useOutsideClick(selectRef, () => {
      setOpen(false);
   });
   const selectHandler = (data) => {
      onSelected(data)
      setSelected(data)
   }
   return (
      <div>
         <div
            ref={selectRef}
            onClick={() => {
               setOpen((prev) => !prev);
            }}
            className={s.wrapper}
         >
            <div className={`${s.customSelect} ${isOpen && s.open}`}>
               <div className={`${s.selectTitle} ${isOpen && s.open}`}>
                  <span>
                     {options.find((item) => item.value === selected)?.label ||
                        title}
                  </span>
               </div>
               <div className={theme === 'light' ? s.customOptions : `${s.customOptions} ${s.customOptionsDark}`}>
                  {options.map((item) => {
                     return (
                        <div
                        key={item.label}
                           onClick={() => selectHandler(item.value)}
                           className={s.optionContainer}
                           style={{fontFamily: item.value}}
                        >
                           {/* <ion-icon src={item.pathLogo}></ion-icon> */}
                           {item.label}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         {/* {error && !selected && <ErrorMessage errorMessage={error.message}/>} */}
      </div>
   );
};
export default CustomSelect;
