import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetailVehicle from "../component/DetailVehicle.jsx";



import "../../styles/demo.css";

export const SingleVehicle = (props) => {
  return (
    <div className="container">
      <DetailVehicle />
    </div>
  );
};