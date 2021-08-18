import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const homeVid =
    "https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3YvcyFBaVNpbXEtcjdWb1ZncGNBVnVxZkt5M0JvVDZFZlE/root/content";
  return (
    <div class="wrapper ">
      <div id="content">
        <div class=" justify-content-center flex items-center justify-center md:h-auto md:mt-0 mt-44">
          <video
            // className="mb-40"
            width={window.innerWidth > 767 ? "77%" : "100%"}
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
