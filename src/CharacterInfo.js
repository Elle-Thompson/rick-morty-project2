import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function CharacterInfo(props) {
  // let {info} = useParams ();

  const [characterInfoBox, setCharacterInfoBox] = useState([]);

  const character = props.match.params.info;

  const apiInfo = () => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => setCharacterInfoBox(data));

    // console.log(results)
  };

  useEffect(() => {
    apiInfo("");
  }, {});

  console.log(characterInfoBox);

  let infoBox = characterInfoBox.origin;

  return (
    <div>
      <Link className="portal-gun" exact to="/CharacterSearch">
        <img
          className="pg1"
          src="https://i.ibb.co/tXtBq44/rick-and-morty-rick-sanchez-portal-gun-custom-cursor.png"
        />
      </Link>


     {/* <img src="https://i.ibb.co/C2Y36xK/11603560233oap0a4ne1l.png" alt="11603560233oap0a4ne1l" /> */}
      <Card className="info-cards" style={{ width: "30rem" }}>
        <Card.Img
          className="card-image1"
          variant="top"
          src={characterInfoBox.image}
          alt=""
        />
        <Card.Body>
          <Card.Title>Name: {characterInfoBox.name}</Card.Title>
          <Card.Text>
            <p> Species: {characterInfoBox.species} </p>
            <p> Gender: {characterInfoBox.gender} </p>
            <p> Type: {characterInfoBox.type} </p>
            <p> Current Status: {characterInfoBox.status} </p>
            {/* <p> Origin Location: {characterInfoBox.origin.name} </p>
            <p> Current Location:  {characterInfoBox.location.name}    </p> */}
            <p> </p>
          </Card.Text>
        </Card.Body>
      </Card>
      ,
    </div>
  );
}

export default CharacterInfo;
