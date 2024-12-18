import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  }

  return (
    <div id="searchBar" className="row d-flex justify-content-center pb-5 pt-4">
      <form onSubmit={(event) => event.preventDefault()} role="search">
        <label htmlFor="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          placeholder="Search for a song"
          autoFocus
          required
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
