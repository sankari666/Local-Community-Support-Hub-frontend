// src/components/SearchBar.js
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search events..."
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

export default SearchBar;
