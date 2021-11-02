import React from 'react'

function Nav (props) {


    

    return (
 <ul >
<li key={props.id} className="nav-list">Home</li>
<li key={props.id} className="nav-list">Characters</li>
<li key={props.id} className="nav-list">Episodes</li>
<li key={props.id} className="nav-list">Locations</li>
<li key={props.id} className="nav-list">Favorites</li>

 </ul>

    )

}

export default Nav