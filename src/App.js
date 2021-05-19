import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "./assets/css/tailwind.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Screen3 from "./Components/Screen3";
import Screen4 from "./Components/Screen4";
import Screen6 from "./Components/Screen6";
import Screen7 from "./Components/Screen7";
import Contact from "./Components/Contact";
import BookSpace from "./Components/BookSpace";
import Archives from "./Components/Archives";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Screen4} />
          <Route path="/upcomingShows" exact component={Screen6} />
          <Route path="/swastikSchoolOfDance" exact component={Screen7} />
          <Route path="/aboutUs" exact component={Screen3} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/bookspace" exact component={BookSpace} />
          <Route path="/archives" exact component={Archives} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
