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
            <img src={movie.Poster} alt="사진없음" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
