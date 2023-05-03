import { Link } from "react-router-dom";
import s from "./DescriptionItem.module.scss";

const DescriptionItem = ({ meanings }) => {
   return (
      <div className={s.body}>
         <h4 className={s.title}>
            <p>{meanings.partOfSpeech}</p>
            <span></span>
         </h4>
         <div className={s.subtitle}>Meaning</div>

         <ul className={s.list}>
            {meanings.definitions.map((item, i) => (
               <li key={i} className={s.listItem}>
                  <div className={s.listItemTitle}>{item.definition}</div>
                  {item.example && (
                     <div className={s.listItemSubitle}>"{item.example}"</div>
                  )}
               </li>
            ))}
         </ul>
         {meanings.synonyms.length !== 0 && (
            <div className={s.synonyms}>
               <div className={s.synonymsSubtitle}>Synonyms</div>
               <Link to={`/${meanings.synonyms[0]}`}
                  // onClick={() => setSearch(meanings.synonyms[0])}
                  className={s.synonymsTitle}
               >
                  {meanings.synonyms[0]}
               </Link>
            </div>
         )}
      </div>
   );
};
export default DescriptionItem;
