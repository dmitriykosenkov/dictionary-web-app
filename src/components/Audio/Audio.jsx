import React, { useEffect, useRef, useState } from "react";
import s from "./Audio.module.scss";

function Audio({ src }) {
   const [playing, setPlaying] = useState(false);
   const [duration, setDuration] = useState(0);

   const audioRef = useRef();

   useEffect(() => {
      const audio = audioRef.current;
      if (playing) {
         audio.play();
         setPlaying(true);
      }
      if (!playing) {
         audio.pause();
         setPlaying(false);
      }
   }, [playing]);
   const getCurrDuration = (e) => {
      return e.currentTarget.currentTime === duration && setPlaying(false);
   };
   if(!src) return 

   return (
      <div className="player">
         <audio
            ref={audioRef}
            src={src}
            id="audio"
            onLoadedData={(e) => {
               setDuration(e.currentTarget.duration);
            }}
            onTimeUpdate={getCurrDuration}
         ></audio>
         <button
            disabled={playing}
            className={!playing ? s.controls : `${s.controls} ${s.active}`}
            onClick={() => setPlaying((prev) => !prev)}
         ></button>
      </div>
   );
}

export default Audio;
