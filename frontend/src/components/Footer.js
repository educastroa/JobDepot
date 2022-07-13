import React, { Fragment } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container my-4">
        <div className="row align-items-start">
          <div className="col text-center">

            <h4>Job Search</h4>
            <ul className="list-unstyled">
              <li>123-345-6789</li>
              <li>Burlington, Ontario</li>
              <li>321 North Street</li>
            </ul>
          </div>
          <div className="col text-center">
            <h4>Community</h4>
            <ul className="list-unstyled">
              <a href="#" className="text-decoration-none fs-5 link-light">
                Help/Contact Us
              </a>
              <li>
                <a href="#" className="text-decoration-none fs-5 link-light">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none fs-5 link-light">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <h4>Work With Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none fs-5 link-light">
                  Advertisers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none fs-5 link-light">
                  Developers
                </a>
              </li>

                <li>
                  <a href="#" className="text-decoration-none fs-5 link-light">
                    Careers
                  </a>
                </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center pb-3">
        &copy;{new Date().getFullYear()} Job Search | All rights reserved |
        Terms Of Service | Privacy
      </div>

    </footer>

  );
}
