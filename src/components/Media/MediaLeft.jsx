import React, { useRef, useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"

const MediaLeft = ({chosenSongs}) => {
  let songsContext = useContext(SongsContext)
    let songIdHandler = songsContext[1]
  return (
    <div className="col p-0">
        <div className="row flex-nowrap left-media-btm">
            <div className="col-2 position-relative">
                <img
                src={chosenSongs && chosenSongs.album.cover_big}
                width=""
                className="rounded-circle"
                alt=""
                onClick={() => songIdHandler(chosenSongs && chosenSongs.id)}
                />
                <span>
                    <img
                    src="./imgs/cirle_indicator.png"
                    alt="artist-image"
                    />
                </span>
            </div>
            <div className="col-auto ms-2 d-flex align-items-center p-0">
                <div className="left-media-btm-text">
                    <h6 className="text-white text-truncate">{chosenSongs && chosenSongs.artist.name}</h6>
                    <p className="mb-0 text-truncate">{chosenSongs && chosenSongs.title_short}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MediaLeft