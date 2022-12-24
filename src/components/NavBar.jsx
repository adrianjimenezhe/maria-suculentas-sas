import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          <Logo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link" aria-current="page">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/registro'} className="nav-link">
                Registro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/control'} className="nav-link">
                Control proveedores
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipos de plantas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to={'/exterior'} className="nav-link">
                    Para el exterior
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/interior'} className="nav-link">
                    Para el interior
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/cactus'} className="nav-link">
                    Cactus
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;