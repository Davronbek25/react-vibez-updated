import React, { createContext } from 'react'

export const SongsContext = createContext()

const SongsContextProvider = ({children, songs, songIdHandler, songId}) => {
  return (
    <SongsContext.Provider value={[songs, songIdHandler, songId]}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongsContextProvider
