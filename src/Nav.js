import React from 'react'
import { Link} from "react-router-dom";



function Nav (props) {


    

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