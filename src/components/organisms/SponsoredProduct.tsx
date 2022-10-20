import Image from "next/image";
import React from "react";

const SponsoredProduct = () => {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-3 border-b ">
        <h1>Sponsored Product</h1>
        <Image
          src="/vectors/caret-right.svg"
          width={15}
          height={15}
          alt="image"
        />
      </header>
      <div className="flex flex-col gap-5 ">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <Image
                src="/images/phon1.png"
                width={146}
                height={145.04}
                alt="image"
              />
              <p>Samsung Galaxy A70 6.7-Inch (4GB, 128GB ROM) Android 9 Pie</p>
              <p className="flex items-center">
                <Image
                  src="/vectors/naira.svg"
                  width={14}
                  height={11.04}
                  alt="image"
                />
                80,000
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SponsoredProduct;
