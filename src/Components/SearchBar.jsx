import React from "react";
import "../Styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Condition, procedure, specialty..." />
      <input type="text" placeholder="City, state, or zipcode" />
      <input type="text" placeholder="Insurance carrier" />
      <button>🔍 Find now</button>
    </div>
  );
}

export default SearchBar;
