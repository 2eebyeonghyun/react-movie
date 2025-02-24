import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Data from "@/assets/json/main.json";

export default function MainSwiper() {
  const movies = Data.movies;

  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img src={movie.Poster} alt={movie.Title} />

            <div className="inner">
              <div className="movie-informationBox">
                <span className="movie-type">{movie.Type}</span>
                <h2 className="movie-title">{movie.Title}</h2>
                <ul className="movie-informationList">
                  <li className="information-item">{movie.Year}</li>
                  <li className="information-item">{movie.Released}</li>
                  <li className="information-item">{movie.Genre}</li>
                  <li className="information-item">{movie.Runtime}</li>
                </ul>
                <p className="movie-description">{movie.Plot}</p>

                <a href="#" className="btn-link">
                  watch now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
