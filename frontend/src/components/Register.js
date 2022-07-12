import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import { useAppContext } from "../hooks";

export default function RegisterForm() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

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

  return (
    <Fragment>
      {user == null && (
        <section className="h-100 gradient-form" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    {/* <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                          <img style={{ width: '185px' }} alt="logo"></img>

                          <h4 className="mt-1 mb-5 pb-1">We are Job Search Team</h4>
                        </div>

                        <form role="search" onSubmit={event => {
                          event.preventDefault();
                          onLogin();
                        }}>

                          
                          <section>
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
                              <a className="text-muted" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Don't have an account?</p>
                              <button type="button" className="btn btn-outline-danger">Create new</button>
                            </div>
                          </section>
                        </form>

                      </div>
                    </div> */}
                    
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Return to </p>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() => navigate('/login', { replace: true })}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}
