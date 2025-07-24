import React from "react";

interface FilterProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Filter({ label, icon, children }: FilterProps) {
  return (
    <div className="flex items-start justify-center xl:justify-between gap-2 p-4 text-sm 2xl:text-lg text-[#333] w-[60%] md:w-[40%] xl:w-fit">
      <div>{icon}</div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1.5">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default Filter;
