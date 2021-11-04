import React from "react";
import { Link } from "react-router-dom";

function Portal() {
  return (

    <div className="portal-div">

{/* <div className="logo-div">

<img src="https://i.ibb.co/2N5Nkwh/rick-and-morty-wallpaper-preview.png" alt="rick-and-morty-wallpaper-preview" />


</div> */}
   
   <div className="portal-div">
    
    <img
        className="portal-rm1"
        src="https://i.ibb.co/YNdY7jz/Rick.png"
        alt="Rick"
      />
      
        <Link className="nav-links" exact to="/Home">
          <img
            src="https://i.ibb.co/FWX8KFx/petro-kosariekov-portal-gun-rick-and-morty2-2-copy.png"
            alt="copy"
          />
        </Link>


      <img
        className="portal-rm2"
        src="https://i.ibb.co/ZNTWgc9/Morty.png"
        alt="Morty"
      />
      {/* <p className="portal-text"> Rick and Morty</p> */}

   </div>

    </div>
  );
}

export default Portal;
