import Link from "next/link";
import React, { useState, MouseEventHandler } from "react";
import Slider from "react-slick";
import LeftCaretIcon from "../atoms/vectors/LeftCaretIcon";
import ProductCard from "../molecules/ProductCard";
import { IProductType } from "../../utils";

interface IProps {
  device?: "mobile" | "laptop" | "tablet";
  products: IProductType[];
  slides?: number;
}

const ProductCarousel = ({ device, products, slides }: IProps) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      device == "mobile" ? 1.5 : device === "tablet" ? 2.5 : slides || 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className={
        device === "mobile"
          ? "SmBookCarousel"
          : device === "tablet"
          ? "MdBookCarousel"
          : "LgBookCarousel"
      }
    >
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={`carousel_index-${index}`} className="slide ">
            <Link href="/[product]" as={`/${product.id}`}>
              <a>
                <div className="">
                  <ProductCard {...product} />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProductCarousel;

const SampleNextArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className="next" onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
const SamplePrevArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className="prev" onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
