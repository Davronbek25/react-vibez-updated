import React from "react";
import { IconContext } from "react-icons";
import { RiHomeLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiPlaylist } from "react-icons/pi";

const BottomNavbar = ({ bottomNavbar }) => {
  return (
    <IconContext.Provider value={{ color: "white", className: "sideBar-icons", }}>
      <div ref={bottomNavbar} className="container bottomNavbarShort" id="bottomNavbar">
        <div className="row d-flex justify-content-between">
          <div className="col active text-center">
            <RiHomeLine />
            <p className="text-white align-self-end">Home</p>
          </div>
          <div className="col text-center">
            <BiCategoryAlt />
            <p className="text-white align-self-end">Categories</p>
          </div>
          <div className="col text-center">
            <GoPerson />
            <p className="text-white align-self-end">Artists</p>
          </div>
          <div className="col text-center">
          <PiPlaylist />
            <p className="text-white align-self-end">Playlists</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default BottomNavbar;
