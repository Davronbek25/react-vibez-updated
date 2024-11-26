import React from "react";
import SideBarSections from "./SideBarSections";

const SideBar = () => {
  return (
    <div id="sidebar" className="container side-bar common-bg d-inline-flex justify-content-center">
      <div className="row d-flex flex-column w-100 pt-4 px-1">
        <SideBarSections />
        {/* <!-- SIDE BAR BUTTONS --> */}
        <div className="col d-flex">
          <div className="side-bar-nav mt-4 d-flex">
            <div className="d-flex mb-3 align-self-end d-flex ps-2">
              <i className="bi bi-box-arrow-right text-white" style={{fontSize: '20px'}}></i>
              <span className="text-white align-self-center ms-2">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
