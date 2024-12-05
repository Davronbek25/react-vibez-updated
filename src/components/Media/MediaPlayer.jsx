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
  playerSetter
}) => {
  let songsContext = useContext(SongsContext);
  let songs = songsContext[0];
  let songId = songsContext[2];
  let chosenSongs;
  if (songId) {
    if (songs.length > 1) {
      songs.forEach((song) => {
        const foundSong = song.find((s) => s.id === songId);
        if (foundSong) {
          chosenSongs = foundSong;
        }
      });
    }
  } else {
    chosenSongs = songs.length > 1 ? songs[1][5] : "";
    // audio.current && (audio.current.src = chosenSongs.preview);
  }
  return (
    <div className="play-media">
      <div className="container-fluid">
        <div className="row d-flex flex-nowrap justify-content-between">
          <MediaLeft chosenSongs={chosenSongs} />
          <MediaMiddle
            audio={audio}
            song={chosenSongs}
            duration={duration}
            currentTime={currentTime}
            audioMobile={audioMobile}
            pBMobile={pBMobile}
            isPlaying={isPlaying}
            playerSetter={playerSetter}
          />
          <MediaRight audio={audio} />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
