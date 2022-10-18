import Image from "next/image";
import React from "react";
type propTypes = {
  discount: string;
  price: number;
  discountedprice: number;
  img: string;
  name: string;
};
const ProductCard = ({
  discount,
  price,
  discountedprice,
  img,
  name,
}: propTypes) => {
  return (
    <div className="ProductCard">
      <div className="image-con">
        <div className="store-tag">-{discount}%</div>
        <Image width={157.21} height={200} src={img} />
      </div>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{discountedprice}</p>
    </div>
  );
};

export default ProductCard;
