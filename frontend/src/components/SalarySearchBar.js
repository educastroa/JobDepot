import React from "react";
import "./SalarySearchBar.css";


export default function SalarySearchBar() {
  return (
    <main>
      <div className="salary-search-bar">
        <div className="header">
          <h1>Search Salary</h1>
        </div>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Search job positions</span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Job Position"
            name="s"
          />
          <div className="btn">
            <button type="submit">Search Salary Range</button>
          </div>
        </form>
      </div>
    </main>
  );
}
