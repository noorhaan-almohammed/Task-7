import { Testimonial } from "@/Types/type";
import Image from "next/image";

function TestimonialCard({testimonial } : {testimonial : Testimonial}) {
  return (
    <div
      key={testimonial.id}
      className="flex flex-col border border-[#efefef] rounded-3xl p-3 lg:p-7.5 bg-white"
    >
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
        <h4 className="text-base sm:text-lg font-normal text-grey">
          {testimonial.name}
        </h4>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <Image
          src="/icons/quote.svg"
          alt="Quote"
          width={40}
          height={28}
          className="w-8 h-5 sm:w-10 sm:h-7"
        />
        <p className="text-base sm:text-lg text-grey leading-6 lg:leading-7.5 px-3.5 lg:p-5">
          {testimonial.content}
        </p>
        <div className="flex justify-end">
          <Image
          src="/icons/quote.svg"
          alt="Quote"
          width={40}
          height={28}
          className="w-8 h-5 sm:w-10 sm:h-7"
        />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
