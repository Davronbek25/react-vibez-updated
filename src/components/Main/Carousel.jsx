import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Carousel({ songs }) {
  let songsContext = useContext(SongsContext);
  let songIdHandler = songsContext[1];

  let carouselSongs = [];
  if (songs && songs.length > 1) {
    carouselSongs = [
      songs[0][1],
      songs[1][2],
      songs[2][3],
      songs[0][5],
      songs[1][3],
      songs[2][4],
      songs[0][8],
    ];
  }
  return (
    carouselSongs.length > 1 && (
      <div className="carousel-container d-sm-none d-lg-block">
        <Swiper
          effect={"coverflow"}
          initialSlide={3}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={"auto"}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {carouselSongs.map((s, i) => (
            <SwiperSlide key={i} className=''>
              <img
                src={s.album.cover_big}
                className="carousel_image glowing-border"
                onClick={() => songIdHandler(s.id)}
                alt={"slide_image" + i}
              />
              <div className="slide-overlay">
                <div className="slide-overlay-text d-flex flex-column align-items-start">
                  <h3>{s.artist.name}</h3>
                  <p className="overflow-hidden">{s.title_short}</p>
                </div>
                <div className="play-icon">
                  <div
                    className="circle"
                    onClick={() => songIdHandler(s.id)}
                    id={s.id}
                  >
                    <div className="triangle"></div>
                    <div className="twoLine d-none">
                      <div className="firstL"></div>
                      <div className="secondL"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler"></div>
        </Swiper>
      </div>
    )
  );
}

export default Carousel;
