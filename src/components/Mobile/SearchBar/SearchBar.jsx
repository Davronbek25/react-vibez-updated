import React from "react";

const SearchBar = () => {
  return (
    <div id="searchBar" className="row d-flex justify-content-center pb-5 pt-4">
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          placeholder="Search for a song"
          autofocus
          required
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
