import React, { useRef, useContext, useState } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import { IconContext } from "react-icons";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { FiPause } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

let audio1;
let setIsPlaying1;
let song1
let songIdHandler

const MediaMiddle = ({
  audio,
  song,
  duration,
  currentTime,
  pBMobile,
  isPlaying,
}) => {
  const [prevSongs, setPrevSongs] = useState([]);
  audio1 = audio;
  song1 = song;

  let el = useRef();
  let songsContext = useContext(SongsContext);
  let songsStored = songsContext[0];
  songIdHandler = songsContext[1];

  const playNext = () => {
    if (prevSongs.length > 30) {
      setPrevSongs([song]);
    } else {
      setPrevSongs((prev) => [...prev, song]);
    }
    let random3 =
      Math.round(Math.random() * 3) !== undefined
        ? Math.round(Math.random() * 3)
        : 2;
    let random24 =
      Math.round(Math.random() * 24) !== undefined
        ? Math.round(Math.random() * 24)
        : 2;
    let songNext;
    if (random3 && random24 && songsStored.length > 1) {
      songNext = songsStored[random3];
      songNext = songNext[random24];
    }
    songIdHandler(songNext.id);
  };

  const playPrev = () => {
    if (prevSongs.length > 2) {
      prevSongs.pop();
    }
    songIdHandler(prevSongs[prevSongs.length - 1].id);
  };

  const handleProgressBarUpdate = (ended = false) => {
    let percentage = (audio.current.currentTime / audio.current.duration) * 100;

    if (ended) {
      el.current.style.width = "0%";
      pBMobile.current.style.width = "0%";
      setIsPlaying1();
    } else {
      el.current.style.width = percentage.toString() + "%";
      pBMobile.current && (pBMobile.current.style.width = percentage.toString() + "%");
    }

    let minutes = "0" + Math.floor(audio.current.currentTime / 60);
    let seconds = "0" + Math.floor(audio.current.currentTime);
    currentTime.current.innerText =
      minutes.substr(-2) + ":" + seconds.substr(-2);
  };

  let progressBar = useRef();
  const handleProgressBarClick = (e) => {
    let elt = e.currentTarget.firstElementChild;
    let percentage =
      parseInt(e.nativeEvent.offsetX * 100) / e.currentTarget.clientWidth;
    elt.style.width = percentage.toString() + "%";

    audio.current.currentTime = (percentage / 100) * audio.current.duration;
  };

  audio.current &&
    (audio.current.ontimeupdate = () => handleProgressBarUpdate());
  audio.current &&
    (audio.current.onended = () => handleProgressBarUpdate(true));

  return (
    <IconContext.Provider value={{ className: "media-middle-icons" }}>
      <div className="col middle-media-btm d-flex">
        <div className="d-flex align-items-center justify-content-center ps-5 ms-5 ms-md-3">
          <RxTrackPrevious onClick={playPrev} />
          <div id="playIcon-container" onClick={() => songIdHandler()}>
            {isPlaying ? <FiPause id="fi_pause" /> : <FiPlay />}
          </div>
          <RxTrackNext onClick={playNext} />
        </div>
        <div className="progressContainer d-flex align-items-center position-relative ps-5 pt-sm-0 pt-lg-2">
          <span ref={currentTime} className="currentTime">
            00:00
          </span>
          <div
            ref={progressBar}
            id="progress-bar-btm"
            onClick={handleProgressBarClick}
          >
            <div ref={el} className="progress-bar-in">
              <audio ref={audio}></audio>
            </div>
          </div>
          <span ref={duration} className="duration">
            00:00
          </span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default MediaMiddle;
