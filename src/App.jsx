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
  const [isPlaying, setIsPlaying] = useState(false)
  const [playMobile, setPlayMobile] = useState(false)
  const currentTime = useRef();
  const duration = useRef();
  const audio = useRef();
  const playIconMobile = useRef();
  const pBMobile = useRef();
  const audioMobile = useRef();
  const bottomNavbar = useRef()

  useEffect(() => {
    if(playMobile) {
      playIconMobile.current && (playIconMobile.current.src = "./imgs/pause.png");
      bottomNavbar.current && (bottomNavbar.current.classList.remove("bottomNavbarShort"))
      bottomNavbar.current  && bottomNavbar.current.classList.add("bottomNavbarTall")
    }
  },[playMobile])

  const songIdHandler = (id) => {
    setSongId(id);
    setPlayMobile(prev => true)
    let chosenSong = [
      ...res.map((songes) => songes.find((song) => song.id === id)),
    ];
    let selectedSong = chosenSong.find((s) => s !== undefined);
    setIsPlaying(prev => true)
    playIconMobile.current && (playIconMobile.current.src = "./imgs/pause.png");
    if (selectedSong) {
      setSong(selectedSong);
      audio.current.src = selectedSong.preview;
      audio.current.play();

      currentTime.current && (currentTime.current.innerText = "00:00");
      duration.current &&
        (duration.current.innerText =
          ("0" + Math.floor(selectedSong.duration / 60)).substr(-2) +
          ":" +
          ("0" + Math.floor(selectedSong.duration % 60)).substr(-2));
    }
  };
  
  let responder = (arr) => setRes(arr);
  const reloader = () => setReload((prev) => !prev);
  const playerSetter = () => setIsPlaying((prev) => !prev)

  useFetch(reloader, responder, reload);
  return (
    <SongsContextProvider
      songs={res}
      songIdHandler={songIdHandler}
      songId={songId}
    >
      <div className="container-fluid main-container g-0 d-flex">
        <Mobile
          playIconMobile={playIconMobile}
          audioMobile={audioMobile}
          pBMobile={pBMobile}
          bottomNavbar={bottomNavbar}
          playMobile={playMobile}
        />
        <SideBar />
        <Main />
        <MediaPlayer
          audio={audio}
          duration={duration}
          currentTime={currentTime}
          playIconMobile={playIconMobile}
          audioMobile={audioMobile}
          pBMobile={pBMobile}
          isPlaying={isPlaying}
          playerSetter={playerSetter}
        />
      </div>
    </SongsContextProvider>
  );
}

export default App;
