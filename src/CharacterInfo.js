import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function CharacterInfo(props) {



  // let {info} = useParams ();
 
  const [characterInfoBox, setCharacterInfoBox] = useState({});





const character  = props.match.params.info;

  const apiInfo =  () => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => setCharacterInfoBox(data));
 
  };

 useEffect(() => {
    apiInfo();
  }, {} );


  console.log(characterInfoBox);

   


 

 

  return (
    
      <div className="charInfo-wrapper">
      <Link className="portal-gun" exact to="/CharacterSearch">
        <img
          className="pg1"
          src="https://i.ibb.co/tXtBq44/rick-and-morty-rick-sanchez-portal-gun-custom-cursor.png"
        />
      </Link>


     
     


      <Card className="info-cards" style={{ width: "30rem" }}>
        <Card.Img
          className="card-image1"
          variant="top"
          src={characterInfoBox.image}
          alt=""
        />
        <Card.Body>
          <Card.Title className="card-title" > <span>Name:</span> {characterInfoBox.name}</Card.Title>
          <Card.Text>
            <p><span> Species:</span> {characterInfoBox.species} </p>
            <p> <span>Gender:</span> {characterInfoBox.gender} </p>
            <p> <span>Type:</span> {characterInfoBox.type} </p>
            <p> <span>Current Status:</span> {characterInfoBox.status} </p>
            {/* <p> Episode: {characterInfoBox.episode} </p> */}
              {/* <p> Origin Location: {characterInfoBox.origin[0]} </p> */}
            {/* <p> Current Location:  {characterInfoBox.location.name}    </p> */}
            <p> </p>
          </Card.Text>
        </Card.Body>
      </Card>

      </div>

      
    
  );
}

export default CharacterInfo;
