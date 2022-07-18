import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="custom-footer fs-9">
      <div className="container my-6">
        <div className="row align-items-start">
          <div className="col text-center pt-3">
            <h4>Job Search</h4>
            <ul className="list-unstyled">
              <li>123-345-6789</li>
              <li>Burlington, Ontario</li>
              <li>321 North Street</li>
            </ul>
          </div>
          <div className="col text-center pt-3">
            <h4>Community</h4>
            <ul className="list-unstyled">
              <a href="#" className="text-decoration-none fs-7 link-light">
                Help/Contact Us
              </a>
              <li>
                <a href="#" className="text-decoration-none fs-7 link-light">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none fs-7 link-light">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col text-center pt-3">
            <h4>Work With Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none fs-7 link-light">
                  Advertisers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none fs-7 link-light">
                  Developers
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none fs-7 link-light">
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
