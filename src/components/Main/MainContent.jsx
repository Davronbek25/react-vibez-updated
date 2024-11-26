import React, { useContext, useRef } from 'react'
import { SongsContext } from '../../context/SongsContextProvider';
import AlbumCard from './AlbumCard';
import PortraitCard from "./PortraitCard";
import Footer from '../Footer/Footer'
import Carousel from './Carousel';

const MainContent = () => {
    let songsContext = useContext(SongsContext)
    let songs = songsContext[0]
    let time = new Date();
    time = time.getHours;
    let greeting = useRef()
    let sortingArr = [[0,2,1],[1,0,2]]
    if(greeting.current) {
            if (greeting.current && time > 5) {
            greeting.current.innerHTML = "Good morning";
            } else if (greeting.current && time > 12) {
            greeting.current.innerHTML = "Good afternoon";
            } else greeting.current.innerHTML = "Good evening";
    }
    let titles = [
      "Episodes for you",
      "Made for you",
      "Recently played",
      "Your top mixes",
      "More like Hot Hits Italia",
      "Popular radio",
      "Playlist tutte da scoprire!",
      "Recommended radio",
      "More like Billie Eilish",
      "More like Eminem",
      "Best of artists",
      "Throwback",
      "More like Rihanna",
      "Your favorite artists",
      "Uniquely yours",
      "Based on your recent listening",
      "Mood",
    ];
    const cardsProvider = (inTitle) => {
      if (songs.length > 1) {
        let cards = [];
        for (let i = 0; i < 6; i++) {
          let keyNum1 = i + 3 + inTitle;
          let startNum1 = 3 + inTitle;
          let keyNum2 = i + 7 + inTitle;
          let startNum2 = 7 + inTitle;
          cards.push(
            <PortraitCard
              song={songs[i] ? songs[i] : songs[i - 3]}
              key={i < 3 ? keyNum1 : keyNum2}
              start={i < 3 ? startNum1 : startNum2}
            />
          );
        }
        return cards;
      }
    };
  return (
    <div className="container-fluid g-0 mb-md-4" id="content-container">
        <Carousel songs={songs} />
        <h2 ref={greeting} className="mt-3" id='greeting'>Good afternoon</h2>
        <div className="list-cards container ms-2 mt-4">
            <div className="row pe-3">
                {songs && songs.map((song, index) =>
                    (<>
                    <AlbumCard song={songs[sortingArr[0][index]]} key={index} start={0}/>
                    <AlbumCard song={songs[sortingArr[1][index]]} key={index + 4} start={4}/>
                    </>
                    )
                )}
            </div>
            <div className="row pe-3">
              {titles &&
                titles.map((title, inTitle) => (
                  <div className='ps-0' key={inTitle}>
                    <h4 className={`${inTitle === 0 ? "mt-0" : "mt-4"}`}>{title}</h4>
                    <div className="row ms-1 mt-4">{cardsProvider(inTitle)}</div>
                  </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default MainContent