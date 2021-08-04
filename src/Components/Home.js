import React, { useEffect } from "react";
import Navbar from "./Navbar";
import $ from "jquery";
import homeVid from "../Images/ahumhomepage.mp4";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="wrapper">
      <div id="content">
        <div class="justify-content-center flex items-center justify-center h-full">
          <video
            className="mb-40"
            width={window.innerWidth > 767 ? "70%" : "100%"}
            loop
            controlsList="nodownload"
            preload="auto"
            controls
          >
            <source src={homeVid} type="video/mp4" />
            There was a problem playing the video on your browser...
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
