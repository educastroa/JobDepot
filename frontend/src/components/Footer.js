import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <nav className="navbar navbar-default navbar-fixed-bottom">
      <div className="main-footer">
        <div className="container">
          <div className="col">
            <h4>Job Search</h4>
            <ul className="list-unstyled">
              <li>123-345-6789</li>
              <li>Burlington, Ontario</li>
              <li>321 North Street</li>
            </ul>
          </div>
          <div className="col">
            <h4>Community</h4>
            <ul className="list-unstyled">
              <a href="#" className="link-light">
                Help/Contact Us
              </a>
              <li>
                <a href="#" className="link-light">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="link-light">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Work With Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link-light">
                  Advertisers
                </a>
              </li>
              <li>
                <a href="#" className="link-light">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="link-light">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="row-copyright">
        &copy;{new Date().getFullYear()} Job Search | All rights reserved |
        Terms Of Service | Privacy
      </div>
    </nav>
  );
}
