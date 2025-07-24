import { ReactNode } from "react";

function Hero({
  img,
  title,
  description,
  children,
  gap,
}: {
  img: string;
  title: string;
  description: string;
  children: ReactNode;
  gap: string;
}) {
  return (
    <header
      className={`bg-cover bg-center w-full h-screen flex flex-col items-center justify-center ${gap}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1
          className="font-podcast font-normal text-4xl sm:text-5xl xl:text-7xl text-white text-center px-2"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          {title}
        </h1>

        <p
          className="font-semibold xl:font-bold text-base sm:text-xl xl:text-2xl text-white text-center px-10 md:px-20 lg:px-50 lg-px-125"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="300"
        >
          {description}
        </p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1200">
        {children}
      </div>
    </header>
  );
}

export default Hero;
