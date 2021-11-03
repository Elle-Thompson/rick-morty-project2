import React from 'react'
import { Link, Route } from "react-router-dom";
import CharacterSearch from "./CharacterSearch";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home"
import Episode from "./Episode"
import Locations from "./Locations"


function Nav (props) {

console.log("nav")
    

    return (
<div>



<Link className="nav-link" exact to="/Home">Home</Link>
<Link className="nav-link" exact to="/CharacterSearch">Characters</Link>
<Link className="nav-link" exact to="/Episode">Episodes</Link>
<Link className="nav-link" exact to="/Locations">Locations</Link>



</div>
    )

}

export default Nav