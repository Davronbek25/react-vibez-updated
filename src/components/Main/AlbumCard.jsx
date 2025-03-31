import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import uniqid from "uniqid";

const AlbumCard = ({ song, start, songCard }) => {
  let songsContext = useContext(SongsContext);
  let songIdHandler = songsContext[1];
  let songId = songsContext[2];
  let isPlaying = songsContext[3];
  let idSong = uniqid();
  let cardSong = songCard? songCard : song[start]
  let colSpecs = songCard? 'col' : "col col-lg-4 col-md-6 col-sm-12"
  return (
    <div className={colSpecs}>
      <div className="card mb-3 m-auto" style={{ maxWidth: cardSong? "740px" : "540px" }}>
        <div className="row flex-nowrap g-0">
          <div className="col-md-4">
            <img
              src={cardSong.album.cover_big}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col d-flex position-relative">
          <div className="card-text d-flex flex-column justify-content-center ps-3 w-75">
              <p className="ps-3 text-white m-0">
                {cardSong.title.substring(0, 20)}
              </p>
              <p className="ps-3 text-white-50 m-0">
                {cardSong.artist.name.substring(0, 20)}
              </p>
            </div>

            <div className="play-icon0 shadow-sm my-auto ms-auto pe-3" id={idSong}>
              <div
                className="circle"
                onClick={() => songIdHandler(cardSong.id, idSong)}
              >
                {isPlaying && songId == cardSong.id ? (
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
      </div>
    </div>
  );
};

export default AlbumCard;
