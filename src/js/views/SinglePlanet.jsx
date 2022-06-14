import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetailPlanet from "../component/DetailPlanet.jsx";


import "../../styles/demo.css";

export const SinglePlanet = (props) => {
  return (
    <div className="container">
      <DetailPlanet />
    </div>
  );
};