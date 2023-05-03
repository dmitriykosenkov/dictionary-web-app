import Audio from "../Audio/Audio";
import s from "./MainDescr.module.scss";

const MainDescr = ({ word }) => {
   const isEmptyAudio = word.phonetics.length !== 0;
   const isThereAudio = word.phonetics.find((item) => item.audio !== "");

   return (
      <div className={s.body}>
         <div className={s.description}>
            <div className={s.descriptionTitle}>{word.word}</div>
            <div className={s.descriptionSubtitle}>{word.phonetic}</div>
         </div>
         <div className={s.audioBtn}>
            {isEmptyAudio && isThereAudio && <Audio src={isThereAudio.audio} />}
         </div>
      </div>
   );
};
export default MainDescr;
