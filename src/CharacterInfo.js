
import { Link } from "react-router-dom";
import {useParams} from "react-router"
import {useEffect, useState} from "react"

function CharacterInfo (props) {

  // let {info} = useParams ();
 

  const [characterInfoBox, setCharacterInfoBox] = useState([]);
 
const character = props.match.params.info


  const apiInfo = () => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

      // console.log(results)
  };

  useEffect(() => {
    apiInfo("");
  }, {});






    return (
<div>

<Link className="portal-gun" exact to="/CharacterSearch">
        <img className="pg1" src="https://i.ibb.co/tXtBq44/rick-and-morty-rick-sanchez-portal-gun-custom-cursor.png" />
        </Link>

</div>
        
      );
    }

export default CharacterInfo; 