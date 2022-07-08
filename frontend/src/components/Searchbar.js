import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <main>
      <div className="search-bar">
        <div className="header">
          <h1>Find Your Next Career Here </h1>
        </div>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Search job posts</span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search job posts"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
}
