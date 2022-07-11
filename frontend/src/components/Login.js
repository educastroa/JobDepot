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

    <section className="h-100 gradient-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img  style={{width: '185px'}} alt="logo"></img>

                  <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <form role="search" onSubmit={event => {
                  event.preventDefault();
                  onLogin();
                }}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    required />
                    <label className="form-label" htmlFor="form2Example11">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    className="form-control"
                    required />
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                      in</button>
                    {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    // <form classNameName="d-flex" role="search" onSubmit={event => {
    //   event.preventDefault();
    //   onLogin();
    // }}>
    //   {(user) ?
    //     (<section classNameName="d-flex justify-content-end">
    //       <p>Logged in as {user.name}</p>
    //       <button classNameName="btn btn-outline-success" onClick={() => onLogout()} type="button">Logout</button>
    //     </section>) :
    //     (
    //       <section classNameName="d-flex justify-content-end">
    //         <input
    //           classNameName="form-control me-2"
    //           onChange={handleChange}
    //           type="email"
    //           id="email"
    //           placeholder="Email"
    //           aria-label="Search"
    //           required>
    //         </input>
    //         <input
    //           classNameName="form-control me-2"
    //           onChange={handleChange}
    //           type="password"
    //           id="password"
    //           placeholder="Password"
    //           aria-label="Search"
    //           required>
    //         </input>
    //         <button classNameName="btn btn-outline-success" type="submit">Login</button>
    //         <button classNameName="btn btn-outline-success" type="button">Register</button>
    //       </section>)}

    // </form>
  )
}
