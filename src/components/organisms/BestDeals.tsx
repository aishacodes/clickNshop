import React from "react";
import { productsyoulike } from "../../data/productsyoulike";
import ProductCard from "../molecules/ProductCard";
import Slider from "react-slick";
import ProductCarousel from "./ProductCarousel";
import Image from "next/image";

const BestDeals = () => {
  return (
    <section className="BestDeal">
      <div className="flex items-center gap-[1.625rem]">
        <h1 className=" text-[#354454] text-[1.75rem] font-bold mb-[2.8rem] mt-[2.125rem]">
          BestDeals
        </h1>
        <Image
          src="/vectors/logo1.svg"
          width={58.36}
          height={9.29}
          alt="image"
        />{" "}
        <span className="flex-grow" />
        <Image
          src="/vectors/top-deal.svg"
          width={100.73}
          height={32.95}
          alt="image"
        />
      </div>
      <ProductCarousel products={productsyoulike} device="laptop" />
      <ProductCarousel products={productsyoulike} device="laptop" />
    </section>
  );
};

export default BestDeals;
