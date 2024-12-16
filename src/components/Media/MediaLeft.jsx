import React, { useContext } from "react"
import { SongsContext } from "../../context/SongsContextProvider"

const MediaLeft = ({chosenSong}) => {
  let songsContext = useContext(SongsContext)
    let songIdHandler = songsContext[1]
  return (
    <div className="col p-0">
        <div className="row flex-nowrap left-media-btm">
            <div className="col-2 position-relative">
                <img
                src={chosenSong && chosenSong.album.cover_big}
                width=""
                className="rounded-circle"
                alt=""
                onClick={() => songIdHandler(chosenSong && chosenSong.id)}
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
                    <h6 className="text-white text-truncate">{chosenSong && chosenSong.artist.name}</h6>
                    <p className="mb-0 text-truncate">{chosenSong && chosenSong.title_short}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MediaLeft