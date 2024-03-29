import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container h-flex">
        <Link to="/" className="logo">
          <img alt="logo" src={logo} />
        </Link>
        <nav className="links">
          <ul>
            <li>
              <Link to="/" className="menu__links">
                Лента
              </Link>
            </li>
            <li>
              <Link to="/profile" className="menu__links">
                Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
