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
              {store.favorites.length}
              </span>
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             {store.favorites.length > 0 ? store.favorites.map((item,index)=><li key={index} className="dropdown-item">
              {item}<button
							className="btn-trash border border-1 float-end"
							onClick={() => {actions.deleteFavorites(item)
              }}>
							<i className="fas fa-trash-alt"></i>
						</button>
              </li>): <li className="dropdown-item text-center fst-italic">
              (empty)</li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
