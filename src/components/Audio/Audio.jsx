import { useAudioPlayer } from "react-use-audio-player";
import s from "./Audio.module.scss";

function Audio({ src }) {
   const { togglePlayPause, playing } = useAudioPlayer({
      src: src,
      format: "mp3",
      autoplay: false,
   });
   return (
      <div
         className={!playing ? s.controls : `${s.controls} ${s.active}`}
         onClick={togglePlayPause}
      ></div>
   );
}

export default Audio;
