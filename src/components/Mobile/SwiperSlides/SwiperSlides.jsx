import { useContext } from "react";
import { SongsContext } from "../../../context/SongsContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import uniqid from 'uniqid'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SwiperSlides({ songs, start }) {
  let songsContext = useContext(SongsContext);
  let songIdHandler = songsContext[1];
  let sortingArr = [[0,2,1],[1,0,2]]
  const swSlides = [];
  const swiperSlides = () => {
    for(let j = 0; j < 3; j++) {
      for (let i = 0; i < 2; i++) {
          swSlides.push(
            <SwiperSlide key={uniqid()}>
              <div className="card">
                <img
                  src={songs[sortingArr[i][j]][start[i]].album.cover_big}
                  className="card-img-top rounded"
                  onClick={() => songIdHandler(songs[sortingArr[i][j]][start[i]].id)} 
                  id={songs[sortingArr[i][j]][start[i]].id}
                  alt="..."
                />
                <div className="card-body p-0">
                  <h5 className="card-title text-start">
                    {songs[sortingArr[i][j]][start[i]].title.substring(0, 20)}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          );
      }
    }
    return swSlides;
  };
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperSlides()}
      </Swiper>
    </>
  );
}
