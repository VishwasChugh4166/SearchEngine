import React, { useState } from "react";
import Logo from "../assets/Logo.png";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar-section">
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <img className="Logo" alt="logo" src={Logo}></img>
          <input
            className="search-bar-input"
            value={term}
            onChange={handleChange}
            placeholder="Enter your Search.."
            // size="50"
          ></input>
          <button className="search-bar-button" onSubmit={handleFormSubmit}>
            GO
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
