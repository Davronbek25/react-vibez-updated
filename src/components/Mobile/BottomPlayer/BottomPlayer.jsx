import { useRef, useContext } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import { average } from "color.js";
import { handlePlay } from "../../Media/MediaMiddle";

const BottomPlayer = ({ playIconMobile, audioMobile, pBMobile }) => {
  let songsContext = useContext(SongsContext);
  let bottomPlayerRow = useRef();

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
  chosenSongs &&
    average(chosenSongs.album.cover_big, { format: "hex" }).then((color) => {
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
            src={chosenSongs && chosenSongs.album.cover_big}
            width=""
            className=""
            alt=""
            onClick={() => songIdHandler(chosenSongs && chosenSongs.id)}
          />
          <span className="bottom-player-text">
            <h6 className="mb-0 text-truncate">{chosenSongs && chosenSongs.artist.name}</h6>
            <p className="mb-0 text-truncate w-75">{chosenSongs && chosenSongs.title_short}</p>
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
            src="./imgs/play.png"
            className="ms-auto"
            alt="play"
            ref={playIconMobile}
            onClick={handlePlay}
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
