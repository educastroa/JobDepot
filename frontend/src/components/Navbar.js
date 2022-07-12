import React, { Fragment } from "react";
import { sessionLogout } from "../api";
import { useAppContext } from "../hooks";

export default function Navbar() {

  const { user, setUser } = useAppContext();

  const onLogout = () => {
    setUser();
    sessionLogout();
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top">
      <div className="container-fluid">
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
                  <a className="dropdown-item" href="/search">
                    Jobs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/salarysearch">
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
                  <a className="dropdown-item" href="#">
                    View
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/resume">
                    Upload
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          {user != null && (
            <Fragment>
              Logged in as {user.name}
              <button className="btn btn-outline-success ms-2" onClick={() => onLogout()} type="button">Logout</button>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
}
