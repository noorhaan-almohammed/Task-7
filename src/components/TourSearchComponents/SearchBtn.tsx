import Image from "next/image";
import React from "react";

function SearchBtn() {
  return (
    <button
      className="bg-orange p-3 2xl:p-6 rounded-xl cursor-pointer"
      type="submit"
    >
      <Image
        className="w-6 2xl:w-8"
        src="/icons/search.svg"
        alt="search icon"
        width={32}
        height={32}
      />
      {}
    </button>
  );
}

export default SearchBtn;
