import { overAllType } from "@/Types/type";
import Image from "next/image";

function OverAllCard({ content }: { content: overAllType }) {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="800"
      data-aos-delay="100"
      className=" sm:w-70 lg:w-fit sm:aspect-square flex flex-col  items-center justify-center gap-4 p-7.5 rounded-3xl bg-[#ffffff4d]"
    >
      <Image
        width={60}
        height={60}
        src={content.icon}
        alt={content.label}
        className="w-12 h-12 2xl:w-15 2xl:h-15"
      />
      <p className="text-lg 2xl:text-xl font-semibold leading-7 xl:leading-8 text-center">
        {content.label}
      </p>
    </div>
  );
}

export default OverAllCard;
