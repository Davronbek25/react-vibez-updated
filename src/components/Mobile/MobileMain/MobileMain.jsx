import { useContext } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import MobileCards from "./MobileCards";
import Footer from "../../Footer/Footer";
import BottomPlayer from "../BottomPlayer/BottomPlayer";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import SearchBar from "../SearchBar/SearchBar";

const MobileMain = ({ playIconMobile, audioMobile, pBMobile, bottomNavbar, playMobile }) => {
  let songsContext = useContext(SongsContext);
  let songs = songsContext[0];
  return (
    <div>
      <SearchBar />
      {songs.length > 1 && <MobileCards songs={songs} />}
      <Footer />
      {playMobile && <BottomPlayer
        playIconMobile={playIconMobile}
        audioMobile={audioMobile}
        pBMobile={pBMobile}
      />}
      <BottomNavbar bottomNavbar={bottomNavbar} />
    </div>
  );
};

export default MobileMain;
