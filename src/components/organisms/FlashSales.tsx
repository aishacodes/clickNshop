import Image from "next/image";
import React from "react";
import { productsyoulike } from "../../data/productsyoulike";
import ProductCarousel from "./ProductCarousel";

const FlashSales = () => {
  return (
    <section className="FlashSales">
      <header>
        <div className="flex items-center">
          <Image
            src="/images/flash-tag.png"
            width={31}
            height={31}
            alt="image"
          />
          <p>Flash Sales</p>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <p className="mr-3">Time Left: </p>
          <span className="text-[#ED1C24] rounded-[4.7px] py-[7px] px-[5px] bg-white">
            21h
          </span>
          :
          <span className="text-[#ED1C24] rounded-[4.7px] py-[7px] px-[5px] bg-white">
            40m
          </span>
          :
          <span className="text-[#ED1C24] rounded-[4.7px] py-[7px] px-[5px] bg-white">
            15s
          </span>
        </div>
        <div className="flex items-center">
          <p>SEE ALL</p>
          <Image
            src="/vectors/caret-white.svg"
            width={15}
            height={15}
            alt="image"
          />
        </div>
      </header>
      <div className="sales">
        <ProductCarousel
          device="laptop"
          products={productsyoulike}
          slides={8}
        />
      </div>
    </section>
  );
};

export default FlashSales;
