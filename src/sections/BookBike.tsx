import Container from "@/components/common/Container";
import Form from "@/components/common/Form";
import Image from "next/image";

function BookBike() {
  return (
    <Container bgColor="p-8 xl:p-15 bg-gradient-to-t from-[#ffb883] to-[#ffd0a0] justify-center items-center lg:items-stretch">
      <div className="space-y-9 w-fit z-1 ">
        <h2 className="text-center w-full font-extrabold text-[32px] text-grey">Book New Bike</h2>
        <Form />
      </div>
      <Image
        src="/images/bike.webp"
        width={724}
        height={542}
        alt="Bike"
        className="z-0 rotate-y-180 absolute bottom-[-30px] xl:bottom-[-40px] right-0 w-[500px] h-auto xl:w-[724px] xl:h-[542px]"
      />
    </Container>
  );
}

export default BookBike;
