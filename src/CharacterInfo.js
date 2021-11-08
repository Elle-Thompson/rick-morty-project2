import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function CharacterInfo(props) {
  // let {info} = useParams ();

  const [characterInfoBox, setCharacterInfoBox] = useState({});

  const character = props.match.params.info;

  const apiInfo = async () => {
    const apiResult = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
    const json = await apiResult.json ();
    setCharacterInfoBox(json)
      // .then((res) => res.json())
      // .then((data) => setCharacterInfoBox(data));
  };

  useEffect(() => {
    apiInfo();
  }, []);

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
          <Card.Title className="card-title">
            {" "}
            <span>Name:</span> {characterInfoBox.name}
          </Card.Title>
          <Card.Text>
            <p>
              <span> Species:</span> {characterInfoBox.species}{" "}
            </p>
            <p>
              {" "}
              <span>Gender:</span> {characterInfoBox.gender}{" "}
            </p>
            <p>
              {" "}
              <span>Type:</span> {characterInfoBox.type}{" "}
            </p>
            <p>
              {" "}
              <span>Current Status:</span> {characterInfoBox.status}{" "}
            </p>
            <p> <span>Origin Location: </span>{characterInfoBox.origin ? characterInfoBox.origin.name : ""} </p>
            <p> <span>Current Location: </span>  {characterInfoBox.location ? characterInfoBox.location.name : ""}    </p>
            <p> <span>First Episode: </span>{characterInfoBox.episode ? characterInfoBox.episode[0] : ""} </p>
            <p> <span>Last Episode: </span>{characterInfoBox.episode ? characterInfoBox.episode[characterInfoBox.episode.length -1] : ""} </p>
            
            <p> </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterInfo;

