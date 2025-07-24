"use client";
import Image from "next/image";
import { useState } from "react";

function SearchField({
  data,
  title,
  className,
  arrow = "/icons/down-arrow.svg",
  placeholderColor = "text-[#8d8d8d]"
}: {
  data: Array<string>;
  title: string;
  className?: string;
  arrow?: string;
  placeholderColor ?: string;
}) {
  const [NumberMenuOpen, setNumberMenuOpen] = useState<boolean>(false);
  const [Number, setNumber] = useState<string>("");
  return (
    <div className="relative">
      <button
        type="button"
        className={`w-full flex items-center justify-between text-grey text-nowrap cursor-pointer gap-3 2xl:gap-5 ${className}`}
        onClick={() => setNumberMenuOpen(!NumberMenuOpen)}
      >
        {Number == "" ? (
          <span className={`${placeholderColor}`}>{title}</span>
        ) : (
          <span className="text-grey"> {Number}</span>
        )}
        <Image
          width={50}
          height={50}
          src={arrow}
          alt="Arrow"
          className="mt-1.5 w-3"
        />
      </button>
      {NumberMenuOpen && (
        <div className="absolute top-full mt-2 py-2 w-full z-10 bg-[#fff] rounded-md text-grey">
          {data.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => {
                  setNumber(`${item}`);
                  setNumberMenuOpen(!NumberMenuOpen);
                }}
                className="block w-full py-2 px-2 text-left hover:bg-orange hover:text-white cursor-pointer"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchField;
