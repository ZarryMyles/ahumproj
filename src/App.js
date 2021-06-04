import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/bookspace" exact component={BookSpace} />
          <Route path="/archives/:category/:year" exact component={Archives} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
