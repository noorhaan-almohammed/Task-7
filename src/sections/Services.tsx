import Container from "@/components/common/Container";
import { ServiceType } from "@/Types/type";
import Image from "next/image";

function Services({ services }: { services: ServiceType[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service,index) => (
          <div
            key={service.id}
            className="flex flex-col gap-4 sm:gap-6 items-center"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay={index * 200}
          >
            <Image
              width={330}
              height={300}
              src={service.image}
              alt={service.title}
              className="w-full h-[250px] sm:h-[280px] lg:h-[302px]  object-cover rounded-lg sm:rounded-xl lg:rounded-3xl"
            />
            <div className="flex flex-col gap-4 sm:gap-6 items-start w-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-grey leading-8">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-grey leading-6.5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Services;
