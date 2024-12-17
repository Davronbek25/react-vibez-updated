import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import uniqid from "uniqid";

const AlbumCard = ({ song, start }) => {
  let songsContext = useContext(SongsContext);
  let songIdHandler = songsContext[1];
  let songId = songsContext[2];
  let isPlaying = songsContext[3];
  let idSong = uniqid();
  return (
    <div className="col col-lg-4 col-md-6 col-sm-12">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row flex-nowrap g-0">
          <div className="col-md-4">
            <img
              src={song[start].album.cover_big}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col d-flex position-relative">
            <p className="card-text align-self-center ps-3 text-white m-0 w-75">
              {song[start].title.substring(0, 20)}
            </p>

            <div className="play-icon0 shadow-sm my-auto ms-auto pe-3" id={idSong}>
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
      </div>
    </div>
  );
};

export default AlbumCard;
