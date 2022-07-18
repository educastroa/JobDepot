import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, getUser } from "../api";
import { useAppContext } from "../hooks";
import "./LoginAndRegister.css";

export default function LoginForm() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onLogin = () => {
    login({ email: inputs.email, password: inputs.password }).then((res) => {
      setUser(res.data);
      navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

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
                            Welcome to Job Search!
                          </h4>
                        </div>

                        <form
                          role="search"
                          onSubmit={(event) => {
                            event.preventDefault();
                            onLogin();
                          }}
                        >
                          <section>
                            <p>Please login to your account</p>
                            <div className="form-outline mb-4">
                              <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                autoComplete="true"
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
                                autoComplete="true"
                                required
                              />
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="submit"
                              >
                                Log in
                              </button>
                              {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">
                                Don't have an account?
                              </p>
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() =>
                                  navigate("/register", { replace: true })
                                }
                              >
                                Register
                              </button>
                            </div>
                          </section>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          We are more than just a company
                        </h4>
                        <p className="small mb-0">
                          JobSearch is the #1 job site in the world with over
                          250M unique visitors every month. JobSearch strives to
                          put job seekers first, giving them free access to
                          search for jobs, post resumes, and research companies.
                          Every day, we connect millions of people to new
                          opportunities.
                        </p>
                      </div>
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
