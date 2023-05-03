import { useRouteError } from "react-router-dom";
import errorIcon from "../assets/not-found-icon.png";

import s from "./Errorpage.module.css";

export default function ErrorPage() {
   const error = useRouteError();
   const errorObj = JSON.parse(error.statusText);
   return (
      <div className={s.errorBody}>
         <div className={s.icon}>
            <img src={errorIcon} alt="error" />
         </div>
         <h3 className={s.title}>{errorObj.title}</h3>
         <p className={s.text}>
            {errorObj.message} {errorObj.resolution}
         </p>
      </div>
   );
}
