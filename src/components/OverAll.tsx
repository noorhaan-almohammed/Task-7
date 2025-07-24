import { overAllType } from "@/Types/type";
import Container from "./common/Container";
import OverAllCard from "./common/OverAllCard";

function OverAll({ content }: { content: overAllType[] }) {
  return (
    <Container bgColor="bg-gradient-to-l from-[#ffb883] to-[#ffd0a0]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 2xl:gap-21 py-5 md:py-10 2xl:py-21 items-stretch self-center">
        {content.map((item, index) => {
          return <OverAllCard content={item} key={index} />;
        })}
      </div>
    </Container>
  );
}

export default OverAll;
