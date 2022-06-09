import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/Cards.jsx";

export const Home = () => {
	return(
  <div className="container">

	  <h1>Characters</h1>
    <div class="d-flex overflow-scroll">
      <div class="col-3"><Cards /></div>
      <div class="col-3"><Cards /></div>
      <div class="col-3"><Cards /></div>
	  <div class="col-3"><Cards /></div>
      <div class="col-3"><Cards /></div>
      <div class="col-3"><Cards /></div>
    </div>

    {/* <div className="d-flex scrollmenu ">
      
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div> */}
  </div>
);};
