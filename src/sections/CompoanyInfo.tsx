import Container from "@/components/common/Container";
import StateCard from "@/components/common/StateCard";
import { CompoanyInfotype } from "@/Types/type";
import Image from "next/image";

function CompoanyInfo({
  content,
  imgClass_1,
  imgClass_2,
  borderClass =""
}: {
  content: CompoanyInfotype;
  imgClass_1: string;
  imgClass_2: string;
  borderClass ?: string;
}) {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-10 xl:gap-17.5">
        <div
          className={`${borderClass}`}
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Image
            width={408}
            height={600}
            src={content.image}
            alt="about_picture"
            className={`hidden overflow-hidden lg:block rounded-3xl ${imgClass_1}`}
          />
        </div>

        <div className="w-full flex flex-col gap-6 sm:gap-8 2xl:w-1/2">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-1.5">
              <span className="text-sm sm:text-base font-semibold text-grey opacity-60 tracking-wide leading-[100%]">
                {content.title}
              </span>
              <h2 className="text-center lg:text-left font-extrabold text-2xl md:text-[32px] text-grey leading-tight lg:leading-[100%]">
                {content.prief}
              </h2>
              <Image
                width={408}
                height={600}
                src={content.image}
                alt="about_picture"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className={`lg:hidden ${imgClass_2}`}
              />
            </div>
            <p className=" text-base sm:text-lg text-grey leading-7 lg:leading-8">
              {content.details}
            </p>
          </div>

          <div className="px-5 md:px-10 sm:justify-items-center lg:justify-items-start items-start lg:px-0 grid grid-cols-2  lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {content.stats.map((stat) => (
              <StateCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CompoanyInfo;
