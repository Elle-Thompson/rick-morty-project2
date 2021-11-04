import React from "react";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CharacterSearch() {
  const [currentInfo, setCurrentInfo] = useState([]);
  const [charName, setCharName] = useState("");

  const [textInput, setTextInput] = useState("");

  const handleChange = () => {
    setTextInput(someRef.current.value);
  };

  const apiInfo = (name) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&limit=30`)
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo("");
  }, {charName});

  const handleClick = (event) => {
    event.preventDefault();
    setCharName(someRef.current.value);
    apiInfo(someRef.current.value);
  };

  console.log(currentInfo);
  const nameInfo = currentInfo.map((names) => {
    return [
      <Card className="cards" style={{ width: "20rem" }}>
        <Card.Img
          className="card-image"
          variant="top"
          src={names.image}
          alt=""
        />
        <Card.Body>
         <Link to={"/CharacterInfo/"+names.id} > <Card.Title>{names.name}</Card.Title> </Link>
        
        </Card.Body>
      </Card>,

    ];
  });

  const someRef = useRef();

  return (
    <div>
       <Link className="portal-gun" exact to="/Home">
        <img className="pg1" src="https://i.ibb.co/tXtBq44/rick-and-morty-rick-sanchez-portal-gun-custom-cursor.png" />
        </Link>

        

      <img
        src="https://i.ibb.co/MC6wdQJ/Rick-And-Morty-Wallpapers-For-Iphone-Hd-Hd-Wallpapers.png"
        alt="Rick-And-Morty-Wallpapers-For-Iphone-Hd-Hd-Wallpapers"
      />

      <h1 className="char-title">Search Characters!</h1>
      <form className="formClass">
        {/* <h2>Search Here!</h2> */}

        <input
          onChange={handleChange}
          ref={someRef}
          id="search"
          type="text"
          className="name"
        />

        <input
          onClick={handleClick}
          id="submit-button"
          type="button"
          value="Search"
        />
      </form>

      {nameInfo}
    </div>
  );
}

export default CharacterSearch;
