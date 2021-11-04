import React from "react";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Locations() {
  const [currentInfo, setCurrentInfo] = useState([]);
  const [locationName, setLocationName] = useState("");

  const [textInput, setTextInput] = useState("");

  const handleChange = () => {
    setTextInput(someRef.current.value);
  };

  const apiInfo = (name) => {
    fetch(`https://rickandmortyapi.com/api/location/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo("");
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setLocationName(someRef.current.value);
    apiInfo(someRef.current.value);
  };

  console.log(currentInfo);
  const nameInfo = currentInfo.map((location) => {
    return [
      <Card className="cards" style={{ width: "20rem" }}>
        <Card.Img
          className="card-image"
          variant="top"
          src={location.image}
          alt=""
        />
        <Card.Body>
          <Card.Title>Name: {location.name}</Card.Title>
          <Card.Text>
           <p>Type: {location.type}</p>
           <p>Dimension: {location.dimension}</p>
          </Card.Text>
          {/* <Button variant="primary">Add to favorites</Button> */}
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


  <img className="summer-pic" src="https://i.ibb.co/kmFwWpS/77779a1b6d6bf29adbc7b8c2d7b986c7.png" alt="77779a1b6d6bf29adbc7b8c2d7b986c7" />

  <img className="summer-pic" src="https://i.ibb.co/jTKs4qw/Beth-PNG.png" alt="Beth-PNG" />
     
     <div className="locations-title">
     <h1>Search Locations!</h1>
</div>
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

export default Locations;
