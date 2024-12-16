import { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import MediaPlayer from "./components/Media/MediaPlayer";
import useFetch from "./customHooks/useFetch";
import SongsContextProvider from "./context/SongsContextProvider";
import Mobile from "./components/Mobile/Mobile";

function App() {
  const [res, setRes] = useState([]);
  const [reload, setReload] = useState(false);
  const [songId, setSongId] = useState(null);
  const [song, setSong] = useState({});
  const [defaultSong, setDefaultSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false)
  const [playMobile, setPlayMobile] = useState(false)
  const currentTime = useRef();
  const duration = useRef();
  const audio = useRef();
  const pBMobile = useRef();
  const audioMobile = useRef();
  const bottomNavbar = useRef()

  useEffect(() => {
    if(playMobile) {
      bottomNavbar.current && (bottomNavbar.current.classList.remove("bottomNavbarShort"))
      bottomNavbar.current  && bottomNavbar.current.classList.add("bottomNavbarTall")
    }
  },[playMobile])

  const songIdHandler = (id) => {
    if(id && songId !== id){
      setSongId(id);
      setPlayMobile(prev => true)
      let chosenSong = [
        ...res.map((songes) => songes.find((song) => song.id === id)),
      ];
      let selectedSong = chosenSong.find((s) => s !== undefined);
      setIsPlaying(true)
      if (selectedSong) {
        setSong(selectedSong);
        audio.current.src = selectedSong.preview;
        audio.current.play();
        songId && document.getElementById(songId).classList.remove("opacity1");
        document.getElementById(id).classList.add("opacity1");
  
        currentTime.current && (currentTime.current.innerText = "00:00");
        duration.current &&
          (duration.current.innerText =
            ("0" + Math.floor(selectedSong.duration / 60)).substr(-2) +
            ":" +
            ("0" + Math.floor(selectedSong.duration % 60)).substr(-2));
      }
    }else{
      if (audio.current.played.length > 0) {
        if (audio.current.paused) {
          setIsPlaying(true);
          audio.current.play();
          document.getElementById(songId).classList.add("opacity1");
        } else {
          setIsPlaying(false);
          audio.current.pause();
          document.getElementById(songId).classList.remove("opacity1");
        }
      } else {
        setIsPlaying(true);
        if(audio.current && audio.current.src.length < 1){
          audio.current.src = defaultSong.preview;
          audio.current.play();
        }else {
          audio.current.play();
        }
      }
    }
  };
  
  let responder = (arr) => {setRes(arr); setDefaultSong(arr[1][5])};
  const reloader = () => setReload((prev) => !prev);

  useFetch(reloader, responder, reload);
  return (
    <SongsContextProvider
      songs={res}
      songIdHandler={songIdHandler}
      songId={songId}
      isPlaying={isPlaying}
    >
      <div className="container-fluid main-container g-0 d-flex">
        <Mobile
          audioMobile={audioMobile}
          pBMobile={pBMobile}
          bottomNavbar={bottomNavbar}
          playMobile={playMobile}
          isPlaying={isPlaying}
        />
        <SideBar />
        <Main />
        <MediaPlayer
          audio={audio}
          duration={duration}
          currentTime={currentTime}
          audioMobile={audioMobile}
          pBMobile={pBMobile}
          isPlaying={isPlaying}
        />
      </div>
    </SongsContextProvider>
  );
}

export default App;
