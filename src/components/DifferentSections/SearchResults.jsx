import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
  const location = useLocation()
  const { results } = location.state || {results: [] }

  return (
    <div id='searchResults'>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            <p>{result.title}</p>
          </div>
        ))
      ): (
        <p>No results found</p>
      )}
    </div>
  )
}

export default SearchResults