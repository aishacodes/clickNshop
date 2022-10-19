import React, { DetailedHTMLProps } from "react";

type propTypes = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const SearchInput = ({ ...props }: propTypes) => {
  return (
    <div className="w-full flex items-center bg-white px-[10px] border border-[#E3E3E3] py-2 rounded-[5px]">
      <img src="/vectors/search-icon.svg" alt="" />
      <input
        type="text"
        className="flex-grow outline-none bg-white px-[1.5625rem]"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
