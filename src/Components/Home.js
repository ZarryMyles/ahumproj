import React, { useEffect } from "react";
import Navbar from "./Navbar";
import $ from "jquery";
import TopLogoBar from "./TopLogoBar";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };
  return (
    <div class="wrapper">
      <Navbar />
      <div id="content">
        <div
          class="container-fluid justify-content-center"
          onMouseDown={resize}
        >
          <button
            type="button"
            id="sidebarCollapse"
            class="btn "
            style={{
              background: "transparent",
              position: "absolute",
              top: "10px",
              left: 0,
              zIndex: 1000,
            }}
            onClick={handleToggle}
          >
            <i class="fas fa-align-left"></i>
          </button>
          <TopLogoBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
