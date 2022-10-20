import Image from "next/image";
import React from "react";
import { productsyoulike } from "../../data/productsyoulike";
import ProductCarousel from "./ProductCarousel";

const ProductYouLike = () => {
  return (
    <section className="BestDeal">
      <div className="flex items-center gap-[1.625rem] ">
        <h1 className=" text-[#354454] text-[1.75rem] font-bold mb-[2.8rem] mt-[2.125rem]">
          Products you might like
        </h1>
        <Image
          src="/vectors/logo1.svg"
          width={58.36}
          height={9.29}
          alt="image"
        />
      </div>
      <ProductCarousel products={productsyoulike} device="laptop" />
      <ProductCarousel products={productsyoulike} device="laptop" />
    </section>
  );
};

export default ProductYouLike;
