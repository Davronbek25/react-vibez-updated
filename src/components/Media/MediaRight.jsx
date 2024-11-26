import React, { useRef, useState } from 'react'

const MediaRight = ({audio}) => {

  const [volume, setVolume] = useState(1)
  const [mute, setMute] = useState(false)
  let range = useRef()
  let speaker = useRef()
  let speakerStatus
  let heart = useRef()
  
  const volumeIconControl = (v) => {
    if(speaker.current) {
      if(v < 2) {
          speaker.current.src = "./imgs/speaker_mute.png"
          speakerStatus = "mute"
      }else if(v < 33) {
          speaker.current.src = "./imgs/speaker_low.png"
          speakerStatus = "low"
      }else if(v > 33 && v < 66) {
          speaker.current.src = "./imgs/speaker_mid.png"
          speakerStatus = "mid"
      }else {
          speaker.current.src = "./imgs/speaker_high.png"
          speakerStatus = "high"
      }
    }
  }
  
  if(range.current && mute){
    speakerStatus = range.current.value < 2 ? 
    "mute" : range.current.value < 33 ?
    "low" : range.current.value > 33 && range.current.value < 66 ? 
    "mid" : "high"
    
    audio.current.volume = volume

    volumeIconControl(volume * 100)
  }

  const handleChangeVolume = (e) => {
    let volume = e.target.value / 100
    setVolume(volume)
    audio.current.volume = volume

    volumeIconControl(e.target.value)
  }

  const handleMute = () => {
    if(mute) {
      setMute(prev => !prev)
      audio.current.volume = 0
      speaker.current.src = "./imgs/speaker_mute.png"
    }else {
      setMute(prev => !prev)
      audio.current.volume = volume
      volumeIconControl(volume * 100)
    }
  }

  const likeBtn = () => {
      if(heart.current) {
          if (heart.current.getAttribute("src").length === 15) {
            heart.current.setAttribute("src", "./imgs/liked.png");
          } else if (heart.current.getAttribute("src").length === 16) {
            heart.current.setAttribute("src", "./imgs/like.png");
          } else console.log("error from like button(heart)");
      }
    };

  return (
    <div className="col text-white right-media-btm ps-5 pe-0 ps-md-3 ps-sm-0">
        <div className="d-flex align-items-center h-100 float-end pe-3">
          <div className="col-2 d-flex align-items-center p-0 me-sm-3 me-md-0">
                  <img
                  src="./imgs/like.png"
                  alt="like"
                  ref={heart}
                  onClick={likeBtn}
                  />
            </div>
            <img
            id="spotify-speaker"
            ref={speaker}
            src="./imgs/mute.png"
            onClick={handleMute}
            alt="mute"
            />
            <input
            ref={range}
            type="range"
            className='d-sm-none d-md-block'
            defaultValue
            onChange={handleChangeVolume}
            />
        </div>
    </div>
  )
}

export default MediaRight