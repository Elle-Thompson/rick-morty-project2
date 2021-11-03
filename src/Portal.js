import React from "react";
import Nav from './Nav';
import { Link, Route } from "react-router-dom"; 
import CharacterSearch from "./CharacterSearch";
import Home from "./Home"

function Portal () {
  return (
    <div className='portal'>
      <div className="portal-img">

      
      <Link className="nav-link" exact to="/Home"><img src="https://i.ibb.co/FWX8KFx/petro-kosariekov-portal-gun-rick-and-morty2-2-copy.png" alt="copy" /></Link>

      </div>

       
      {/* <Route exact path='/Home' render={() => <Home/>}/> */}

      <Nav />
      <CharacterSearch />
        

    </div>
  );
}

export default Portal; 