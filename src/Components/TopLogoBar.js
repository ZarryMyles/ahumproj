import React from "react";
import logo from "../Images/logo.png";

function TopLogoBar() {
  return (
    <>
      <div className="h-28 ">
        <div className="fixed h-28 bg-white w-100 z-50 flex justify-end pr-10 ">
          <img className="absolute h-28 " src={logo} />
        </div>
      </div>
    </>
  );
}

export default TopLogoBar;
