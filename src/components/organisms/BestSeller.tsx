import React from "react";
import { bestseller } from "../../data";

const BestSeller = () => {
  return (
    <div className="BestSeller">
      {bestseller.map((seller, index) => (
        <div key={index} className="seller-card">
          <img src={seller.img} alt="" />
          <img src={seller.logo} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BestSeller;
