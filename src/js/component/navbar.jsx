import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 container">
      <div class="container">
        <Link to="/">
        <a class="navbar-brand" href="#">
          <img src="https://images.tcdn.com.br/img/img_prod/476855/adesivo_star_wars_logo_mod2_varias_cores_856_1_20180104164008.jpg" alt="" width="100" height="60" />
        </a>
        </Link>
      </div>
      <div className="ml-auto">
        <div class="dropdown container">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">


            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
