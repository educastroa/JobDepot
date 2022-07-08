import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Job Search</h4>
            <ui className="list-unstyled">
              <li>123-345-6789</li>
              <li>Burlington, Ontario</li>
              <li>321 North Street</li>
            </ui>
          </div>
          <div className="col">
            <h4>Community</h4>
            <ui className="list-unstyled">
              <a href="#" className="link-dark rounded">
                Help/Contact Us
              </a>
              <li>
                <a href="#" className="link-dark rounded">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Privacy Center
                </a>
              </li>
            </ui>
          </div>
          <div className="col">
            <h4>Work With Us</h4>
            <ui className="list-unstyled">
              <li>
                <a href="#" className="link-dark rounded">
                  Advertisers
                </a>
              </li>
              <li>
                <a href="#" className="link-dark rounded">
                  Developers
                </a>
              </li>
              <li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Careers
                  </a>
                </li>
              </li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Job Search | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
