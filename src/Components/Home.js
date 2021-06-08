import React, { useEffect } from "react";
import Navbar from "./Navbar";
import $ from "jquery";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="wrapper">
      <div id="content">
        <div class="container-fluid justify-content-center"></div>
      </div>
    </div>
  );
}

export default Home;
