import Date from "../svg/Date";
import Time from "../svg/Time";
import Tour from "../svg/Tour";
import TransportationSvg from "../svg/Transportation";
import Users from "../svg/Users";
import {
  date,
  Number_of_people,
  time,
  Transportation,
  type,
} from "@/Data/data";
import Filter from "./Filter";
import SearchBtn from "./SearchBtn";
import SearchField from "./SearchField";

export default function PublicFilters() {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center gap-3 bg-white p-3 rounded-b-xl md:rounded-tr-xl">
      <div className="flex flex-wrap gap-0 md:gap-3 justify-center items-center">
        <Filter label="Number of people" icon={<Users />}>
        <SearchField title="Choose number" data={Number_of_people} className="xs:min-w-50 xs:max-w-50 xl:min-w-30 xl:max-w-30"/>
      </Filter>

      <span className="xl:h-[50px] xl:w-[1px] bg-[#33333333]"></span>

      <Filter label="Date" icon={<Date />}>
        <SearchField title="Choose Date" data={date} className="xs:min-w-50 xs:max-w-50 xl:max-w-31" />
      </Filter>
      <span className="xl:h-[50px] xl:w-[1px] bg-[#33333333]"></span>

      <Filter label="Time" icon={<Time />}>
        <SearchField title="Choose Time" data={time} className="xs:min-w-50 xs:max-w-50 xl:min-w-31 xl:max-w-31"/>
      </Filter>
      <span className="xl:h-[50px] xl:w-[1px] bg-[#33333333]"></span>

      <Filter label="Tour" icon={<Tour />}>
        <SearchField title="Select Tour" data={type} className="xs:min-w-50 xs:max-w-50 xl:min-w-31 xl:max-w-31"/>
      </Filter>
      <span className="xl:h-[50px] xl:w-[1px] bg-[#33333333]"></span>

      <Filter label="Transportation" icon={<TransportationSvg />}>
        <SearchField title="Select Transportation" data={Transportation} className="xs:min-w-50 xs:max-w-50 " />
      </Filter>
      </div>

      <SearchBtn />
    </div>
  );
}
