import React, { DetailedHTMLProps } from "react";

type propTypes = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const SelectSearchInput = ({ ...props }: propTypes) => {
  return (
    <div className="w-full flex items-center bg-white px-[10px] border border-[#021529] py-2 rounded-[5px]">
      <img src="/vectors/search.svg" alt="" />
      <input
        type="text"
        className="flex-grow outline-none bg-white px-[1.5625rem]"
        {...props}
      />
      <div className="flex items-center gap-4 border-l px-4 cursor-pointer">
        <p className="text-[#888889] opacity-50">Category</p>
        <img src="/vectors/caret-do.svg" alt="" />
      </div>
    </div>
  );
};

export default SelectSearchInput;
