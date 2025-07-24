"use client";

import { useState } from "react";
import PrivateFilters from "./PrivateFilters";
import PublicFilters from "./PublicFilters";
import TourTypeButtons from "./TourTypeButtons";

export default function TourSearch() {
  const [tourType, setTourType] = useState<"public" | "private">("public");

  return (
    <div className="bg-[#ffffff33] rounded-xl py-4 px-2 md:p-5 w-[90%] xl:w-fit mx-auto flex flex-col items-start">
      <TourTypeButtons tourType={tourType} setTourType={setTourType} />

      {tourType === "public" ? <PublicFilters /> : <PrivateFilters />}
    </div>
  );
}
