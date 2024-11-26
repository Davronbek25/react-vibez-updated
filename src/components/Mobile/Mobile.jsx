import React from "react";
import MobileMain from "./MobileMain/MobileMain";

const Mobile = ({ playIconMobile, pBMobile, audioMobile, bottomNavbar, playMobile }) => {
  return (
    <div id="mobile" className="container-fluid g-0">
      <MobileMain
        playIconMobile={playIconMobile}
        audioMobile={audioMobile}
        pBMobile={pBMobile}
        bottomNavbar={bottomNavbar}
        playMobile={playMobile}
      />
    </div>
  );
};

export default Mobile;
