"use client";

import React, { useState, useEffect } from "react";
import { SliderItem, Testimonial } from "@/Types/type";
import Right from "./svg/Right";
import Left from "./svg/Left";
import Card from "./common/Card";
import TestimonialCard from "./common/TestimonialCard";

export default function Slider({
  cards,
  num_Of_Cards_in_768 = 1,
  num_Of_Cards_in_1280 = 2,
  num_Of_Cards_in_1700 = 3,
  num_Of_Cards_in_other = 4,
  gap_cards = "gap-8",
}: {
  cards: SliderItem[] | Testimonial[];
  num_Of_Cards_in_768?: number;
  num_Of_Cards_in_1280?: number;
  num_Of_Cards_in_1700?: number;
  num_Of_Cards_in_other?: number;
  gap_cards?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsPerView >= cards.length;

  const updateCardsPerView = () => {
    setCardsPerView(
      window.innerWidth <= 768
        ? num_Of_Cards_in_768
        : window.innerWidth <= 1280
        ? num_Of_Cards_in_1280
        : window.innerWidth <= 1700
        ? num_Of_Cards_in_1700
        : num_Of_Cards_in_other
    );
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (!isAtEnd) {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (!isAtStart) {
      setCurrentIndex((prev) => prev - cardsPerView);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const visibleCards = Array.from({ length: cardsPerView }).map((_, i) => {
    const index = (currentIndex + i) % cards.length;
    return cards[index];
  });

  return (
    <>
      <div className="absolute top-0 right-4 lg:right-12 xl:right-32 2xl:right-62.5 hidden md:flex justify-between items-center gap-5">
        <button
          className={`flex items-center justify-center w-12.5 h-12.5 rounded-[50%] ${
            isAtStart
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={prevSlide}
          disabled={isAtStart}
        >
          {}
          <Left />
        </button>

        <button
          className={`flex items-center justify-center w-12.5 h-12.5 rounded-[50%] ${
            isAtEnd
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={nextSlide}
          disabled={isAtEnd}
        >
          {}
          <Right />
        </button>
      </div>
      <div className={`flex items-start justify-center ${gap_cards}`}>
        {visibleCards.map((card, index) =>
          "title" in card ? (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <Card item={card} />
            </div>
          ) : (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <TestimonialCard testimonial={card} />
            </div>
          )
        )}
      </div>

      <div className="flex md:hidden justify-center items-center gap-6 pt-10">
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-[50%] ${
            isAtStart
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={prevSlide}
          disabled={isAtStart}
        >
          {}
          <Left />
        </button>
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-[50%] ${
            isAtEnd
              ? "bg-[#efefef] text-[#7f7f7f] cursor-not-allowed"
              : "cursor-pointer bg-orange text-white"
          }`}
          onClick={nextSlide}
          disabled={isAtEnd}
        >
          {}
          <Right />
        </button>
      </div>
    </>
  );
}
