/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { sessionLogout} from "../api";
import { useAppContext } from "../hooks";
import { useNavigate } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();


  const onLogout = () => {
    setUser();
    sessionLogout();
  };



  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link customNavbar-item" onClick={() => navigate("/saved", { replace: true })}>
              Saved Jobs
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search..
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item customNavbar-item" onClick={() =>  navigate("/", { replace: true })}>
                  Jobs
                </a>
              </li>
              <li>
                <a className="dropdown-item customNavbar-item" onClick={() =>  navigate("/salary", { replace: true })}>
                  Salaries
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resume
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item customNavbar-item" onClick={() => navigate("/resumeView", { replace: true })}>
                  View
                </a>
              </li>
              <li>
                <a className="dropdown-item customNavbar-item" onClick={() => navigate("/resumeBuild", { replace: true })}>
                  Build
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link customNavbar-item" onClick={() => navigate("/messages", { replace: true })}>
              Messages
            </a>
          </li>
        </ul>
      </div>
      <div>
        {user != null && (
          <div className="d-flex align-items-center ">
            <div className="text-nowrap">
            Welcome, {user.first_name}
            </div>
            <div>
            <button
              className="btn btn-outline-success ms-2 me-2"
              onClick={() => onLogout()}
              type="button"
            >
              Logout
            </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

