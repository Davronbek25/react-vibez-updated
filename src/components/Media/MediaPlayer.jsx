import React, { useRef, useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import MediaLeft from "./MediaLeft";
import MediaMiddle from "./MediaMiddle";
import MediaRight from "./MediaRight";

const MediaPlayer = ({
  audio,
  duration,
  currentTime,
  audioMobile,
  pBMobile,
  isPlaying,
}) => {
  let songsContext = useContext(SongsContext);
  let songs = songsContext[0];
  let songId = songsContext[2];
  let chosenSong;
  if (songId) {
    if (songs.length > 1) {
      songs.forEach((song) => {
        const foundSong = song.find((s) => s.id === songId);
        if (foundSong) {
          chosenSong = foundSong;
        }
      });
    }
  } else {
    chosenSong = songs.length > 1 ? songs[1][5] : "";
  }
  return (
    <div className="play-media">
      <div className="container-fluid">
        <div className="row d-flex flex-nowrap justify-content-between">
          <MediaLeft chosenSong={chosenSong} />
          <MediaMiddle
            audio={audio}
            song={chosenSong}
            duration={duration}
            currentTime={currentTime}
            audioMobile={audioMobile}
            pBMobile={pBMobile}
            isPlaying={isPlaying}
          />
          <MediaRight audio={audio} />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
