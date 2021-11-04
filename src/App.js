import "./App.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Header from "./Header";
import { Link, Route } from "react-router-dom";
import CharacterSearch from "./CharacterSearch";
import Portal from "./Portal";
import Home from "./Home";
import Episode from "./Episode"
import Locations from "./Locations"

function App() {
  

  return (
    <div className="App">

      <Route exact path="/" render={() => <Portal />} />
      <Route exact path="/Home" render={() => <Home />} />
      <Route exact path="/CharacterSearch" render={() => <CharacterSearch />} />
      <Route exact path="/Episode" render={() => <Episode />} />
      <Route exact path="/Locations" render={() => <Locations />} />
    </div>
  );
}

export default App;
