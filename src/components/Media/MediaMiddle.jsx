import React, { useRef, useContext, useState, useEffect } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import { IconContext } from "react-icons";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { FiPause } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

let audio1;
let playIcon2;
let setIsPlaying1;

export const handlePlay = () => {
  if (audio1.current.played.length > 0) {
    if (audio1.current.paused) {
      setIsPlaying1();
      playIcon2.current.src = "./imgs/pause.png";
      audio1.current.play();
    } else {
      setIsPlaying1();
      playIcon2.current.src = "./imgs/play.png";
      audio1.current.pause();
    }
  } else {
    setIsPlaying1();
    playIcon2.current.src = "./imgs/pause.png";
    audio1.current.src = song.preview;
    audio1.current.play();
  }
};

const MediaMiddle = ({
  audio,
  song,
  duration,
  currentTime,
  playIconMobile,
  pBMobile,
  isPlaying,
  playerSetter,
}) => {
  const [prevSongs, setPrevSongs] = useState([]);
  audio1 = audio;
  playIcon2 = playIconMobile;
  setIsPlaying1 = playerSetter;
  console.log(song);
  const isFirstRender = useRef(true);
  console.log(isFirstRender.current);
  if(isFirstRender.current){
    console.log(audio.current, 'hey');
  }

  let el = useRef();
  let songsContext = useContext(SongsContext);
  let songsStored = songsContext[0];
  let songIdHandler = songsContext[1];

  const playNext = () => {
    if (prevSongs.length > 30) {
      setPrevSongs([song]);
    } else {
      setPrevSongs((prev) => [...prev, song]);
    }
    console.log(prevSongs);
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
      playIconMobile.current.src = "./imgs/play.png";
    } else {
      el.current.style.width = percentage.toString() + "%";
      pBMobile.current.style.width = percentage.toString() + "%";
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

  useEffect(() => {
    if (isFirstRender.current) {
      console.log("This is the first render!");
      isFirstRender.current = false; // Mark that the first render has happened
    }
  });

  return (
    <IconContext.Provider value={{ className: "media-middle-icons" }}>
      <div className="col middle-media-btm d-flex">
        <div className="d-flex align-items-center justify-content-center ps-5 ms-5 ms-md-3">
          <RxTrackPrevious onClick={playPrev} />
          <div id="playIcon-container" onClick={handlePlay}>
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
