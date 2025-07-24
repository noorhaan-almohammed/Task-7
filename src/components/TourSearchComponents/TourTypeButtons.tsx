
import Public from "../svg/Public";
import Users from "../svg/Users";


interface TourTypeButtonsProps {
  tourType: "public" | "private";
  setTourType: (type: "public" | "private") => void;
}

export default function TourTypeButtons({
  tourType,
  setTourType,
}: TourTypeButtonsProps) {
  return (
    <div className="flex gap-2 bg-[#ffffff66] rounded-t-xl w-fit">
      <button
        className={`flex items-center gap-1 lg:gap-2.5 p-2 lg:p-4 rounded-tl-xl text-sm 2xl:text-lg font-semibold cursor-pointer ${
          tourType === "public" ? "bg-white text-orange" : "text-white"
        }`}
        onClick={() => setTourType("public")}
      >
        <Public />
        Public Tours
      </button>

      <button
        className={`flex items-center gap-1 lg:gap-2.5 px-2 py-4 lg:p-4 rounded-tr-xl text-sm 2xl:text-lg font-semibold cursor-pointer ${
          tourType === "private" ? "bg-white text-orange" : "text-white"
        }`}
        onClick={() => setTourType("private")}
      >
        <Users /> Private Tours
      </button>
    </div>
  );
}
