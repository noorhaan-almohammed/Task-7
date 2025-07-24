import ContactUsButton from "@/components/common/ContactUsButton";
import Container from "@/components/common/Container";
import { SpecialOffers } from "@/Types/type";
import Image from "next/image";
import React from "react";
// w-full sm:w-[470px] lg:w-[570px] xl:h-82.5
function SpecialOffer({ content }: { content: SpecialOffers }) {
  return (
    <Container bgColor="mt-26 xs:mt-45 sm:mt-50 2xl:mt-55 bg-gradient-to-t from-[#ffb883] to-[#ffd0a0]">
      <div className="py-4 xs:py-8 xl:py-15 relative flex items-center">
        <div
          data-aos="slide-left"
          data-aos-duration="800"
          data-aos-delay="100"
          className="z-1 w-full sm:w-80 md:h-80 md:w-1/2 lg:w-4/9 lg:h-82.5 md:justify-evenly xl:w-[570px] gap-4 xl:gap-8 p-4.5 xl:p-7.5 bg-[#ffffff6d] lg:bg-[#ffffff4d] rounded-3xl flex flex-col items-center justify-center"
        >
          <h3 className="font-extrabold text-xl xs:text-2xl xl:text-[32px] xl:leading-[100%] text-center text-grey">
            {content.title}
          </h3>
          <p className="font-normal text-base xl:text-lg leading-6 xl:leading-6.5 text-center">
            {content.description}
          </p>
          <ContactUsButton content={content.btn} />
        </div>
        <Image
          src="/images/special_offer.webp"
          width={270}
          height={370}
          alt="special offer"
          className="z-0 absolute bottom-0 right-0 w-80 h-auto xl:w-[427px] xl:h-[600px]"
        />
      </div>
    </Container>
  );
}

export default SpecialOffer;
