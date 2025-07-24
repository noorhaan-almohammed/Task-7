
"use client";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-01T00:00:00");
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-grey flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl sm:text-6xl font-bold text-orange mb-4">
        Coming Soon
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
        We’re working hard to bring you something amazing. Stay tuned!
      </p>

      <div className="flex gap-4 text-gray-50 font-bold text-2xl sm:text-3xl mb-10">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm font-medium">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm font-medium">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm font-medium">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm font-medium">Seconds</span>
        </div>
      </div>

      <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-full border border-gray-300 rounded-full focus:outline-none bg-white"
        />
        <button
          type="submit"
          className="bg-orange text-white px-6 py-3 rounded-full hover:bg-orange-500 transition w-50"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}
