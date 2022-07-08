import React from "react";
import headerImg from "./img/headerImg2.jpg";
import "./Header.css";

export default function Header() {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ minHeight: "300px" }}>
          <div className="text-center justify-content-center align-self-center">
            <h1 className="pt-5 pb-3">JobSearch</h1>
            <h5></h5>
          </div>
        </div>
      </div>
    </section>
  );
}
