import React from "react";
import { productsyoulike } from "../../data/productsyoulike";
import ProductCard from "../molecules/ProductCard";
import Slider from "react-slick";
import ProductCarousel from "./ProductCarousel";

const BestDeals = () => {
  return (
    <section className="BestDeal">
      <div>
        <h1 className="">BestDeals</h1>
      </div>
      <ProductCarousel products={productsyoulike} device="laptop" />
      <ProductCarousel products={productsyoulike} device="laptop" />
    </section>
  );
};

export default BestDeals;
