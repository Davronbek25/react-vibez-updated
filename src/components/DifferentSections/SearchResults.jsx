import { useLocation } from 'react-router-dom'
import AlbumCard from '../Main/AlbumCard'

const SearchResults = () => {
  const location = useLocation()
  const { results } = location.state || {results: [] }

  return (
    <div id='searchResults' className='container list-cards pt-3'>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="row">
              <AlbumCard songCard={result} />
            </div>
          ))
        ): (
          <h3 className='text-white text-align-center'>No songs found!</h3>
        )}
    </div>
  )
}

export default SearchResults