import React from "react";
import { productsyoulike } from "../../data/productsyoulike";
import ProductCarousel from "./ProductCarousel";

const ProductYouLike = () => {
  return (
    <section className="BestDeal">
      <div>
        <h1 className="">Products you might like</h1>
      </div>
      <ProductCarousel products={productsyoulike} device="laptop" />
      <ProductCarousel products={productsyoulike} device="laptop" />
    </section>
  );
};

export default ProductYouLike;
