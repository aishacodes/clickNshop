import Image from "next/image";
import React from "react";
import { IProductType } from "../../utils";
import Naira from "../atoms/vectors/Naira";

const ProductCard = ({
  id,
  discount,
  price,
  discountedprice,
  img,
  name,
}: IProductType) => {
  return (
    <div className="ProductCard">
      <div className="image-con">
        <div className="store-tag">-{discount}%</div>
        <Image width={157.21} height={200} src={img} />
      </div>
      <h2>{name}</h2>
      <h3>
        <Image width={9} height={8} src="/vectors/naira.svg" />
        {price}
      </h3>
      <p className="dis">
        <Image width={9} height={8} src="/vectors/naira.svg" />
        {discountedprice}
      </p>
    </div>
  );
};

export default ProductCard;
