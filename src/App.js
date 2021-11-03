import "./App.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Header from "./Header";
import { Link, Route } from "react-router-dom";
import Characters from "./CharacterInfo";

function App() {
  // let name = input.value

  return (
    <div className="App">
      <Header />

      <div className="portal-img">
        {/* <img src="https://i.ibb.co/jVPs6JR/Screen-Shot-2021-11-02-at-3-32-44-AM.png" alt="Screen-Shot-2021-11-02-at-3-32-44-AM" /> */}

        <img
          src="https://i.ibb.co/0rLkjVK/petro-kosariekov-portal-gun-rick-and-morty2-2.gif"
          alt="petro-kosariekov-portal-gun-rick-and-morty2-2"
        />
      </div>
       {/* <Characters /> */}
      <Route exact path="/CharacterInfo" render={() => <Characters />} /> 

      <div className="image2">
        {" "}
        <img src="https://i.ibb.co/r6VdPM8/flat-750x1000-075-f-u2.jpg" />{" "}
      </div>

      <br />
    </div>
  );
}

export default App;
