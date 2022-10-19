import Image from "next/image";
import React from "react";
import { categories } from "../../data";
import Logo from "../atoms/vectors/Logo";

const Deal = () => {
  return (
    <section>
      <div className="amazing-hero">
        <div className="flex items-center">
          <h2 className="text-white">AMAZING PHONE DEALS</h2>
          <div className="w-[4.1rem]">
            <Image
              src="/vectors/logo2.svg"
              width={65.9}
              height={10.51}
              alt="image"
            />
          </div>
        </div>
        <h3>One Stop Shop</h3>
      </div>
      <div className="cat-deals">
        {categories.map((cat, catIndex) => (
          <div key={catIndex}>
            <Image src={cat.img} width={170} height={199} alt="image" />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deal;
