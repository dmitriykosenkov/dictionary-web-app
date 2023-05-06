import { useAudioPlayer } from "react-use-audio-player";
import s from "./Audio.module.scss";

function Audio({ src }) {
   const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
      src: src,
      format: "mp3",
      autoplay: false,
      onend: () => console.log("sound has ended!"),
   });
   console.log(playing);


   return (
      <div
         className={!playing ? s.controls : `${s.controls} ${s.active}`}
         onClick={togglePlayPause}
      ></div>
   );
}

export default Audio;
