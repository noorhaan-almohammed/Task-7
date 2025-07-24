'use client';

import { useState } from 'react';
import Date from '../svg/Date';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFieldProps {
  label: string;
  placeholder: string;
  onDateChange?: (date: string) => void;
}

export default function DateField({
  label,
  placeholder,
  onDateChange,
}: DateFieldProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [openPicker, setOpenPicker] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setDate(date);

    if (date) {
      onDateChange?.(date.toISOString().split('T')[0]);
    } else {
      onDateChange?.('');
    }
    setOpenPicker(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label className="font-semibold text-lg text-grey">{label}</label>

      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={date ? date.toLocaleDateString() : ''}
          readOnly
          onClick={() => setOpenPicker(!openPicker)}
          className="rounded-lg w-63 xs:w-75 md:w-80 px-3 py-2.5 placeholder:text-base placeholder:text-[#33333380] text-grey bg-white focus:outline-none focus:ring-2 focus:ring-orange cursor-pointer"
        />

        <button
          type="button"
          onClick={() => setOpenPicker(!openPicker)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#33333380]"
        >
          <Date />{}
        </button>

        {openPicker && (
          <div className="absolute w-full top-full mt-px z-10 bg-white rounded shadow-md p-2 flex items-center justify-center">
            <ReactDatePicker
              selected={date}
              onChange={handleDateChange}
              inline
              calendarClassName="custom-date-picker"
            />
          </div>
        )}
      </div>
    </div>
  );
}
