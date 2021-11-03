import React from "react";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Locations() {
  const [currentInfo, setCurrentInfo] = useState([]);
  const [charName, setCharName] = useState("");

  const [textInput, setTextInput] = useState("");

  const handleChange = () => {
    setTextInput(someRef.current.value);
  };

  const apiInfo = (name) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo("");
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setCharName(someRef.current.value);
    apiInfo(someRef.current.value);
  };

  console.log(currentInfo);
  const nameInfo = currentInfo.map((names) => {
    // console.log(names);
    return [
      <Card className="cards" style={{ width: "20rem" }}>
        <Card.Img
          className="card-image"
          variant="top"
          src={names.image}
          alt=""
        />
        <Card.Body>
          <Card.Title>{names.name}</Card.Title>
          <Card.Text>
            {/* <p> Species: {names.species} </p>
            <p>Origin Location: {names.location.name}</p>
            <p>Gender: {names.gender}</p>
            <p>Status: {names.status}</p>
            <p>ID: {names.id}</p>
            <p>Origin Episode: {names.episode[0]}</p> */}
          </Card.Text>
          {/* <Button variant="primary">Add to favorites</Button> */}
        </Card.Body>
      </Card>,

      //   <div className="returnDataOutside">
      //     <div className="returnData">
      //       <div className="returnData1">

      //         <button id={names.id}>Add to favorites</button>
      //       </div>
      //     </div>
      //   </div>,
    ];
  });

  const someRef = useRef();

  return (
    <div>
      {nameInfo}

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
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Locations;
