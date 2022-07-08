import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="flex-shrink-0 p-3" style={{ width: 280 + "px" }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">JobSearch</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="false"
          >
            Search
          </button>
          <div className="collapse" id="home-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#" className="link-dark rounded">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Salaries
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            Saved Jobs
          </button>
          <div className="collapse" id="dashboard-collapse"></div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Resume
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#" className="link-dark rounded">
                  View
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Upload
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="true"
          >
            Account
          </button>
          <div className="collapse" id="account-collapse" style={{}}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#" className="link-dark rounded">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
