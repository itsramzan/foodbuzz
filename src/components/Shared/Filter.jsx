import React from "react";
import { NavLink } from "react-router-dom";
import cuisines from "../../utils/cuisines";
import { A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/keyboard";

const Filter = () => {
  return (
    <Swiper
      modules={[A11y, Keyboard]}
      spaceBetween={8}
      slidesPerView="auto"
      keyboard
      className="flex whitespace-nowrap"
    >
      {cuisines.map((cuisine) => (
        <SwiperSlide key={cuisine.id} className="w-auto">
          <Item cuisine={cuisine} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Filter;

const Item = ({ cuisine }) => {
  const { name } = cuisine;

  return (
    <NavLink
      to={`/cuisine/${name}`}
      className={({ isActive }) =>
        isActive
          ? "text-xs font-bold text-white bg-blue-700 px-2 py-1 rounded-md"
          : "text-xs font-semibold bg-gray-300 px-2 py-1 rounded-md"
      }
    >
      {name}
    </NavLink>
  );
};
