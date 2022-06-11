import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";
import { VehicleCard } from "../component/VehicleCard.jsx";




export const Home = () => {
	return(
  <div className="container">

	  <h1>Characters</h1>
    <div className="d-flex overflow-auto mt-5 Characters">
      <div className="col-3"><CharacterCard /></div>
      <div className="col-3"><CharacterCard /></div>
      <div className="col-3"><CharacterCard /></div>
      <div className="col-3"><CharacterCard /></div>
      <div className="col-3"><CharacterCard /></div>
    </div>


    <h1 className="mt-5">Planets</h1>
    <div className="d-flex overflow-auto Planetcard mt-5">
      <div className="col-3"><PlanetCard /></div>
      <div className="col-3"><PlanetCard /></div>
      <div className="col-3"><PlanetCard /></div>
      <div className="col-3"><PlanetCard /></div>
      <div className="col-3"><PlanetCard /></div>
    </div>


    <h1 className="mt-5">Vehicles</h1>
    <div className="d-flex overflow-auto Planetcard mt-5">
      <div className="col-3"><VehicleCard /></div>
      <div className="col-3"><VehicleCard /></div>
      <div className="col-3"><VehicleCard /></div>
      <div className="col-3"><VehicleCard /></div>
      <div className="col-3"><VehicleCard /></div>
    </div>

  </div>
);};
