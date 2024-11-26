import React from 'react'
import { IconContext } from "react-icons";
import { RiHomeLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiPlaylist } from "react-icons/pi";

const SideBarSections = () => {
  return (
    <IconContext.Provider value={{ color: "white", className: "sideBar-icons", }}>
        <div className="col" id="side-bar-icons">
            <img
            src="./imgs/logo-music.png"
            style={{ height: "2.5em" }}
            />
            <span id='logo-text'>Vibez</span>
            <div className="row d-flex flex-column">
                {/* <!-- SIDE BAR SECTIONS --> */}
                <div className="col">
                    <div className="d-flex px-2 triple-icons">
                    <RiHomeLine />
                    <span className="text-white align-self-center ms-2">Home</span>
                    </div>
                    <div className="d-flex px-2 triple-icons">
                    <BiCategoryAlt />
                    <span className="text-white align-self-center ms-2">Categories</span>
                    </div>
                    <div className="d-flex px-2 triple-icons">
                    <GoPerson />
                    <span className="text-white align-self-center ms-2">
                        Artists
                    </span>
                    </div>
                    <div className="d-flex px-2">
                    <PiPlaylist />
                    <span className="text-white align-self-center ms-2">Playlists</span>
                    </div>
                    <div className="d-flex px-2">
                    <img
                        src="./imgs/liked-songs.png"
                        alt=""
                        height="25px"
                    />
                    <span className="text-white ms-2">Liked Songs</span>
                    </div>
                    <hr className="text-white-50" />
                </div>
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default SideBarSections