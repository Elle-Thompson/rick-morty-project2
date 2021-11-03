import React from 'react'
import { Link, Route } from "react-router-dom";

function Nav (props) {


    

    return (
<div>

<Link className="nav-link" exact to="/">Home</Link>
<Link className="nav-link" exact to="/CharacterInfo">Characters</Link>
<Link className="nav-link" exact to="/Episode">Episodes</Link>
<Link className="nav-link" exact to="/Locations">Locations</Link>
<Link className="nav-link" exact to="/FavoritesList">Favorites</Link>
</div>
    )

}

export default Nav