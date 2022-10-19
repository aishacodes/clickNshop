import Image from "next/image";
import React from "react";
import { categories } from "../../data";
import Logo from "../atoms/vectors/Logo";

const Deal = () => {
  return (
    <section className="mt-6">
      <div className="amazing-hero"></div>
      <div className="cat-deals">
        {categories.map((cat, catIndex) => (
          <div key={catIndex}>
            <Image src={cat.img} width={170} height={199} alt="image" />
            <p className="text-center text-[#354454]">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deal;
