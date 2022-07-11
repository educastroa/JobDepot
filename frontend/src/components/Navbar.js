import React from "react";
import { useState, useEffect } from "react";
import { login, getUser, sessionLogout } from "../api";

export default function Navbar() {

  const [user, setUser] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };


  const onLogin = () => {

    login({ email: inputs.email, password: inputs.password })
      .then(res => {
        setUser(res.data);
      });
  };


  const onLogout = () => {
    setUser();
    sessionLogout();
  };

  useEffect(() => {
    getUser()
      .then(res => {
        setUser(res.data);
      })
      .catch(err => { console.log(err.response.data); });
  }, []);


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={event => {
            event.preventDefault();
            onLogin();
          }}>
            {(user) ?
              (<section className="d-flex justify-content-end">
                <p>Logged in as {user.name}</p>
                <button className="btn btn-outline-success" onClick={() => onLogout()} type="button">Logout</button>
              </section>) :
              (
                <section className="d-flex justify-content-end">
                  <input
                    className="form-control me-2"
                    onChange={handleChange}
                    type="email"
                    id="email"
                    placeholder="Email"
                    aria-label="Search"
                    required>
                  </input>
                  <input
                    className="form-control me-2"
                    onChange={handleChange}
                    type="password"
                    id="password"
                    placeholder="Password"
                    aria-label="Search"
                    required>
                  </input>
                  <button className="btn btn-outline-success" type="submit">Login</button>
                  <button className="btn btn-outline-success" type="button">Register</button>
                </section>)}

          </form>
        </div>
      </div>
    </nav>
  );
}
