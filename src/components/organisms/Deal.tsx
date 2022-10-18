import Image from "next/image";
import React from "react";
import { categories } from "../../data";

const Deal = () => {
  return (
    <div>
      <div className="amazing-hero">
        <h2>AMAZING PHONE DEALS</h2>
        <h3>One Stop Shop</h3>
      </div>
      <div className="cat-deals">
        {categories.map((cat, catIndex) => (
          <div key={catIndex}>
            <Image src={cat.img} width={170} height={199} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deal;
