import React, { createContext } from 'react'

export const SongsContext = createContext()

const SongsContextProvider = ({children, songs, songIdHandler, songId, isPlaying, playerSetter}) => {
  return (
    <SongsContext.Provider value={[songs, songIdHandler, songId, isPlaying, playerSetter]}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongsContextProvider
