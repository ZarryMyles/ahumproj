import React from "react";
import logo from "../Images/logo.png";

function TopLogoBar() {
  return (
    <>
      <div className="h-28 ">
        <a
          href="/"
          className="fixed h-28 bg-white w-100 z-50 flex justify-center pr-10 "
        >
          <img className="absolute h-28 " src={logo} />
        </a>
      </div>
    </>
  );
}

export default TopLogoBar;
