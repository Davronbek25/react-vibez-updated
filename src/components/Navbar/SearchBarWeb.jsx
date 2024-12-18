import React, { useState, useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";

const SearchBarWeb = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const songs = useContext(SongsContext)[0];

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") { 
      songs.map((song) => {
        song.map((s) => {
          if (s.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            console.log(s.title);
          }
        })
      });
    }
  }
  return (
    <div id="searchBarWeb">
      <input
        type="text"
        placeholder="Search for a song"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleSearch}
      />
      <i className="bi bi-search" onClick={handleSearch}></i>
    </div>
  );
};

export default SearchBarWeb;
