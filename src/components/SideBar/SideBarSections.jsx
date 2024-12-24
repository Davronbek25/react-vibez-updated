import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiHomeLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiPlaylist } from "react-icons/pi";

const SideBarSections = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", className: "sideBar-icons" }}
    >
      <div className="col" id="side-bar-icons">
        <Link to="/">
          <img src="./imgs/logo-music.png" style={{ height: "2.5em" }} />
          <span id="logo-text">Vibez</span>
        </Link>
        <div className="row d-flex flex-column">
          {/* <!-- SIDE BAR SECTIONS --> */}
          <div className="col">
            <Link to="/" className='link-no-style'>
              <div className="d-flex px-2 triple-icons">
                <RiHomeLine />
                <span className="text-white align-self-center ms-2">Home</span>
              </div>
            </Link>
            <Link to="/Categories" className='link-no-style'>
              <div className="d-flex px-2 triple-icons">
                <BiCategoryAlt />
                <span className="text-white align-self-center ms-2">
                  Categories
                </span>
              </div>
            </Link>
            <Link to="Artists" className='link-no-style'>
              <div className="d-flex px-2 triple-icons">
                <GoPerson />
                <span className="text-white align-self-center ms-2">
                  Artists
                </span>
              </div>
            </Link>
            <Link to='/Playlists' className='link-no-style'> 
                <div className="d-flex px-2">
                <PiPlaylist />
                <span className="text-white align-self-center ms-2">
                    Playlists
                </span>
                </div>
            </Link>
            <Link to='/LikedSongs' className='link-no-style'>
                <div className="d-flex px-2">
                <img src="./imgs/liked-songs.png" alt="" height="25px" />
                <span className="text-white ms-2">Liked Songs</span>
                </div>
            </Link>
            <hr className="text-white-50" />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default SideBarSections;
