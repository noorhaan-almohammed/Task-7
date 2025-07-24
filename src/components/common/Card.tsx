"use client";

import { SliderItem } from "@/Types/type";
import Image from "next/image";
import Users from "../svg/Users";
import Date from "../svg/Date";

function Card({ item }: { item: SliderItem }) {
  return (
    <div
      key={item.id}
      className="flex flex-col gap-3 sm:gap-4 items-start justify-start w-full 2xl:max-w-80"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={400}
        className="w-full h-75 md:h-75 lg:h-101 object-center object-cover rounded-lg sm:rounded-xl lg:rounded-3xl"
      />

      <div className="flex flex-col gap-2 sm:gap-3 items-start w-full">
        <h3 className="text-xl md:text-2xl font-bold text-grey">
          {item.title}
        </h3>

        <div className="flex items-center gap-2.5 w-full">
          <span className="text-base sm:text-lg font-semibold text-grey">
            from
          </span>
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-orange">
            {item.price} €
          </span>
        </div>

        <div className="flex justify-between items-center w-full text-sm sm:text-base text-orange opacity-60 font-semibold">
          <div className="flex items-center gap-1 sm:gap-1.5 ">
            <Date />
            <span>
              {item.schedule}
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Users/>
            <span>
              {item.capacity} PP
            </span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm sm:text-base lg:text-lg font-normal text-grey leading-6.5 w-full">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
