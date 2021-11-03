import React from "react";
import { Link, Route } from "react-router-dom"; 
import CharacterSearch from "./CharacterSearch";
import Header from "./Header";
import Footer from "./Footer";
import Episode from "./Episode"
import Nav from './Nav';

function Home () {

console.log("Home")

  return (
    <div className='home'>
      

       
     <img src="https://i.ibb.co/r6VdPM8/flat-750x1000-075-f-u2.jpg" />


        <Nav />

    </div>
  );
}

export default Home; 