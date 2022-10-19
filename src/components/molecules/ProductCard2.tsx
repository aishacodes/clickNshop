import Image from "next/image";
import React from "react";
type propTypes = {
  discount: string;
  price: number;
  discountedprice: number;
  img: string;
  name: string;
};
const ProductCard2 = ({
  discount,
  price,
  discountedprice,
  img,
  name,
}: propTypes) => {
  return (
    <div className="w-[11.5rem] ">
      <div className="w-full h-44 relative">
        <div className="absolute z-10 right-0 top-0 bg-[#FF5655] text-xs text-white p-[2px] rounded-[1px]">
          -{discount}%
        </div>
        <Image width={184} height={184} src={img} />
      </div>
      <h2 className="text-[0.8125rem] ">{name}</h2>
      <h3 className="text-[1.125rem]">{price?.toLocaleString()}</h3>
      <p className="text-sm">{discountedprice}</p>
    </div>
  );
};

export default ProductCard2;
