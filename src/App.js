import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import { Link, Route } from "react-router-dom";

function App() {
  // let name = input.value

  const [currentInfo, setCurrentInfo] = useState([]);
  const [charName, setCharName] = useState("");

  const apiInfo = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${charName}`)
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo();
  }, []);

  const nameInfo = currentInfo.map((names) => {
    console.log(names);
    return [
      <div className="returnDataOutside">
        <div className="returnData">
          <div className="returnData1">
            <h4>Name: {names.name}</h4>
            <img src={names.image} alt="" />
            <p> Species: {names.species} </p>
            <p>Origin Location: {names.location.name}</p>
            <p>Gender: {names.gender}</p>
            <p>Status: {names.status}</p>
            <p>ID: {names.id}</p>
            <p>Origin Episode: {names.episode[0]}</p>
            <button id={names.id}>Add to favorites</button>
          </div>
        </div>
      </div>,
    ];
  });

  const [textInput, setTextInput] = useState("");

  const handleChange = (input) => {
    setTextInput(input.target.value);
  };

  const handleClick = (event) => {
    // event.preventDefault();
    setCharName(textInput);
    console.log(charName);
  };

  console.log(charName);
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

      <form className="formClass">
        <h2>Search Here!</h2>

        <input onchange={textInput} id="search" type="text" className="name" />

        <input onClick={handleClick} id="submit-button" type="button" value="Submit" />
      </form>

      <div className="image2">
        {" "}
        <img src="https://i.ibb.co/r6VdPM8/flat-750x1000-075-f-u2.jpg" />{" "}
      </div>
{nameInfo}
      <br />
    </div>
  );
}

export default App;
