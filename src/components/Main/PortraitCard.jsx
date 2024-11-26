import React, { useContext } from 'react'
import { SongsContext } from '../../context/SongsContextProvider'

const PortraitCard = ({song, start}) => {
    let songsContext = useContext(SongsContext)
    let songIdHandler = songsContext[1]
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
        <div className="custom-card">
            <div className="img-holder">
                <img src={song[start].album.cover_big} alt="" />
            </div>
            <div className="text">
                <h2>{song[start].artist.name}</h2>
                <p className='overflow-hidden'>{song[start].title_short}</p>
            </div>
            <div className="play-icon">
                <div className="circle" 
                onClick={() => songIdHandler(song[start].id)} 
                id={song[start].id}
                >
                    <div className="triangle"></div>
                    <div className="twoLine d-none">
                        <div className="firstL"></div>
                        <div className="secondL"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortraitCard