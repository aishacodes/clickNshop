import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { productsyoulike } from "../../data/productsyoulike";
import { buyProduct } from "../../store/cartReducer";
import Button from "../atoms/Button";

const BuyNow = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <section className="BuyNow">
      {productsyoulike.slice(8, 12).map((p, i) => (
        <div key={i} className="buy-item">
          <Image src={p.supplier || ""} width={87} height={39} />
          <Image src={p.img} width={96} height={96} />
          <div className="flex-grow">
            <p>{p.price}</p>
            <span>Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM)</span>
          </div>
          <Button
            otherClasses="w-[10rem] h-7 text-xs"
            onClick={() => {
              dispatch(buyProduct({ product: p, quantity: 1 }));
              router.push("/cart");
            }}
          >
            Buy Now
          </Button>
        </div>
      ))}
    </section>
  );
};

export default BuyNow;
