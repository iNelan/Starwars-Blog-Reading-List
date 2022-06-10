import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";



export const Home = () => {
	return(
  <div className="container">

	  <h1>Characters</h1>
    <div class="d-flex overflow-auto mt-5 Characters">
      <div class="col-3"><CharacterCard /></div>
      <div class="col-3"><CharacterCard /></div>
      <div class="col-3"><CharacterCard /></div>
      <div class="col-3"><CharacterCard /></div>
      <div class="col-3"><CharacterCard /></div>
    </div>


    <h1 className="mt-5">Planets</h1>
    <div className="d-flex overflow-auto Planetcard mt-2">
      <div class="col-3"><PlanetCard /></div>
      <div class="col-3"><PlanetCard /></div>
      <div class="col-3"><PlanetCard /></div>
      <div class="col-3"><PlanetCard /></div>
      <div class="col-3"><PlanetCard /></div>
    </div>

    {/* <div className="d-flex scrollmenu ">
      
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div> */}
  </div>
);};
