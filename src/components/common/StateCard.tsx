"use client";
import { useState, useEffect, useRef } from "react";
import { Stat } from "@/Types/type";

function StateCard({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    const duration = 1000;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const increment = stat.count / steps;
    let current = 0;
    const counter = setInterval(() => {
      current += increment;
      if (current >= stat.count) {
        setCount(stat.count);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(current));
      }
    }, stepTime);
  };

  return (
    <div ref={ref} className="flex flex-col items-center lg:items-start lg:w-21">
      <span className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-orange leading-8">
        {count} +
      </span>
      <span className="text-sm text-center lg:text-left sm:text-base text-grey opacity-60 leading-6.5">
        {stat.lable}
      </span>
    </div>
  );
}

export default StateCard;
