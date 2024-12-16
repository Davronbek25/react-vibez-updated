import React, { createContext } from 'react'

export const SongsContext = createContext()

const SongsContextProvider = ({children, songs, songIdHandler, songId, isPlaying}) => {
  return (
    <SongsContext.Provider value={[songs, songIdHandler, songId, isPlaying]}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongsContextProvider
