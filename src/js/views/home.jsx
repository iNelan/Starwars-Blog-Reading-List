import React, {useContext} from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";
import { VehicleCard } from "../component/VehicleCard.jsx";
import { Context } from "../store/appContext";
 




export const Home = () => {



const { store, actions } = useContext(Context);

	return(
  <div className="container">

	  <h1>Characters</h1>
    <div className="d-flex overflow-auto mt-5">
      <div className="d-flex">{store.infoCharacter.map((item,index)=><CharacterCard key={index} name={item.name} gender={item.gender} mass={item.mass} height={item.height} hair_color={item.hair_color} eye_color={item.eye_color} id={index}/>)}</div>
    </div>


    <h1 className="mt-5">Planets</h1>
    <div className="d-flex overflow-auto mt-5">
    <div className="d-flex">{store.infoPlanet.map((item,index)=><PlanetCard key={index} name={item.name} population={item.population} terrain={item.terrain} id={index}/>)}</div>
      
    </div>


    <h1 className="mt-5">Vehicles</h1>
    <div className="d-flex overflow-auto mt-5">
    <div className="d-flex">{store.infoVehicle.map((item,index)=><VehicleCard key={index} name={item.name} cost_in_credits={item.cost_in_credits} crew={item.crew} length={item.length} passengers={item.passengers} max_atmosphering_speed={item.max_atmosphering_speed} id={index}/>)}</div>

    </div>

  </div>
);};
