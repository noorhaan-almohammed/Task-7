"use client";

import DateField from "../form/DateField";
import InputField from "../form/InputField";
import TimeField from "../form/TimeField";
import SearchField from "../TourSearchComponents/SearchField";

export default function Form() {
  return (
    <form
      className=" space-y-7.5 p-4.5 xl:p-7.5 flex items-center flex-col justify-center w-fit  bg-[#ffffff6d] lg:bg-[#ffffff4d] rounded-xl md:rounded-3xl "
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <div className="flex flex-col md:flex-row gap-7.5">
        <InputField
          label="Name and Surname"
          placeholder="Enter your name and surname"
        />
        <InputField
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-7.5">
        <InputField
          label="Telephone Number"
          placeholder="Enter your telephone number"
          type="tel"
        />
        <div className="flex flex-col w-63 xs:w-75 md:w-80 gap-2">
          <label className="font-semibold text-lg text-grey">
            Service Type
          </label>
          <div className="w-full bg-white rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-orange placeholder:text-base placeholder:text-[#cccccc80]">
            <SearchField
              data={["Service 1", "Service 2", "Service 3"]}
              title="Select the service types"
              className="text-[#33333380] p-2"
              placeholderColor="text-[#33333380]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-7.5">
        <DateField label="Date" placeholder="Select the date" />
        <TimeField label="Time" placeholder="Select the time" />
      </div>
      <div className=" flex flex-col items-center">
        <button
          type="submit"
          className=" bg-orange w-40 lg:w-50 text-base lg:text-xl text-white font-semibold px-6 py-2 lg:py-2.5 rounded-full leading-[100%] hover:bg-orange-500 transition"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
