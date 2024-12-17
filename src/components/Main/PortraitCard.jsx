import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import uniqid from "uniqid";

const PortraitCard = ({ song, start }) => {
  let songsContext = useContext(SongsContext);
  let songIdHandler = songsContext[1];
  let songId = songsContext[2];
  let isPlaying = songsContext[3];
  let idSong = uniqid();
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
      <div className="custom-card">
        <div className="img-holder">
          <img src={song[start].album.cover_big} alt="" />
        </div>
        <div className="text">
          <h2>{song[start].artist.name}</h2>
          <p className="overflow-hidden">{song[start].title_short}</p>
        </div>
        <div className="play-icon" id={idSong}>
          <div
            className="circle"
            onClick={() => songIdHandler(song[start].id, idSong)}
          >
            {isPlaying && songId == song[start].id ? (
              <div className="twoLine">
                <div className="firstL"></div>
                <div className="secondL"></div>
              </div>
            ) : (
              <div className="triangle"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitCard;
