import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <main>
      <div className="main-footer">
        <div className="container">
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
            </ui>
          </div>
          <div className="col">
            <h4>Work With Us</h4>
            <ui className="list-unstyled">
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
                <li>
                  <a href="#" className="link-light">
                    Careers
                  </a>
                </li>
              </li>
            </ui>
          </div>
        </div>
        <hr />
      </div>
      <div className="row-copyright">
        &copy;{new Date().getFullYear()} Job Search | All rights reserved |
        Terms Of Service | Privacy
      </div>
    </main>
  );
}
