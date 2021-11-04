import React from "react";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Episode() {
  const [currentInfo, setCurrentInfo] = useState([]);
  const [episodeName, setEpisodeName] = useState("");

  const [textInput, setTextInput] = useState("");

  const handleChange = () => {
    setTextInput(someRef.current.value);
  };

  const apiInfo = (name) => {
    fetch(`https://rickandmortyapi.com/api/episode/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setCurrentInfo(data.results));
  };

  useEffect(() => {
    apiInfo("");
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setEpisodeName(someRef.current.value);
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
         <Link className="portal-gun" exact to="/Home">
        <img src="https://i.ibb.co/tXtBq44/rick-and-morty-rick-sanchez-portal-gun-custom-cursor.png" />
        </Link>
        
        


<img className="summer-pic" src="https://i.ibb.co/122dyRc/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8.png" alt="bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8" />

<img className="summer-pic" src="https://i.ibb.co/tBRg2Wt/0e6c51f100fb15f146f16d1c5669573b.png" alt="0e6c51f100fb15f146f16d1c5669573b" />

    <h1>Search Episodes! </h1>

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

export default Episode;
