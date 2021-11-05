import "./App.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import CharacterSearch from "./CharacterSearch";
import Portal from "./Portal";
import Home from "./Home";
import Episode from "./Episode"
import Locations from "./Locations"
import CharacterInfo from "./CharacterInfo";

function App() {
  
  const [currentInfo, setCurrentInfo] = useState([]);

  return (
    <div className="App">

      <Route exact path="/" render={() => <Portal />} />
      <Route exact path="/Home" render={() => <Home />} />
      <Route exact path="/CharacterSearch" render={() => <CharacterSearch />} />
      <Route exact path="/Episode" render={() => <Episode />} />
      <Route exact path="/Locations" render={() => <Locations />} />
      <Route exact path="/CharacterInfo/:info" render={(props) => <CharacterInfo {...props}  />} />
      
    </div>
  );
}

export default App;
