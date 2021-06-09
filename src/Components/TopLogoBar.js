import React, { useState } from "react";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";

function TopLogoBar() {
  const [scrollDetect, setScrollDetect] = useState(false);

  //Logo switcher
  const scrollHandler = () => {
    if (window.scrollY > 0) {
      setScrollDetect(true);
    } else {
      setScrollDetect(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <div id="topLogo">
      <div className="h-28 block">
        <div
          className={
            scrollDetect
              ? "fixed h-20 w-100 z-50 flex justify-center pr-10"
              : "fixed h-28 bg-white w-100 z-50 flex justify-center pr-10"
          }
        >
          <img
            className={
              scrollDetect
                ? "absolute h-20 md:ml-28 ml-10 mt-3 p-2 bg-ahum-brown-collage rounded-full border-black"
                : "absolute h-28 md:ml-28 ml-10 p-2"
            }
            src={scrollDetect ? logo2 : logo}
          />
        </div>
      </div>
    </div>
  );
}

export default TopLogoBar;
