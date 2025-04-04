import { useRef, useContext } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import { average } from "color.js";

const BottomPlayer = ({ audioMobile, pBMobile, isPlaying }) => {
  let songsContext = useContext(SongsContext);
  let bottomPlayerRow = useRef();

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
  let songIdHandler = songsContext[1];
  // Heart Button
  let heart = useRef();
  const likeBtn = () => {
    if (heart.current) {
      if (heart.current.getAttribute("src").length === 15) {
        heart.current.setAttribute("src", "./imgs/liked.png");
      } else if (heart.current.getAttribute("src").length === 16) {
        heart.current.setAttribute("src", "./imgs/like.png");
      } else console.log("error from like button(heart)");
    }
  };
  // 

  // Song photo matching background
  chosenSong &&
    average(chosenSong.album.cover_big, { format: "hex" }).then((color) => {
      if (bottomPlayerRow.current) {
        bottomPlayerRow.current.style.backgroundImage = `linear-gradient(to bottom right, ${color}, rgb(55 46 46))`;
      }
    });

  return (
    <div id="bottomPlayer" className="container">
      <div
        ref={bottomPlayerRow}
        className="row position-relative d-flex justify-content-between"
      >
        <div className="col-9 d-flex p-0 position-relative">
          <img
            src={chosenSong && chosenSong.album.cover_big}
            width=""
            className=""
            alt=""
            onClick={() => songIdHandler(chosenSong && chosenSong.id)}
          />
          <span className="bottom-player-text">
            <h6 className="mb-0 text-truncate">{chosenSong && chosenSong.artist.name}</h6>
            <p className="mb-0 text-truncate w-75">{chosenSong && chosenSong.title_short}</p>
          </span>
        </div>
        <div className="col-3 d-flex align-items-center bottom-player-right">
          <img
            src="./imgs/like.png"
            alt="like"
            ref={heart}
            onClick={likeBtn}
          />
          <img
            src={isPlaying ? "./imgs/pause.png" : "./imgs/play.png"}
            className="ms-auto"
            alt="play"
            onClick={() => songIdHandler()}
          />
        </div>
        <div id="progress-bar-mobile">
          <div className="progress-bar-in" ref={pBMobile}>
            <audio ref={audioMobile}></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
