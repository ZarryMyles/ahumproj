import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import "./assets/css/tailwind.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Events from "./Components/Events";
import UpcomingShows from "./Components/UpcomingShows";
import SwastikSchoolofDanceMusic from "./Components/SwastikSchoolofDanceMusic";
import Contact from "./Components/Contact";
import BookSpace from "./Components/BookSpace";
import Archives from "./Components/Archives";
import TopLogoBar from "./Components/TopLogoBar";
import Form from "./Components/Form";

import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleToggle = () => {
    $("#sidebar").toggleClass("active");
  };
  const resize = () => {
    $("#sidebar").addClass("active");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <button
          type="button"
          id="sidebarCollapse"
          class="btn "
          style={{
            background: "transparent",
            position: "fixed",
            top: "10px",
            left: 0,
            zIndex: 1000,
          }}
          onClick={handleToggle}
        >
          <i class="fas fa-align-left"></i>
        </button>

        <TopLogoBar />
        <div onClick={resize}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/upcoming-shows" exact component={UpcomingShows} />
            <Route
              path="/swastik-school-of-dance"
              exact
              component={SwastikSchoolofDanceMusic}
            />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/contact/:bookspace" exact component={Contact} />
            <Route path="/bookspace" exact component={BookSpace} />
            <Route path="/archives/:category" component={Archives} />
            <Route path="/archives" component={Archives} />
            <Route path="/form/:title/:event" component={Form} />

            <Route path="/form/:title" component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
