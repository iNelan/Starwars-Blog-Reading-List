import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


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
              Favoritos <span className="badge badge-light">0</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
