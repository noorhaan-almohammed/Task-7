import { tourPackagesType } from "@/Types/type";
import Image from "next/image";
import BookBtn from "./BookBtn";

function PackageCard({ content }: { content: tourPackagesType }) {
  return (
    <div
      className=" flex flex-col items-stretch gap-4 relative rounded-3xl overflow-hidden border border-[#efefef] hover:shadow-lg bg-white "
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      <img
        className="w-full sm:aspect-square object-cover"
        src={content.image}
        alt={content.title}
      />

      <div className="p-4 sm:p-6.5 space-y-3 sm:space-y-4 text-grey ">
        <h2 className="text-lg sm:text-xl font-extrabold leading-[100%] ">
          {content.title}
        </h2>
        <p className="text-lg flex gap-1.5 ">
          <span className="flex flex-col items-start justify-start opacity-60">
            €
          </span>
          <span className="text-orange text-3xl sm:text-5xl space-x-1.5 font-bold">
            <span>{content.price}</span>
            <span className="text-lg text-grey font-normal opacity-60">
              /day
            </span>
          </span>
        </p>
        <ul>
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2.5 py-2 sm:py-4">
              <Image
                src={feature.icon}
                width={24}
                height={24}
                alt={feature.label}
              />
              <span className="text-base sm:text-lg sm:leading-[100%]">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-6.5 sm:p-6.5 w-full flex items-center justify-center">
        <BookBtn />
      </div>
    </div>
  );
}

export default PackageCard;
