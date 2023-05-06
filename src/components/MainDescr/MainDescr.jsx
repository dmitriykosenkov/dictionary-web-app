import { AudioPlayerProvider } from "react-use-audio-player";
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
         <AudioPlayerProvider>
            {isEmptyAudio && isThereAudio && <Audio src={isThereAudio.audio} />}
         </AudioPlayerProvider>
      </div>
   );
};
export default MainDescr;
