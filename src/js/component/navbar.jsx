import React , { useState , useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Navbar = () => {

  const {store, actions} = useContext (Context);

  


  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            
            <img
              src="https://images.tcdn.com.br/img/img_prod/476855/adesivo_star_wars_logo_mod2_varias_cores_856_1_20180104164008.jpg"
              alt="logo Star Wars"
              width="70"
              height="44"
            />
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favourites
              <span className="bg-danger mx-2 px-2 rounded">
                {store.favourites.length}
              </span>
            </button>
            <ul
              className="dropdown-menu text-center text-primary"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favourites.map((item, index) => (
                <li key={index} className="d-flex justify-content-around mb-2">
                  {item}
                  <button className="btn btn-danger text-white rounded px-1 py-0 " onClick={()=>actions.deleteFavourites(item)}>
                    <i className="far fa-trash-alt "></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
