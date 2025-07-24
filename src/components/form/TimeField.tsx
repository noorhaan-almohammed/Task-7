"use client";

import { useState } from "react";
import Time from "../svg/Time";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

interface TimeFieldProps {
  label: string;
  placeholder: string;
  onTimeChange?: (time: string) => void;
}

export default function TimeField({
  label,
  placeholder,
  onTimeChange,
}: TimeFieldProps) {
  const [time, setTime] = useState<string | null>(null);
  const [openPicker, setOpenPicker] = useState(false);

  const handleTimeChange = (value: string | null) => {
    setTime(value);
    onTimeChange?.(value || "");
    setOpenPicker(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label className="font-semibold text-lg text-[#333]">{label}</label>

      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={time || ""}
          readOnly
          onClick={() => setOpenPicker(!openPicker)}
          className="rounded-lg px-3 py-2.5 w-63 xs:w-75 md:w-80 placeholder:text-base placeholder:text-[#33333380] text-base focus:outline-none focus:ring focus:ring-orange cursor-pointer bg-white text-grey"
        />

        <button
          type="button"
          onClick={() => setOpenPicker(!openPicker)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#33333380] "
        >
          <Time />
          {}
        </button>

        {openPicker && (
          <div className="absolute w-full top-full mt-1 z-10 bg-white rounded shadow-md p-2 flex items-center justify-center">
            <div>
              <TimePicker
                onChange={handleTimeChange}
                value={time}
                disableClock={true}
                clearIcon={null}
                clockIcon={null}
                className="custom-time-picker w-full border-0 "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
