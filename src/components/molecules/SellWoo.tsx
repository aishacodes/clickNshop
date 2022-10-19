import Image from "next/image";
import React from "react";
import RedStar from "../atoms/vectors/ResStar";
import Star from "../atoms/vectors/Star";

const SellWoo = ({ homeSell }: { homeSell: Boolean }) => {
  return (
    <div className=" flex items-center justify-between  w-[100%] mx-auto">
      {homeSell ? (
        <RedStar />
      ) : (
        <div className="flex items-center gap-[0.3125rem]">
          <Star />
          <p className="text-primary text-xs">Sell on woozeee</p>
        </div>
      )}
      <div className="flex items-center gap-6">
        {!homeSell && <Image src="/images/logo1.png" width={70} height={70} />}
        <Image src="/vectors/social.svg" width={84} height={21} />
        <Image src="/vectors/bill.svg" width={90} height={21} />
        <Image src="/vectors/movie.svg" width={87} height={21} />
        <Image src="/vectors/money.svg" width={159} height={21} />
        <Image src="/vectors/go.svg" width={106} height={21} />
        <Image src="/vectors/dispatch.svg" width={107} height={21} />
        <Image src="/vectors/woo-eat.svg" width={145} height={21} />
      </div>
      <p />
    </div>
  );
};

export default SellWoo;
