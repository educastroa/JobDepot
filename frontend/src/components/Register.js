import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";
import "./LoginAndRegister.css";
import { registerUser } from "../api";

export default function RegisterForm() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const registerUserButton = () => {
    registerUser({
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email: inputs.email,
      password: inputs.password,
    });
    navigate("/login");
  };

  return (
    <Fragment>
      {user == null && (
        <section className="h-100 gradient-form">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <h4 className="mt-1 mb-5 pb-1">
                            Create a JobSearch account
                          </h4>
                        </div>

                        <section>
                          <div className="form-outline mb-4">
                            <input
                              onChange={handleChange}
                              type="First Name"
                              id="first_name"
                              className="form-control"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              onChange={handleChange}
                              type="Last Name"
                              id="last_name"
                              className="form-control"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              onChange={handleChange}
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Email Address Here"
                              required
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              onChange={handleChange}
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>

                          <div className="text-center pt-1 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                              onClick={registerUserButton}
                            >
                              Register
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          Create an account to access millions of opportunities
                        </h4>
                        <p className="small mb-0">
                          Sign up for a Glassdoor account to get instant access
                          to millions of salaries, company reviews and interview
                          questions. Register today.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Return to </p>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() => navigate("/login", { replace: true })}
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
  );
}
