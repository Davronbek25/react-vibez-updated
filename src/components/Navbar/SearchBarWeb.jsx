import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SongsContext } from "../../context/SongsContextProvider";

const SearchBarWeb = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const songs = useContext(SongsContext)[0];
  const navigate = useNavigate()
  const location = useLocation()

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleSearch = (e) => {
    if ((e.key === "Enter" || e.type === "click") && searchTerm.length > 0) { 
      const results = []
      songs.map((song) => {
        song.map((s) => {
          if (s.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(s)
          }
        })
      });
      navigate("/search-results", {state: {results}})
    } else if((e.key === "Enter" || e.type === "click") && searchTerm.length == 0 && location.pathname == '/search-results') {
      navigate("/")
    } 
  }

  useEffect(() => {
    if (location.pathname == "/search-results") {
      setSearchTerm("")
    }
  }, [location.pathname])
  return (
    <div id="searchBarWeb">
      <input
        type="text"
        placeholder="Search for a song"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      />
      <i className="bi bi-search" onClick={handleSearch}></i>
    </div>
  );
};

export default SearchBarWeb;
