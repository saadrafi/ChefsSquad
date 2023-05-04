import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

import SingleRecipe from "./SingleRecipe";

const Treanding = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/trending")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto my-16">
      <h1 className="text-4xl text-center font-bold mt-10">Trending Recipes</h1>
      <p className="text-center text-gray-500 my-4">Explore the treanding recipes </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((rec) => (
          <SwiperSlide key={rec.recipe_id}>
            <SingleRecipe data={rec} key={rec.recipe_id}></SingleRecipe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Treanding;
