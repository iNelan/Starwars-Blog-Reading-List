import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetailCharacter from "../component/DetailCharacter.jsx";

import "../../styles/demo.css";

export const SingleCharacter = (props) => {

  useEffect(()=> {
    fetch("https://www.swapi.tech/api/people/")
    .then
    .then
  },[])
  

  return (
    <div className="container">
      <DetailCharacter />
    </div>
  );
};
