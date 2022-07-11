import React from "react";
import { useState, useEffect } from "react";
import { login, getUser, sessionLogout } from "../api";

export default function LoginForm() {

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
  )
}
